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
    root.MessagemediaRestApi.MetadataKeysResponseProperties = factory(root.MessagemediaRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The MetadataKeysResponseProperties model module.
   * @module model/MetadataKeysResponseProperties
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>MetadataKeysResponseProperties</code>.
   * @alias module:model/MetadataKeysResponseProperties
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>MetadataKeysResponseProperties</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MetadataKeysResponseProperties} obj Optional instance to populate.
   * @return {module:model/MetadataKeysResponseProperties} The populated <code>MetadataKeysResponseProperties</code> instance.
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
      if (data.hasOwnProperty('accounts')) {
        obj['accounts'] = ApiClient.convertToType(data['accounts'], ['String']);
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
   * List of accounts that were considered when fetching the metadata keys.
   * @member {Array.<String>} accounts
   */
  exports.prototype['accounts'] = undefined;



  return exports;
}));


