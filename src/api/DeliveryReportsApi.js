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
    define(['ApiClient', 'model/Reports', 'model/DeliveryReportId'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Reports'), require('../model/DeliveryReportId'));
  } else {
    // Browser globals (root is window)
    if (!root.MessagemediaRestApi) {
      root.MessagemediaRestApi = {};
    }
    root.MessagemediaRestApi.DeliveryReportsApi = factory(root.MessagemediaRestApi.ApiClient, root.MessagemediaRestApi.Reports, root.MessagemediaRestApi.DeliveryReportId);
  }
}(this, function(ApiClient, Reports, DeliveryReportId) {
  'use strict';

  /**
   * DeliveryReports service.
   * @module api/DeliveryReportsApi
   * @version 1.0.0
   */

  /**
   * Constructs a new DeliveryReportsApi. 
   * @alias module:api/DeliveryReportsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the checkReports operation.
     * @callback module:api/DeliveryReportsApi~checkReportsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Reports} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Check delivery reports
     * Return up to 100 delivery reports that have been received and haven&#39;t been confirmed using the confirm reports endpoint
     * @param {module:api/DeliveryReportsApi~checkReportsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Reports}
     */
    this.checkReports = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basic'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Reports;

      return this.apiClient.callApi(
        '/delivery_reports', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the confirmReports operation.
     * @callback module:api/DeliveryReportsApi~confirmReportsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Confirm delivery reports as received
     * Confirm the specified delivery reports as being received so they will no longer be returned in check delivery reports requests
     * @param {module:model/DeliveryReportId} deliveryReportId A list of delivery report IDs to mark as confirmed
     * @param {module:api/DeliveryReportsApi~confirmReportsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.confirmReports = function(deliveryReportId, callback) {
      var postBody = deliveryReportId;

      // verify the required parameter 'deliveryReportId' is set
      if (deliveryReportId == undefined || deliveryReportId == null) {
        throw "Missing the required parameter 'deliveryReportId' when calling confirmReports";
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basic'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/delivery_reports/confirmed', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
