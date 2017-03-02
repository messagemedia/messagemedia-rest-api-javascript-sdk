# MessageMedia REST API JavaScript SDK

MessagemediaRestApi - JavaScript client for messagemedia-rest-api
Australia's Leading Messaging Solutions for Business and Enterprise.

- API version: 1.0.0
- Package version: 1.0.0
- Build date: 2017-03-02T02:40:45.335Z
For more information, please visit [https://www.messagemedia.com/contact-us](https://www.messagemedia.com/contact-us)

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install messagemedia-rest-api --save
```

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/messagemedia/messagemedia-rest-api-javascript-sdk
then install it via:

```shell
    npm install messagemedia/messagemedia-rest-api-javascript-sdk --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var MessagemediaRestApi = require('messagemedia-rest-api');

var defaultClient = MessagemediaRestApi.ApiClient.instance;

// Configure HTTP basic authorization: basic
var basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME'
basic.password = 'YOUR PASSWORD'

var api = new MessagemediaRestApi.DeliveryReportsApi()

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.checkReports(callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://api.messagemedia.com/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*MessagemediaRestApi.DeliveryReportsApi* | [**checkReports**](docs/DeliveryReportsApi.md#checkReports) | **GET** /delivery_reports | Check delivery reports
*MessagemediaRestApi.DeliveryReportsApi* | [**confirmReports**](docs/DeliveryReportsApi.md#confirmReports) | **POST** /delivery_reports/confirmed | Confirm delivery reports as received
*MessagemediaRestApi.MessagingApi* | [**getMessageStatus**](docs/MessagingApi.md#getMessageStatus) | **GET** /messages/{messageId} | Get the status of a submitted message
*MessagemediaRestApi.MessagingApi* | [**sendMessages**](docs/MessagingApi.md#sendMessages) | **POST** /messages | Send one or more messages
*MessagemediaRestApi.MessagingApi* | [**updateMessageStatus**](docs/MessagingApi.md#updateMessageStatus) | **PUT** /messages/{messageId} | Cancel a scheduled message
*MessagemediaRestApi.MessagingReportsApi* | [**getAsyncReportById**](docs/MessagingReportsApi.md#getAsyncReportById) | **GET** /reporting/async_reports/{report_id} | Gets a single asynchronous report.
*MessagemediaRestApi.MessagingReportsApi* | [**getAsyncReportDataById**](docs/MessagingReportsApi.md#getAsyncReportDataById) | **GET** /reporting/async_reports/{report_id}/data | Gets the data of an asynchronous report.
*MessagemediaRestApi.MessagingReportsApi* | [**getAsyncReports**](docs/MessagingReportsApi.md#getAsyncReports) | **GET** /reporting/async_reports | Lists asynchronous reports.
*MessagemediaRestApi.MessagingReportsApi* | [**getDeliveryReportsDetail**](docs/MessagingReportsApi.md#getDeliveryReportsDetail) | **GET** /reporting/delivery_reports/detail | Returns a list of delivery reports
*MessagemediaRestApi.MessagingReportsApi* | [**getDeliveryReportsSummary**](docs/MessagingReportsApi.md#getDeliveryReportsSummary) | **GET** /reporting/delivery_reports/summary | Returns a summarised report of delivery reports
*MessagemediaRestApi.MessagingReportsApi* | [**getMetadataKeys**](docs/MessagingReportsApi.md#getMetadataKeys) | **GET** /reporting/{messageType}/metadata/keys | Returns a list of metadata keys
*MessagemediaRestApi.MessagingReportsApi* | [**getReceivedMessagesDetail**](docs/MessagingReportsApi.md#getReceivedMessagesDetail) | **GET** /reporting/received_messages/detail | Returns a list message received
*MessagemediaRestApi.MessagingReportsApi* | [**getReceivedMessagesSummary**](docs/MessagingReportsApi.md#getReceivedMessagesSummary) | **GET** /reporting/received_messages/summary | Returns a summarised report of messages received
*MessagemediaRestApi.MessagingReportsApi* | [**getSentMessagesDetail**](docs/MessagingReportsApi.md#getSentMessagesDetail) | **GET** /reporting/sent_messages/detail | Returns a list of message sent
*MessagemediaRestApi.MessagingReportsApi* | [**getSentMessagesSummary**](docs/MessagingReportsApi.md#getSentMessagesSummary) | **GET** /reporting/sent_messages/summary | Returns a summarised report of messages sent
*MessagemediaRestApi.MessagingReportsApi* | [**submitAsyncDeliveryReportsDetail**](docs/MessagingReportsApi.md#submitAsyncDeliveryReportsDetail) | **POST** /reporting/delivery_reports/detail/async | Submits a request to generate an async detail report
*MessagemediaRestApi.MessagingReportsApi* | [**submitDeliveryReportsSummary**](docs/MessagingReportsApi.md#submitDeliveryReportsSummary) | **POST** /reporting/delivery_reports/summary/async | Submits a summarised report of delivery reports
*MessagemediaRestApi.MessagingReportsApi* | [**submitReceivedMessagesDetail**](docs/MessagingReportsApi.md#submitReceivedMessagesDetail) | **POST** /reporting/received_messages/detail/async | Submits a request to generate an async detail report
*MessagemediaRestApi.MessagingReportsApi* | [**submitReceivedMessagesSummary**](docs/MessagingReportsApi.md#submitReceivedMessagesSummary) | **POST** /reporting/received_messages/summary/async | Submits a summarised report of received messages
*MessagemediaRestApi.MessagingReportsApi* | [**submitSentMessagesDetail**](docs/MessagingReportsApi.md#submitSentMessagesDetail) | **POST** /reporting/sent_messages/detail/async | Submits a request to generate an async detail report
*MessagemediaRestApi.MessagingReportsApi* | [**submitSentMessagesSummary**](docs/MessagingReportsApi.md#submitSentMessagesSummary) | **POST** /reporting/sent_messages/summary/async | Submits a summarised report of sent messages
*MessagemediaRestApi.RepliesApi* | [**checkReplies**](docs/RepliesApi.md#checkReplies) | **GET** /replies | Check replies
*MessagemediaRestApi.RepliesApi* | [**confirmReplies**](docs/RepliesApi.md#confirmReplies) | **POST** /replies/confirmed | Confirm replies as received


## Documentation for Models

 - [MessagemediaRestApi.AccountsBody](docs/AccountsBody.md)
 - [MessagemediaRestApi.ActionBody](docs/ActionBody.md)
 - [MessagemediaRestApi.AsyncDeliveryReportDetailRequest](docs/AsyncDeliveryReportDetailRequest.md)
 - [MessagemediaRestApi.AsyncDeliveryReportsSummaryRequest](docs/AsyncDeliveryReportsSummaryRequest.md)
 - [MessagemediaRestApi.AsyncDeliverySentMessagesRequest](docs/AsyncDeliverySentMessagesRequest.md)
 - [MessagemediaRestApi.AsyncReceivedMessagesDetailRequest](docs/AsyncReceivedMessagesDetailRequest.md)
 - [MessagemediaRestApi.AsyncReceivedMessagesSummaryRequest](docs/AsyncReceivedMessagesSummaryRequest.md)
 - [MessagemediaRestApi.AsyncReport](docs/AsyncReport.md)
 - [MessagemediaRestApi.AsyncReportResponse](docs/AsyncReportResponse.md)
 - [MessagemediaRestApi.AsyncSentMessagesDetailRequest](docs/AsyncSentMessagesDetailRequest.md)
 - [MessagemediaRestApi.DeliveryOptionsBody](docs/DeliveryOptionsBody.md)
 - [MessagemediaRestApi.DeliveryOptionsBodyInner](docs/DeliveryOptionsBodyInner.md)
 - [MessagemediaRestApi.DeliveryReport](docs/DeliveryReport.md)
 - [MessagemediaRestApi.DeliveryReportBody](docs/DeliveryReportBody.md)
 - [MessagemediaRestApi.DeliveryReportId](docs/DeliveryReportId.md)
 - [MessagemediaRestApi.DeliveryReports](docs/DeliveryReports.md)
 - [MessagemediaRestApi.DestinationAddressBody](docs/DestinationAddressBody.md)
 - [MessagemediaRestApi.DestinationAddressCountryBody](docs/DestinationAddressCountryBody.md)
 - [MessagemediaRestApi.EndDateBody](docs/EndDateBody.md)
 - [MessagemediaRestApi.InlineResponse200](docs/InlineResponse200.md)
 - [MessagemediaRestApi.InlineResponse400](docs/InlineResponse400.md)
 - [MessagemediaRestApi.MessageFormatBody](docs/MessageFormatBody.md)
 - [MessagemediaRestApi.MessageStatusCode](docs/MessageStatusCode.md)
 - [MessagemediaRestApi.Messages](docs/Messages.md)
 - [MessagemediaRestApi.MetadataKeyBody](docs/MetadataKeyBody.md)
 - [MessagemediaRestApi.MetadataKeysResponse](docs/MetadataKeysResponse.md)
 - [MessagemediaRestApi.MetadataKeysResponseProperties](docs/MetadataKeysResponseProperties.md)
 - [MessagemediaRestApi.MetadataValueBody](docs/MetadataValueBody.md)
 - [MessagemediaRestApi.NewMessage](docs/NewMessage.md)
 - [MessagemediaRestApi.Pagination](docs/Pagination.md)
 - [MessagemediaRestApi.ReceivedMessage](docs/ReceivedMessage.md)
 - [MessagemediaRestApi.ReceivedMessages](docs/ReceivedMessages.md)
 - [MessagemediaRestApi.Replies](docs/Replies.md)
 - [MessagemediaRestApi.Reply](docs/Reply.md)
 - [MessagemediaRestApi.ReplyId](docs/ReplyId.md)
 - [MessagemediaRestApi.ReplyVendorAccountId](docs/ReplyVendorAccountId.md)
 - [MessagemediaRestApi.Report](docs/Report.md)
 - [MessagemediaRestApi.ReportingDetailProperties](docs/ReportingDetailProperties.md)
 - [MessagemediaRestApi.ReportingDetailPropertiesFilters](docs/ReportingDetailPropertiesFilters.md)
 - [MessagemediaRestApi.ReportingDetailPropertiesSorting](docs/ReportingDetailPropertiesSorting.md)
 - [MessagemediaRestApi.Reports](docs/Reports.md)
 - [MessagemediaRestApi.SentMessage](docs/SentMessage.md)
 - [MessagemediaRestApi.SentMessages](docs/SentMessages.md)
 - [MessagemediaRestApi.SortDirectionBody](docs/SortDirectionBody.md)
 - [MessagemediaRestApi.SourceAddressBody](docs/SourceAddressBody.md)
 - [MessagemediaRestApi.SourceAddressCountryBody](docs/SourceAddressCountryBody.md)
 - [MessagemediaRestApi.StartDateBody](docs/StartDateBody.md)
 - [MessagemediaRestApi.Status](docs/Status.md)
 - [MessagemediaRestApi.StatusBody](docs/StatusBody.md)
 - [MessagemediaRestApi.StatusCodeBody](docs/StatusCodeBody.md)
 - [MessagemediaRestApi.SubmittedMessage](docs/SubmittedMessage.md)
 - [MessagemediaRestApi.SubmittedMessages](docs/SubmittedMessages.md)
 - [MessagemediaRestApi.SummaryByBody](docs/SummaryByBody.md)
 - [MessagemediaRestApi.SummaryFieldBody](docs/SummaryFieldBody.md)
 - [MessagemediaRestApi.SummaryReport](docs/SummaryReport.md)
 - [MessagemediaRestApi.SummaryReportData](docs/SummaryReportData.md)
 - [MessagemediaRestApi.SummaryReportProperties](docs/SummaryReportProperties.md)
 - [MessagemediaRestApi.TimezoneBody](docs/TimezoneBody.md)


## Documentation for Authorization


### basic

- **Type**: HTTP basic authentication

