// import GeoTIFF from 'geotiff';
const GeoTIFF = require('geotiff');
const VSOP = require('astronomia').data;

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

planets.forEach((planet) => {
  // console.log(`\n${planet}`)
  heliocentricKeys.forEach((k) => {
    console.log(`\n${k}`)
    for (o in vsopOrders) {
      let n = (VSOP[planet][k][o] && VSOP[planet][k][o].length);
      console.log(n);
    }
  });
});

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

