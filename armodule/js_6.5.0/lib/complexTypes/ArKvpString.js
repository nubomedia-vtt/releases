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
 * AR Key-Value-Pair of Strings and Strings for passing data
 *
 * @constructor module:armarkerdetector/complexTypes.ArKvpString
 *
 * @property {external:String} key
 *  unique key for a value
 * @property {external:String} value
 *  arbitrary value
 */
function ArKvpString(arKvpStringDict){
  if(!(this instanceof ArKvpString))
    return new ArKvpString(arKvpStringDict)

  arKvpStringDict = arKvpStringDict || {}

  // Check arKvpStringDict has the required fields
  checkType('String', 'arKvpStringDict.key', arKvpStringDict.key, {required: true});
  checkType('String', 'arKvpStringDict.value', arKvpStringDict.value, {required: true});

  // Init parent class
  ArKvpString.super_.call(this, arKvpStringDict)

  // Set object properties
  Object.defineProperties(this, {
    key: {
      writable: true,
      enumerable: true,
      value: arKvpStringDict.key
    },
    value: {
      writable: true,
      enumerable: true,
      value: arKvpStringDict.value
    }
  })
}
inherits(ArKvpString, ComplexType)

// Private identifiers to allow re-construction of the complexType on the server
// They need to be enumerable so JSON.stringify() can access to them
Object.defineProperties(ArKvpString.prototype, {
  __module__: {
    enumerable: true,
    value: "armarkerdetector"
  },
  __type__: {
    enumerable: true,
    value: "ArKvpString"
  }
})

/**
 * Checker for {@link module:armarkerdetector/complexTypes.ArKvpString}
 *
 * @memberof module:armarkerdetector/complexTypes
 *
 * @param {external:String} key
 * @param {module:armarkerdetector/complexTypes.ArKvpString} value
 */
function checkArKvpString(key, value)
{
  if(!(value instanceof ArKvpString))
    throw ChecktypeError(key, ArKvpString, value);
};


module.exports = ArKvpString;

ArKvpString.check = checkArKvpString;
