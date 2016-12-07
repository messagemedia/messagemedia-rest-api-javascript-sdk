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
    root.MessagemediaRestApi.DeliveryReportId = factory(root.MessagemediaRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The DeliveryReportId model module.
   * @module model/DeliveryReportId
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>DeliveryReportId</code>.
   * @alias module:model/DeliveryReportId
   * @class
   * @param deliveryReportIds {Array.<String>} 
   */
  var exports = function(deliveryReportIds) {
    var _this = this;

    _this['delivery_report_ids'] = deliveryReportIds;
  };

  /**
   * Constructs a <code>DeliveryReportId</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeliveryReportId} obj Optional instance to populate.
   * @return {module:model/DeliveryReportId} The populated <code>DeliveryReportId</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('delivery_report_ids')) {
        obj['delivery_report_ids'] = ApiClient.convertToType(data['delivery_report_ids'], ['String']);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<String>} delivery_report_ids
   */
  exports.prototype['delivery_report_ids'] = undefined;



  return exports;
}));


