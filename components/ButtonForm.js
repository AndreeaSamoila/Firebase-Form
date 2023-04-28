import React from "react";
import Button from '@mui/material/Button';

export default function ButtonForm({className, onClick}) {

    return (
            <Button
                    id="btn-form" className={className}  variant="contained"
                    onClick={onClick}
                     sx={{ width: "85px",
                       }}>
            Save</Button>
    );
}

