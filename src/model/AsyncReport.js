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
    root.MessagemediaRestApi.AsyncReport = factory(root.MessagemediaRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The AsyncReport model module.
   * @module model/AsyncReport
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>AsyncReport</code>.
   * @alias module:model/AsyncReport
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>AsyncReport</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AsyncReport} obj Optional instance to populate.
   * @return {module:model/AsyncReport} The populated <code>AsyncReport</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('message_type')) {
        obj['message_type'] = ApiClient.convertToType(data['message_type'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('report_status')) {
        obj['report_status'] = ApiClient.convertToType(data['report_status'], 'String');
      }
      if (data.hasOwnProperty('created_datetime')) {
        obj['created_datetime'] = ApiClient.convertToType(data['created_datetime'], 'Date');
      }
      if (data.hasOwnProperty('last_modified_datetime')) {
        obj['last_modified_datetime'] = ApiClient.convertToType(data['last_modified_datetime'], 'Date');
      }
    }
    return obj;
  }

  /**
   * Unique ID for this reply
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {module:model/AsyncReport.MessageTypeEnum} message_type
   */
  exports.prototype['message_type'] = undefined;
  /**
   * @member {module:model/AsyncReport.TypeEnum} type
   */
  exports.prototype['type'] = undefined;
  /**
   * @member {module:model/AsyncReport.ReportStatusEnum} report_status
   */
  exports.prototype['report_status'] = undefined;
  /**
   * Date time at which this report was created.
   * @member {Date} created_datetime
   */
  exports.prototype['created_datetime'] = undefined;
  /**
   * Date time at which this report was last modified.
   * @member {Date} last_modified_datetime
   */
  exports.prototype['last_modified_datetime'] = undefined;


  /**
   * Allowed values for the <code>message_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.MessageTypeEnum = {
    /**
     * value: "SENT_MESSAGES"
     * @const
     */
    "SENT_MESSAGES": "SENT_MESSAGES",
    /**
     * value: "RECEIVED_MESSAGES"
     * @const
     */
    "RECEIVED_MESSAGES": "RECEIVED_MESSAGES",
    /**
     * value: "DELIVERY_REPORTS"
     * @const
     */
    "DELIVERY_REPORTS": "DELIVERY_REPORTS"  };

  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "SUMMARY"
     * @const
     */
    "SUMMARY": "SUMMARY",
    /**
     * value: "DETAIL"
     * @const
     */
    "DETAIL": "DETAIL"  };

  /**
   * Allowed values for the <code>report_status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ReportStatusEnum = {
    /**
     * value: "REQUESTED"
     * @const
     */
    "REQUESTED": "REQUESTED",
    /**
     * value: "RUNNING"
     * @const
     */
    "RUNNING": "RUNNING",
    /**
     * value: "CANCELLED"
     * @const
     */
    "CANCELLED": "CANCELLED",
    /**
     * value: "DONE"
     * @const
     */
    "DONE": "DONE"  };


  return exports;
}));


