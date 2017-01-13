# MessagemediaRestApi.MessagingApi

All URIs are relative to *https://api.messagemedia.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getMessageStatus**](MessagingApi.md#getMessageStatus) | **GET** /messages/{messageId} | Get the status of a submitted message
[**sendMessages**](MessagingApi.md#sendMessages) | **POST** /messages | Send one or more messages
[**updateMessageStatus**](MessagingApi.md#updateMessageStatus) | **PUT** /messages/{messageId} | Cancel a scheduled message


<a name="getMessageStatus"></a>
# **getMessageStatus**
> SubmittedMessage getMessageStatus(messageId)

Get the status of a submitted message

Get the status and details of a previously submitted message

### Example
```javascript
var MessagemediaRestApi = require('messagemedia-rest-api');
var defaultClient = MessagemediaRestApi.ApiClient.default;

// Configure HTTP basic authorization: basic
var basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

var apiInstance = new MessagemediaRestApi.MessagingApi();

var messageId = "messageId_example"; // String | Unique ID representing message that has been submitted


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getMessageStatus(messageId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **messageId** | **String**| Unique ID representing message that has been submitted | 

### Return type

[**SubmittedMessage**](SubmittedMessage.md)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="sendMessages"></a>
# **sendMessages**
> SubmittedMessages sendMessages(messages)

Send one or more messages

Submit one or more (up to 100 per request) SMS or text to voice messages to be sent to the destination address. - A callback URL can be included with each message to which MO and DR notifications will be pushed to via a HTTP POST request. - The content of the message can be a Unicode string, up to 5000 characters long - A delivery report can be be requested with the message which will be pushed to a HTTP endpoint if specified, or available via the Check Reports endpoint. - The destination number should be specified in E.164 international format. For information on E.164, please refer to http://en.wikipedia.org/wiki/E.164 - The format specifies which format the message will be sent as, SMS (text message) or TTS (text to speech). With TTS format, we will call the destination number and read out the message using a computer generated voice. - If specified the source number included in the request will be shown as the source number for the message, this feature is not enabled by default, please contact MessageMedia for more information. - If a source number is specified, the type of source number may also be specified. This is recommended when using a source address type that is not an internationally formatted number, available options are INTERNATIONAL, ALPHANUMERIC or SHORTCODE - The message will be scheduled to be delivered in the future if the scheduled parameter is specified. - A message expiry timestamp can be provided, if the message is not delivered by this time, it will be discarded. - Metadata can be included with the message. Up to 10 key value pair strings can be included with each message. This metadata will be available in delivery reports and replies.

### Example
```javascript
var MessagemediaRestApi = require('messagemedia-rest-api');
var defaultClient = MessagemediaRestApi.ApiClient.default;

// Configure HTTP basic authorization: basic
var basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

var apiInstance = new MessagemediaRestApi.MessagingApi();

var messages = new MessagemediaRestApi.Messages(); // Messages | A list of messages to be sent


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.sendMessages(messages, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **messages** | [**Messages**](Messages.md)| A list of messages to be sent | 

### Return type

[**SubmittedMessages**](SubmittedMessages.md)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateMessageStatus"></a>
# **updateMessageStatus**
> updateMessageStatus(messageId, status)

Cancel a scheduled message

Cancel a scheduled message

### Example
```javascript
var MessagemediaRestApi = require('messagemedia-rest-api');
var defaultClient = MessagemediaRestApi.ApiClient.default;

// Configure HTTP basic authorization: basic
var basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

var apiInstance = new MessagemediaRestApi.MessagingApi();

var messageId = "messageId_example"; // String | Unique ID representing message to be updated

var status = new MessagemediaRestApi.Status(); // Status | New status for the message


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateMessageStatus(messageId, status, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **messageId** | **String**| Unique ID representing message to be updated | 
 **status** | [**Status**](Status.md)| New status for the message | 

### Return type

null (empty response body)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

