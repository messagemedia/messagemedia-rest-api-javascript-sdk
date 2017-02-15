# MessageMedia REST API JavaScript SDK

MessagemediaRestApi - JavaScript client for messagemedia-rest-api
Australia's Leading Messaging Solutions for Business and Enterprise.

- API version: 1.0.0
- Package version: 1.0.0
- Build date: 2017-02-15T06:01:05.066Z
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
*MessagemediaRestApi.MessagingReportsApi* | [**getDeliveryReportsDetail**](docs/MessagingReportsApi.md#getDeliveryReportsDetail) | **GET** /reporting/delivery_reports/detail | Returns a list of delivery reports
*MessagemediaRestApi.MessagingReportsApi* | [**getDeliveryReportsSummary**](docs/MessagingReportsApi.md#getDeliveryReportsSummary) | **GET** /reporting/delivery_reports/summary | Returns a summarised report of delivery reports
*MessagemediaRestApi.MessagingReportsApi* | [**getReceivedMessagesDetail**](docs/MessagingReportsApi.md#getReceivedMessagesDetail) | **GET** /reporting/received_messages/detail | Returns a list message received
*MessagemediaRestApi.MessagingReportsApi* | [**getReceivedMessagesSummary**](docs/MessagingReportsApi.md#getReceivedMessagesSummary) | **GET** /reporting/received_messages/summary | Returns a summarised report of messages received
*MessagemediaRestApi.MessagingReportsApi* | [**getSentMessagesDetail**](docs/MessagingReportsApi.md#getSentMessagesDetail) | **GET** /reporting/sent_messages/detail | Returns a list of message sent
*MessagemediaRestApi.MessagingReportsApi* | [**getSentMessagesSummary**](docs/MessagingReportsApi.md#getSentMessagesSummary) | **GET** /reporting/sent_messages/summary | Returns a summarised report of messages sent
*MessagemediaRestApi.RepliesApi* | [**checkReplies**](docs/RepliesApi.md#checkReplies) | **GET** /replies | Check replies
*MessagemediaRestApi.RepliesApi* | [**confirmReplies**](docs/RepliesApi.md#confirmReplies) | **POST** /replies/confirmed | Confirm replies as received


## Documentation for Models

 - [MessagemediaRestApi.DeliveryReport](docs/DeliveryReport.md)
 - [MessagemediaRestApi.DeliveryReportId](docs/DeliveryReportId.md)
 - [MessagemediaRestApi.DeliveryReports](docs/DeliveryReports.md)
 - [MessagemediaRestApi.InlineResponse400](docs/InlineResponse400.md)
 - [MessagemediaRestApi.MessageStatusCode](docs/MessageStatusCode.md)
 - [MessagemediaRestApi.Messages](docs/Messages.md)
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
 - [MessagemediaRestApi.Status](docs/Status.md)
 - [MessagemediaRestApi.SubmittedMessage](docs/SubmittedMessage.md)
 - [MessagemediaRestApi.SubmittedMessages](docs/SubmittedMessages.md)
 - [MessagemediaRestApi.SummaryReport](docs/SummaryReport.md)
 - [MessagemediaRestApi.SummaryReportData](docs/SummaryReportData.md)
 - [MessagemediaRestApi.SummaryReportProperties](docs/SummaryReportProperties.md)


## Documentation for Authorization


### basic

- **Type**: HTTP basic authentication

