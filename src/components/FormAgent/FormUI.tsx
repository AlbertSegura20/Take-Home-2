import React, {ChangeEventHandler, FormEventHandler} from "react";
import user from "../../img/user.png";


const FormUI = ({handleChange, handleSubmit} : {handleChange:ChangeEventHandler, handleSubmit:FormEventHandler}) => {

    return (

        <div className={"container-fluid"} id={"form"} >

            <div>
                <h3 id={"title"}>
                    <p id={"text"}>Register Agent</p>
                    <img src={user} id={"userAgent"} alt={"userIcon"}/>
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
    )
}

export default FormUI;