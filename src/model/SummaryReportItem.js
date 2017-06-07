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
    define(['ApiClient', 'model/SummaryReportItem'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SummaryReportItem'));
  } else {
    // Browser globals (root is window)
    if (!root.MessagemediaRestApi) {
      root.MessagemediaRestApi = {};
    }
    root.MessagemediaRestApi.SummaryReportItem = factory(root.MessagemediaRestApi.ApiClient, root.MessagemediaRestApi.SummaryReportItem);
  }
}(this, function(ApiClient, SummaryReportItem) {
  'use strict';




  /**
   * The SummaryReportItem model module.
   * @module model/SummaryReportItem
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>SummaryReportItem</code>.
   * @alias module:model/SummaryReportItem
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>SummaryReportItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SummaryReportItem} obj Optional instance to populate.
   * @return {module:model/SummaryReportItem} The populated <code>SummaryReportItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('group')) {
        obj['group'] = ApiClient.convertToType(data['group'], 'String');
      }
      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], 'Integer');
      }
      if (data.hasOwnProperty('subgroups')) {
        obj['subgroups'] = ApiClient.convertToType(data['subgroups'], [SummaryReportItem]);
      }
    }
    return obj;
  }

  /**
   * @member {String} group
   */
  exports.prototype['group'] = undefined;
  /**
   * @member {Integer} value
   */
  exports.prototype['value'] = undefined;
  /**
   * @member {Array.<module:model/SummaryReportItem>} subgroups
   */
  exports.prototype['subgroups'] = undefined;



  return exports;
}));


