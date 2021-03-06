/* Autogenerated with Kurento Idl */

/*
 * (C) Copyright 2013-2015 Kurento (http://kurento.org/)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var inherits = require('inherits');

var kurentoClient = require('kurento-client');

var checkType = kurentoClient.checkType;
var ChecktypeError = checkType.ChecktypeError;

var ComplexType = kurentoClient.register.complexTypes.ComplexType;


/**
 * Container for passing data about the augmentable ie the target (marker or 
 * planar) to be tracked and model (2D or 3D) to be rendered
 *
 * @constructor module:armarkerdetector/complexTypes.ArThing
 *
 * @property {external:Integer} markerId
 *  marker id
 * @property {module:armarkerdetector/complexTypes.OverlayType} overlayType
 *  2D or 3D
 * @property {module:armarkerdetector/complexTypes.ArKvpString} strings
 *  all the sting values relating to the augmentable eg model url . See 
 *  DevelopersGuide for more details.
 * @property {module:armarkerdetector/complexTypes.ArKvpInteger} integers
 *  all the integer values relating to the augmentable
 * @property {module:armarkerdetector/complexTypes.ArKvpFloat} floats
 *  all the float values relating to the augmentable
 */
function ArThing(arThingDict){
  if(!(this instanceof ArThing))
    return new ArThing(arThingDict)

  arThingDict = arThingDict || {}

  // Check arThingDict has the required fields
  checkType('int', 'arThingDict.markerId', arThingDict.markerId, {required: true});
  checkType('OverlayType', 'arThingDict.overlayType', arThingDict.overlayType, {required: true});
  checkType('ArKvpString', 'arThingDict.strings', arThingDict.strings, {isArray: true, required: true});
  checkType('ArKvpInteger', 'arThingDict.integers', arThingDict.integers, {isArray: true, required: true});
  checkType('ArKvpFloat', 'arThingDict.floats', arThingDict.floats, {isArray: true, required: true});

  // Init parent class
  ArThing.super_.call(this, arThingDict)

  // Set object properties
  Object.defineProperties(this, {
    markerId: {
      writable: true,
      enumerable: true,
      value: arThingDict.markerId
    },
    overlayType: {
      writable: true,
      enumerable: true,
      value: arThingDict.overlayType
    },
    strings: {
      writable: true,
      enumerable: true,
      value: arThingDict.strings
    },
    integers: {
      writable: true,
      enumerable: true,
      value: arThingDict.integers
    },
    floats: {
      writable: true,
      enumerable: true,
      value: arThingDict.floats
    }
  })
}
inherits(ArThing, ComplexType)

// Private identifiers to allow re-construction of the complexType on the server
// They need to be enumerable so JSON.stringify() can access to them
Object.defineProperties(ArThing.prototype, {
  __module__: {
    enumerable: true,
    value: "armarkerdetector"
  },
  __type__: {
    enumerable: true,
    value: "ArThing"
  }
})

/**
 * Checker for {@link module:armarkerdetector/complexTypes.ArThing}
 *
 * @memberof module:armarkerdetector/complexTypes
 *
 * @param {external:String} key
 * @param {module:armarkerdetector/complexTypes.ArThing} value
 */
function checkArThing(key, value)
{
  if(!(value instanceof ArThing))
    throw ChecktypeError(key, ArThing, value);
};


module.exports = ArThing;

ArThing.check = checkArThing;
