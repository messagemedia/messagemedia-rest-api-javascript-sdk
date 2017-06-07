# MessagemediaRestApi.AsyncDeliverySentMessagesRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**summaryBy** | [**SummaryByBody**](SummaryByBody.md) |  | [optional] 
**summaryField** | [**SummaryFieldBody**](SummaryFieldBody.md) |  | [optional] 
**groupBy** | **[String]** | List of fields to group results set by | [optional] 
**startDate** | [**StartDateBody**](StartDateBody.md) |  | [optional] 
**endDate** | [**EndDateBody**](EndDateBody.md) |  | [optional] 
**timezone** | [**TimezoneBody**](TimezoneBody.md) |  | [optional] 
**accounts** | [**AccountsBody**](AccountsBody.md) |  | [optional] 
**destinationAddressCountry** | [**DestinationAddressCountryBody**](DestinationAddressCountryBody.md) |  | [optional] 
**destinationAddress** | [**DestinationAddressBody**](DestinationAddressBody.md) |  | [optional] 
**messageFormat** | [**MessageFormatBody**](MessageFormatBody.md) |  | [optional] 
**metadataKey** | [**MetadataKeyBody**](MetadataKeyBody.md) |  | [optional] 
**metadataValue** | [**MetadataValueBody**](MetadataValueBody.md) |  | [optional] 
**sourceAddressCountry** | [**SourceAddressCountryBody**](SourceAddressCountryBody.md) |  | [optional] 
**sourceAddress** | [**SourceAddressBody**](SourceAddressBody.md) |  | [optional] 
**deliveryReport** | [**DeliveryReportBody**](DeliveryReportBody.md) |  | [optional] 
**statusCode** | [**StatusCodeBody**](StatusCodeBody.md) |  | [optional] 
**deliveryOptions** | [**DeliveryOptionsBody**](DeliveryOptionsBody.md) |  | [optional] 


<a name="[GroupByEnum]"></a>
## Enum: [GroupByEnum]


* `DAY` (value: `"DAY"`)

* `DELIVERY_REPORT` (value: `"DELIVERY_REPORT"`)

* `DESTINATION_ADDRESS` (value: `"DESTINATION_ADDRESS"`)

* `DESTINATION_ADDRESS_COUNTRY` (value: `"DESTINATION_ADDRESS_COUNTRY"`)

* `FORMAT` (value: `"FORMAT"`)

* `HOUR` (value: `"HOUR"`)

* `METADATA_KEY` (value: `"METADATA_KEY"`)

* `METADATA_VALUE` (value: `"METADATA_VALUE"`)

* `MINUTE` (value: `"MINUTE"`)

* `MONTH` (value: `"MONTH"`)

* `SOURCE_ADDRESS` (value: `"SOURCE_ADDRESS"`)

* `SOURCE_ADDRESS_COUNTRY` (value: `"SOURCE_ADDRESS_COUNTRY"`)

* `STATUS` (value: `"STATUS"`)

* `STATUS_CODE` (value: `"STATUS_CODE"`)

* `YEAR` (value: `"YEAR"`)

* `ACCOUNT` (value: `"ACCOUNT"`)




