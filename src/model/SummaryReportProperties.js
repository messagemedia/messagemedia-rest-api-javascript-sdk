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
    root.MessagemediaRestApi.SummaryReportProperties = factory(root.MessagemediaRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SummaryReportProperties model module.
   * @module model/SummaryReportProperties
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>SummaryReportProperties</code>.
   * @alias module:model/SummaryReportProperties
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>SummaryReportProperties</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SummaryReportProperties} obj Optional instance to populate.
   * @return {module:model/SummaryReportProperties} The populated <code>SummaryReportProperties</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('end_date')) {
        obj['end_date'] = ApiClient.convertToType(data['end_date'], 'Date');
      }
      if (data.hasOwnProperty('filters')) {
        obj['filters'] = ApiClient.convertToType(data['filters'], Object);
      }
      if (data.hasOwnProperty('grouping')) {
        obj['grouping'] = ApiClient.convertToType(data['grouping'], 'String');
      }
      if (data.hasOwnProperty('start_date')) {
        obj['start_date'] = ApiClient.convertToType(data['start_date'], 'Date');
      }
      if (data.hasOwnProperty('summary')) {
        obj['summary'] = ApiClient.convertToType(data['summary'], 'String');
      }
      if (data.hasOwnProperty('summary_field')) {
        obj['summary_field'] = ApiClient.convertToType(data['summary_field'], 'String');
      }
      if (data.hasOwnProperty('timezone')) {
        obj['timezone'] = ApiClient.convertToType(data['timezone'], 'String');
      }
    }
    return obj;
  }

  /**
   * The end date provided as a parameter for this report
   * @member {Date} end_date
   */
  exports.prototype['end_date'] = undefined;
  /**
   * Any filters provided as parameters for this report
   * @member {Object} filters
   */
  exports.prototype['filters'] = undefined;
  /**
   * The value of the group by parameter provided for this report
   * @member {module:model/SummaryReportProperties.GroupingEnum} grouping
   */
  exports.prototype['grouping'] = undefined;
  /**
   * The end date provided as a parameter for this report
   * @member {Date} start_date
   */
  exports.prototype['start_date'] = undefined;
  /**
   * The value of the summary_by parameter provided for this report
   * @member {module:model/SummaryReportProperties.SummaryEnum} summary
   */
  exports.prototype['summary'] = undefined;
  /**
   * The value of the summary_field parameter provided for this report
   * @member {module:model/SummaryReportProperties.SummaryFieldEnum} summary_field
   */
  exports.prototype['summary_field'] = undefined;
  /**
   * @member {String} timezone
   */
  exports.prototype['timezone'] = undefined;


  /**
   * Allowed values for the <code>grouping</code> property.
   * @enum {String}
   * @readonly
   */
  exports.GroupingEnum = {
    /**
     * value: "DAY"
     * @const
     */
    "DAY": "DAY",
    /**
     * value: "DELIVERY_REPORT"
     * @const
     */
    "DELIVERY_REPORT": "DELIVERY_REPORT",
    /**
     * value: "DESTINATION_ADDRESS"
     * @const
     */
    "DESTINATION_ADDRESS": "DESTINATION_ADDRESS",
    /**
     * value: "DESTINATION_ADDRESS_COUNTRY"
     * @const
     */
    "DESTINATION_ADDRESS_COUNTRY": "DESTINATION_ADDRESS_COUNTRY",
    /**
     * value: "FORMAT"
     * @const
     */
    "FORMAT": "FORMAT",
    /**
     * value: "HOUR"
     * @const
     */
    "HOUR": "HOUR",
    /**
     * value: "METADATA_KEY"
     * @const
     */
    "METADATA_KEY": "METADATA_KEY",
    /**
     * value: "METADATA_VALUE"
     * @const
     */
    "METADATA_VALUE": "METADATA_VALUE",
    /**
     * value: "MINUTE"
     * @const
     */
    "MINUTE": "MINUTE",
    /**
     * value: "MONTH"
     * @const
     */
    "MONTH": "MONTH",
    /**
     * value: "SOURCE_ADDRESS"
     * @const
     */
    "SOURCE_ADDRESS": "SOURCE_ADDRESS",
    /**
     * value: "SOURCE_ADDRESS_COUNTRY"
     * @const
     */
    "SOURCE_ADDRESS_COUNTRY": "SOURCE_ADDRESS_COUNTRY",
    /**
     * value: "STATUS"
     * @const
     */
    "STATUS": "STATUS",
    /**
     * value: "STATUS_CODE"
     * @const
     */
    "STATUS_CODE": "STATUS_CODE",
    /**
     * value: "YEAR"
     * @const
     */
    "YEAR": "YEAR"  };

  /**
   * Allowed values for the <code>summary</code> property.
   * @enum {String}
   * @readonly
   */
  exports.SummaryEnum = {
    /**
     * value: "COUNT"
     * @const
     */
    "COUNT": "COUNT",
    /**
     * value: "SUM"
     * @const
     */
    "SUM": "SUM"  };

  /**
   * Allowed values for the <code>summary_field</code> property.
   * @enum {String}
   * @readonly
   */
  exports.SummaryFieldEnum = {
    /**
     * value: "UNITS"
     * @const
     */
    "UNITS": "UNITS",
    /**
     * value: "MESSAGE_ID"
     * @const
     */
    "MESSAGE_ID": "MESSAGE_ID"  };


  return exports;
}));


