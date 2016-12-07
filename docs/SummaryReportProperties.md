# MessagemediaRestApi.SummaryReportProperties

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**endDate** | **Date** | The end date provided as a parameter for this report | [optional] 
**filters** | **Object** | Any filters provided as parameters for this report | [optional] 
**grouping** | **String** | The value of the group by parameter provided for this report | [optional] 
**startDate** | **Date** | The end date provided as a parameter for this report | [optional] 
**summary** | **String** | The value of the summary_by parameter provided for this report | [optional] 
**summaryField** | **String** | The value of the summary_field parameter provided for this report | [optional] 
**timezone** | **String** |  | [optional] 


<a name="GroupingEnum"></a>
## Enum: GroupingEnum


* `DAY` (value: `"DAY"`)

* `DELIVERY_REPORT` (value: `"DELIVERY_REPORT"`)

* `DESTINATION_ADDRESS` (value: `"DESTINATION_ADDRESS"`)

* `DESTINATION_ADDRESS_COUNTRY` (value: `"DESTINATION_ADDRESS_COUNTRY"`)

* `FORMAT` (value: `"FORMAT"`)

* `HOUR` (value: `"HOUR"`)

* `METADATA_KEY` (value: `"METADATA_KEY"`)

* `METADATA_VALUE` (value: `"METADATA_VALUE"`)

* `MINUTE` (value: `"MINUTE"`)

* `MONTH` (value: `"MONTH"`)

* `SOURCE_ADDRESS` (value: `"SOURCE_ADDRESS"`)

* `SOURCE_ADDRESS_COUNTRY` (value: `"SOURCE_ADDRESS_COUNTRY"`)

* `STATUS` (value: `"STATUS"`)

* `STATUS_CODE` (value: `"STATUS_CODE"`)

* `YEAR` (value: `"YEAR"`)




<a name="SummaryEnum"></a>
## Enum: SummaryEnum


* `COUNT` (value: `"COUNT"`)

* `SUM` (value: `"SUM"`)




<a name="SummaryFieldEnum"></a>
## Enum: SummaryFieldEnum


* `UNITS` (value: `"UNITS"`)

* `MESSAGE_ID` (value: `"MESSAGE_ID"`)




