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
    root.MessagemediaRestApi.DeliveryOptionsBodyInner = factory(root.MessagemediaRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The DeliveryOptionsBodyInner model module.
   * @module model/DeliveryOptionsBodyInner
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>DeliveryOptionsBodyInner</code>.
   * A delivery option
   * @alias module:model/DeliveryOptionsBodyInner
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>DeliveryOptionsBodyInner</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeliveryOptionsBodyInner} obj Optional instance to populate.
   * @return {module:model/DeliveryOptionsBodyInner} The populated <code>DeliveryOptionsBodyInner</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('delivery_type')) {
        obj['delivery_type'] = ApiClient.convertToType(data['delivery_type'], 'String');
      }
      if (data.hasOwnProperty('delivery_addresses')) {
        obj['delivery_addresses'] = ApiClient.convertToType(data['delivery_addresses'], ['String']);
      }
      if (data.hasOwnProperty('delivery_format')) {
        obj['delivery_format'] = ApiClient.convertToType(data['delivery_format'], 'String');
      }
    }
    return obj;
  }

  /**
   * How to deliver the report.
   * @member {module:model/DeliveryOptionsBodyInner.DeliveryTypeEnum} delivery_type
   */
  exports.prototype['delivery_type'] = undefined;
  /**
   * A list of email addresses to use as the recipient of the email. Only works for EMAIL delivery type
   * @member {Array.<String>} delivery_addresses
   */
  exports.prototype['delivery_addresses'] = undefined;
  /**
   * Format of the report.
   * @member {module:model/DeliveryOptionsBodyInner.DeliveryFormatEnum} delivery_format
   */
  exports.prototype['delivery_format'] = undefined;


  /**
   * Allowed values for the <code>delivery_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.DeliveryTypeEnum = {
    /**
     * value: "EMAIL"
     * @const
     */
    "EMAIL": "EMAIL"  };

  /**
   * Allowed values for the <code>delivery_format</code> property.
   * @enum {String}
   * @readonly
   */
  exports.DeliveryFormatEnum = {
    /**
     * value: "CSV"
     * @const
     */
    "CSV": "CSV"  };


  return exports;
}));


