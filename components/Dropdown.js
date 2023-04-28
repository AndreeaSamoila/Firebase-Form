import React from "react";
import {FormControl, MenuItem, Select} from "@mui/material";

export default function Dropdown({ dropDownName, handleChangeDropdown, option}) {

    return (
        <div>
            <FormControl fullWidth>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={dropDownName}
                onChange={handleChangeDropdown}
            >
                <MenuItem value={option}>{option}</MenuItem>
                <MenuItem value={"option2"}>Another option 2</MenuItem>
                <MenuItem value={"option3"}>Another option 3</MenuItem>
            </Select>
            </ FormControl >
        </div>

    );
}

