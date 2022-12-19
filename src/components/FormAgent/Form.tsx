import React, {FC, useState} from "react";
import Menubar from "../Menu/Menubar";
import "./Form.css";
import axios from "axios";
import FormUI from "./FormUI";
// @ts-ignore
import { ToastContainer } from 'react-toastify/dist/react-toastify.esm';
import "react-toastify/dist/ReactToastify.css";

import {
    newAgentNotification_,
    sizeFileNotification_,
    sizeFileNotificationUndefined_
} from "../Notifications/Notifications";

const Form: FC = () => {

    const [firstName, setFirstName] = useState<String>();
    const [lastName, setLastnName] = useState<String>();
    const [photo, setPhoto] = useState<String>();
    const [agentLicense, setAgentLicense] = useState<String>();
    const [address, setAddress] = useState<String>();
    const [practiceAreas, setPracticeAreas] = useState<String>();
    const [aboutMe, setAboutMe] = useState<String>();
    const [isSearchBarActived] = useState<boolean>(false);
    const [sizeFile, setSizeFile] = useState<any>();

    const handleChange = ({target} : {target:any}) => {

        switch (target.name) {
            case "firstName":
                setFirstName(target.value);
                break;
            case "lastName":
                setLastnName(target.value);
                break;
            case "photo":
                const file = target.files[0];

                if(file === undefined){
                    sizeFileNotificationUndefined_(true);
                }else{
                    setSizeFile(file);
                    const reader = new FileReader();
                    reader.onloadend = () => {
                        setPhoto(reader.result?.toString())
                    }
                    reader.readAsDataURL(file);
                }
                break;
            case "agentLicense":
                setAgentLicense(target.value);
                break;
            case "address":
                setAddress(target.value);
                break;
            case "practiceAreas":
                setPracticeAreas(target.value);
                break;
            case "aboutMe":
                setAboutMe(target.value);
                break;
        }

    }

    const handleSubmit = async (e:any) => {
        e.preventDefault();

        const obj = {
            firstName: firstName,
            lastName: lastName,
            photoUrl: photo,
            agentLicense: agentLicense,
            address: address,
            practiceAreas: practiceAreas,
            aboutMe: aboutMe
        }

        if(sizeFile === undefined){
            sizeFileNotificationUndefined_(true)
        }else{
            if(sizeFile.size > 75000){
                sizeFileNotification_(true);
            }else{
                const response = await axios.post("/newAgent", obj)
                newAgentNotification_(response.data);
                e.target.reset();
            }
        }

    }


    return (
        <>
            <Menubar isSearchBarActived={isSearchBarActived} handleSubmitSearch={() => ""} handleChangeSearch={() => ""}/>
            <ToastContainer theme={"colored"}/>
            <FormUI handleChange={handleChange} handleSubmit={handleSubmit}/>

        </>
    )
}


export default Form;