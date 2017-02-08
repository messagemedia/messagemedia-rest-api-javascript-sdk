# MessagemediaRestApi.MessagingReportsApi

All URIs are relative to *https://api.messagemedia.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getDeliveryReportsDetail**](MessagingReportsApi.md#getDeliveryReportsDetail) | **GET** /reporting/delivery_reports/detail | Returns a list of delivery reports
[**getDeliveryReportsSummary**](MessagingReportsApi.md#getDeliveryReportsSummary) | **GET** /reporting/delivery_reports/summary | Returns a summarised report of delivery reports
[**getMetadataKeys**](MessagingReportsApi.md#getMetadataKeys) | **GET** /reporting/{messageType}/metadata/keys | Returns a list of metadata keys
[**getReceivedMessagesDetail**](MessagingReportsApi.md#getReceivedMessagesDetail) | **GET** /reporting/received_messages/detail | Returns a list message received
[**getReceivedMessagesSummary**](MessagingReportsApi.md#getReceivedMessagesSummary) | **GET** /reporting/received_messages/summary | Returns a summarised report of messages received
[**getSentMessagesDetail**](MessagingReportsApi.md#getSentMessagesDetail) | **GET** /reporting/sent_messages/detail | Returns a list of message sent
[**getSentMessagesSummary**](MessagingReportsApi.md#getSentMessagesSummary) | **GET** /reporting/sent_messages/summary | Returns a summarised report of messages sent


<a name="getDeliveryReportsDetail"></a>
# **getDeliveryReportsDetail**
> DeliveryReports getDeliveryReportsDetail(endDatestartDate, , opts)

Returns a list of delivery reports

Returns a detailed list of all delivery reports received during the specified time

### Example
```javascript
var MessagemediaRestApi = require('messagemedia-rest-api');
var defaultClient = MessagemediaRestApi.ApiClient.default;

// Configure HTTP basic authorization: basic
var basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

var apiInstance = new MessagemediaRestApi.MessagingReportsApi();

var endDate = new Date("2013-10-20T19:20:30+01:00"); // Date | End date time for report window. By default, the timezone for this parameter will be taken from the account settings for the account associated with the credentials used to make the request, or the account included in the Account parameter. This can be overridden using the timezone parameter per request.

var startDate = new Date("2013-10-20T19:20:30+01:00"); // Date | Start date time for report window. By default, the timezone for this parameter will be taken from the account settings for the account associated with the credentials used to make the request, or the account included in the Account parameter. This can be overridden using the timezone parameter per request.

var opts = { 
  'account': "account_example", // String | Filter results by a specific account. By default results will be returned for the account associated with the authentication credentials and all sub accounts.
  'destinationAddressCountry': "destinationAddressCountry_example", // String | Filter results by destination address country.
  'destinationAddress': "destinationAddress_example", // String | Filter results by destination address.
  'messageFormat': "messageFormat_example", // String | Filter results by message format.
  'metadataKey': "metadataKey_example", // String | Filter results for messages that include a metadata key.
  'metadataValue': "metadataValue_example", // String | Filter results for messages that include a metadata key containing this value. If this parameter is provided, the metadata_key parameter must also be provided.
  'statusCode': "statusCode_example", // String | Filter results by message status code.
  'status': "status_example", // String | Filter results by message status.
  'page': 56, // Integer | Page number for paging through paginated result sets.
  'pageSize': 56, // Integer | Number of results to return in a page for paginated result sets.
  'sortBy': "sortBy_example", // String | Field to sort results set by
  'sortDirection': "sortDirection_example", // String | Order to sort results by.
  'sourceAddressCountry': "sourceAddressCountry_example", // String | Filter results by source address country.
  'sourceAddress': "sourceAddress_example", // String | Filter results by source address.
  'timezone': "timezone_example" // String | The timezone to use for the context of the request. If provided this will be used as the timezone for the start date and end date parameters, and all datetime fields returns in the response. The timezone should be provided as a IANA (Internet Assigned Numbers Authority) time zone database zone name, i.e. 'Australia/Melbourne'.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDeliveryReportsDetail(endDatestartDate, , opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **endDate** | **Date**| End date time for report window. By default, the timezone for this parameter will be taken from the account settings for the account associated with the credentials used to make the request, or the account included in the Account parameter. This can be overridden using the timezone parameter per request. | 
 **startDate** | **Date**| Start date time for report window. By default, the timezone for this parameter will be taken from the account settings for the account associated with the credentials used to make the request, or the account included in the Account parameter. This can be overridden using the timezone parameter per request. | 
 **account** | **String**| Filter results by a specific account. By default results will be returned for the account associated with the authentication credentials and all sub accounts. | [optional] 
 **destinationAddressCountry** | **String**| Filter results by destination address country. | [optional] 
 **destinationAddress** | **String**| Filter results by destination address. | [optional] 
 **messageFormat** | **String**| Filter results by message format. | [optional] 
 **metadataKey** | **String**| Filter results for messages that include a metadata key. | [optional] 
 **metadataValue** | **String**| Filter results for messages that include a metadata key containing this value. If this parameter is provided, the metadata_key parameter must also be provided. | [optional] 
 **statusCode** | **String**| Filter results by message status code. | [optional] 
 **status** | **String**| Filter results by message status. | [optional] 
 **page** | **Integer**| Page number for paging through paginated result sets. | [optional] 
 **pageSize** | **Integer**| Number of results to return in a page for paginated result sets. | [optional] 
 **sortBy** | **String**| Field to sort results set by | [optional] 
 **sortDirection** | **String**| Order to sort results by. | [optional] 
 **sourceAddressCountry** | **String**| Filter results by source address country. | [optional] 
 **sourceAddress** | **String**| Filter results by source address. | [optional] 
 **timezone** | **String**| The timezone to use for the context of the request. If provided this will be used as the timezone for the start date and end date parameters, and all datetime fields returns in the response. The timezone should be provided as a IANA (Internet Assigned Numbers Authority) time zone database zone name, i.e. &#39;Australia/Melbourne&#39;. | [optional] 

### Return type

[**DeliveryReports**](DeliveryReports.md)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDeliveryReportsSummary"></a>
# **getDeliveryReportsSummary**
> SummaryReport getDeliveryReportsSummary(endDategroupBy, startDate, , opts)

Returns a summarised report of delivery reports

Returns a summarised report of all delivery reports received during the specified time, grouped by by the specified grouping parameter

### Example
```javascript
var MessagemediaRestApi = require('messagemedia-rest-api');
var defaultClient = MessagemediaRestApi.ApiClient.default;

// Configure HTTP basic authorization: basic
var basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

var apiInstance = new MessagemediaRestApi.MessagingReportsApi();

var endDate = new Date("2013-10-20T19:20:30+01:00"); // Date | End date time for report window. By default, the timezone for this parameter will be taken from the account settings for the account associated with the credentials used to make the request, or the account included in the Account parameter. This can be overridden using the timezone parameter per request.

var groupBy = "groupBy_example"; // String | Field to group results set by

var startDate = new Date("2013-10-20T19:20:30+01:00"); // Date | Start date time for report window. By default, the timezone for this parameter will be taken from the account settings for the account associated with the credentials used to make the request, or the account included in the Account parameter. This can be overridden using the timezone parameter per request.

var opts = { 
  'account': "account_example", // String | Filter results by a specific account. By default results will be returned for the account associated with the authentication credentials and all sub accounts.
  'destinationAddressCountry': "destinationAddressCountry_example", // String | Filter results by destination address country.
  'destinationAddress': "destinationAddress_example", // String | Filter results by destination address.
  'messageFormat': "messageFormat_example", // String | Filter results by message format.
  'metadataKey': "metadataKey_example", // String | Filter results for messages that include a metadata key.
  'metadataValue': "metadataValue_example", // String | Filter results for messages that include a metadata key containing this value. If this parameter is provided, the metadata_key parameter must also be provided.
  'statusCode': "statusCode_example", // String | Filter results by message status code.
  'status': "status_example", // String | Filter results by message status.
  'summaryBy': "summaryBy_example", // String | Function to apply when summarising results
  'summaryField': "summaryField_example", // String | Field to summarise results by
  'sourceAddressCountry': "sourceAddressCountry_example", // String | Filter results by source address country.
  'sourceAddress': "sourceAddress_example", // String | Filter results by source address.
  'timezone': "timezone_example" // String | The timezone to use for the context of the request. If provided this will be used as the timezone for the start date and end date parameters, and all datetime fields returns in the response. The timezone should be provided as a IANA (Internet Assigned Numbers Authority) time zone database zone name, i.e. 'Australia/Melbourne'.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDeliveryReportsSummary(endDategroupBy, startDate, , opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **endDate** | **Date**| End date time for report window. By default, the timezone for this parameter will be taken from the account settings for the account associated with the credentials used to make the request, or the account included in the Account parameter. This can be overridden using the timezone parameter per request. | 
 **groupBy** | **String**| Field to group results set by | 
 **startDate** | **Date**| Start date time for report window. By default, the timezone for this parameter will be taken from the account settings for the account associated with the credentials used to make the request, or the account included in the Account parameter. This can be overridden using the timezone parameter per request. | 
 **account** | **String**| Filter results by a specific account. By default results will be returned for the account associated with the authentication credentials and all sub accounts. | [optional] 
 **destinationAddressCountry** | **String**| Filter results by destination address country. | [optional] 
 **destinationAddress** | **String**| Filter results by destination address. | [optional] 
 **messageFormat** | **String**| Filter results by message format. | [optional] 
 **metadataKey** | **String**| Filter results for messages that include a metadata key. | [optional] 
 **metadataValue** | **String**| Filter results for messages that include a metadata key containing this value. If this parameter is provided, the metadata_key parameter must also be provided. | [optional] 
 **statusCode** | **String**| Filter results by message status code. | [optional] 
 **status** | **String**| Filter results by message status. | [optional] 
 **summaryBy** | **String**| Function to apply when summarising results | [optional] 
 **summaryField** | **String**| Field to summarise results by | [optional] 
 **sourceAddressCountry** | **String**| Filter results by source address country. | [optional] 
 **sourceAddress** | **String**| Filter results by source address. | [optional] 
 **timezone** | **String**| The timezone to use for the context of the request. If provided this will be used as the timezone for the start date and end date parameters, and all datetime fields returns in the response. The timezone should be provided as a IANA (Internet Assigned Numbers Authority) time zone database zone name, i.e. &#39;Australia/Melbourne&#39;. | [optional] 

### Return type

[**SummaryReport**](SummaryReport.md)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getMetadataKeys"></a>
# **getMetadataKeys**
> MetadataKeysResponse getMetadataKeys(messageType, startDate, endDate, opts)

Returns a list of metadata keys

Returns a list of all metadata keys used for the specified message type during the specified time. Results are limited to 100 keys.

### Example
```javascript
var MessagemediaRestApi = require('messagemedia-rest-api');
var defaultClient = MessagemediaRestApi.ApiClient.default;

// Configure HTTP basic authorization: basic
var basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

var apiInstance = new MessagemediaRestApi.MessagingReportsApi();

var messageType = "messageType_example"; // String | Message type. Possible values are sent messages, received messages and delivery receipts.

var startDate = new Date("2013-10-20T19:20:30+01:00"); // Date | Start date time for report window. By default, the timezone for this parameter will be taken from the account settings for the account associated with the credentials used to make the request, or the account included in the Account parameter. This can be overridden using the timezone parameter per request.

var endDate = new Date("2013-10-20T19:20:30+01:00"); // Date | End date time for report window. By default, the timezone for this parameter will be taken from the account settings for the account associated with the credentials used to make the request, or the account included in the Account parameter. This can be overridden using the timezone parameter per request.

var opts = { 
  'account': "account_example", // String | Filter results by a specific account. By default results will be returned for the account associated with the authentication credentials and all sub accounts.
  'timezone': "timezone_example" // String | The timezone to use for the context of the request. If provided this will be used as the timezone for the start date and end date parameters, and all datetime fields returns in the response. The timezone should be provided as a IANA (Internet Assigned Numbers Authority) time zone database zone name, i.e. 'Australia/Melbourne'.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getMetadataKeys(messageType, startDate, endDate, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **messageType** | **String**| Message type. Possible values are sent messages, received messages and delivery receipts. | 
 **startDate** | **Date**| Start date time for report window. By default, the timezone for this parameter will be taken from the account settings for the account associated with the credentials used to make the request, or the account included in the Account parameter. This can be overridden using the timezone parameter per request. | 
 **endDate** | **Date**| End date time for report window. By default, the timezone for this parameter will be taken from the account settings for the account associated with the credentials used to make the request, or the account included in the Account parameter. This can be overridden using the timezone parameter per request. | 
 **account** | **String**| Filter results by a specific account. By default results will be returned for the account associated with the authentication credentials and all sub accounts. | [optional] 
 **timezone** | **String**| The timezone to use for the context of the request. If provided this will be used as the timezone for the start date and end date parameters, and all datetime fields returns in the response. The timezone should be provided as a IANA (Internet Assigned Numbers Authority) time zone database zone name, i.e. &#39;Australia/Melbourne&#39;. | [optional] 

### Return type

[**MetadataKeysResponse**](MetadataKeysResponse.md)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getReceivedMessagesDetail"></a>
# **getReceivedMessagesDetail**
> ReceivedMessages getReceivedMessagesDetail(endDatestartDate, , opts)

Returns a list message received

Returns a detailed list of all message received during the specified time

### Example
```javascript
var MessagemediaRestApi = require('messagemedia-rest-api');
var defaultClient = MessagemediaRestApi.ApiClient.default;

// Configure HTTP basic authorization: basic
var basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

var apiInstance = new MessagemediaRestApi.MessagingReportsApi();

var endDate = new Date("2013-10-20T19:20:30+01:00"); // Date | End date time for report window. By default, the timezone for this parameter will be taken from the account settings for the account associated with the credentials used to make the request, or the account included in the Account parameter. This can be overridden using the timezone parameter per request.

var startDate = new Date("2013-10-20T19:20:30+01:00"); // Date | Start date time for report window. By default, the timezone for this parameter will be taken from the account settings for the account associated with the credentials used to make the request, or the account included in the Account parameter. This can be overridden using the timezone parameter per request.

var opts = { 
  'account': "account_example", // String | Filter results by a specific account. By default results will be returned for the account associated with the authentication credentials and all sub accounts.
  'action': "action_example", // String | Filter results by the action that was invoked for this message.
  'destinationAddressCountry': "destinationAddressCountry_example", // String | Filter results by destination address country.
  'destinationAddress': "destinationAddress_example", // String | Filter results by destination address.
  'messageFormat': "messageFormat_example", // String | Filter results by message format.
  'metadataKey': "metadataKey_example", // String | Filter results for messages that include a metadata key.
  'metadataValue': "metadataValue_example", // String | Filter results for messages that include a metadata key containing this value. If this parameter is provided, the metadata_key parameter must also be provided.
  'page': 56, // Integer | Page number for paging through paginated result sets.
  'pageSize': 56, // Integer | Number of results to return in a page for paginated result sets.
  'sortBy': "sortBy_example", // String | Field to sort results set by
  'sortDirection': "sortDirection_example", // String | Order to sort results by.
  'sourceAddressCountry': "sourceAddressCountry_example", // String | Filter results by source address country.
  'sourceAddress': "sourceAddress_example", // String | Filter results by source address.
  'timezone': "timezone_example" // String | The timezone to use for the context of the request. If provided this will be used as the timezone for the start date and end date parameters, and all datetime fields returns in the response. The timezone should be provided as a IANA (Internet Assigned Numbers Authority) time zone database zone name, i.e. 'Australia/Melbourne'.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getReceivedMessagesDetail(endDatestartDate, , opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **endDate** | **Date**| End date time for report window. By default, the timezone for this parameter will be taken from the account settings for the account associated with the credentials used to make the request, or the account included in the Account parameter. This can be overridden using the timezone parameter per request. | 
 **startDate** | **Date**| Start date time for report window. By default, the timezone for this parameter will be taken from the account settings for the account associated with the credentials used to make the request, or the account included in the Account parameter. This can be overridden using the timezone parameter per request. | 
 **account** | **String**| Filter results by a specific account. By default results will be returned for the account associated with the authentication credentials and all sub accounts. | [optional] 
 **action** | **String**| Filter results by the action that was invoked for this message. | [optional] 
 **destinationAddressCountry** | **String**| Filter results by destination address country. | [optional] 
 **destinationAddress** | **String**| Filter results by destination address. | [optional] 
 **messageFormat** | **String**| Filter results by message format. | [optional] 
 **metadataKey** | **String**| Filter results for messages that include a metadata key. | [optional] 
 **metadataValue** | **String**| Filter results for messages that include a metadata key containing this value. If this parameter is provided, the metadata_key parameter must also be provided. | [optional] 
 **page** | **Integer**| Page number for paging through paginated result sets. | [optional] 
 **pageSize** | **Integer**| Number of results to return in a page for paginated result sets. | [optional] 
 **sortBy** | **String**| Field to sort results set by | [optional] 
 **sortDirection** | **String**| Order to sort results by. | [optional] 
 **sourceAddressCountry** | **String**| Filter results by source address country. | [optional] 
 **sourceAddress** | **String**| Filter results by source address. | [optional] 
 **timezone** | **String**| The timezone to use for the context of the request. If provided this will be used as the timezone for the start date and end date parameters, and all datetime fields returns in the response. The timezone should be provided as a IANA (Internet Assigned Numbers Authority) time zone database zone name, i.e. &#39;Australia/Melbourne&#39;. | [optional] 

### Return type

[**ReceivedMessages**](ReceivedMessages.md)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getReceivedMessagesSummary"></a>
# **getReceivedMessagesSummary**
> SummaryReport getReceivedMessagesSummary(endDategroupBy, startDate, , opts)

Returns a summarised report of messages received

Returns a summarised report of all messages received during the specified time, grouped by by the specified grouping parameter

### Example
```javascript
var MessagemediaRestApi = require('messagemedia-rest-api');
var defaultClient = MessagemediaRestApi.ApiClient.default;

// Configure HTTP basic authorization: basic
var basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

var apiInstance = new MessagemediaRestApi.MessagingReportsApi();

var endDate = new Date("2013-10-20T19:20:30+01:00"); // Date | End date time for report window. By default, the timezone for this parameter will be taken from the account settings for the account associated with the credentials used to make the request, or the account included in the Account parameter. This can be overridden using the timezone parameter per request.

var groupBy = "groupBy_example"; // String | Field to group results set by

var startDate = new Date("2013-10-20T19:20:30+01:00"); // Date | Start date time for report window. By default, the timezone for this parameter will be taken from the account settings for the account associated with the credentials used to make the request, or the account included in the Account parameter. This can be overridden using the timezone parameter per request.

var opts = { 
  'account': "account_example", // String | Filter results by a specific account. By default results will be returned for the account associated with the authentication credentials and all sub accounts.
  'destinationAddressCountry': "destinationAddressCountry_example", // String | Filter results by destination address country.
  'destinationAddress': "destinationAddress_example", // String | Filter results by destination address.
  'messageFormat': "messageFormat_example", // String | Filter results by message format.
  'metadataKey': "metadataKey_example", // String | Filter results for messages that include a metadata key.
  'metadataValue': "metadataValue_example", // String | Filter results for messages that include a metadata key containing this value. If this parameter is provided, the metadata_key parameter must also be provided.
  'summaryBy': "summaryBy_example", // String | Function to apply when summarising results
  'summaryField': "summaryField_example", // String | Field to summarise results by
  'sourceAddressCountry': "sourceAddressCountry_example", // String | Filter results by source address country.
  'sourceAddress': "sourceAddress_example", // String | Filter results by source address.
  'timezone': "timezone_example" // String | The timezone to use for the context of the request. If provided this will be used as the timezone for the start date and end date parameters, and all datetime fields returns in the response. The timezone should be provided as a IANA (Internet Assigned Numbers Authority) time zone database zone name, i.e. 'Australia/Melbourne'.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getReceivedMessagesSummary(endDategroupBy, startDate, , opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **endDate** | **Date**| End date time for report window. By default, the timezone for this parameter will be taken from the account settings for the account associated with the credentials used to make the request, or the account included in the Account parameter. This can be overridden using the timezone parameter per request. | 
 **groupBy** | **String**| Field to group results set by | 
 **startDate** | **Date**| Start date time for report window. By default, the timezone for this parameter will be taken from the account settings for the account associated with the credentials used to make the request, or the account included in the Account parameter. This can be overridden using the timezone parameter per request. | 
 **account** | **String**| Filter results by a specific account. By default results will be returned for the account associated with the authentication credentials and all sub accounts. | [optional] 
 **destinationAddressCountry** | **String**| Filter results by destination address country. | [optional] 
 **destinationAddress** | **String**| Filter results by destination address. | [optional] 
 **messageFormat** | **String**| Filter results by message format. | [optional] 
 **metadataKey** | **String**| Filter results for messages that include a metadata key. | [optional] 
 **metadataValue** | **String**| Filter results for messages that include a metadata key containing this value. If this parameter is provided, the metadata_key parameter must also be provided. | [optional] 
 **summaryBy** | **String**| Function to apply when summarising results | [optional] 
 **summaryField** | **String**| Field to summarise results by | [optional] 
 **sourceAddressCountry** | **String**| Filter results by source address country. | [optional] 
 **sourceAddress** | **String**| Filter results by source address. | [optional] 
 **timezone** | **String**| The timezone to use for the context of the request. If provided this will be used as the timezone for the start date and end date parameters, and all datetime fields returns in the response. The timezone should be provided as a IANA (Internet Assigned Numbers Authority) time zone database zone name, i.e. &#39;Australia/Melbourne&#39;. | [optional] 

### Return type

[**SummaryReport**](SummaryReport.md)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSentMessagesDetail"></a>
# **getSentMessagesDetail**
> SentMessages getSentMessagesDetail(endDatestartDate, , opts)

Returns a list of message sent

Returns a detailed list of all message sent during the specified time

### Example
```javascript
var MessagemediaRestApi = require('messagemedia-rest-api');
var defaultClient = MessagemediaRestApi.ApiClient.default;

// Configure HTTP basic authorization: basic
var basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

var apiInstance = new MessagemediaRestApi.MessagingReportsApi();

var endDate = new Date("2013-10-20T19:20:30+01:00"); // Date | End date time for report window. By default, the timezone for this parameter will be taken from the account settings for the account associated with the credentials used to make the request, or the account included in the Account parameter. This can be overridden using the timezone parameter per request.

var startDate = new Date("2013-10-20T19:20:30+01:00"); // Date | Start date time for report window. By default, the timezone for this parameter will be taken from the account settings for the account associated with the credentials used to make the request, or the account included in the Account parameter. This can be overridden using the timezone parameter per request.

var opts = { 
  'account': "account_example", // String | Filter results by a specific account. By default results will be returned for the account associated with the authentication credentials and all sub accounts.
  'deliveryReport': true, // Boolean | Filter results by delivery report.
  'destinationAddressCountry': "destinationAddressCountry_example", // String | Filter results by destination address country.
  'destinationAddress': "destinationAddress_example", // String | Filter results by destination address.
  'messageFormat': "messageFormat_example", // String | Filter results by message format.
  'metadataKey': "metadataKey_example", // String | Filter results for messages that include a metadata key.
  'metadataValue': "metadataValue_example", // String | Filter results for messages that include a metadata key containing this value. If this parameter is provided, the metadata_key parameter must also be provided.
  'statusCode': "statusCode_example", // String | Filter results by message status code.
  'status': "status_example", // String | Filter results by message status.
  'page': 56, // Integer | Page number for paging through paginated result sets.
  'pageSize': 56, // Integer | Number of results to return in a page for paginated result sets.
  'sortBy': "sortBy_example", // String | Field to sort results set by
  'sortDirection': "sortDirection_example", // String | Order to sort results by.
  'sourceAddressCountry': "sourceAddressCountry_example", // String | Filter results by source address country.
  'sourceAddress': "sourceAddress_example", // String | Filter results by source address.
  'timezone': "timezone_example" // String | The timezone to use for the context of the request. If provided this will be used as the timezone for the start date and end date parameters, and all datetime fields returns in the response. The timezone should be provided as a IANA (Internet Assigned Numbers Authority) time zone database zone name, i.e. 'Australia/Melbourne'.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSentMessagesDetail(endDatestartDate, , opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **endDate** | **Date**| End date time for report window. By default, the timezone for this parameter will be taken from the account settings for the account associated with the credentials used to make the request, or the account included in the Account parameter. This can be overridden using the timezone parameter per request. | 
 **startDate** | **Date**| Start date time for report window. By default, the timezone for this parameter will be taken from the account settings for the account associated with the credentials used to make the request, or the account included in the Account parameter. This can be overridden using the timezone parameter per request. | 
 **account** | **String**| Filter results by a specific account. By default results will be returned for the account associated with the authentication credentials and all sub accounts. | [optional] 
 **deliveryReport** | **Boolean**| Filter results by delivery report. | [optional] 
 **destinationAddressCountry** | **String**| Filter results by destination address country. | [optional] 
 **destinationAddress** | **String**| Filter results by destination address. | [optional] 
 **messageFormat** | **String**| Filter results by message format. | [optional] 
 **metadataKey** | **String**| Filter results for messages that include a metadata key. | [optional] 
 **metadataValue** | **String**| Filter results for messages that include a metadata key containing this value. If this parameter is provided, the metadata_key parameter must also be provided. | [optional] 
 **statusCode** | **String**| Filter results by message status code. | [optional] 
 **status** | **String**| Filter results by message status. | [optional] 
 **page** | **Integer**| Page number for paging through paginated result sets. | [optional] 
 **pageSize** | **Integer**| Number of results to return in a page for paginated result sets. | [optional] 
 **sortBy** | **String**| Field to sort results set by | [optional] 
 **sortDirection** | **String**| Order to sort results by. | [optional] 
 **sourceAddressCountry** | **String**| Filter results by source address country. | [optional] 
 **sourceAddress** | **String**| Filter results by source address. | [optional] 
 **timezone** | **String**| The timezone to use for the context of the request. If provided this will be used as the timezone for the start date and end date parameters, and all datetime fields returns in the response. The timezone should be provided as a IANA (Internet Assigned Numbers Authority) time zone database zone name, i.e. &#39;Australia/Melbourne&#39;. | [optional] 

### Return type

[**SentMessages**](SentMessages.md)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSentMessagesSummary"></a>
# **getSentMessagesSummary**
> SummaryReport getSentMessagesSummary(endDategroupBy, startDate, , opts)

Returns a summarised report of messages sent

Returns a summarised report of all messages sent during the specified time, grouped by by the specified grouping parameter

### Example
```javascript
var MessagemediaRestApi = require('messagemedia-rest-api');
var defaultClient = MessagemediaRestApi.ApiClient.default;

// Configure HTTP basic authorization: basic
var basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

var apiInstance = new MessagemediaRestApi.MessagingReportsApi();

var endDate = new Date("2013-10-20T19:20:30+01:00"); // Date | End date time for report window. By default, the timezone for this parameter will be taken from the account settings for the account associated with the credentials used to make the request, or the account included in the Account parameter. This can be overridden using the timezone parameter per request.

var groupBy = "groupBy_example"; // String | Field to group results set by

var startDate = new Date("2013-10-20T19:20:30+01:00"); // Date | Start date time for report window. By default, the timezone for this parameter will be taken from the account settings for the account associated with the credentials used to make the request, or the account included in the Account parameter. This can be overridden using the timezone parameter per request.

var opts = { 
  'account': "account_example", // String | Filter results by a specific account. By default results will be returned for the account associated with the authentication credentials and all sub accounts.
  'deliveryReport': true, // Boolean | Filter results by delivery report.
  'destinationAddressCountry': "destinationAddressCountry_example", // String | Filter results by destination address country.
  'destinationAddress': "destinationAddress_example", // String | Filter results by destination address.
  'summaryBy': "summaryBy_example", // String | Function to apply when summarising results
  'summaryField': "summaryField_example", // String | Field to summarise results by
  'messageFormat': "messageFormat_example", // String | Filter results by message format.
  'metadataKey': "metadataKey_example", // String | Filter results for messages that include a metadata key.
  'metadataValue': "metadataValue_example", // String | Filter results for messages that include a metadata key containing this value. If this parameter is provided, the metadata_key parameter must also be provided.
  'statusCode': "statusCode_example", // String | Filter results by message status code.
  'sourceAddressCountry': "sourceAddressCountry_example", // String | Filter results by source address country.
  'sourceAddress': "sourceAddress_example", // String | Filter results by source address.
  'timezone': "timezone_example" // String | The timezone to use for the context of the request. If provided this will be used as the timezone for the start date and end date parameters, and all datetime fields returns in the response. The timezone should be provided as a IANA (Internet Assigned Numbers Authority) time zone database zone name, i.e. 'Australia/Melbourne'.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSentMessagesSummary(endDategroupBy, startDate, , opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **endDate** | **Date**| End date time for report window. By default, the timezone for this parameter will be taken from the account settings for the account associated with the credentials used to make the request, or the account included in the Account parameter. This can be overridden using the timezone parameter per request. | 
 **groupBy** | **String**| Field to group results set by | 
 **startDate** | **Date**| Start date time for report window. By default, the timezone for this parameter will be taken from the account settings for the account associated with the credentials used to make the request, or the account included in the Account parameter. This can be overridden using the timezone parameter per request. | 
 **account** | **String**| Filter results by a specific account. By default results will be returned for the account associated with the authentication credentials and all sub accounts. | [optional] 
 **deliveryReport** | **Boolean**| Filter results by delivery report. | [optional] 
 **destinationAddressCountry** | **String**| Filter results by destination address country. | [optional] 
 **destinationAddress** | **String**| Filter results by destination address. | [optional] 
 **summaryBy** | **String**| Function to apply when summarising results | [optional] 
 **summaryField** | **String**| Field to summarise results by | [optional] 
 **messageFormat** | **String**| Filter results by message format. | [optional] 
 **metadataKey** | **String**| Filter results for messages that include a metadata key. | [optional] 
 **metadataValue** | **String**| Filter results for messages that include a metadata key containing this value. If this parameter is provided, the metadata_key parameter must also be provided. | [optional] 
 **statusCode** | **String**| Filter results by message status code. | [optional] 
 **sourceAddressCountry** | **String**| Filter results by source address country. | [optional] 
 **sourceAddress** | **String**| Filter results by source address. | [optional] 
 **timezone** | **String**| The timezone to use for the context of the request. If provided this will be used as the timezone for the start date and end date parameters, and all datetime fields returns in the response. The timezone should be provided as a IANA (Internet Assigned Numbers Authority) time zone database zone name, i.e. &#39;Australia/Melbourne&#39;. | [optional] 

### Return type

[**SummaryReport**](SummaryReport.md)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

