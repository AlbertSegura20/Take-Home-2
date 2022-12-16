import React, {ChangeEventHandler, FormEventHandler} from "react";
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';
import user from "../../img/user.png";

const UpdateOrDeleteModalAgent = ({agentModalInfo, CloseAgentModalInfo, updateOrDeleteAgent,
                                      updateChangeAgentModal, firstName, lastName, agentLicense, address, practiceAreas, aboutMe, allReviews}
                                      : {agentModalInfo:boolean, CloseAgentModalInfo:any, updateOrDeleteAgent:FormEventHandler,
    updateChangeAgentModal:ChangeEventHandler, firstName:String, lastName:String,
    agentLicense:String, address:String, practiceAreas:String, aboutMe:String, allReviews: String[] }) => {

    return (

        <>
            <Modal isOpen={agentModalInfo} toggle={CloseAgentModalInfo}>
                    <h3 id={"titleUpdateorDeleteAgentModal"}>
                        <p id={"text"}>Edit or Delete Agent</p>
                        <img src={user} id={"editUser"} alt={"userIcon"}/>
                    </h3>
                <ModalBody>
                    <div>

                        <form onSubmit={updateOrDeleteAgent} id={"myForm"}>

                            <div className={"form-floating"}>
                                <input placeholder={"Add your FirstName"} type={"text"} name={"firstName"} defaultValue={firstName?.toString()} required
                                       onChange={updateChangeAgentModal} className={"form-control"} autoComplete={"off"}/><br/>
                                <label htmlFor={"firstName"}>First Name</label>
                            </div>

                            <div className={"form-floating"}>
                                <input placeholder={"Add your LastName"} type={"text"} name={"lastName"} defaultValue={lastName?.toString()} required
                                       onChange={updateChangeAgentModal} className={"form-control"} autoComplete={"off"}/><br/>
                                <label htmlFor={"lastName"}>Last Name</label>
                            </div>

                            <div className={"form-floating"}>
                                <input type={"file"} name={"photo"}  placeholder={"Add your Photo"} multiple accept={"image/*"}
                                       onChange={updateChangeAgentModal} className={"form-control"} autoComplete={"off"}/><br/>
                                <label htmlFor={"photoUrl"} >Photo</label>
                            </div>


                            <div className={"form-floating"}>
                                <input placeholder={"Add your License"} type={"text"} name={"agentLicense"} defaultValue={agentLicense?.toString()} required
                                       onChange={updateChangeAgentModal} className={"form-control"} autoComplete={"off"}/><br/>
                                <label htmlFor={"agentLicense"} >Agent License</label>
                            </div>

                            <div className={"form-floating"}>
                                <input placeholder={"Add your Address"} type={"text"} name={"address"} defaultValue={address?.toString()} required
                                       onChange={updateChangeAgentModal}  className={"form-control"} autoComplete={"off"}/><br/>
                                <label htmlFor={"Address"} >Address</label>
                            </div>

                            <div className={"form-floating"}>
                                <input placeholder={"Add your PracticeAreas"} type={"text"} name={"practiceAreas"} defaultValue={practiceAreas?.toString()} required
                                       onChange={updateChangeAgentModal}  className={"form-control"} autoComplete={"off"}/><br/>
                                <label htmlFor={"practiceAreas"} >Practice Areas</label>
                            </div>

                            <label>About me</label>
                            <textarea rows={4} name={"aboutMe"} defaultValue={aboutMe?.toString()}
                                      onChange={updateChangeAgentModal}   className='form-control'
                                      placeholder='Add information about yourself' /><br/>


                            <div className={"form-floating"}>
                                <input placeholder={"Add your Review"} type={"text"} name={"review"} disabled
                                       onChange={updateChangeAgentModal}  className={"form-control"} autoComplete={"off"}/><br/><br/>
                                <label htmlFor={"practiceAreas"} >Review</label>
                            </div>

                            <h4>Reviews</h4>
                            {allReviews?.map((items:any) => <li key={items.id}>{items.review.toString()}</li>)}

                            <ModalFooter>
                                <Button className="btn btn-primary" id={"SaveButtonFormModal"} value={"updateAgent"} onClick={updateOrDeleteAgent} type={"submit"}>Update</Button>
                                <Button className="btn btn-danger" id={"DeleteButtonFormModal"} value={"deleteAgent"} onClick={updateOrDeleteAgent} type={"submit"}>Delete</Button>
                                <Button className="btn btn-dark" id={"CloseButtonFormModal"} onClick={CloseAgentModalInfo}>Close</Button>
                            </ModalFooter>

                        </form>

                    </div>

                </ModalBody>

            </Modal>

        </>
    )
}

export default UpdateOrDeleteModalAgent;