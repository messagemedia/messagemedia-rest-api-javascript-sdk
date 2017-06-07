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
    define(['ApiClient', 'model/AccountsBody', 'model/DeliveryOptionsBody', 'model/DestinationAddressBody', 'model/DestinationAddressCountryBody', 'model/EndDateBody', 'model/MessageFormatBody', 'model/MetadataKeyBody', 'model/MetadataValueBody', 'model/SourceAddressBody', 'model/SourceAddressCountryBody', 'model/StartDateBody', 'model/StatusBody', 'model/StatusCodeBody', 'model/StatusesBody', 'model/SummaryByBody', 'model/SummaryFieldBody', 'model/TimezoneBody'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AccountsBody'), require('./DeliveryOptionsBody'), require('./DestinationAddressBody'), require('./DestinationAddressCountryBody'), require('./EndDateBody'), require('./MessageFormatBody'), require('./MetadataKeyBody'), require('./MetadataValueBody'), require('./SourceAddressBody'), require('./SourceAddressCountryBody'), require('./StartDateBody'), require('./StatusBody'), require('./StatusCodeBody'), require('./StatusesBody'), require('./SummaryByBody'), require('./SummaryFieldBody'), require('./TimezoneBody'));
  } else {
    // Browser globals (root is window)
    if (!root.MessagemediaRestApi) {
      root.MessagemediaRestApi = {};
    }
    root.MessagemediaRestApi.AsyncDeliveryReportsSummaryRequest = factory(root.MessagemediaRestApi.ApiClient, root.MessagemediaRestApi.AccountsBody, root.MessagemediaRestApi.DeliveryOptionsBody, root.MessagemediaRestApi.DestinationAddressBody, root.MessagemediaRestApi.DestinationAddressCountryBody, root.MessagemediaRestApi.EndDateBody, root.MessagemediaRestApi.MessageFormatBody, root.MessagemediaRestApi.MetadataKeyBody, root.MessagemediaRestApi.MetadataValueBody, root.MessagemediaRestApi.SourceAddressBody, root.MessagemediaRestApi.SourceAddressCountryBody, root.MessagemediaRestApi.StartDateBody, root.MessagemediaRestApi.StatusBody, root.MessagemediaRestApi.StatusCodeBody, root.MessagemediaRestApi.StatusesBody, root.MessagemediaRestApi.SummaryByBody, root.MessagemediaRestApi.SummaryFieldBody, root.MessagemediaRestApi.TimezoneBody);
  }
}(this, function(ApiClient, AccountsBody, DeliveryOptionsBody, DestinationAddressBody, DestinationAddressCountryBody, EndDateBody, MessageFormatBody, MetadataKeyBody, MetadataValueBody, SourceAddressBody, SourceAddressCountryBody, StartDateBody, StatusBody, StatusCodeBody, StatusesBody, SummaryByBody, SummaryFieldBody, TimezoneBody) {
  'use strict';




  /**
   * The AsyncDeliveryReportsSummaryRequest model module.
   * @module model/AsyncDeliveryReportsSummaryRequest
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>AsyncDeliveryReportsSummaryRequest</code>.
   * @alias module:model/AsyncDeliveryReportsSummaryRequest
   * @class
   */
  var exports = function() {
    var _this = this;



















  };

  /**
   * Constructs a <code>AsyncDeliveryReportsSummaryRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AsyncDeliveryReportsSummaryRequest} obj Optional instance to populate.
   * @return {module:model/AsyncDeliveryReportsSummaryRequest} The populated <code>AsyncDeliveryReportsSummaryRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('summary_by')) {
        obj['summary_by'] = SummaryByBody.constructFromObject(data['summary_by']);
      }
      if (data.hasOwnProperty('summary_field')) {
        obj['summary_field'] = SummaryFieldBody.constructFromObject(data['summary_field']);
      }
      if (data.hasOwnProperty('group_by')) {
        obj['group_by'] = ApiClient.convertToType(data['group_by'], ['String']);
      }
      if (data.hasOwnProperty('start_date')) {
        obj['start_date'] = StartDateBody.constructFromObject(data['start_date']);
      }
      if (data.hasOwnProperty('end_date')) {
        obj['end_date'] = EndDateBody.constructFromObject(data['end_date']);
      }
      if (data.hasOwnProperty('timezone')) {
        obj['timezone'] = TimezoneBody.constructFromObject(data['timezone']);
      }
      if (data.hasOwnProperty('accounts')) {
        obj['accounts'] = AccountsBody.constructFromObject(data['accounts']);
      }
      if (data.hasOwnProperty('destination_address_country')) {
        obj['destination_address_country'] = DestinationAddressCountryBody.constructFromObject(data['destination_address_country']);
      }
      if (data.hasOwnProperty('destination_address')) {
        obj['destination_address'] = DestinationAddressBody.constructFromObject(data['destination_address']);
      }
      if (data.hasOwnProperty('message_format')) {
        obj['message_format'] = MessageFormatBody.constructFromObject(data['message_format']);
      }
      if (data.hasOwnProperty('metadata_key')) {
        obj['metadata_key'] = MetadataKeyBody.constructFromObject(data['metadata_key']);
      }
      if (data.hasOwnProperty('metadata_value')) {
        obj['metadata_value'] = MetadataValueBody.constructFromObject(data['metadata_value']);
      }
      if (data.hasOwnProperty('source_address_country')) {
        obj['source_address_country'] = SourceAddressCountryBody.constructFromObject(data['source_address_country']);
      }
      if (data.hasOwnProperty('source_address')) {
        obj['source_address'] = SourceAddressBody.constructFromObject(data['source_address']);
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = StatusBody.constructFromObject(data['status']);
      }
      if (data.hasOwnProperty('statuses')) {
        obj['statuses'] = StatusesBody.constructFromObject(data['statuses']);
      }
      if (data.hasOwnProperty('status_code')) {
        obj['status_code'] = StatusCodeBody.constructFromObject(data['status_code']);
      }
      if (data.hasOwnProperty('delivery_options')) {
        obj['delivery_options'] = DeliveryOptionsBody.constructFromObject(data['delivery_options']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/SummaryByBody} summary_by
   */
  exports.prototype['summary_by'] = undefined;
  /**
   * @member {module:model/SummaryFieldBody} summary_field
   */
  exports.prototype['summary_field'] = undefined;
  /**
   * List of fields to group results set by
   * @member {Array.<module:model/AsyncDeliveryReportsSummaryRequest.GroupByEnum>} group_by
   */
  exports.prototype['group_by'] = undefined;
  /**
   * @member {module:model/StartDateBody} start_date
   */
  exports.prototype['start_date'] = undefined;
  /**
   * @member {module:model/EndDateBody} end_date
   */
  exports.prototype['end_date'] = undefined;
  /**
   * @member {module:model/TimezoneBody} timezone
   */
  exports.prototype['timezone'] = undefined;
  /**
   * @member {module:model/AccountsBody} accounts
   */
  exports.prototype['accounts'] = undefined;
  /**
   * @member {module:model/DestinationAddressCountryBody} destination_address_country
   */
  exports.prototype['destination_address_country'] = undefined;
  /**
   * @member {module:model/DestinationAddressBody} destination_address
   */
  exports.prototype['destination_address'] = undefined;
  /**
   * @member {module:model/MessageFormatBody} message_format
   */
  exports.prototype['message_format'] = undefined;
  /**
   * @member {module:model/MetadataKeyBody} metadata_key
   */
  exports.prototype['metadata_key'] = undefined;
  /**
   * @member {module:model/MetadataValueBody} metadata_value
   */
  exports.prototype['metadata_value'] = undefined;
  /**
   * @member {module:model/SourceAddressCountryBody} source_address_country
   */
  exports.prototype['source_address_country'] = undefined;
  /**
   * @member {module:model/SourceAddressBody} source_address
   */
  exports.prototype['source_address'] = undefined;
  /**
   * @member {module:model/StatusBody} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {module:model/StatusesBody} statuses
   */
  exports.prototype['statuses'] = undefined;
  /**
   * @member {module:model/StatusCodeBody} status_code
   */
  exports.prototype['status_code'] = undefined;
  /**
   * @member {module:model/DeliveryOptionsBody} delivery_options
   */
  exports.prototype['delivery_options'] = undefined;


  /**
   * Allowed values for the <code>groupBy</code> property.
   * @enum {String}
   * @readonly
   */
  exports.GroupByEnum = {
    /**
     * value: "DAY"
     * @const
     */
    "DAY": "DAY",
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
    "YEAR": "YEAR",
    /**
     * value: "ACCOUNT"
     * @const
     */
    "ACCOUNT": "ACCOUNT"  };


  return exports;
}));


