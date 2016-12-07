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
**format** | [**MessageFormat**](MessageFormat.md) |  | [optional] 
**id** | **String** | Unique ID for this message | [optional] 
**inResponseTo** | **String** | If this message was sent in response to a received message (an auto response message for example) this is the ID of the received message. | [optional] 
**metadata** | **Object** | Metadata associated with this message | [optional] 
**sourceAddress** | **String** | Address this message was sent from | [optional] 
**sourceAddressCountry** | **String** | Country associated with the source address | [optional] 
**timestamp** | **Date** | Date time at which this message was submitted to the API, refer to the delivered timestamp for the time at which the message was delivered (or failed to be delivered) to the destination address. | [optional] 


