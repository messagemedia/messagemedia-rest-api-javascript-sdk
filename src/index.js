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

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/DeliveryReport', 'model/DeliveryReportId', 'model/DeliveryReports', 'model/InlineResponse400', 'model/MessageStatusCode', 'model/Messages', 'model/NewMessage', 'model/Pagination', 'model/ReceivedMessage', 'model/ReceivedMessages', 'model/Replies', 'model/Reply', 'model/ReplyId', 'model/ReplyVendorAccountId', 'model/Report', 'model/ReportingDetailProperties', 'model/ReportingDetailPropertiesFilters', 'model/ReportingDetailPropertiesSorting', 'model/Reports', 'model/SentMessage', 'model/SentMessages', 'model/Status', 'model/SubmittedMessage', 'model/SubmittedMessages', 'model/SummaryReport', 'model/SummaryReportData', 'model/SummaryReportProperties', 'api/DeliveryReportsApi', 'api/MessagingApi', 'api/MessagingReportsApi', 'api/RepliesApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/DeliveryReport'), require('./model/DeliveryReportId'), require('./model/DeliveryReports'), require('./model/InlineResponse400'), require('./model/MessageStatusCode'), require('./model/Messages'), require('./model/NewMessage'), require('./model/Pagination'), require('./model/ReceivedMessage'), require('./model/ReceivedMessages'), require('./model/Replies'), require('./model/Reply'), require('./model/ReplyId'), require('./model/ReplyVendorAccountId'), require('./model/Report'), require('./model/ReportingDetailProperties'), require('./model/ReportingDetailPropertiesFilters'), require('./model/ReportingDetailPropertiesSorting'), require('./model/Reports'), require('./model/SentMessage'), require('./model/SentMessages'), require('./model/Status'), require('./model/SubmittedMessage'), require('./model/SubmittedMessages'), require('./model/SummaryReport'), require('./model/SummaryReportData'), require('./model/SummaryReportProperties'), require('./api/DeliveryReportsApi'), require('./api/MessagingApi'), require('./api/MessagingReportsApi'), require('./api/RepliesApi'));
  }
}(function(ApiClient, DeliveryReport, DeliveryReportId, DeliveryReports, InlineResponse400, MessageStatusCode, Messages, NewMessage, Pagination, ReceivedMessage, ReceivedMessages, Replies, Reply, ReplyId, ReplyVendorAccountId, Report, ReportingDetailProperties, ReportingDetailPropertiesFilters, ReportingDetailPropertiesSorting, Reports, SentMessage, SentMessages, Status, SubmittedMessage, SubmittedMessages, SummaryReport, SummaryReportData, SummaryReportProperties, DeliveryReportsApi, MessagingApi, MessagingReportsApi, RepliesApi) {
  'use strict';

  /**
   * Messagemedia REST API JavaScript SDK.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var MessagemediaRestApi = require('index'); // See note below*.
   * var xxxSvc = new MessagemediaRestApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new MessagemediaRestApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new MessagemediaRestApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new MessagemediaRestApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 1.0.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The DeliveryReport model constructor.
     * @property {module:model/DeliveryReport}
     */
    DeliveryReport: DeliveryReport,
    /**
     * The DeliveryReportId model constructor.
     * @property {module:model/DeliveryReportId}
     */
    DeliveryReportId: DeliveryReportId,
    /**
     * The DeliveryReports model constructor.
     * @property {module:model/DeliveryReports}
     */
    DeliveryReports: DeliveryReports,
    /**
     * The InlineResponse400 model constructor.
     * @property {module:model/InlineResponse400}
     */
    InlineResponse400: InlineResponse400,
    /**
     * The MessageStatusCode model constructor.
     * @property {module:model/MessageStatusCode}
     */
    MessageStatusCode: MessageStatusCode,
    /**
     * The Messages model constructor.
     * @property {module:model/Messages}
     */
    Messages: Messages,
    /**
     * The NewMessage model constructor.
     * @property {module:model/NewMessage}
     */
    NewMessage: NewMessage,
    /**
     * The Pagination model constructor.
     * @property {module:model/Pagination}
     */
    Pagination: Pagination,
    /**
     * The ReceivedMessage model constructor.
     * @property {module:model/ReceivedMessage}
     */
    ReceivedMessage: ReceivedMessage,
    /**
     * The ReceivedMessages model constructor.
     * @property {module:model/ReceivedMessages}
     */
    ReceivedMessages: ReceivedMessages,
    /**
     * The Replies model constructor.
     * @property {module:model/Replies}
     */
    Replies: Replies,
    /**
     * The Reply model constructor.
     * @property {module:model/Reply}
     */
    Reply: Reply,
    /**
     * The ReplyId model constructor.
     * @property {module:model/ReplyId}
     */
    ReplyId: ReplyId,
    /**
     * The ReplyVendorAccountId model constructor.
     * @property {module:model/ReplyVendorAccountId}
     */
    ReplyVendorAccountId: ReplyVendorAccountId,
    /**
     * The Report model constructor.
     * @property {module:model/Report}
     */
    Report: Report,
    /**
     * The ReportingDetailProperties model constructor.
     * @property {module:model/ReportingDetailProperties}
     */
    ReportingDetailProperties: ReportingDetailProperties,
    /**
     * The ReportingDetailPropertiesFilters model constructor.
     * @property {module:model/ReportingDetailPropertiesFilters}
     */
    ReportingDetailPropertiesFilters: ReportingDetailPropertiesFilters,
    /**
     * The ReportingDetailPropertiesSorting model constructor.
     * @property {module:model/ReportingDetailPropertiesSorting}
     */
    ReportingDetailPropertiesSorting: ReportingDetailPropertiesSorting,
    /**
     * The Reports model constructor.
     * @property {module:model/Reports}
     */
    Reports: Reports,
    /**
     * The SentMessage model constructor.
     * @property {module:model/SentMessage}
     */
    SentMessage: SentMessage,
    /**
     * The SentMessages model constructor.
     * @property {module:model/SentMessages}
     */
    SentMessages: SentMessages,
    /**
     * The Status model constructor.
     * @property {module:model/Status}
     */
    Status: Status,
    /**
     * The SubmittedMessage model constructor.
     * @property {module:model/SubmittedMessage}
     */
    SubmittedMessage: SubmittedMessage,
    /**
     * The SubmittedMessages model constructor.
     * @property {module:model/SubmittedMessages}
     */
    SubmittedMessages: SubmittedMessages,
    /**
     * The SummaryReport model constructor.
     * @property {module:model/SummaryReport}
     */
    SummaryReport: SummaryReport,
    /**
     * The SummaryReportData model constructor.
     * @property {module:model/SummaryReportData}
     */
    SummaryReportData: SummaryReportData,
    /**
     * The SummaryReportProperties model constructor.
     * @property {module:model/SummaryReportProperties}
     */
    SummaryReportProperties: SummaryReportProperties,
    /**
     * The DeliveryReportsApi service constructor.
     * @property {module:api/DeliveryReportsApi}
     */
    DeliveryReportsApi: DeliveryReportsApi,
    /**
     * The MessagingApi service constructor.
     * @property {module:api/MessagingApi}
     */
    MessagingApi: MessagingApi,
    /**
     * The MessagingReportsApi service constructor.
     * @property {module:api/MessagingReportsApi}
     */
    MessagingReportsApi: MessagingReportsApi,
    /**
     * The RepliesApi service constructor.
     * @property {module:api/RepliesApi}
     */
    RepliesApi: RepliesApi
  };

  return exports;
}));
