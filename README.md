
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

## [Libgdx Texture Atlas]()

#### Create an atlas with [gdx-texture-packer-gui](https://github.com/crashinvaders/gdx-texture-packer-gui)

Download the [latest release](https://github.com/crashinvaders/gdx-texture-packer-gui/releases) ZIP and load JAR. If AWT crashes, [start with GLSurface](https://github.com/crashinvaders/gdx-texture-packer-gui/issues/30)

```sh
java -jar gdx-texturepacker.jar -launcher glsurface
```

#### Parse into JSON with AtlasParser

Parse `.atlas` files with
[atlas-parser](https://github.com/uupaa/TextureAtlas.js/) into `.json`, then
protobuf `.bin` to condense downloaded atlas files & to avoid irregularity with atlases on frontend. 

Build proto definitions: `npx pbjs -t json -o ./data/atlas/texture-atlas.proto.json -w es6 ./data/atlas/texture_atlas.proto`

TODO: Convert json to protobuf bin

## [VSOP87]()

Build proto definitions: `npx pbjs -t json -o ./data/vsop87/vsop87.proto.json -w es6 ./data/vsop87/vsop87.proto`

Then run `npm run generate-vsop` to condense VSOP file size by >50%.

#### 

- paper on the [VSOP87
  method](http://adsabs.harvard.edu/full/1988A%26A...202..309B)