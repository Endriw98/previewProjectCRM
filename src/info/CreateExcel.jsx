import React, {useState} from 'react';
import ReactDataGrid from '@inovua/reactdatagrid-community';
import ExcelJS from 'exceljs';

const columns = [{name: 'name', header: 'Name', defaultFlex: 1}, {name: 'age', header: 'Age', defaultFlex: 1}];
function CreateExcel (){
    const [data, setData] = useState([]);
    const handleFileUpload = (event)=>{
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = async (e) =>{
            const workbook = new ExcelJS.Workbook();
            await workbook.xlsx.load(e.target.result);
            const worksheet = workbook.getWorksheet(1);
            const jsonData = [];

            worksheet.eachRow((row, rowNumber) => {
                jsonData.push({
                    name: row.getCell(1).value,
                    age: row.getCell(2).value
                });
            });
            setData(jsonData);
        }
        reader.readAsArrayBuffer(file);
    }
    const handleSave = ()=>{
        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet('Sheet1');

        data.forEach((rowData, index)=>{
            worksheet.addRow([rowData.name, rowData.age]);
        });
        workbook.xlsx.writeBuffer().then((buffer)=>{
            const blob = new Blob([buffer], {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = 'data.xlsx';
            link.click();
            
        });
    }
    return (
        <div>
            <input type="file" onChange={handleFileUpload} />
            <ReactDatagrid columns={columns} data={data} />
            <button onClick={handleSave}> Save </button>
            
        </div>
    )
}
export default CreatExcel;