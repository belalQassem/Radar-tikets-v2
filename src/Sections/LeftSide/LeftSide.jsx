import React, { useState } from 'react'
import { StyledDiv,StyledInputsDiv, Details, ItemWraper, Item, StyledSpan, StyledSpan2, Button, Label, SvgIcon, Path, StyledMdCategory, StyledSiMercedes, StyledMdOutlineColorLens, StyledBiSolidCategory, StyledFaCalendarAlt, StyledBsPersonVcardFill, StyledRiPassExpiredLine } from './style'
import Input from '../../components/Input/Input'
import { useVehicleData } from '../../context/VehicleDataContext';


const LeftSide = () => {
  const [formData, setFormData] = useState({
    fileImageName: 'carcsbbbc.png',
    date: '11/08/2018',
    toDate: '12/08/2018',
    num: 'search',
    userCode: '2555',
  });
  const { vehicleData } = useVehicleData();
  const onChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [id]: value }));
  };

  return (
    <StyledDiv>
      <StyledInputsDiv>
        <Input
          Label="file-image-Name"
          Text="اسم ملف الصوره"
          Id="fileImageName"
          ClassName="file"
          Type="text"
          Placeholder=""
          Value={formData.fileImageName}
          OnChange={onChange}
          ReadOnly={true}

        />
        <Input
          Label="date"
          Text="التاريخ"
          Id="date"
          ClassName="date"
          Type="text"
          Placeholder="dd/mm/yyyy"
          Value={formData.date}
          OnChange={onChange}
          Pattern="\d{2}/\d{2}/\d{4}"
        />
        <Input
          Label="Todate"
          Text="الى تاريخ"
          Id="toDate"
          ClassName="date"
          Type="text"
          Min="2018-01-01"
          Max="2030-12-31"
          Placeholder="dd/mm/yyyy"
          Value={formData.toDate}
          OnChange={onChange}
          Pattern="\d{2}/\d{2}/\d{4}"
        />
        <Input
          Label="num"
          Text="رقم المخالفه"
          Id="num"
          ClassName="date"
          Type="search"
          Placeholder=""
          Value={formData.num}
          OnChange={onChange}
        />
        <Input
          Label="user-code"
          Text="user code"
          Id="userCode"
          ClassName="userCode"
          Type="text"
          Placeholder=""
          Value={formData.userCode}
          OnChange={onChange}
          ReadOnly={true}

        />
      </StyledInputsDiv>

      <Details>
        <Icons Icon={StyledMdCategory} label="النوع" text={vehicleData.vehicleType} vehicleData={vehicleData}  />
        <Icons Icon={StyledSiMercedes} label="موديل" text={vehicleData.vehicleModel} vehicleData={vehicleData} />
        <Icons Icon={StyledMdOutlineColorLens} label="اللون" text={vehicleData.vehicleColor} vehicleData={vehicleData} />
        <Icons Icon={StyledBiSolidCategory} label="التصنيف"text="2" vehicleData={vehicleData}/>
        <Icons Icon={StyledFaCalendarAlt} label="السنه" text="2019" vehicleData={vehicleData} />
        <Icons Icon={StyledBsPersonVcardFill} label="TCF" text="3070435892" vehicleData={vehicleData} />
        <Icons Icon={StyledRiPassExpiredLine} label="منتهي" text="15/01/2024" vehicleData={vehicleData} />
        <Button className="button">
          <SvgIcon xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 20 20" height="20" fill="none" className="svg-icon">
            <g strokeWidth="1.5" strokeLinecap="round" stroke="#ffffff">
              <circle r="2.5" cy="10" cx="10" />
              <Path d="m8.39079 2.80235c.53842-1.51424 2.67991-1.51424 3.21831-.00001.3392.95358 1.4284 1.40477 2.3425.97027 1.4514-.68995 2.9657.82427 2.2758 2.27575-.4345.91407.0166 2.00334.9702 2.34248 1.5143.53842 1.5143 2.67996 0 3.21836-.9536.3391-1.4047 1.4284-.9702 2.3425.6899 1.4514-.8244 2.9656-2.2758 2.2757-.9141-.4345-2.0033.0167-2.3425.9703-.5384 1.5142-2.67989 1.5142-3.21831 0-.33914-.9536-1.4284-1.4048-2.34247-.9703-1.45148.6899-2.96571-.8243-2.27575-2.2757.43449-.9141-.01669-2.0034-.97028-2.3425-1.51422-.5384-1.51422-2.67994.00001-3.21836.95358-.33914 1.40476-1.42841.97027-2.34248-.68996-1.45148.82427-2.9657 2.27575-2.27575.91407.4345 2.00333-.01669 2.34247-.97026z" clipRule="evenodd"></Path>
            </g>
          </SvgIcon>
          <Label className="lable">Settings</Label>
        </Button>
      </Details>
    </StyledDiv>
  );
};


const Icons = ({ Icon, label, text,vehicleData }) => (
  <ItemWraper>
    <Item>
      <Icon />
      <StyledSpan>{label}</StyledSpan>
    </Item>
    {vehicleData && (<StyledSpan2>{text}</StyledSpan2>) }
  </ItemWraper>
);

export default LeftSide;