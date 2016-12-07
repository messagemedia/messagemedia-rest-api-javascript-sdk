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
    define(['ApiClient', 'model/Report'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Report'));
  } else {
    // Browser globals (root is window)
    if (!root.MessagemediaRestApi) {
      root.MessagemediaRestApi = {};
    }
    root.MessagemediaRestApi.Reports = factory(root.MessagemediaRestApi.ApiClient, root.MessagemediaRestApi.Report);
  }
}(this, function(ApiClient, Report) {
  'use strict';




  /**
   * The Reports model module.
   * @module model/Reports
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Reports</code>.
   * @alias module:model/Reports
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>Reports</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Reports} obj Optional instance to populate.
   * @return {module:model/Reports} The populated <code>Reports</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('delivery_reports')) {
        obj['delivery_reports'] = ApiClient.convertToType(data['delivery_reports'], [Report]);
      }
    }
    return obj;
  }

  /**
   * The oldest 100 unconfirmed delivery reports
   * @member {Array.<module:model/Report>} delivery_reports
   */
  exports.prototype['delivery_reports'] = undefined;



  return exports;
}));


