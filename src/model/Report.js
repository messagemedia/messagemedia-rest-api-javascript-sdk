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
    root.MessagemediaRestApi.Report = factory(root.MessagemediaRestApi.ApiClient, root.MessagemediaRestApi.ReplyVendorAccountId);
  }
}(this, function(ApiClient, ReplyVendorAccountId) {
  'use strict';




  /**
   * The Report model module.
   * @module model/Report
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Report</code>.
   * @alias module:model/Report
   * @class
   */
  var exports = function() {
    var _this = this;












  };

  /**
   * Constructs a <code>Report</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Report} obj Optional instance to populate.
   * @return {module:model/Report} The populated <code>Report</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('callback_url')) {
        obj['callback_url'] = ApiClient.convertToType(data['callback_url'], 'String');
      }
      if (data.hasOwnProperty('date_received')) {
        obj['date_received'] = ApiClient.convertToType(data['date_received'], 'Date');
      }
      if (data.hasOwnProperty('delay')) {
        obj['delay'] = ApiClient.convertToType(data['delay'], 'Integer');
      }
      if (data.hasOwnProperty('delivery_report_id')) {
        obj['delivery_report_id'] = ApiClient.convertToType(data['delivery_report_id'], 'String');
      }
      if (data.hasOwnProperty('message_id')) {
        obj['message_id'] = ApiClient.convertToType(data['message_id'], 'String');
      }
      if (data.hasOwnProperty('metadata')) {
        obj['metadata'] = ApiClient.convertToType(data['metadata'], Object);
      }
      if (data.hasOwnProperty('original_text')) {
        obj['original_text'] = ApiClient.convertToType(data['original_text'], 'String');
      }
      if (data.hasOwnProperty('source_number')) {
        obj['source_number'] = ApiClient.convertToType(data['source_number'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('submitted_date')) {
        obj['submitted_date'] = ApiClient.convertToType(data['submitted_date'], 'Date');
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
   * The date and time at which this delivery report was generated in UTC.
   * @member {Date} date_received
   */
  exports.prototype['date_received'] = undefined;
  /**
   * Deprecated, no longer in use
   * @member {Integer} delay
   */
  exports.prototype['delay'] = undefined;
  /**
   * Unique ID for this delivery report
   * @member {String} delivery_report_id
   */
  exports.prototype['delivery_report_id'] = undefined;
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
   * Text of the original message.
   * @member {String} original_text
   */
  exports.prototype['original_text'] = undefined;
  /**
   * Address from which this delivery report was received
   * @member {String} source_number
   */
  exports.prototype['source_number'] = undefined;
  /**
   * The status of the message as per the delivery report
   * @member {module:model/Report.StatusEnum} status
   */
  exports.prototype['status'] = undefined;
  /**
   * The date and time when the message status changed in UTC. For a delivered DR this may indicate the time at which the message was received on the handset.
   * @member {Date} submitted_date
   */
  exports.prototype['submitted_date'] = undefined;
  /**
   * @member {module:model/ReplyVendorAccountId} vendor_account_id
   */
  exports.prototype['vendor_account_id'] = undefined;


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
     * value: "failed"
     * @const
     */
    "failed": "failed",
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
    "undeliverable": "undeliverable"  };


  return exports;
}));


