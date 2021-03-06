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


/**
 * An event that is sent when the number of visible markers is changed. Tracking
 *
 * @event module:armarkerdetector#MarkerCount
 *
 * @type {module:armarkerdetector#event:Media}
 *
 * @property {external:Integer} sequenceNumber
 *  sequence number
 * @property {external:Integer} countTimestamp
 *  timestamp
 * @property {external:Integer} markerId
 *  marker id
 * @property {external:Integer} markerCount
 *  Number of visible markers with the specified id
 * @property {external:Integer} markerCountDiff
 *  How much the markerCount was changed from the previous situation
 */

/**
 * Matrices for marker pose
 *
 * @event module:armarkerdetector#MarkerPose
 *
 * @type {module:armarkerdetector#event:Media}
 *
 * @property {external:Integer} sequenceNumber
 *  sequence number
 * @property {external:Integer} poseTimestamp
 *  timestamp
 * @property {external:Integer} width
 *  resolution width
 * @property {external:Integer} height
 *  resolution height
 * @property {external:Number} matrixProjection
 *  marker projection matrix
 * @property {module:armarkerdetector/complexTypes.ArMarkerPose} markerPose
 *  marker pose
 */

/**
 * An event that is sent from some predifined monitoring points of the module 
 *
 * @event module:armarkerdetector#Tick
 *
 * @type {module:armarkerdetector#event:Media}
 *
 * @property {external:String} msg
 *  message descriping the tick
 * @property {external:Integer} tickTimestamp
 *  timestamp
 */
