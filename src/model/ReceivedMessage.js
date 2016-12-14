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
    root.MessagemediaRestApi.ReceivedMessage = factory(root.MessagemediaRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ReceivedMessage model module.
   * @module model/ReceivedMessage
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ReceivedMessage</code>.
   * A message received for the account specified. This message may be in response to a sent message, or it may be an unsolicited message, matched to the account by the destination address.
   * @alias module:model/ReceivedMessage
   * @class
   */
  var exports = function() {
    var _this = this;













  };

  /**
   * Constructs a <code>ReceivedMessage</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ReceivedMessage} obj Optional instance to populate.
   * @return {module:model/ReceivedMessage} The populated <code>ReceivedMessage</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('account')) {
        obj['account'] = ApiClient.convertToType(data['account'], 'String');
      }
      if (data.hasOwnProperty('action')) {
        obj['action'] = ApiClient.convertToType(data['action'], 'String');
      }
      if (data.hasOwnProperty('content')) {
        obj['content'] = ApiClient.convertToType(data['content'], 'String');
      }
      if (data.hasOwnProperty('destination_address')) {
        obj['destination_address'] = ApiClient.convertToType(data['destination_address'], 'String');
      }
      if (data.hasOwnProperty('destination_address_country')) {
        obj['destination_address_country'] = ApiClient.convertToType(data['destination_address_country'], 'String');
      }
      if (data.hasOwnProperty('format')) {
        obj['format'] = ApiClient.convertToType(data['format'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('in_response_to')) {
        obj['in_response_to'] = ApiClient.convertToType(data['in_response_to'], 'String');
      }
      if (data.hasOwnProperty('metadata')) {
        obj['metadata'] = ApiClient.convertToType(data['metadata'], Object);
      }
      if (data.hasOwnProperty('source_address')) {
        obj['source_address'] = ApiClient.convertToType(data['source_address'], 'String');
      }
      if (data.hasOwnProperty('source_address_country')) {
        obj['source_address_country'] = ApiClient.convertToType(data['source_address_country'], 'String');
      }
      if (data.hasOwnProperty('timestamp')) {
        obj['timestamp'] = ApiClient.convertToType(data['timestamp'], 'Date');
      }
    }
    return obj;
  }

  /**
   * Account associated with this message
   * @member {String} account
   */
  exports.prototype['account'] = undefined;
  /**
   * Action that was invoked for this message if any, OPTOUT, OPTIN, GLOBALOPTOUT
   * @member {module:model/ReceivedMessage.ActionEnum} action
   */
  exports.prototype['action'] = undefined;
  /**
   * Content of the message
   * @member {String} content
   */
  exports.prototype['content'] = undefined;
  /**
   * Address this message was delivered to. If this message was received in response to a sent message, this is the source address of the sent message
   * @member {String} destination_address
   */
  exports.prototype['destination_address'] = undefined;
  /**
   * Country associated with the destination address
   * @member {String} destination_address_country
   */
  exports.prototype['destination_address_country'] = undefined;
  /**
   * Format of message, SMS or VOICE
   * @member {module:model/ReceivedMessage.FormatEnum} format
   */
  exports.prototype['format'] = undefined;
  /**
   * Unique ID for this reply
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * If this message was received in response to a sent message, this is the ID of the sent message
   * @member {String} in_response_to
   */
  exports.prototype['in_response_to'] = undefined;
  /**
   * If this message was received in response to a sent message, this is the metadata associated with the sent message
   * @member {Object} metadata
   */
  exports.prototype['metadata'] = undefined;
  /**
   * Address this message was received from. If this message was received in response to a sent message, this is the destination address of the sent message.
   * @member {String} source_address
   */
  exports.prototype['source_address'] = undefined;
  /**
   * Country associated with the source address
   * @member {String} source_address_country
   */
  exports.prototype['source_address_country'] = undefined;
  /**
   * Date time at which this message was received
   * @member {Date} timestamp
   */
  exports.prototype['timestamp'] = undefined;


  /**
   * Allowed values for the <code>action</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ActionEnum = {
    /**
     * value: "OPTOUT"
     * @const
     */
    "OPTOUT": "OPTOUT",
    /**
     * value: "OPTIN"
     * @const
     */
    "OPTIN": "OPTIN",
    /**
     * value: "GLOBALOPTOUT"
     * @const
     */
    "GLOBALOPTOUT": "GLOBALOPTOUT"  };

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


  return exports;
}));


