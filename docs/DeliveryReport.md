# MessagemediaRestApi.DeliveryReport

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | **String** | Account associated with this delivery report | [optional] 
**destinationAddress** | **String** | Address this delivery report was delivered to. This is the source address of the sent message that this delivery report is in response to | [optional] 
**destinationAddressCountry** | **String** | Country associated with the destination address | [optional] 
**format** | **String** | Format of message, SMS or VOICE | [optional] [default to &#39;SMS&#39;]
**id** | **String** | Unique ID for this delivery report | [optional] 
**inResponseTo** | **String** | Unique ID of the sent message that this delivery report is in response to | [optional] 
**metadata** | **Object** | Metadata associated with the sent message | [optional] 
**sourceAddress** | **String** | Address this delivery report was received from, the destination address of the sent message that this delivery report is in response to | [optional] 
**sourceAddressCountry** | **String** | Country associated with the source address | [optional] 
**status** | [**MessageStatus**](MessageStatus.md) |  | [optional] 
**statusCode** | [**MessageStatusCode**](MessageStatusCode.md) |  | [optional] 
**timestamp** | **Date** | Date time at which this delivery report was received | [optional] 


<a name="FormatEnum"></a>
## Enum: FormatEnum


* `SMS` (value: `"SMS"`)

* `VOICE` (value: `"VOICE"`)




