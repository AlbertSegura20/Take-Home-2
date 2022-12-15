import React, {FC, useState} from "react";
import Menubar from "../Menu/Menubar";
import "./Form.css";
import axios from "axios";
import FormUI from "./FormUI";

const Form: FC = () => {

    const [firstName, setFirstName] = useState<String>();
    const [lastName, setLastnName] = useState<String>();
    const [photo, setPhoto] = useState<String>();
    const [agentLicense, setAgentLicense] = useState<String>();
    const [address, setAddress] = useState<String>();
    const [practiceAreas, setPracticeAreas] = useState<String>();
    const [aboutMe, setAboutMe] = useState<String>();
    const [review, setReview] = useState<String>();

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

                // console.log(file.size);
                // if(file.size > 74600){
                //     alert("Imagen muy grande")
                //     target.reset();
                // }else{
                    const reader = new FileReader();
                    reader.onloadend = () => {
                        setPhoto(reader.result?.toString())
                    }
                    reader.readAsDataURL(file);

                // }
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

        await axios.post("/newAgent", obj)

    }


    return (
        <>
            <Menubar/>

            <FormUI handleChange={handleChange} handleSubmit={handleSubmit}/>

        </>
    )
}


export default Form;