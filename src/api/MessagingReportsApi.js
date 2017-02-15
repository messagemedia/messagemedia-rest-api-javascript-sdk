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
    define(['ApiClient', 'model/DeliveryReports', 'model/SummaryReport', 'model/ReceivedMessages', 'model/SentMessages'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/DeliveryReports'), require('../model/SummaryReport'), require('../model/ReceivedMessages'), require('../model/SentMessages'));
  } else {
    // Browser globals (root is window)
    if (!root.MessagemediaRestApi) {
      root.MessagemediaRestApi = {};
    }
    root.MessagemediaRestApi.MessagingReportsApi = factory(root.MessagemediaRestApi.ApiClient, root.MessagemediaRestApi.DeliveryReports, root.MessagemediaRestApi.SummaryReport, root.MessagemediaRestApi.ReceivedMessages, root.MessagemediaRestApi.SentMessages);
  }
}(this, function(ApiClient, DeliveryReports, SummaryReport, ReceivedMessages, SentMessages) {
  'use strict';

  /**
   * MessagingReports service.
   * @module api/MessagingReportsApi
   * @version 1.0.0
   */

  /**
   * Constructs a new MessagingReportsApi. 
   * @alias module:api/MessagingReportsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getDeliveryReportsDetail operation.
     * @callback module:api/MessagingReportsApi~getDeliveryReportsDetailCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DeliveryReports} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a list of delivery reports
     * Returns a detailed list of all delivery reports received during the specified time
     * @param {Date} endDate End date time for report window. By default, the timezone for this parameter will be taken from the account settings for the account associated with the credentials used to make the request, or the account included in the Account parameter. This can be overridden using the timezone parameter per request.
     * @param {Date} startDate Start date time for report window. By default, the timezone for this parameter will be taken from the account settings for the account associated with the credentials used to make the request, or the account included in the Account parameter. This can be overridden using the timezone parameter per request.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accounts Filter results by specific accounts. By default results will be returned for the account associated with the authentication credentials and all sub accounts.
     * @param {String} opts.destinationAddressCountry Filter results by destination address country.
     * @param {String} opts.destinationAddress Filter results by destination address.
     * @param {module:model/String} opts.messageFormat Filter results by message format.
     * @param {String} opts.metadataKey Filter results for messages that include a metadata key.
     * @param {String} opts.metadataValue Filter results for messages that include a metadata key containing this value. If this parameter is provided, the metadata_key parameter must also be provided.
     * @param {String} opts.statusCode Filter results by message status code.
     * @param {module:model/String} opts.status Filter results by message status.
     * @param {Integer} opts.page Page number for paging through paginated result sets.
     * @param {Integer} opts.pageSize Number of results to return in a page for paginated result sets.
     * @param {module:model/String} opts.sortBy Field to sort results set by
     * @param {module:model/String} opts.sortDirection Order to sort results by.
     * @param {String} opts.sourceAddressCountry Filter results by source address country.
     * @param {String} opts.sourceAddress Filter results by source address.
     * @param {String} opts.timezone The timezone to use for the context of the request. If provided this will be used as the timezone for the start date and end date parameters, and all datetime fields returns in the response. The timezone should be provided as a IANA (Internet Assigned Numbers Authority) time zone database zone name, i.e. &#39;Australia/Melbourne&#39;.
     * @param {module:api/MessagingReportsApi~getDeliveryReportsDetailCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeliveryReports}
     */
    this.getDeliveryReportsDetail = function(endDate, startDate, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'endDate' is set
      if (endDate == undefined || endDate == null) {
        throw "Missing the required parameter 'endDate' when calling getDeliveryReportsDetail";
      }

      // verify the required parameter 'startDate' is set
      if (startDate == undefined || startDate == null) {
        throw "Missing the required parameter 'startDate' when calling getDeliveryReportsDetail";
      }


      var pathParams = {
      };
      var queryParams = {
        'accounts': opts['accounts'],
        'destination_address_country': opts['destinationAddressCountry'],
        'destination_address': opts['destinationAddress'],
        'end_date': endDate,
        'message_format': opts['messageFormat'],
        'metadata_key': opts['metadataKey'],
        'metadata_value': opts['metadataValue'],
        'status_code': opts['statusCode'],
        'status': opts['status'],
        'page': opts['page'],
        'page_size': opts['pageSize'],
        'sort_by': opts['sortBy'],
        'sort_direction': opts['sortDirection'],
        'source_address_country': opts['sourceAddressCountry'],
        'source_address': opts['sourceAddress'],
        'start_date': startDate,
        'timezone': opts['timezone']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basic'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = DeliveryReports;

      return this.apiClient.callApi(
        '/reporting/delivery_reports/detail', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDeliveryReportsSummary operation.
     * @callback module:api/MessagingReportsApi~getDeliveryReportsSummaryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SummaryReport} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a summarised report of delivery reports
     * Returns a summarised report of all delivery reports received during the specified time, grouped by by the specified grouping parameter
     * @param {Date} endDate End date time for report window. By default, the timezone for this parameter will be taken from the account settings for the account associated with the credentials used to make the request, or the account included in the Account parameter. This can be overridden using the timezone parameter per request.
     * @param {module:model/String} groupBy Field to group results set by
     * @param {Date} startDate Start date time for report window. By default, the timezone for this parameter will be taken from the account settings for the account associated with the credentials used to make the request, or the account included in the Account parameter. This can be overridden using the timezone parameter per request.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accounts Filter results by specific accounts. By default results will be returned for the account associated with the authentication credentials and all sub accounts.
     * @param {String} opts.destinationAddressCountry Filter results by destination address country.
     * @param {String} opts.destinationAddress Filter results by destination address.
     * @param {module:model/String} opts.messageFormat Filter results by message format.
     * @param {String} opts.metadataKey Filter results for messages that include a metadata key.
     * @param {String} opts.metadataValue Filter results for messages that include a metadata key containing this value. If this parameter is provided, the metadata_key parameter must also be provided.
     * @param {String} opts.statusCode Filter results by message status code.
     * @param {module:model/String} opts.status Filter results by message status.
     * @param {module:model/String} opts.summaryBy Function to apply when summarising results
     * @param {module:model/String} opts.summaryField Field to summarise results by
     * @param {String} opts.sourceAddressCountry Filter results by source address country.
     * @param {String} opts.sourceAddress Filter results by source address.
     * @param {String} opts.timezone The timezone to use for the context of the request. If provided this will be used as the timezone for the start date and end date parameters, and all datetime fields returns in the response. The timezone should be provided as a IANA (Internet Assigned Numbers Authority) time zone database zone name, i.e. &#39;Australia/Melbourne&#39;.
     * @param {module:api/MessagingReportsApi~getDeliveryReportsSummaryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SummaryReport}
     */
    this.getDeliveryReportsSummary = function(endDate, groupBy, startDate, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'endDate' is set
      if (endDate == undefined || endDate == null) {
        throw "Missing the required parameter 'endDate' when calling getDeliveryReportsSummary";
      }

      // verify the required parameter 'groupBy' is set
      if (groupBy == undefined || groupBy == null) {
        throw "Missing the required parameter 'groupBy' when calling getDeliveryReportsSummary";
      }

      // verify the required parameter 'startDate' is set
      if (startDate == undefined || startDate == null) {
        throw "Missing the required parameter 'startDate' when calling getDeliveryReportsSummary";
      }


      var pathParams = {
      };
      var queryParams = {
        'accounts': opts['accounts'],
        'destination_address_country': opts['destinationAddressCountry'],
        'destination_address': opts['destinationAddress'],
        'end_date': endDate,
        'message_format': opts['messageFormat'],
        'metadata_key': opts['metadataKey'],
        'metadata_value': opts['metadataValue'],
        'status_code': opts['statusCode'],
        'status': opts['status'],
        'summary_by': opts['summaryBy'],
        'summary_field': opts['summaryField'],
        'group_by': groupBy,
        'source_address_country': opts['sourceAddressCountry'],
        'source_address': opts['sourceAddress'],
        'start_date': startDate,
        'timezone': opts['timezone']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basic'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = SummaryReport;

      return this.apiClient.callApi(
        '/reporting/delivery_reports/summary', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getReceivedMessagesDetail operation.
     * @callback module:api/MessagingReportsApi~getReceivedMessagesDetailCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ReceivedMessages} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a list message received
     * Returns a detailed list of all message received during the specified time
     * @param {Date} endDate End date time for report window. By default, the timezone for this parameter will be taken from the account settings for the account associated with the credentials used to make the request, or the account included in the Account parameter. This can be overridden using the timezone parameter per request.
     * @param {Date} startDate Start date time for report window. By default, the timezone for this parameter will be taken from the account settings for the account associated with the credentials used to make the request, or the account included in the Account parameter. This can be overridden using the timezone parameter per request.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accounts Filter results by specific accounts. By default results will be returned for the account associated with the authentication credentials and all sub accounts.
     * @param {module:model/String} opts.action Filter results by the action that was invoked for this message.
     * @param {String} opts.destinationAddressCountry Filter results by destination address country.
     * @param {String} opts.destinationAddress Filter results by destination address.
     * @param {module:model/String} opts.messageFormat Filter results by message format.
     * @param {String} opts.metadataKey Filter results for messages that include a metadata key.
     * @param {String} opts.metadataValue Filter results for messages that include a metadata key containing this value. If this parameter is provided, the metadata_key parameter must also be provided.
     * @param {Integer} opts.page Page number for paging through paginated result sets.
     * @param {Integer} opts.pageSize Number of results to return in a page for paginated result sets.
     * @param {module:model/String} opts.sortBy Field to sort results set by
     * @param {module:model/String} opts.sortDirection Order to sort results by.
     * @param {String} opts.sourceAddressCountry Filter results by source address country.
     * @param {String} opts.sourceAddress Filter results by source address.
     * @param {String} opts.timezone The timezone to use for the context of the request. If provided this will be used as the timezone for the start date and end date parameters, and all datetime fields returns in the response. The timezone should be provided as a IANA (Internet Assigned Numbers Authority) time zone database zone name, i.e. &#39;Australia/Melbourne&#39;.
     * @param {module:api/MessagingReportsApi~getReceivedMessagesDetailCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ReceivedMessages}
     */
    this.getReceivedMessagesDetail = function(endDate, startDate, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'endDate' is set
      if (endDate == undefined || endDate == null) {
        throw "Missing the required parameter 'endDate' when calling getReceivedMessagesDetail";
      }

      // verify the required parameter 'startDate' is set
      if (startDate == undefined || startDate == null) {
        throw "Missing the required parameter 'startDate' when calling getReceivedMessagesDetail";
      }


      var pathParams = {
      };
      var queryParams = {
        'accounts': opts['accounts'],
        'action': opts['action'],
        'destination_address_country': opts['destinationAddressCountry'],
        'destination_address': opts['destinationAddress'],
        'end_date': endDate,
        'message_format': opts['messageFormat'],
        'metadata_key': opts['metadataKey'],
        'metadata_value': opts['metadataValue'],
        'page': opts['page'],
        'page_size': opts['pageSize'],
        'sort_by': opts['sortBy'],
        'sort_direction': opts['sortDirection'],
        'source_address_country': opts['sourceAddressCountry'],
        'source_address': opts['sourceAddress'],
        'start_date': startDate,
        'timezone': opts['timezone']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basic'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ReceivedMessages;

      return this.apiClient.callApi(
        '/reporting/received_messages/detail', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getReceivedMessagesSummary operation.
     * @callback module:api/MessagingReportsApi~getReceivedMessagesSummaryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SummaryReport} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a summarised report of messages received
     * Returns a summarised report of all messages received during the specified time, grouped by by the specified grouping parameter
     * @param {Date} endDate End date time for report window. By default, the timezone for this parameter will be taken from the account settings for the account associated with the credentials used to make the request, or the account included in the Account parameter. This can be overridden using the timezone parameter per request.
     * @param {module:model/String} groupBy Field to group results set by
     * @param {Date} startDate Start date time for report window. By default, the timezone for this parameter will be taken from the account settings for the account associated with the credentials used to make the request, or the account included in the Account parameter. This can be overridden using the timezone parameter per request.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accounts Filter results by specific accounts. By default results will be returned for the account associated with the authentication credentials and all sub accounts.
     * @param {String} opts.destinationAddressCountry Filter results by destination address country.
     * @param {String} opts.destinationAddress Filter results by destination address.
     * @param {module:model/String} opts.messageFormat Filter results by message format.
     * @param {String} opts.metadataKey Filter results for messages that include a metadata key.
     * @param {String} opts.metadataValue Filter results for messages that include a metadata key containing this value. If this parameter is provided, the metadata_key parameter must also be provided.
     * @param {module:model/String} opts.summaryBy Function to apply when summarising results
     * @param {module:model/String} opts.summaryField Field to summarise results by
     * @param {String} opts.sourceAddressCountry Filter results by source address country.
     * @param {String} opts.sourceAddress Filter results by source address.
     * @param {String} opts.timezone The timezone to use for the context of the request. If provided this will be used as the timezone for the start date and end date parameters, and all datetime fields returns in the response. The timezone should be provided as a IANA (Internet Assigned Numbers Authority) time zone database zone name, i.e. &#39;Australia/Melbourne&#39;.
     * @param {module:api/MessagingReportsApi~getReceivedMessagesSummaryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SummaryReport}
     */
    this.getReceivedMessagesSummary = function(endDate, groupBy, startDate, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'endDate' is set
      if (endDate == undefined || endDate == null) {
        throw "Missing the required parameter 'endDate' when calling getReceivedMessagesSummary";
      }

      // verify the required parameter 'groupBy' is set
      if (groupBy == undefined || groupBy == null) {
        throw "Missing the required parameter 'groupBy' when calling getReceivedMessagesSummary";
      }

      // verify the required parameter 'startDate' is set
      if (startDate == undefined || startDate == null) {
        throw "Missing the required parameter 'startDate' when calling getReceivedMessagesSummary";
      }


      var pathParams = {
      };
      var queryParams = {
        'accounts': opts['accounts'],
        'destination_address_country': opts['destinationAddressCountry'],
        'destination_address': opts['destinationAddress'],
        'end_date': endDate,
        'message_format': opts['messageFormat'],
        'metadata_key': opts['metadataKey'],
        'metadata_value': opts['metadataValue'],
        'summary_by': opts['summaryBy'],
        'summary_field': opts['summaryField'],
        'group_by': groupBy,
        'source_address_country': opts['sourceAddressCountry'],
        'source_address': opts['sourceAddress'],
        'start_date': startDate,
        'timezone': opts['timezone']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basic'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = SummaryReport;

      return this.apiClient.callApi(
        '/reporting/received_messages/summary', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getSentMessagesDetail operation.
     * @callback module:api/MessagingReportsApi~getSentMessagesDetailCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SentMessages} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a list of message sent
     * Returns a detailed list of all message sent during the specified time
     * @param {Date} endDate End date time for report window. By default, the timezone for this parameter will be taken from the account settings for the account associated with the credentials used to make the request, or the account included in the Account parameter. This can be overridden using the timezone parameter per request.
     * @param {Date} startDate Start date time for report window. By default, the timezone for this parameter will be taken from the account settings for the account associated with the credentials used to make the request, or the account included in the Account parameter. This can be overridden using the timezone parameter per request.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accounts Filter results by specific accounts. By default results will be returned for the account associated with the authentication credentials and all sub accounts.
     * @param {Boolean} opts.deliveryReport Filter results by delivery report.
     * @param {String} opts.destinationAddressCountry Filter results by destination address country.
     * @param {String} opts.destinationAddress Filter results by destination address.
     * @param {module:model/String} opts.messageFormat Filter results by message format.
     * @param {String} opts.metadataKey Filter results for messages that include a metadata key.
     * @param {String} opts.metadataValue Filter results for messages that include a metadata key containing this value. If this parameter is provided, the metadata_key parameter must also be provided.
     * @param {String} opts.statusCode Filter results by message status code.
     * @param {module:model/String} opts.status Filter results by message status.
     * @param {Integer} opts.page Page number for paging through paginated result sets.
     * @param {Integer} opts.pageSize Number of results to return in a page for paginated result sets.
     * @param {module:model/String} opts.sortBy Field to sort results set by
     * @param {module:model/String} opts.sortDirection Order to sort results by.
     * @param {String} opts.sourceAddressCountry Filter results by source address country.
     * @param {String} opts.sourceAddress Filter results by source address.
     * @param {String} opts.timezone The timezone to use for the context of the request. If provided this will be used as the timezone for the start date and end date parameters, and all datetime fields returns in the response. The timezone should be provided as a IANA (Internet Assigned Numbers Authority) time zone database zone name, i.e. &#39;Australia/Melbourne&#39;.
     * @param {module:api/MessagingReportsApi~getSentMessagesDetailCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SentMessages}
     */
    this.getSentMessagesDetail = function(endDate, startDate, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'endDate' is set
      if (endDate == undefined || endDate == null) {
        throw "Missing the required parameter 'endDate' when calling getSentMessagesDetail";
      }

      // verify the required parameter 'startDate' is set
      if (startDate == undefined || startDate == null) {
        throw "Missing the required parameter 'startDate' when calling getSentMessagesDetail";
      }


      var pathParams = {
      };
      var queryParams = {
        'accounts': opts['accounts'],
        'delivery_report': opts['deliveryReport'],
        'destination_address_country': opts['destinationAddressCountry'],
        'destination_address': opts['destinationAddress'],
        'end_date': endDate,
        'message_format': opts['messageFormat'],
        'metadata_key': opts['metadataKey'],
        'metadata_value': opts['metadataValue'],
        'status_code': opts['statusCode'],
        'status': opts['status'],
        'page': opts['page'],
        'page_size': opts['pageSize'],
        'sort_by': opts['sortBy'],
        'sort_direction': opts['sortDirection'],
        'source_address_country': opts['sourceAddressCountry'],
        'source_address': opts['sourceAddress'],
        'start_date': startDate,
        'timezone': opts['timezone']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basic'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = SentMessages;

      return this.apiClient.callApi(
        '/reporting/sent_messages/detail', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getSentMessagesSummary operation.
     * @callback module:api/MessagingReportsApi~getSentMessagesSummaryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SummaryReport} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a summarised report of messages sent
     * Returns a summarised report of all messages sent during the specified time, grouped by by the specified grouping parameter
     * @param {Date} endDate End date time for report window. By default, the timezone for this parameter will be taken from the account settings for the account associated with the credentials used to make the request, or the account included in the Account parameter. This can be overridden using the timezone parameter per request.
     * @param {module:model/String} groupBy Field to group results set by
     * @param {Date} startDate Start date time for report window. By default, the timezone for this parameter will be taken from the account settings for the account associated with the credentials used to make the request, or the account included in the Account parameter. This can be overridden using the timezone parameter per request.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accounts Filter results by specific accounts. By default results will be returned for the account associated with the authentication credentials and all sub accounts.
     * @param {Boolean} opts.deliveryReport Filter results by delivery report.
     * @param {String} opts.destinationAddressCountry Filter results by destination address country.
     * @param {String} opts.destinationAddress Filter results by destination address.
     * @param {module:model/String} opts.summaryBy Function to apply when summarising results
     * @param {module:model/String} opts.summaryField Field to summarise results by
     * @param {module:model/String} opts.messageFormat Filter results by message format.
     * @param {String} opts.metadataKey Filter results for messages that include a metadata key.
     * @param {String} opts.metadataValue Filter results for messages that include a metadata key containing this value. If this parameter is provided, the metadata_key parameter must also be provided.
     * @param {String} opts.statusCode Filter results by message status code.
     * @param {String} opts.sourceAddressCountry Filter results by source address country.
     * @param {String} opts.sourceAddress Filter results by source address.
     * @param {String} opts.timezone The timezone to use for the context of the request. If provided this will be used as the timezone for the start date and end date parameters, and all datetime fields returns in the response. The timezone should be provided as a IANA (Internet Assigned Numbers Authority) time zone database zone name, i.e. &#39;Australia/Melbourne&#39;.
     * @param {module:api/MessagingReportsApi~getSentMessagesSummaryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SummaryReport}
     */
    this.getSentMessagesSummary = function(endDate, groupBy, startDate, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'endDate' is set
      if (endDate == undefined || endDate == null) {
        throw "Missing the required parameter 'endDate' when calling getSentMessagesSummary";
      }

      // verify the required parameter 'groupBy' is set
      if (groupBy == undefined || groupBy == null) {
        throw "Missing the required parameter 'groupBy' when calling getSentMessagesSummary";
      }

      // verify the required parameter 'startDate' is set
      if (startDate == undefined || startDate == null) {
        throw "Missing the required parameter 'startDate' when calling getSentMessagesSummary";
      }


      var pathParams = {
      };
      var queryParams = {
        'accounts': opts['accounts'],
        'delivery_report': opts['deliveryReport'],
        'destination_address_country': opts['destinationAddressCountry'],
        'destination_address': opts['destinationAddress'],
        'end_date': endDate,
        'summary_by': opts['summaryBy'],
        'summary_field': opts['summaryField'],
        'group_by': groupBy,
        'message_format': opts['messageFormat'],
        'metadata_key': opts['metadataKey'],
        'metadata_value': opts['metadataValue'],
        'status_code': opts['statusCode'],
        'source_address_country': opts['sourceAddressCountry'],
        'source_address': opts['sourceAddress'],
        'start_date': startDate,
        'timezone': opts['timezone']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basic'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = SummaryReport;

      return this.apiClient.callApi(
        '/reporting/sent_messages/summary', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
