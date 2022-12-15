import type { FC } from "react";
import React, { useState, useEffect } from "react";
import { IAgent } from "../../types/Agent";
import axios from "axios";
import './Agent.css'
import './Agents.css'
import Menubar from "../Menu/Menubar";
import ModalAgent from "../Modal/ModalAgent";
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import user from "../../img/user.png";


const Agents: FC = () => {
  const [agents, setAgents] = useState<IAgent[]>([]);
  const [modal, setModal] = useState(false);
  const [id, setId] = useState<String>();
  const [firstName, setFirstName] = useState<String>();
  const [lastName, setLastnName] = useState<String>();
  const [photo, setPhoto] = useState<String>();
  const [agentLicense, setAgentLicense] = useState<String>();
  const [address, setAddress] = useState<String>();
  const [practiceAreas, setPracticeAreas] = useState<String>();
  const [aboutMe, setAboutMe] = useState<String>();
  const [review, setReview] = useState<String>();
  const [allReviews, setAllReviews] = useState<String[]>()

  const AgentInfo = async (agent: IAgent) => {
    setId(agent.id);
    setFirstName(agent.firstName);
    setLastnName(agent.lastName);
    setPhoto("");
    setAgentLicense(agent.agentLicence);
    setAddress(agent.address);
    setPracticeAreas(agent.practiceAreas.toString());
    setAboutMe(agent.aboutMe);

    await getAllReviews(agent.id);

    CloseModal();
    console.log("AGENTINFO", agent.id);
  }

  const CloseModal = () => {
    setModal(!modal);
  }

  useEffect(() => {
    async function fetchInitialData() {
      const response = await axios.get("/agents");
      setAgents(response.data);

    }
    fetchInitialData();
  }, []);


  const getAllAgents = async () => {
    const allAgents = await axios.get("/agents");
    setAgents(allAgents.data);
  }

  const getAllReviews = async (agentId:String) => {
    const allReviews = await axios.get('/reviews', { params: { id: agentId} });
    setAllReviews(allReviews.data);
    console.log(allReviews.data);

  }

  const updateChangeAgentModal = ({target} : {target:any}) => {

    switch (target.name) {
      case "firstName":
        setFirstName(target.value);
        break;
      case "lastName":
        setLastnName(target.value);
        break;
      case "photo":
        const file = target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
          setPhoto(reader.result?.toString())
        }
        reader.readAsDataURL(file);

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
      case "review":
        setReview(target.value);
    }

  }

  const updateOrDeleteAgentandAddReview = async (e:any) => {
    e.preventDefault();
    if(e.target.value === "updateAgent")
      await updateAgentSubmitModal(e)
    if(e.target.value === "deleteAgent")
      await deleteAgentSubmitModal(e)
    if(e.target.value === "addReview")
      await addReview(e)
  }

  const updateAgentSubmitModal = async (e:any) => {
    e.preventDefault();

    const obj = {
      id: id,
      firstName: firstName,
      lastName: lastName,
      photoUrl: photo,
      agentLicense: agentLicense,
      address: address,
      practiceAreas: practiceAreas,
      aboutMe: aboutMe
    }

    console.log(obj);


    const response = await axios.put("/updateAgent", obj);
    console.log(response);
    await getAllAgents();
    setModal(!modal);
  }

  const deleteAgentSubmitModal = async(e:any) => {

    e.preventDefault();

    const obj = {
      id: id
    }

    const response = await axios.delete("/deleteAgent", {data: obj})
    console.log(response);
    await getAllAgents();
    setModal(!modal);
  }

  const addReview = async(e:any) => {
    e.preventDefault();
    const obj = {
      id: id,
      review: review
    }

    let agentID: String = obj.id!;

    console.log(obj.id);
    await axios.post("/addReview", obj);
    await getAllReviews(agentID);

  }

  return (
      <>
        <Menubar/>

        <Modal isOpen={modal} toggle={CloseModal}>
          <ModalBody>
            <div>
              <div>
                <h3 id={"title"}>
                  <p id={"text"}>Register Agent</p>
                  <img src={user} id={"user"} alt={"userIcon"}/>
                </h3>
              </div>

              <form onSubmit={updateOrDeleteAgentandAddReview}>

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
                  <input placeholder={"Add your Review"} type={"text"} name={"review"} required
                         onChange={updateChangeAgentModal}  className={"form-control"} autoComplete={"off"}/><br/><br/>
                  <label htmlFor={"practiceAreas"} >Review</label>
                </div>

                <h4>Reviews</h4>
                {allReviews?.map((items:any) => <li key={items.id}>{items.review.toString()}</li>)}

                <ModalFooter>
                  <Button className="btn btn-success" id={"AddReviewButtonFormModal"} value={"addReview"} onClick={updateOrDeleteAgentandAddReview} type={"submit"}>Add Review</Button>
                  <Button className="btn btn-primary" id={"SaveButtonFormModal"} value={"updateAgent"} onClick={updateOrDeleteAgentandAddReview} type={"submit"}>Update</Button>
                  <Button className="btn btn-danger" id={"DeleteButtonFormModal"} value={"deleteAgent"} onClick={updateOrDeleteAgentandAddReview} type={"submit"}>Delete</Button>
                  <Button className="btn btn-dark" id={"CloseButtonFormModal"} onClick={CloseModal}>Close</Button>
                </ModalFooter>

              </form>


            </div>

          </ModalBody>

        </Modal>


      {agents.map((agent) => (

          <div className="container" onClick={() => AgentInfo(agent)} key={agent.id}>
            <header>
              <div className="avatar-holder">
                <img src={agent.photoUrl} className="avatar" alt={agent.firstName} />
              </div>
              <h2 className="agent-name">{agent.firstName + " " + agent.lastName}</h2>
            </header>
            <div className="customContainer">{agent.aboutMe}</div>
            <footer>
              <div className="full-width-flex-box">
                <div className="one-third-flex-box">
                  <span>{agent.address}</span>
                </div>
                <div className="one-third-flex-box">
                  <span>Areas of Practice: {agent.practiceAreas}</span>
                </div>
                <div className="one-third-flex-box">
                  <span>Review: asdsaddsadsaasd</span>
                </div>
              </div>
            </footer>
          </div>

      ))}
      

      </>
  );
};

export default Agents;
