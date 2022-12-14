import React, {FC, useState} from "react";
import Menubar from "../Menu/Menubar";
import "./Form.css";
import user from "../../img/user.png"
import axios from "axios";
// import agent from "../Agents/Agent";

const Form: FC = () => {

    const [firstName, setFirstName] = useState<String>();
    const [lastName, setLastnName] = useState<String>();
    const [photo, setPhoto] = useState<String>();
    const [agentLicense, setAgentLicense] = useState<String>();
    const [address, setAddress] = useState<String>();
    const [practiceAreas, setPracticeAreas] = useState<String>();
    const [aboutMe, setAboutMe] = useState<String>();

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

        console.log(obj);

        await axios.post("/newAgent", obj)

    }


    return (
        <>
            <Menubar/>

            <div className={"container-fluid"} id={"form"} >

               <div>
                   <h3 id={"title"}>
                       <p id={"text"}>Register Agent</p>
                       <img src={user} id={"user"} alt={"userIcon"}/>
                   </h3>
               </div>

                    <div className={"formData"}>
                        <form onSubmit={handleSubmit}>

                            <div className={"form-floating"}>
                                <input placeholder={"Add your FirstName"} type={"text"} name={"firstName"} required
                                       onChange={handleChange} className={"form-control"} autoComplete={"off"}/><br/>
                                <label htmlFor={"firstName"}>First Name</label>
                            </div>

                            <div className={"form-floating"}>
                                <input placeholder={"Add your LastName"} type={"text"} name={"lastName"} required
                                       onChange={handleChange} className={"form-control"} autoComplete={"off"}/><br/>
                                <label htmlFor={"lastName"}>Last Name</label>
                            </div>

                            <div className={"form-floating"}>
                                <input type={"file"} name={"photo"} placeholder={"Add your Photo"} multiple accept={"image/*"}
                                       onChange={handleChange} className={"form-control"} autoComplete={"off"}/><br/><br/>
                                <label htmlFor={"photoUrl"} >Photo</label>
                            </div>


                            <div className={"form-floating"}>
                                <input placeholder={"Add your License"} type={"text"} name={"agentLicense"} required
                                       onChange={handleChange} className={"form-control"} autoComplete={"off"}/><br/><br/>
                                <label htmlFor={"agentLicense"} >Agent License</label>
                            </div>

                            <div className={"form-floating"}>
                                <input placeholder={"Add your Address"} type={"text"} name={"address"} required
                                       onChange={handleChange}  className={"form-control"} autoComplete={"off"}/><br/><br/>
                                <label htmlFor={"Address"} >Address</label>
                            </div>

                            <div className={"form-floating"}>
                                <input placeholder={"Add your PracticeAreas"} type={"text"} name={"practiceAreas"} required
                                       onChange={handleChange}  className={"form-control"} autoComplete={"off"}/><br/><br/>
                                <label htmlFor={"practiceAreas"} >Practice Areas</label>
                            </div>

                            <textarea rows={4} name={"aboutMe"}
                                      onChange={handleChange}   className='form-control'
                                      placeholder='Add information about yourself' />

                            <button className="btn btn-primary" id={"SaveButtonForm"} type={"submit"}>Register</button>
                        </form>
                    </div>
            </div>


        </>
    )
}


export default Form;