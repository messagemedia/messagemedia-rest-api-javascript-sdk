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
    define(['ApiClient', 'model/Replies', 'model/ReplyId'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Replies'), require('../model/ReplyId'));
  } else {
    // Browser globals (root is window)
    if (!root.MessagemediaRestApi) {
      root.MessagemediaRestApi = {};
    }
    root.MessagemediaRestApi.RepliesApi = factory(root.MessagemediaRestApi.ApiClient, root.MessagemediaRestApi.Replies, root.MessagemediaRestApi.ReplyId);
  }
}(this, function(ApiClient, Replies, ReplyId) {
  'use strict';

  /**
   * Replies service.
   * @module api/RepliesApi
   * @version 1.0.0
   */

  /**
   * Constructs a new RepliesApi. 
   * @alias module:api/RepliesApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the checkReplies operation.
     * @callback module:api/RepliesApi~checkRepliesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Replies} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Check replies
     * Return up to 100 reply messages that have been received and haven&#39;t  been confirmed using the confirm replies endpoint
     * @param {module:api/RepliesApi~checkRepliesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Replies}
     */
    this.checkReplies = function(callback) {
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
      var returnType = Replies;

      return this.apiClient.callApi(
        '/replies', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the confirmReplies operation.
     * @callback module:api/RepliesApi~confirmRepliesCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Confirm replies as received
     * Confirm the specified replies as being received so they will no longer be returned in check replies requests
     * @param {module:model/ReplyId} replyId A list of reply IDs to mark as confirmed
     * @param {module:api/RepliesApi~confirmRepliesCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.confirmReplies = function(replyId, callback) {
      var postBody = replyId;

      // verify the required parameter 'replyId' is set
      if (replyId == undefined || replyId == null) {
        throw "Missing the required parameter 'replyId' when calling confirmReplies";
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
        '/replies/confirmed', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
