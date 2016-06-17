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

var disguise = kurentoClient.disguise;

var ChecktypeError = kurentoClient.checkType.ChecktypeError;

var MediaElement = kurentoClient.register.abstracts.MediaElement;


/**
 * Create an element
 *
 * @classdesc
 *  KmsMsData interface. Documentation about the module
 *
 * @extends module:core/abstracts.MediaElement
 *
 * @constructor module:msdata.KmsMsData
 */
function KmsMsData(){
  KmsMsData.super_.call(this);
};
inherits(KmsMsData, MediaElement);


/**
 * @alias module:msdata.KmsMsData.constructorParams
 *
 * @property {module:core.MediaPipeline} mediaPipeline
 *  the parent {@link module:core.MediaPipeline MediaPipeline}
 */
KmsMsData.constructorParams = {
  mediaPipeline: {
    type: 'kurento.MediaPipeline',
    required: true
  }
};

/**
 * @alias module:msdata.KmsMsData.events
 *
 * @extends module:core/abstracts.MediaElement.events
 */
KmsMsData.events = MediaElement.events;


/**
 * Checker for {@link module:msdata.KmsMsData}
 *
 * @memberof module:msdata
 *
 * @param {external:String} key
 * @param {module:msdata.KmsMsData} value
 */
function checkKmsMsData(key, value)
{
  if(!(value instanceof KmsMsData))
    throw ChecktypeError(key, KmsMsData, value);
};


module.exports = KmsMsData;

KmsMsData.check = checkKmsMsData;
