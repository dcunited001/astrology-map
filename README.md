- TODO: fix index.html
- TODO: fix bundle loading within index.html (not main.js anymore)
- TODO: fix references to astro (import { base as astro})
- TODO: clone the deck.gl project and integrate the basics



- TODO: examine 3d/geometry loaders (@loaders.gl/ply & @loaders.gl/gltf)
- TODO: examine [react hot loader](https://github.com/gaearon/react-hot-loader)
- TODO: examine react boilerplate templates
- TODO: credit usage of image for planets texture atlas

#### Protobuf binaries to JSON (for extracting Stardroid data)

- `brew install protoc`
- `python -m venv ${local_python_env}`
- `${local_python_env}/bin/activate`
- `pip install protobuf_tools`
- `protoc --proto_path=app/src/main/java/com/google/android/stardroid/source/proto --python_out=proto-gen app/src/main/java/com/google/android/stardroid/source/proto/source.proto`
- `cd proto-gen`
- `protobuftools --proto_path proto --decode=message_name --allfields --json app/src/main/assets/constellations.binary ### ERROR`

#### 2 problems: 

- `protobuftools` should be running via Python3. protobuf(python) version 3.9.1. (need to sort out the details of an old `virtualenv`and `virtualenvwrapper` config on my machine)
- protoc version used to generate dynamic `_pb2.py` files from `*.proto` above cannot be less than the protobuf version used by `protobuftools` to read the files.
