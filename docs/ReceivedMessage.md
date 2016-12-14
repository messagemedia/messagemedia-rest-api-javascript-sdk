# MessagemediaRestApi.ReceivedMessage

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | **String** | Account associated with this message | [optional] 
**action** | **String** | Action that was invoked for this message if any, OPTOUT, OPTIN, GLOBALOPTOUT | [optional] 
**content** | **String** | Content of the message | [optional] 
**destinationAddress** | **String** | Address this message was delivered to. If this message was received in response to a sent message, this is the source address of the sent message | [optional] 
**destinationAddressCountry** | **String** | Country associated with the destination address | [optional] 
**format** | **String** | Format of message, SMS or VOICE | [optional] 
**id** | **String** | Unique ID for this reply | [optional] 
**inResponseTo** | **String** | If this message was received in response to a sent message, this is the ID of the sent message | [optional] 
**metadata** | **Object** | If this message was received in response to a sent message, this is the metadata associated with the sent message | [optional] 
**sourceAddress** | **String** | Address this message was received from. If this message was received in response to a sent message, this is the destination address of the sent message. | [optional] 
**sourceAddressCountry** | **String** | Country associated with the source address | [optional] 
**timestamp** | **Date** | Date time at which this message was received | [optional] 


<a name="ActionEnum"></a>
## Enum: ActionEnum


* `OPTOUT` (value: `"OPTOUT"`)

* `OPTIN` (value: `"OPTIN"`)

* `GLOBALOPTOUT` (value: `"GLOBALOPTOUT"`)




<a name="FormatEnum"></a>
## Enum: FormatEnum


* `SMS` (value: `"SMS"`)

* `VOICE` (value: `"VOICE"`)




