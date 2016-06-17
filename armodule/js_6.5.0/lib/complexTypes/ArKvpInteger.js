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
 * AR Key-Value-Pair of Strings and integers for passing data
 *
 * @constructor module:armarkerdetector/complexTypes.ArKvpInteger
 *
 * @property {external:String} key
 *  unique key for a value
 * @property {external:Integer} value
 *  arbitrary value
 */
function ArKvpInteger(arKvpIntegerDict){
  if(!(this instanceof ArKvpInteger))
    return new ArKvpInteger(arKvpIntegerDict)

  arKvpIntegerDict = arKvpIntegerDict || {}

  // Check arKvpIntegerDict has the required fields
  checkType('String', 'arKvpIntegerDict.key', arKvpIntegerDict.key, {required: true});
  checkType('int', 'arKvpIntegerDict.value', arKvpIntegerDict.value, {required: true});

  // Init parent class
  ArKvpInteger.super_.call(this, arKvpIntegerDict)

  // Set object properties
  Object.defineProperties(this, {
    key: {
      writable: true,
      enumerable: true,
      value: arKvpIntegerDict.key
    },
    value: {
      writable: true,
      enumerable: true,
      value: arKvpIntegerDict.value
    }
  })
}
inherits(ArKvpInteger, ComplexType)

// Private identifiers to allow re-construction of the complexType on the server
// They need to be enumerable so JSON.stringify() can access to them
Object.defineProperties(ArKvpInteger.prototype, {
  __module__: {
    enumerable: true,
    value: "armarkerdetector"
  },
  __type__: {
    enumerable: true,
    value: "ArKvpInteger"
  }
})

/**
 * Checker for {@link module:armarkerdetector/complexTypes.ArKvpInteger}
 *
 * @memberof module:armarkerdetector/complexTypes
 *
 * @param {external:String} key
 * @param {module:armarkerdetector/complexTypes.ArKvpInteger} value
 */
function checkArKvpInteger(key, value)
{
  if(!(value instanceof ArKvpInteger))
    throw ChecktypeError(key, ArKvpInteger, value);
};


module.exports = ArKvpInteger;

ArKvpInteger.check = checkArKvpInteger;
