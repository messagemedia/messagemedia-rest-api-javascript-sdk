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
    define(['ApiClient', 'model/NewMessage'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./NewMessage'));
  } else {
    // Browser globals (root is window)
    if (!root.MessagemediaRestApi) {
      root.MessagemediaRestApi = {};
    }
    root.MessagemediaRestApi.SubmittedMessage = factory(root.MessagemediaRestApi.ApiClient, root.MessagemediaRestApi.NewMessage);
  }
}(this, function(ApiClient, NewMessage) {
  'use strict';




  /**
   * The SubmittedMessage model module.
   * @module model/SubmittedMessage
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>SubmittedMessage</code>.
   * @alias module:model/SubmittedMessage
   * @class
   * @implements module:model/NewMessage
   */
  var exports = function() {
    var _this = this;

    NewMessage.call(_this);


  };

  /**
   * Constructs a <code>SubmittedMessage</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SubmittedMessage} obj Optional instance to populate.
   * @return {module:model/SubmittedMessage} The populated <code>SubmittedMessage</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      NewMessage.constructFromObject(data, obj);
      if (data.hasOwnProperty('message_id')) {
        obj['message_id'] = ApiClient.convertToType(data['message_id'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
    }
    return obj;
  }

  /**
   * Unique ID of this message
   * @member {String} message_id
   */
  exports.prototype['message_id'] = undefined;
  /**
   * The status of the message
   * @member {module:model/SubmittedMessage.StatusEnum} status
   */
  exports.prototype['status'] = undefined;

  // Implement NewMessage interface:
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
   * Format of message, SMS or TTS (Text To Speech).
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
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "enroute"
     * @const
     */
    "enroute": "enroute",
    /**
     * value: "submitted"
     * @const
     */
    "submitted": "submitted",
    /**
     * value: "delivered"
     * @const
     */
    "delivered": "delivered",
    /**
     * value: "expired"
     * @const
     */
    "expired": "expired",
    /**
     * value: "rejected"
     * @const
     */
    "rejected": "rejected",
    /**
     * value: "undeliverable"
     * @const
     */
    "undeliverable": "undeliverable",
    /**
     * value: "queued"
     * @const
     */
    "queued": "queued",
    /**
     * value: "cancelled"
     * @const
     */
    "cancelled": "cancelled",
    /**
     * value: "scheduled"
     * @const
     */
    "scheduled": "scheduled",
    /**
     * value: "failed"
     * @const
     */
    "failed": "failed"  };


  return exports;
}));


