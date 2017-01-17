# MessagemediaRestApi.SentMessage

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | **String** | Account associated with this message | [optional] 
**content** | **String** | Content of the message | [optional] 
**deliveredTimestamp** | **Date** | If a delivery report was requested for this message, this is the time at which the message was delivered (or failed to be delivered) to the destination address. | [optional] 
**deliveryReport** | **Boolean** | Indicates if a delivery report was requested for this message | [optional] 
**destinationAddress** | **String** | Address this message was delivered to | [optional] 
**destinationAddressCountry** | **String** | Country associated with the destination address | [optional] 
**format** | **String** | Format of message, SMS or TTS (Text To Speech) | [optional] 
**id** | **String** | Unique ID for this message | [optional] 
**inResponseTo** | **String** | If this message was sent in response to a received message (an auto response message for example) this is the ID of the received message. | [optional] 
**metadata** | **Object** | Metadata associated with this message | [optional] 
**sourceAddress** | **String** | Address this message was sent from | [optional] 
**sourceAddressCountry** | **String** | Country associated with the source address | [optional] 
**units** | **Integer** | The total number of calculated SMS units this message cost. 1 SMS unit is defined as 160 GSM characters, or 153 GSM characters for multi-part messages as some characters are used to concatenate the message on the receiving handset. Messages with one or more non-GSM characters will be submitted using UCS-2 encoding. UCS-2 encoding means the message has a maximum of 70 characters per SMS, or 67 characters for multi-part messages. | [optional] 
**timestamp** | **Date** | Date time at which this message was submitted to the API, refer to the delivered timestamp for the time at which the message was delivered (or failed to be delivered) to the destination address. | [optional] 


<a name="FormatEnum"></a>
## Enum: FormatEnum


* `SMS` (value: `"SMS"`)

* `TTS` (value: `"TTS"`)




