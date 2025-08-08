import React, { useState } from "react";
import { CSVLink } from 'react-csv';





function ExcelExport  ({name, date, email, cpf, tel}) {
    

    
    const data = [{name:name, date:date,email:email, cpf:cpf, tel:tel}];
    

    
    const headers = [{ label: 'Name', key: 'name' },{ label: 'Date', key: 'date' },{ label: 'Email', key: 'email' },{ label: 'CPF', key: 'cpf' },{ label: 'Phone', key: 'tel' }]
    

    return (
        <div >
            
            <CSVLink data={data} headers={headers} filename="data.csv">
                Submit
            </CSVLink>
        </div>
    );
};

export default ExcelExport;
function clsForm(){
    document.getElementById("new-users").reset();
}