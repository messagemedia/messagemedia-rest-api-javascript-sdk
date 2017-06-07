# MessagemediaRestApi.DeliveryReport

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | **String** | Account associated with this delivery report | [optional] 
**destinationAddress** | **String** | Address this delivery report was delivered to. This is the source address of the sent message that this delivery report is in response to | [optional] 
**destinationAddressCountry** | **String** | Country associated with the destination address | [optional] 
**format** | **String** | Format of message, SMS or TTS (Text To Speech) | [optional] 
**id** | **String** | Unique ID for this delivery report | [optional] 
**inResponseTo** | **String** | Unique ID of the sent message that this delivery report is in response to | [optional] 
**metadata** | **Object** | Metadata associated with the sent message | [optional] 
**sourceAddress** | **String** | Address this delivery report was received from, the destination address of the sent message that this delivery report is in response to | [optional] 
**sourceAddressCountry** | **String** | Country associated with the source address | [optional] 
**status** | **String** | Status of the message | [optional] 
**statusCode** | **String** | Status code of the message | [optional] 
**timestamp** | **Date** | Date time at which this delivery report was received | [optional] 


<a name="FormatEnum"></a>
## Enum: FormatEnum


* `SMS` (value: `"SMS"`)

* `TTS` (value: `"TTS"`)




<a name="StatusEnum"></a>
## Enum: StatusEnum


* `queued` (value: `"queued"`)

* `processing` (value: `"processing"`)

* `processed` (value: `"processed"`)

* `scheduled` (value: `"scheduled"`)

* `cancelled` (value: `"cancelled"`)

* `enroute` (value: `"enroute"`)

* `held` (value: `"held"`)

* `submitted` (value: `"submitted"`)

* `delivered` (value: `"delivered"`)

* `expired` (value: `"expired"`)

* `rejected` (value: `"rejected"`)




