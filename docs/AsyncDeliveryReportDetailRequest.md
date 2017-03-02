# MessagemediaRestApi.AsyncDeliveryReportDetailRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**startDate** | [**StartDateBody**](StartDateBody.md) |  | [optional] 
**endDate** | [**EndDateBody**](EndDateBody.md) |  | [optional] 
**sortBy** | **String** | Field to sort results set by | [optional] 
**sortDirection** | [**SortDirectionBody**](SortDirectionBody.md) |  | [optional] 
**timezone** | [**TimezoneBody**](TimezoneBody.md) |  | [optional] 
**accounts** | [**AccountsBody**](AccountsBody.md) |  | [optional] 
**destinationAddressCountry** | [**DestinationAddressCountryBody**](DestinationAddressCountryBody.md) |  | [optional] 
**destinationAddress** | [**DestinationAddressBody**](DestinationAddressBody.md) |  | [optional] 
**messageFormat** | [**MessageFormatBody**](MessageFormatBody.md) |  | [optional] 
**metadataKey** | [**MetadataKeyBody**](MetadataKeyBody.md) |  | [optional] 
**metadataValue** | [**MetadataValueBody**](MetadataValueBody.md) |  | [optional] 
**statusCode** | [**StatusCodeBody**](StatusCodeBody.md) |  | [optional] 
**status** | [**StatusBody**](StatusBody.md) |  | [optional] 
**sourceAddressCountry** | [**SourceAddressCountryBody**](SourceAddressCountryBody.md) |  | [optional] 
**sourceAddress** | [**SourceAddressBody**](SourceAddressBody.md) |  | [optional] 
**deliveryOptions** | [**DeliveryOptionsBody**](DeliveryOptionsBody.md) |  | [optional] 


<a name="SortByEnum"></a>
## Enum: SortByEnum


* `ACCOUNT` (value: `"ACCOUNT"`)

* `DESTINATION_ADDRESS` (value: `"DESTINATION_ADDRESS"`)

* `DESTINATION_ADDRESS_COUNTRY` (value: `"DESTINATION_ADDRESS_COUNTRY"`)

* `FORMAT` (value: `"FORMAT"`)

* `SOURCE_ADDRESS` (value: `"SOURCE_ADDRESS"`)

* `SOURCE_ADDRESS_COUNTRY` (value: `"SOURCE_ADDRESS_COUNTRY"`)

* `STATUS` (value: `"STATUS"`)

* `STATUS_CODE` (value: `"STATUS_CODE"`)

* `TIMESTAMP` (value: `"TIMESTAMP"`)




