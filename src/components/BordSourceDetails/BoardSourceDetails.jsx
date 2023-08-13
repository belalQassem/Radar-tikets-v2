import React from 'react'
import { Details } from './style'
import CustomInput from '../CustomInput/CustomInput';

const BoardSourceDetails = ({formData, onChange}) => {
  return (
    <Details>
    <CustomInput
        inputConfig={{
            Label:"رقم اللوحة",
            HtmlFor: "type",
            Id: 'type',
            ClassName: 'NumberBoard',
            Type: 'text',
            Value: formData.type,
            OnChange: onChange,
        }}

        Span="0825624"
    />
    <CustomInput
        inputConfig={{
            Label: 'نوع اللوحه',
            HtmlFor: "boardSource",
            Id: 'boardSource',
            ClassName: 'board',
            Type: 'text',
            Value: formData.boardSource,
            OnChange: onChange,
        }}
        Span="خصوصي"
    />
    <CustomInput
        inputConfig={{
            Label: 'مصدر اللوحه',
            HtmlFor: "boardSourceCountry",
            Id: 'boardSourceCountry',
            ClassName: 'board',
            Type: 'text',
            Value: formData.boardSourceCountry,
            OnChange: onChange,
        }}
        Span="الشارقه"
    />
    <CustomInput
        inputConfig={{
            Label: 'صنف اللوحه',
            HtmlFor: "boardSourceCategory",
            Id: 'boardSourceCategory',
            ClassName: 'board',
            Type: 'text',
            Value: formData.boardSourceCategory,
            OnChange: onChange,
        }}
        Span="خصوصي"
    />
    <CustomInput
        inputConfig={{
            Label: 'لون وفئه اللوحه',
            HtmlFor: "boardSourceColor",
            Id: 'boardSourceColor',
            ClassName: 'colorBoard',
            Type: 'text',
            Value: formData.boardSourceColor,
            OnChange: onChange,
        }}
        Span="الفئه الاولى"
    />
    <CustomInput
        inputConfig={{
            Label: 'رقم المشغل',
            HtmlFor: "operatorNumber",
            Id: 'operatorNumber',
            ClassName: 'board',
            Type: 'text',
            Value: formData.operatorNumber,
            OnChange: onChange,
        }}
        Span="معروف"
    />
    <CustomInput
        inputConfig={{
            Label: 'رقم الموقع',
            HtmlFor: "locationNumber",
            Id: 'locationNumber',
            ClassName: 'board',
            Type: 'text',
            Value: formData.locationNumber,
            OnChange: onChange,
        }}
        Span="دبي"
    />
</Details>
    
  )
}
export default BoardSourceDetails;

