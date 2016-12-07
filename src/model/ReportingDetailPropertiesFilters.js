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
    root.MessagemediaRestApi.ReportingDetailPropertiesFilters = factory(root.MessagemediaRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ReportingDetailPropertiesFilters model module.
   * @module model/ReportingDetailPropertiesFilters
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ReportingDetailPropertiesFilters</code>.
   * @alias module:model/ReportingDetailPropertiesFilters
   * @class
   */
  var exports = function() {
    var _this = this;












  };

  /**
   * Constructs a <code>ReportingDetailPropertiesFilters</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ReportingDetailPropertiesFilters} obj Optional instance to populate.
   * @return {module:model/ReportingDetailPropertiesFilters} The populated <code>ReportingDetailPropertiesFilters</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('delivery_report')) {
        obj['delivery_report'] = ApiClient.convertToType(data['delivery_report'], 'String');
      }
      if (data.hasOwnProperty('destination_address_country')) {
        obj['destination_address_country'] = ApiClient.convertToType(data['destination_address_country'], 'String');
      }
      if (data.hasOwnProperty('destination_address')) {
        obj['destination_address'] = ApiClient.convertToType(data['destination_address'], 'String');
      }
      if (data.hasOwnProperty('message_format')) {
        obj['message_format'] = ApiClient.convertToType(data['message_format'], 'String');
      }
      if (data.hasOwnProperty('metadata_key')) {
        obj['metadata_key'] = ApiClient.convertToType(data['metadata_key'], 'String');
      }
      if (data.hasOwnProperty('metadata_value')) {
        obj['metadata_value'] = ApiClient.convertToType(data['metadata_value'], 'String');
      }
      if (data.hasOwnProperty('source_address_country')) {
        obj['source_address_country'] = ApiClient.convertToType(data['source_address_country'], 'String');
      }
      if (data.hasOwnProperty('source_address')) {
        obj['source_address'] = ApiClient.convertToType(data['source_address'], 'String');
      }
      if (data.hasOwnProperty('status_code')) {
        obj['status_code'] = ApiClient.convertToType(data['status_code'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('action')) {
        obj['action'] = ApiClient.convertToType(data['action'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} delivery_report
   */
  exports.prototype['delivery_report'] = undefined;
  /**
   * @member {String} destination_address_country
   */
  exports.prototype['destination_address_country'] = undefined;
  /**
   * @member {String} destination_address
   */
  exports.prototype['destination_address'] = undefined;
  /**
   * @member {String} message_format
   */
  exports.prototype['message_format'] = undefined;
  /**
   * @member {String} metadata_key
   */
  exports.prototype['metadata_key'] = undefined;
  /**
   * @member {String} metadata_value
   */
  exports.prototype['metadata_value'] = undefined;
  /**
   * @member {String} source_address_country
   */
  exports.prototype['source_address_country'] = undefined;
  /**
   * @member {String} source_address
   */
  exports.prototype['source_address'] = undefined;
  /**
   * @member {String} status_code
   */
  exports.prototype['status_code'] = undefined;
  /**
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {String} action
   */
  exports.prototype['action'] = undefined;



  return exports;
}));


