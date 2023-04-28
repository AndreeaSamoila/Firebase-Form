import React,  from "react";
import {Stack, Select, OutlinedInput, Chip, MenuItem} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";


export default function MultipleDropdown({sources, selectedSources,setSelectedSources, handleChangeSelectedSource}) {

    return (
       <div>
            <Select fullWidth
                className="flex grow focus:ring-blue-500 focus:border-blue-500"

                multiple
                value={selectedSources}
                onChange={ handleChangeSelectedSource }
                input={<OutlinedInput className=" focus:ring-blue-500 focus:border-blue-700 text-gray-500 "/>}
                renderValue={(selected) => (
                    <Stack gap={1} direction="row" flexWrap="wrap">
                        {selected.map((value) => (
                            <Chip
                                className="rounded-md"
                                key={value}
                                label={value}
                                onDelete={() =>
                                    setSelectedSources(
                                        selectedSources.filter((item) => item !== value)
                                    )
                                }
                                deleteIcon={
                                    <CloseIcon
                                        onMouseDown={(event) => event.stopPropagation()}
                                    />
                                }
                            />
                        ))}
                    </Stack>
                )}
            >
                {sources.map((source) => (
                    <MenuItem sx={{ justifyContent: "space-between" }}
                              key={source}
                              value={source}>
                        {source}
                    </MenuItem>
                ))}
            </Select>
       </div>
    );
}

