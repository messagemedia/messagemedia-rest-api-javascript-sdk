/**
 * MessageMedia REST API
 * Australia's Leading Messaging Solutions for Business and Enterprise.
 *
 * OpenAPI spec version: 1.0.0
 * Contact: support@messagemedia.com
 *
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.MessagemediaRestApi) {
      root.MessagemediaRestApi = {};
    }
    root.MessagemediaRestApi.NewMessage = factory(root.MessagemediaRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The NewMessage model module.
   * @module model/NewMessage
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>NewMessage</code>.
   * @alias module:model/NewMessage
   * @class
   */
  var exports = function() {
    var _this = this;











  };

  /**
   * Constructs a <code>NewMessage</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NewMessage} obj Optional instance to populate.
   * @return {module:model/NewMessage} The populated <code>NewMessage</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('callback_url')) {
        obj['callback_url'] = ApiClient.convertToType(data['callback_url'], 'String');
      }
      if (data.hasOwnProperty('content')) {
        obj['content'] = ApiClient.convertToType(data['content'], 'String');
      }
      if (data.hasOwnProperty('destination_number')) {
        obj['destination_number'] = ApiClient.convertToType(data['destination_number'], 'String');
      }
      if (data.hasOwnProperty('delivery_report')) {
        obj['delivery_report'] = ApiClient.convertToType(data['delivery_report'], 'Boolean');
      }
      if (data.hasOwnProperty('format')) {
        obj['format'] = ApiClient.convertToType(data['format'], 'String');
      }
      if (data.hasOwnProperty('message_expiry_timestamp')) {
        obj['message_expiry_timestamp'] = ApiClient.convertToType(data['message_expiry_timestamp'], 'Date');
      }
      if (data.hasOwnProperty('metadata')) {
        obj['metadata'] = ApiClient.convertToType(data['metadata'], Object);
      }
      if (data.hasOwnProperty('scheduled')) {
        obj['scheduled'] = ApiClient.convertToType(data['scheduled'], 'Date');
      }
      if (data.hasOwnProperty('source_number')) {
        obj['source_number'] = ApiClient.convertToType(data['source_number'], 'String');
      }
      if (data.hasOwnProperty('source_number_type')) {
        obj['source_number_type'] = ApiClient.convertToType(data['source_number_type'], 'String');
      }
    }
    return obj;
  }

  /**
   * URL replies and delivery reports to this message will be pushed to
   * @member {String} callback_url
   */
  exports.prototype['callback_url'] = undefined;
  /**
   * Content of the message
   * @member {String} content
   */
  exports.prototype['content'] = undefined;
  /**
   * Destination number of the message
   * @member {String} destination_number
   */
  exports.prototype['destination_number'] = undefined;
  /**
   * Request a delivery report for this message
   * @member {Boolean} delivery_report
   * @default false
   */
  exports.prototype['delivery_report'] = false;
  /**
   * Format of message, SMS or VOICE.
   * @member {module:model/NewMessage.FormatEnum} format
   */
  exports.prototype['format'] = undefined;
  /**
   * Date time after which the message expires and will not be sent
   * @member {Date} message_expiry_timestamp
   */
  exports.prototype['message_expiry_timestamp'] = undefined;
  /**
   * Metadata for the message specified as a set of key value pairs, each key can be up to 100 characters long and each value can be up to 256 characters long ``` {    \"myKey\": \"myValue\",    \"anotherKey\": \"anotherValue\" } ``` 
   * @member {Object} metadata
   */
  exports.prototype['metadata'] = undefined;
  /**
   * Scheduled delivery date time of the message
   * @member {Date} scheduled
   */
  exports.prototype['scheduled'] = undefined;
  /**
   * @member {String} source_number
   */
  exports.prototype['source_number'] = undefined;
  /**
   * Type of source address specified, this can be INTERNATIONAL, ALPHANUMERIC or SHORTCODE
   * @member {module:model/NewMessage.SourceNumberTypeEnum} source_number_type
   */
  exports.prototype['source_number_type'] = undefined;


  /**
   * Allowed values for the <code>format</code> property.
   * @enum {String}
   * @readonly
   */
  exports.FormatEnum = {
    /**
     * value: "SMS"
     * @const
     */
    "SMS": "SMS",
    /**
     * value: "VOICE"
     * @const
     */
    "VOICE": "VOICE"  };

  /**
   * Allowed values for the <code>source_number_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.SourceNumberTypeEnum = {
    /**
     * value: "INTERNATIONAL"
     * @const
     */
    "INTERNATIONAL": "INTERNATIONAL",
    /**
     * value: "ALPHANUMERIC"
     * @const
     */
    "ALPHANUMERIC": "ALPHANUMERIC",
    /**
     * value: "SHORTCODE"
     * @const
     */
    "SHORTCODE": "SHORTCODE"  };


  return exports;
}));


