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
    define(['ApiClient', 'model/ReplyVendorAccountId'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ReplyVendorAccountId'));
  } else {
    // Browser globals (root is window)
    if (!root.MessagemediaRestApi) {
      root.MessagemediaRestApi = {};
    }
    root.MessagemediaRestApi.Reply = factory(root.MessagemediaRestApi.ApiClient, root.MessagemediaRestApi.ReplyVendorAccountId);
  }
}(this, function(ApiClient, ReplyVendorAccountId) {
  'use strict';




  /**
   * The Reply model module.
   * @module model/Reply
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Reply</code>.
   * @alias module:model/Reply
   * @class
   */
  var exports = function() {
    var _this = this;










  };

  /**
   * Constructs a <code>Reply</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Reply} obj Optional instance to populate.
   * @return {module:model/Reply} The populated <code>Reply</code> instance.
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
      if (data.hasOwnProperty('date_received')) {
        obj['date_received'] = ApiClient.convertToType(data['date_received'], 'Date');
      }
      if (data.hasOwnProperty('destination_number')) {
        obj['destination_number'] = ApiClient.convertToType(data['destination_number'], 'String');
      }
      if (data.hasOwnProperty('message_id')) {
        obj['message_id'] = ApiClient.convertToType(data['message_id'], 'String');
      }
      if (data.hasOwnProperty('metadata')) {
        obj['metadata'] = ApiClient.convertToType(data['metadata'], Object);
      }
      if (data.hasOwnProperty('reply_id')) {
        obj['reply_id'] = ApiClient.convertToType(data['reply_id'], 'String');
      }
      if (data.hasOwnProperty('source_number')) {
        obj['source_number'] = ApiClient.convertToType(data['source_number'], 'String');
      }
      if (data.hasOwnProperty('vendor_account_id')) {
        obj['vendor_account_id'] = ReplyVendorAccountId.constructFromObject(data['vendor_account_id']);
      }
    }
    return obj;
  }

  /**
   * The URL specified as the callback URL in the original submit message request
   * @member {String} callback_url
   */
  exports.prototype['callback_url'] = undefined;
  /**
   * Content of the reply
   * @member {String} content
   */
  exports.prototype['content'] = undefined;
  /**
   * Date time when the reply was received
   * @member {Date} date_received
   */
  exports.prototype['date_received'] = undefined;
  /**
   * Address from which this reply was sent to
   * @member {String} destination_number
   */
  exports.prototype['destination_number'] = undefined;
  /**
   * Unique ID of the original message
   * @member {String} message_id
   */
  exports.prototype['message_id'] = undefined;
  /**
   * Any metadata that was included in the original submit message request
   * @member {Object} metadata
   */
  exports.prototype['metadata'] = undefined;
  /**
   * Unique ID of this reply
   * @member {String} reply_id
   */
  exports.prototype['reply_id'] = undefined;
  /**
   * Address from which this reply was received from
   * @member {String} source_number
   */
  exports.prototype['source_number'] = undefined;
  /**
   * @member {module:model/ReplyVendorAccountId} vendor_account_id
   */
  exports.prototype['vendor_account_id'] = undefined;



  return exports;
}));


