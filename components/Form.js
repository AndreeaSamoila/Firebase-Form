import React, {useEffect, useState} from "react";
import Dropdown from "../components/Dropdown";
import ButtonForm from "./ButtonForm";
import MultipleDropdown from "@/components/MultipleDropdown";
import {Box, Divider, FormControl, Paper} from "@mui/material";
import 'firebase/firestore';
import 'firebase/compat/firestore';
import addData from '../firebase/addData';
import getData from '../firebase/getData';
import InputText from "../components/Input";

const sources = [
    "Source 1 ",
    "Source 2",
    "Source 3"
];

export default function Form() {

    const [nameValue, setNameValue] = useState("Active input text");
    const [access, setAccess] = useState("Public");
    const [purpose, setPurpose] = useState("Support");
    const [mode, setMode] = useState("Chat");
    const [refference, setRefference] = useState("Include as link");
    const [limitValue, setLimitValue] = useState(18);
    const [contentSize, setContentSize] = useState("Large");
    const [selectedSources, setSelectedSources] = useState([sources[0], sources[1]]);

    const handleNameChange = (event) => {
        setNameValue(event.target.value);
        console.log("The name was changed");
    }
    const handleChangeDropdownAccess = (event) => {
        setAccess(event.target.value);
        console.log("Selected option for access:", event.target.value);
    }
    const handleChangeDropdownPurpose = (event) => {
        setPurpose(event.target.value);
        console.log("Selected option for purpose:", event.target.value);
    }
    const handleChangeDropdownMode = (event) => {
        setMode(event.target.value);
        console.log("Selected option for mode:", event.target.value);
    }
    const handleChangeDropdownRefference = (event) => {
        setRefference(event.target.value);
        console.log("Selected option for refference:", event.target.value);
    }
    const handleLimitValue = (event) => {
        setLimitValue(event.target.value);
        console.log("The limit value was set:", event.target.value);
    }
    const handleChangeDropdownContentSize = (event) => {
        setContentSize(event.target.value);
        console.log("Selected option for content size:", event.target.value);
    }
    const handleChangeSelectedSource = (event) => {
        setSelectedSources(event.target.value)
        console.log("Selected options for sources are:", event.target.value);
    }

    const handleSubmit = async ()  => {

        const data = {
        name: nameValue,
        access: access,
        purpose: purpose,
        mode: mode,
        refference: refference,
        limit: limitValue,
        contentSize: contentSize,
        sources:selectedSources
        }

        try {
            const {result, error} = await addData('users', (Math.floor(Math.random() * 9000) + 1000).toString(), data);
          }
          catch (error) {
                  return console.log(error)
          }
    }

    useEffect(() => {
        console.log('use')
         getData('users');
    }, [])

    return (
        <div className="flex justify-center items-center h-full">
        <Paper   elevation={0} className="max-w-screen-sm shadow-md rounded border-gray-300 ">
            <div  className=" flex flex-row  justify-between items-center px-4 pb-2 pt-3 px-md-5 mx-2 " >
                <h1 className="block mb-2  font-medium text-gray-900 dark:text-white" >General</h1>
                <ButtonForm
                    onClick={handleSubmit}
                    className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline normal-case font-normal " />
            </div>
            <Divider/>
            <FormControl
                     className=" px-4 pb-5 pt-3 px-md-5 flex flex-wrap grid grid-flow-row auto-rows-max md:auto-rows-min " sx={{ m: 1, width: 450 }}>
            <Box component="form">
                <div>
                <label className="block text-sm font-medium text-gray-900 dark:text-white">Name</label>
                <InputText
                    name="Name"
                    type="text"
                    value={nameValue}
                    handleValueChange={handleNameChange}
                    className="block w-full mt-2 text-sm text-gray-500 leading-tight rounded focus:outline-none focus: text-current focus:border-blue-700"
                />
            </div >

            <div className="flex flex-row grid grid-cols-2 gap-4 mt-4">
                <div>
                    <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">Access</label>
                    <Dropdown
                      dropDownName={access}
                      option="Public"
                      handleChangeDropdown={handleChangeDropdownAccess}
                      className="block w-full p-3 mb-6 mt-4 text-sm text-gray-500 leading-tight rounded focus:outline-none focus:ring-blue-500 focus:border-blue-700"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">Purpose</label>
                    <Dropdown
                      option="Support"
                      dropDownName={purpose}
                      handleChangeDropdown={handleChangeDropdownPurpose}
                      className="block w-full p-3 mb-6 mt-2 text-sm text-gray-500 rounded leading-tight rounded focus:outline-none focus:ring-blue-500 focus:border-blue-700"
                    />
                </div>
            </div>

            <div className="flex flex-row grid grid-cols-2 gap-4  mt-4">
                <div>
                    <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2 ">Mode</label>
                    <Dropdown
                      option="Chat"
                      dropDownName={mode}
                      handleChangeDropdown={handleChangeDropdownMode}
                      className="block w-full p-3 mb-6 mt-2 text-sm text-gray-500 rounded leading-tight rounded focus:outline-none focus:ring-blue-500 focus:border-blue-700"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">Refference</label>
                    <Dropdown
                      option="Include as link"
                      dropDownName={refference}
                      handleChangeDropdown={handleChangeDropdownRefference}
                      className="block w-full p-3 mb-6 mt-2 text-sm text-gray-500 rounded leading-tight rounded focus:outline-none focus:ring-blue-500 focus:border-blue-700"
                    />
                </div>
            </div>

            <div className="flex flex-row grid grid-cols-2 gap-4  mt-4 ">
                <div>
                    <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2 ">Limit chat to x messages</label>
                    <InputText
                    type="number"
                    value={limitValue}
                    handleValueChange={handleLimitValue}
                    className="block w-full text-sm text-gray-500 rounded leading-tight rounded focus:outline-none focus:ring-blue-500 focus:border-blue-700"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">Content Size</label>
                    <Dropdown
                      option="Large"
                      dropDownName={contentSize}
                      handleChangeDropdown={handleChangeDropdownContentSize}
                      className="block w-full p-3 mb-6 mt-2 text-sm text-gray-500 rounded leading-tight rounded focus:outline-none focus:ring-blue-500 focus:border-blue-700"
                    />
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-900  mt-4 mb-2 ">Sources</label>
                <MultipleDropdown
                name="sources"
                selectedSources={selectedSources}
                setSelectedSources={setSelectedSources}
                handleChangeSelectedSource={handleChangeSelectedSource}
                sources={sources}
                className="
                flex mb-6 rounded focus:ring-blue-500 focus:border-blue-700 text-gray-500 "
                />

            </div>
            </Box>
        </FormControl>
        </Paper>
        </div>
    );
}

