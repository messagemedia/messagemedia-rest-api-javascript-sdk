# MessagemediaRestApi.RepliesApi

All URIs are relative to *https://api.messagemedia.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**checkReplies**](RepliesApi.md#checkReplies) | **GET** /replies | Check replies
[**confirmReplies**](RepliesApi.md#confirmReplies) | **POST** /replies/confirmed | Confirm replies as received


<a name="checkReplies"></a>
# **checkReplies**
> Replies checkReplies()

Check replies

Return up to 100 reply messages that have been received and haven&#39;t been confirmed using the confirm replies endpoint

### Example
```javascript
var MessagemediaRestApi = require('messagemedia-rest-api');
var defaultClient = MessagemediaRestApi.ApiClient.default;

// Configure HTTP basic authorization: basic
var basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

var apiInstance = new MessagemediaRestApi.RepliesApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.checkReplies(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Replies**](Replies.md)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="confirmReplies"></a>
# **confirmReplies**
> confirmReplies(replyId)

Confirm replies as received

Confirm the specified replies as being received so they will no longer be returned in check replies requests

### Example
```javascript
var MessagemediaRestApi = require('messagemedia-rest-api');
var defaultClient = MessagemediaRestApi.ApiClient.default;

// Configure HTTP basic authorization: basic
var basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

var apiInstance = new MessagemediaRestApi.RepliesApi();

var replyId = new MessagemediaRestApi.ReplyId(); // ReplyId | A list of reply IDs to mark as confirmed


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.confirmReplies(replyId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **replyId** | [**ReplyId**](ReplyId.md)| A list of reply IDs to mark as confirmed | 

### Return type

null (empty response body)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

