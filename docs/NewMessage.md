# MessagemediaRestApi.NewMessage

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**callbackUrl** | **String** | URL replies and delivery reports to this message will be pushed to | [optional] 
**content** | **String** | Content of the message | [optional] 
**destinationNumber** | **String** | Destination number of the message | [optional] 
**deliveryReport** | **Boolean** | Request a delivery report for this message | [optional] [default to false]
**format** | **String** | Format of message, SMS or VOICE. | [optional] [default to &#39;SMS&#39;]
**messageExpiryTimestamp** | **Date** | Date time after which the message expires and will not be sent | [optional] 
**metadata** | **Object** | Metadata for the message specified as a set of key value pairs, each key can be up to 100 characters long and each value can be up to 256 characters long &#x60;&#x60;&#x60; {    \&quot;myKey\&quot;: \&quot;myValue\&quot;,    \&quot;anotherKey\&quot;: \&quot;anotherValue\&quot; } &#x60;&#x60;&#x60;  | [optional] 
**scheduled** | **Date** | Scheduled delivery date time of the message | [optional] 
**sourceNumber** | **String** |  | [optional] 
**sourceNumberType** | **String** | Type of source address specified, this can be INTERNATIONAL, ALPHANUMERIC or SHORTCODE | [optional] 


<a name="FormatEnum"></a>
## Enum: FormatEnum


* `SMS` (value: `"SMS"`)

* `VOICE` (value: `"VOICE"`)




<a name="SourceNumberTypeEnum"></a>
## Enum: SourceNumberTypeEnum


* `INTERNATIONAL` (value: `"INTERNATIONAL"`)

* `ALPHANUMERIC` (value: `"ALPHANUMERIC"`)

* `SHORTCODE` (value: `"SHORTCODE"`)




