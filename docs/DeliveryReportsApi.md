# MessagemediaRestApi.DeliveryReportsApi

All URIs are relative to *https://api.messagemedia.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**checkReports**](DeliveryReportsApi.md#checkReports) | **GET** /delivery_reports | Check delivery reports
[**confirmReports**](DeliveryReportsApi.md#confirmReports) | **POST** /delivery_reports/confirmed | Confirm delivery reports as received


<a name="checkReports"></a>
# **checkReports**
> Reports checkReports()

Check delivery reports

Return up to 100 delivery reports that have been received and haven&#39;t  been confirmed using the confirm reports endpoint

### Example
```javascript
var MessagemediaRestApi = require('messagemedia-rest-api');
var defaultClient = MessagemediaRestApi.ApiClient.default;

// Configure HTTP basic authorization: basic
var basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

var apiInstance = new MessagemediaRestApi.DeliveryReportsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.checkReports(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Reports**](Reports.md)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="confirmReports"></a>
# **confirmReports**
> confirmReports(deliveryReportId)

Confirm delivery reports as received

Confirm the specified delivery reports as being received so they will no longer be returned in check delivery reports requests

### Example
```javascript
var MessagemediaRestApi = require('messagemedia-rest-api');
var defaultClient = MessagemediaRestApi.ApiClient.default;

// Configure HTTP basic authorization: basic
var basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

var apiInstance = new MessagemediaRestApi.DeliveryReportsApi();

var deliveryReportId = new MessagemediaRestApi.DeliveryReportId(); // DeliveryReportId | A list of delivery report IDs to mark as confirmed


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.confirmReports(deliveryReportId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deliveryReportId** | [**DeliveryReportId**](DeliveryReportId.md)| A list of delivery report IDs to mark as confirmed | 

### Return type

null (empty response body)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

