const VSOP = require('astronomia').data;
const fs = require('fs');

const protobuf = require('protobufjs/light');
const pbJson = require('./data/vsop87/vsop87.proto.json');
const pbRoot = protobuf.Root.fromJSON(pbJson);

const VsopSpectra = pbRoot.lookupType('vsop87.Spectra');
const VsopSpectrum = pbRoot.lookupType('vsop87.Spectrum');
const VsopPolynomial = pbRoot.lookupType('vsop87.Polynomial');
const VsopPlanet = pbRoot.lookupType('vsop87.Planet');
const VsopSystem = pbRoot.lookupType('vsop87.System');

const planets = [
  'mercury',
  'venus',
  'earth',
  'mars',
  'jupiter',
  'saturn',
  'uranus',
  'neptune'
]

const heliocentricKeys = ['L', 'B', 'R'];
const vsopOrders = [...Array(6).keys()];

// for each planet
const vsopData = planets.reduce((data, planet) => {
  // for each polynomial
  data[planet] = ['L', 'B', 'R'].reduce((_planet, poly) => {
    // for each order in the polynomial
    let polyKeys = Object.keys(VSOP[planet][poly]);
    const polynomial = polyKeys.reduce((arr, order) => {
      let orderInt = parseInt(order);
      // convert the spectrum elements to objects
      arr[orderInt] = VSOP[planet][poly][order].map((s) => {
        return VsopSpectra.create({ a: s[0], b: s[1], c: s[2], n: orderInt })
      });

      return arr;
    }, Array(polyKeys.length));

    _planet[poly.toLowerCase()] = VsopPolynomial.create({
      orders: polynomial.map(p => {
        return VsopSpectrum.create({ spectrum: p || [] });
      })
    });
    return _planet;
  }, {})

  data[planet] = VsopPlanet.create(data[planet]);
  return data
}, {})

const system = VsopSystem.create({ planets: vsopData });

fs.writeFileSync('./data/vsop87/vsop87.bin', VsopSystem.encode(system).finish());
fs.writeFileSync('./data/vsop87/vsop87.json', JSON.stringify({ planets: vsopData }));

// =============================================
// TFJS: Initial VSOP calculation in tensorflow =~
// =============================================

// const foo = tf.range(1, 65, 1).reshape([4, 4, 4]);
// const bar = tf.tensor1d([0, 0, 1, 1]);
// const baz = tf.tensor1d([0, 1, 0, 0]);
// const pow = foo.slice([0, 0, 3], [-1, -1, 1]) //.print()
// const bc = foo.slice([0, 0, 1], [-1, -1, 2]) //.print()
// const a = foo.slice([0, 0, 0], [-1, -1, 1]) //.print()

// tf.mul(a, bc).print()
// tf.mul(a, bc).sum([2]).print()

// =============================================
// VSOP record counts 
// (note: some single records are missing for [4,5])
// =============================================

// { "mercury": { "L": 3149, "B":1603, "R":2371 } },
// { "venus": { "L": 736, "B":402, "R":572 } },
// { "earth": { "L": 1184, "B":402, "R":978 } },
// { "mars": { "L": 3035, "B":984, "R":2381 } },
// { "jupiter": { "L": 1690, "B":500, "R":1435 } },
// { "saturn": { "L": 2999, "B":947, "R":2419 } },
// { "uranus": { "L": 2433, "B":497, "R":2343 } },
// { "neptune": { "L": 842, "B":238, "R":939 } },

