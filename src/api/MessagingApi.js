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
    define(['ApiClient', 'model/SubmittedMessage', 'model/Messages', 'model/SubmittedMessages', 'model/InlineResponse400', 'model/Status'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/SubmittedMessage'), require('../model/Messages'), require('../model/SubmittedMessages'), require('../model/InlineResponse400'), require('../model/Status'));
  } else {
    // Browser globals (root is window)
    if (!root.MessagemediaRestApi) {
      root.MessagemediaRestApi = {};
    }
    root.MessagemediaRestApi.MessagingApi = factory(root.MessagemediaRestApi.ApiClient, root.MessagemediaRestApi.SubmittedMessage, root.MessagemediaRestApi.Messages, root.MessagemediaRestApi.SubmittedMessages, root.MessagemediaRestApi.InlineResponse400, root.MessagemediaRestApi.Status);
  }
}(this, function(ApiClient, SubmittedMessage, Messages, SubmittedMessages, InlineResponse400, Status) {
  'use strict';

  /**
   * Messaging service.
   * @module api/MessagingApi
   * @version 1.0.0
   */

  /**
   * Constructs a new MessagingApi. 
   * @alias module:api/MessagingApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getMessageStatus operation.
     * @callback module:api/MessagingApi~getMessageStatusCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SubmittedMessage} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the status of a submitted message
     * Get the status and details of a previously submitted message
     * @param {String} messageId Unique ID representing message that has been submitted
     * @param {module:api/MessagingApi~getMessageStatusCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SubmittedMessage}
     */
    this.getMessageStatus = function(messageId, callback) {
      var postBody = null;

      // verify the required parameter 'messageId' is set
      if (messageId == undefined || messageId == null) {
        throw "Missing the required parameter 'messageId' when calling getMessageStatus";
      }


      var pathParams = {
        'messageId': messageId
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
      var returnType = SubmittedMessage;

      return this.apiClient.callApi(
        '/messages/{messageId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the sendMessages operation.
     * @callback module:api/MessagingApi~sendMessagesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SubmittedMessages} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Send one or more messages
     * Submit one or more (up to 100 per request) SMS or text to voice messages to be sent to the destination address. - A callback URL can be included with each message to which MO and DR notifications will be pushed to via a HTTP POST request. - The content of the message can be a Unicode string, up to 5000 characters long - A delivery report can be be requested with the message which will be pushed to a HTTP endpoint if specified, or available via the Check Reports endpoint. - The destination number should be specified in E.164 international format. For information on E.164, please refer to http://en.wikipedia.org/wiki/E.164 - The format specifies which format the message will be sent as, SMS or VOICE - If specified the source number included in the request will be shown as the source number for the message, this feature is not enabled by default, please contact MessageMedia for more information. - If a source number is specified, the type of source number may also be specified. This is recommended when using a source address type that is not an internationally formatted number, available options are INTERNATIONAL, ALPHANUMERIC or SHORTCODE - The message will be scheduled to be delivered in the future if the scheduled parameter is specified. - A message expiry timestamp can be provided, if the message is not delivered by this time, it will be discarded. - Metadata can be included with the message. Up to 10 key value pair strings can be included with each message. This metadata will be available in delivery reports and replies.
     * @param {module:model/Messages} messages A list of messages to be sent
     * @param {module:api/MessagingApi~sendMessagesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SubmittedMessages}
     */
    this.sendMessages = function(messages, callback) {
      var postBody = messages;

      // verify the required parameter 'messages' is set
      if (messages == undefined || messages == null) {
        throw "Missing the required parameter 'messages' when calling sendMessages";
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
      var returnType = SubmittedMessages;

      return this.apiClient.callApi(
        '/messages', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateMessageStatus operation.
     * @callback module:api/MessagingApi~updateMessageStatusCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Cancel a scheduled message
     * Cancel a scheduled message
     * @param {String} messageId Unique ID representing message to be updated
     * @param {module:model/Status} status New status for the message
     * @param {module:api/MessagingApi~updateMessageStatusCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateMessageStatus = function(messageId, status, callback) {
      var postBody = status;

      // verify the required parameter 'messageId' is set
      if (messageId == undefined || messageId == null) {
        throw "Missing the required parameter 'messageId' when calling updateMessageStatus";
      }

      // verify the required parameter 'status' is set
      if (status == undefined || status == null) {
        throw "Missing the required parameter 'status' when calling updateMessageStatus";
      }


      var pathParams = {
        'messageId': messageId
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
        '/messages/{messageId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
