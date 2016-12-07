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
    define(['ApiClient', 'model/ReportingDetailPropertiesFilters', 'model/ReportingDetailPropertiesSorting'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ReportingDetailPropertiesFilters'), require('./ReportingDetailPropertiesSorting'));
  } else {
    // Browser globals (root is window)
    if (!root.MessagemediaRestApi) {
      root.MessagemediaRestApi = {};
    }
    root.MessagemediaRestApi.ReportingDetailProperties = factory(root.MessagemediaRestApi.ApiClient, root.MessagemediaRestApi.ReportingDetailPropertiesFilters, root.MessagemediaRestApi.ReportingDetailPropertiesSorting);
  }
}(this, function(ApiClient, ReportingDetailPropertiesFilters, ReportingDetailPropertiesSorting) {
  'use strict';




  /**
   * The ReportingDetailProperties model module.
   * @module model/ReportingDetailProperties
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ReportingDetailProperties</code>.
   * @alias module:model/ReportingDetailProperties
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>ReportingDetailProperties</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ReportingDetailProperties} obj Optional instance to populate.
   * @return {module:model/ReportingDetailProperties} The populated <code>ReportingDetailProperties</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('end_date')) {
        obj['end_date'] = ApiClient.convertToType(data['end_date'], 'Date');
      }
      if (data.hasOwnProperty('start_date')) {
        obj['start_date'] = ApiClient.convertToType(data['start_date'], 'Date');
      }
      if (data.hasOwnProperty('sorting')) {
        obj['sorting'] = ReportingDetailPropertiesSorting.constructFromObject(data['sorting']);
      }
      if (data.hasOwnProperty('filters')) {
        obj['filters'] = ReportingDetailPropertiesFilters.constructFromObject(data['filters']);
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
   * The end date provided as a parameter for this report
   * @member {Date} start_date
   */
  exports.prototype['start_date'] = undefined;
  /**
   * @member {module:model/ReportingDetailPropertiesSorting} sorting
   */
  exports.prototype['sorting'] = undefined;
  /**
   * @member {module:model/ReportingDetailPropertiesFilters} filters
   */
  exports.prototype['filters'] = undefined;
  /**
   * @member {String} timezone
   */
  exports.prototype['timezone'] = undefined;



  return exports;
}));


