
- TODO: fix index.html
- TODO: fix bundle loading within index.html (not main.js anymore)
- TODO: fix references to astro (import { base as astro})
- TODO: clone the deck.gl project and integrate the basics

- TODO: examine 3d/geometry loaders (@loaders.gl/ply & @loaders.gl/gltf)
- TODO: examine [react hot loader](https://github.com/gaearon/react-hot-loader)
- TODO: examine react boilerplate templates
- TODO: credit usage of image for planets texture atlas

# Data Prep 

## Stardroid

#### Setup Protobuf

- Install protoc. 
- Clone [Sky-map-team/stardroid](https://github.com:sky-map-team/stardroid). 
- Copy `source.proto` to `./data/skymap/proto`, the only protobuf file. 
- Copy protobuf binary files (there are three) from
  `../stardroid/app/src/main/assets`.

#### Generate Static Modules From Message Types

- protobufjs/light: `npx pbjs -t json -o ./app/skymap-proto.json -w es6 ./data/skymap/proto/source.proto`
- protobufjs/minimal: `npx pbjs -t static-module -o ./app/skymap-proto.js -w es6 ./data/skymap/proto/source.proto`

#### 

## [VSOP87]()

- paper on the [VSOP87
  method](http://adsabs.harvard.edu/full/1988A%26A...202..309B)
