import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useVehicleData } from "../../context/VehicleDataContext";

const TableContainer = styled.table`
  background-color: white;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  grid-area: Footer;
`;

const TableHeader = styled.th`
  height: 25px;
  background-color: #63afc4;
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.2rem;
`;

const TableCell = styled.td`
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  font-size: 1rem;
  background-color: ${(props) => (props.$isSelected ? "#032c36" : "")};
  color: ${(props) => (props.$isSelected ? "#fff" : "")};
  cursor: pointer;
`;

const Table = () => {
  const { vehicleData } = useVehicleData();
  const [tableHeaders] = useState([
    'الحذف',
    'الاتجاه',
    'المسرب',
    'المشغل',
    'الموقع',
    'لون اللوحة',
    'مصدر اللوحة',
    'صنف اللوحه',
    'نوع اللوحة',
    'رقم اللوحه',
    'السرعه المحدده',
    'صنف المركبه',
    'الوقت',
    'التاريخ',
    'السرعه',
  ]);

  const [tableData, setTableData] = useState([
    [
      false,
      "شرقي",
      1,
      1,
      "الشرطة",
      "2914",
      "أحمر",
      "كاميرا مراقبة",
      "رخصة قيادة",
      "123456789",
      '100km/h',
      "سيارة",
      "18:09:23",
      "2023/03/08",
      "60.68km/h",
    ],
    [
      true,
      "غربي",
      1,
      2,
      "المرور",
      "2082",
      "أخضر",
      "كاميرا مراقبة",
      "رخصة سير",
      "987654321",
      '80km/h',
      "شاحنة",
      "01:18:08",
      "2023/03/09",
      "70.2km/h",
    ],
    [
      false,
      "جنوبي",
      1,
      3,
      "الدفاع المدني",
      "2283",
      "أصفر",
      "كاميرا مراقبة",
      "ترخيص مركبة",
      "0987654321",
      '65km/h',
      "سياره",
      "16/20/12",
      "2023-03-10",
      "65.23km/h",
    ],
  ]);
  const [selectedRowIndex, setSelectedRowIndex] = useState(-1);

  const handleRowClick = (rowIndex) => {
    setSelectedRowIndex(rowIndex);
  };
//   const [vehicleData, setVehicleData] = useState({
//     type: '7845',
//     boardSource: '1',
//     boardSourceCountry: '3',
//     boardSourceCategory: '1',
//     boardSourceColor: '46',
//     operatorNumber: '2914',
//     locationNumber: '21',
//     vehicleType: '4',
//     vehicleModel: '1724',
//     vehicleColor: '200',
// });

  useEffect(() => {
    setTableData((prevTableData) => {
      const newData = [...prevTableData];
      newData.forEach((rowData, index) => {
        if (index === 0) {
          rowData[3] =  vehicleData.operatorNumber;
          rowData[4] =  vehicleData.locationNumber;
          rowData[5] = vehicleData.boardSourceColor;
          rowData[6] = vehicleData.boardSourceCountry;
          rowData[7] = vehicleData.boardSourceCategory;
          rowData[8] =  vehicleData.boardSource;
          rowData[9] = vehicleData.type;
          
        }
      });
      return newData;
    });
  }, [vehicleData]);

  return (
    <TableContainer>
      <thead>
        <tr>
          {tableHeaders.map((header, index) => (
            <TableHeader key={index}>{header}</TableHeader>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableData.map((rowData, rowIndex) => (
          <tr key={rowIndex} onClick={() => handleRowClick(rowIndex)}>
            {rowData.map((data, dataIndex) => (
              <TableCell
                key={dataIndex}
                $isSelected={selectedRowIndex === rowIndex}
              >
                {data}
              </TableCell>
            ))}
          </tr>
        ))}
      </tbody>
    </TableContainer>
  );
};

export default Table;
