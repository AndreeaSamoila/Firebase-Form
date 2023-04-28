import React from "react";
import TextField from '@mui/material/TextField';


export default function InputText({className,value,handleValueChange, type}) {

    return (

        <TextField fullWidth id="outlined-basic"  variant="outlined"
                   className={className}  type={type} value={value} onChange={handleValueChange}
       />
    );
}
