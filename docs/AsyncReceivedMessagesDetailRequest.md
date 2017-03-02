# MessagemediaRestApi.AsyncReceivedMessagesDetailRequest

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
**sourceAddressCountry** | [**SourceAddressCountryBody**](SourceAddressCountryBody.md) |  | [optional] 
**sourceAddress** | [**SourceAddressBody**](SourceAddressBody.md) |  | [optional] 
**action** | [**ActionBody**](ActionBody.md) |  | [optional] 
**deliveryOptions** | [**DeliveryOptionsBody**](DeliveryOptionsBody.md) |  | [optional] 


<a name="SortByEnum"></a>
## Enum: SortByEnum


* `ACCOUNT` (value: `"ACCOUNT"`)

* `ACTION` (value: `"ACTION"`)

* `DESTINATION_ADDRESS` (value: `"DESTINATION_ADDRESS"`)

* `DESTINATION_ADDRESS_COUNTRY` (value: `"DESTINATION_ADDRESS_COUNTRY"`)

* `FORMAT` (value: `"FORMAT"`)

* `SOURCE_ADDRESS` (value: `"SOURCE_ADDRESS"`)

* `SOURCE_ADDRESS_COUNTRY` (value: `"SOURCE_ADDRESS_COUNTRY"`)

* `TIMESTAMP` (value: `"TIMESTAMP"`)




