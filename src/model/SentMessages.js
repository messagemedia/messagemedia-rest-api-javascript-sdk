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
    define(['ApiClient', 'model/Pagination', 'model/ReportingDetailProperties', 'model/SentMessage'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Pagination'), require('./ReportingDetailProperties'), require('./SentMessage'));
  } else {
    // Browser globals (root is window)
    if (!root.MessagemediaRestApi) {
      root.MessagemediaRestApi = {};
    }
    root.MessagemediaRestApi.SentMessages = factory(root.MessagemediaRestApi.ApiClient, root.MessagemediaRestApi.Pagination, root.MessagemediaRestApi.ReportingDetailProperties, root.MessagemediaRestApi.SentMessage);
  }
}(this, function(ApiClient, Pagination, ReportingDetailProperties, SentMessage) {
  'use strict';




  /**
   * The SentMessages model module.
   * @module model/SentMessages
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>SentMessages</code>.
   * @alias module:model/SentMessages
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>SentMessages</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SentMessages} obj Optional instance to populate.
   * @return {module:model/SentMessages} The populated <code>SentMessages</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], [SentMessage]);
      }
      if (data.hasOwnProperty('pagination')) {
        obj['pagination'] = Pagination.constructFromObject(data['pagination']);
      }
      if (data.hasOwnProperty('properties')) {
        obj['properties'] = ReportingDetailProperties.constructFromObject(data['properties']);
      }
    }
    return obj;
  }

  /**
   * List of sent messages
   * @member {Array.<module:model/SentMessage>} data
   */
  exports.prototype['data'] = undefined;
  /**
   * @member {module:model/Pagination} pagination
   */
  exports.prototype['pagination'] = undefined;
  /**
   * @member {module:model/ReportingDetailProperties} properties
   */
  exports.prototype['properties'] = undefined;



  return exports;
}));


