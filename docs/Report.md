# MessagemediaRestApi.Report

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**callbackUrl** | **String** | The URL specified as the callback URL in the original submit message request | [optional] 
**dateReceived** | **Date** | The date and time at which this delivery report was generated in UTC. | [optional] 
**delay** | **Integer** | Deprecated, no longer in use | [optional] 
**deliveryReportId** | **String** | Unique ID for this delivery report | [optional] 
**messageId** | **String** | Unique ID of the original message | [optional] 
**metadata** | **Object** | Any metadata that was included in the original submit message request | [optional] 
**originalText** | **String** | Text of the original message. | [optional] 
**sourceNumber** | **String** | Address from which this delivery report was received | [optional] 
**status** | **String** | The status of the message as per the delivery report | [optional] 
**submittedDate** | **Date** | The date and time when the message status changed in UTC. For a delivered DR this may indicate the time at which the message was received on the handset. | [optional] 
**vendorAccountId** | [**ReplyVendorAccountId**](ReplyVendorAccountId.md) |  | [optional] 


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `enroute` (value: `"enroute"`)

* `failed` (value: `"failed"`)

* `submitted` (value: `"submitted"`)

* `delivered` (value: `"delivered"`)

* `expired` (value: `"expired"`)

* `rejected` (value: `"rejected"`)

* `undeliverable` (value: `"undeliverable"`)




