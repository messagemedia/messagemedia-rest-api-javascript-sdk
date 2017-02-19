# MessagemediaRestApi.AsyncReport

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique ID for this reply | [optional] 
**messageType** | **String** |  | [optional] 
**type** | **String** |  | [optional] 
**reportStatus** | **String** |  | [optional] 
**createdDatetime** | **Date** | Date time at which this report was created. | [optional] 
**lastModifiedDatetime** | **Date** | Date time at which this report was last modified. | [optional] 


<a name="MessageTypeEnum"></a>
## Enum: MessageTypeEnum


* `SENT_MESSAGES` (value: `"SENT_MESSAGES"`)

* `RECEIVED_MESSAGES` (value: `"RECEIVED_MESSAGES"`)

* `DELIVERY_REPORTS` (value: `"DELIVERY_REPORTS"`)




<a name="TypeEnum"></a>
## Enum: TypeEnum


* `SUMMARY` (value: `"SUMMARY"`)

* `DETAIL` (value: `"DETAIL"`)




<a name="ReportStatusEnum"></a>
## Enum: ReportStatusEnum


* `REQUESTED` (value: `"REQUESTED"`)

* `RUNNING` (value: `"RUNNING"`)

* `CANCELLED` (value: `"CANCELLED"`)

* `DONE` (value: `"DONE"`)




