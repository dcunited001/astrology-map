{
  "nested": {
    "stardroid_source": {
      "options": {
        "java_package": "com.google.android.stardroid.source.proto",
        "java_outer_classname": "SourceProto",
        "optimize_for": "LITE_RUNTIME"
      },
      "nested": {
        "Shape": {
          "values": {
            "CIRCLE": 0,
            "STAR": 1,
            "ELLIPTICAL_GALAXY": 2,
            "SPIRAL_GALAXY": 3,
            "IRREGULAR_GALAXY": 4,
            "LENTICULAR_GALAXY": 5,
            "GLOBULAR_CLUSTER": 6,
            "OPEN_CLUSTER": 7,
            "NEBULA": 8,
            "HUBBLE_DEEP_FIELD": 9
          }
        },
        "GeocentricCoordinatesProto": {
          "fields": {
            "rightAscension": {
              "type": "float",
              "id": 1
            },
            "declination": {
              "type": "float",
              "id": 2
            }
          }
        },
        "PointElementProto": {
          "fields": {
            "location": {
              "type": "GeocentricCoordinatesProto",
              "id": 1
            },
            "color": {
              "type": "uint32",
              "id": 2,
              "options": {
                "default": 4294967295
              }
            },
            "size": {
              "type": "int32",
              "id": 3,
              "options": {
                "default": 3
              }
            },
            "shape": {
              "type": "Shape",
              "id": 4,
              "options": {
                "default": "CIRCLE"
              }
            }
          }
        },
        "LabelElementProto": {
          "fields": {
            "location": {
              "type": "GeocentricCoordinatesProto",
              "id": 1
            },
            "color": {
              "type": "uint32",
              "id": 2,
              "options": {
                "default": 4294967295
              }
            },
            "stringIndex": {
              "type": "int32",
              "id": 3
            },
            "fontSize": {
              "type": "int32",
              "id": 4,
              "options": {
                "default": 15
              }
            },
            "offset": {
              "type": "float",
              "id": 5,
              "options": {
                "default": 0.02
              }
            }
          }
        },
        "LineElementProto": {
          "fields": {
            "color": {
              "type": "uint32",
              "id": 1,
              "options": {
                "default": 4294967295
              }
            },
            "lineWidth": {
              "type": "float",
              "id": 2,
              "options": {
                "default": 1.5
              }
            },
            "vertex": {
              "rule": "repeated",
              "type": "GeocentricCoordinatesProto",
              "id": 3
            }
          }
        },
        "AstronomicalSourceProto": {
          "fields": {
            "nameIds": {
              "rule": "repeated",
              "type": "uint32",
              "id": 1,
              "options": {
                "packed": false
              }
            },
            "searchLocation": {
              "type": "GeocentricCoordinatesProto",
              "id": 2
            },
            "searchLevel": {
              "type": "float",
              "id": 3,
              "options": {
                "default": 0
              }
            },
            "level": {
              "type": "float",
              "id": 4,
              "options": {
                "default": 0
              }
            },
            "point": {
              "rule": "repeated",
              "type": "PointElementProto",
              "id": 5
            },
            "label": {
              "rule": "repeated",
              "type": "LabelElementProto",
              "id": 6
            },
            "line": {
              "rule": "repeated",
              "type": "LineElementProto",
              "id": 7
            }
          }
        },
        "AstronomicalSourcesProto": {
          "fields": {
            "source": {
              "rule": "repeated",
              "type": "AstronomicalSourceProto",
              "id": 1
            }
          }
        }
      }
    }
  }
}