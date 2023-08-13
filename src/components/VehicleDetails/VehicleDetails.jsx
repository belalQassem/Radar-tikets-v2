import React from 'react'
import { StyledVehicleDetails } from './style'
import CustomInput from '../CustomInput/CustomInput';

const VehicleDetails = ({formData, onChange}) => {
  return (
    <StyledVehicleDetails>
<CustomInput
    inputConfig={{
        Label: 'نوع المركبه',
        HtmlFor:"vehicleType",
        Id: 'vehicleType',
        ClassName: 'Vehicle',
        Type: 'text',
        Value: formData.vehicleType,
        OnChange: onChange,
    }}
    Span="نيسان"
/>
<CustomInput
    inputConfig={{
        Label: "موديل المركبه",
        HtmlFor:"vehicleModel",
        Id: 'vehicleModel',
        ClassName: 'Vehicle',
        Type: 'text',
        Value: formData.vehicleModel,
        OnChange: onChange,
    }}
    Span="التيما"
/>
<CustomInput
    inputConfig={{
        Label: 'لون المركبه',
        HtmlFor:"vehicleColor",
        Id: 'vehicleColor',
        ClassName: 'Vehicle',
        Type: 'text',
        Value: formData.vehicleColor,
        OnChange: onChange,
    }}
    Span="أبيض"
/>
</StyledVehicleDetails>
    
  )
}
export default VehicleDetails;




