import {Button, Modal, ModalBody, ModalFooter} from "reactstrap";
import user from "../../img/user.png";
import React, {ChangeEventHandler, FormEventHandler} from "react";

const AddReviewAgentModal = ({modal, CloseModal, addReview,
                                 updateChangeAgentModal, firstName, lastName, agentLicense, address, practiceAreas, aboutMe, allReviews}
                                 : {modal:boolean, CloseModal:any, addReview:FormEventHandler,
    updateChangeAgentModal:ChangeEventHandler, firstName:String, lastName:String,
    agentLicense:String, address:String, practiceAreas:String, aboutMe:String, allReviews: String[] }) => {

    return (


        <Modal isOpen={modal} toggle={CloseModal}>
            <h3 id={"title"}>
                <p id={"text"}>Add Review</p>
                <img src={user} id={"user"} alt={"userIcon"}/>
            </h3>

            <ModalBody>
                <div>

                    <form onSubmit={addReview} id={"myForm"}>

                        <div className={"form-floating"}>
                            <input placeholder={"Add your FirstName"} type={"text"} name={"firstName"} defaultValue={firstName?.toString()} disabled
                                   onChange={updateChangeAgentModal} className={"form-control"} autoComplete={"off"}/><br/>
                            <label htmlFor={"firstName"}>First Name</label>
                        </div>

                        <div className={"form-floating"}>
                            <input placeholder={"Add your LastName"} type={"text"} name={"lastName"} defaultValue={lastName?.toString()} disabled
                                   onChange={updateChangeAgentModal} className={"form-control"} autoComplete={"off"}/><br/>
                            <label htmlFor={"lastName"}>Last Name</label>
                        </div>

                        <div className={"form-floating"}>
                            <input type={"file"} name={"photo"}  placeholder={"Add your Photo"} multiple accept={"image/*"} disabled
                                   onChange={updateChangeAgentModal} className={"form-control"} autoComplete={"off"}/><br/>
                            <label htmlFor={"photoUrl"} >Photo</label>
                        </div>


                        <div className={"form-floating"}>
                            <input placeholder={"Add your License"} type={"text"} name={"agentLicense"} defaultValue={agentLicense?.toString()} disabled
                                   onChange={updateChangeAgentModal} className={"form-control"} autoComplete={"off"}/><br/>
                            <label htmlFor={"agentLicense"} >Agent License</label>
                        </div>

                        <div className={"form-floating"}>
                            <input placeholder={"Add your Address"} type={"text"} name={"address"} defaultValue={address?.toString()} disabled
                                   onChange={updateChangeAgentModal}  className={"form-control"} autoComplete={"off"}/><br/>
                            <label htmlFor={"Address"} >Address</label>
                        </div>

                        <div className={"form-floating"}>
                            <input placeholder={"Add your PracticeAreas"} type={"text"} name={"practiceAreas"} defaultValue={practiceAreas?.toString()} disabled
                                   onChange={updateChangeAgentModal}  className={"form-control"} autoComplete={"off"}/><br/>
                            <label htmlFor={"practiceAreas"} >Practice Areas</label>
                        </div>

                        <label>About me</label>
                        <textarea rows={6} name={"aboutMe"} defaultValue={aboutMe?.toString()} readOnly
                                  onChange={updateChangeAgentModal}   className='form-control'
                                  placeholder='Add information about yourself' /><br/>


                        <div className={"form-floating"}>
                            <input placeholder={"Add your Review"} type={"text"} name={"review"} required
                                   onChange={updateChangeAgentModal}  className={"form-control"} autoComplete={"off"}/><br/><br/>
                            <label htmlFor={"practiceAreas"} >Review</label>
                        </div>

                        <h4>Reviews</h4>
                        {allReviews?.map((items:any) => <li key={items.id}>{items.review.toString()}</li>)}

                        <ModalFooter>
                            <Button className="btn btn-success" id={"AddReviewButtonFormModal"}  type={"submit"}>Add Review</Button>
                            <Button className="btn btn-dark" id={"CloseButtonFormModal"} onClick={CloseModal}>Close</Button>
                        </ModalFooter>

                    </form>

                </div>

            </ModalBody>

        </Modal>
    )
}


export default AddReviewAgentModal;