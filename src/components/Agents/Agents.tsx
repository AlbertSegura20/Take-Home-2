import type { FC } from "react";
import React, { useState, useEffect } from "react";
import { IAgent } from "../../types/Agent";
import axios from "axios";
import './Agent.css'
import './Agents.css'
import Menubar from "../Menu/Menubar";
import UpdateOrDeleteModalAgent from "../Modal/UpdateOrDeleteModalAgent";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import AddReviewAgentModal from "../Modal/AddReviewAgentModal";
// @ts-ignore
import { ToastContainer } from 'react-toastify/dist/react-toastify.esm';
import "react-toastify/dist/ReactToastify.css";
import {
  deleteAgentNotification_,
  reviewNotification_, sizeFileNotification_,
  sizeFileNotificationUndefined_, updateAgentNotification_
} from "../Notifications/Notifications";
import AgentCards from "./AgentCards";





const Agents: FC = () => {
  const [agents, setAgents] = useState<IAgent[]>([]);
  const [allAgentsCopy, setAllAgentsCopy] = useState<IAgent[]>([]);
  const [modal, setModal] = useState(false);
  const [agentModalInfo, setAgentModalInfo] = useState(false);
  const [id, setId] = useState<String>();
  const [firstName, setFirstName] = useState<String>();
  const [lastName, setLastnName] = useState<String>();
  const [photo, setPhoto] = useState<String>();
  const [agentLicense, setAgentLicense] = useState<String>();
  const [address, setAddress] = useState<String>();
  const [practiceAreas, setPracticeAreas] = useState<String>();
  const [aboutMe, setAboutMe] = useState<String>();
  const [review, setReview] = useState<String>();
  const [allReviews, setAllReviews] = useState<String[]>();
  const [isSearchBarActived] = useState<boolean>(true);
  const [search, setSearch] = useState<String>();
  const [sizeFile, setSizeFile] = useState<any>();

  const AgentInfo = async (agent: IAgent) => {
    setId(agent.id);
    setFirstName(agent.firstName);
    setLastnName(agent.lastName);
    setPhoto(photo);
    setAgentLicense(agent.agentLicence);
    setAddress(agent.address);
    setPracticeAreas(agent.practiceAreas.toString());
    setAboutMe(agent.aboutMe);

    await getAllReviews(agent.id);

    CloseModal();

  }

  const AgentInfoUpdateOrDelete = async (agent: IAgent) => {
    setId(agent.id);
    setFirstName(agent.firstName);
    setLastnName(agent.lastName);
    setPhoto(photo);
    setAgentLicense(agent.agentLicence);
    setAddress(agent.address);
    setPracticeAreas(agent.practiceAreas.toString());
    setAboutMe(agent.aboutMe);

    await getAllReviews(agent.id);

    CloseAgentModalInfo();
  }



  const CloseModal = () => {
    setModal(!modal);
  }

  const CloseAgentModalInfo = () => {
    setAgentModalInfo(!agentModalInfo);
  }


  useEffect(() => {
    async function fetchInitialData() {
      const response = await axios.get("/agents");
      setAgents(response.data);
      setAllAgentsCopy(response.data);

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
      case "review":
        setReview(target.value);
    }

  }

  const updateOrDeleteAgent = async (e:any) => {
    e.preventDefault();

    if(e.target.value === "updateAgent")
      await updateAgentSubmitModal(e)
    if(e.target.value === "deleteAgent")
      await deleteAgentSubmitModal(e)

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

    if(sizeFile === undefined){
       sizeFileNotificationUndefined_(true);
    }else{
      if(sizeFile.size > 75000){
        sizeFileNotification_(true);
      }else{
        const response = await axios.put("/updateAgent", obj);
        updateAgentNotification_(response.data);
        setAgentModalInfo(!agentModalInfo);
        await getAllAgents();
      }
    }

  }

  const deleteAgentSubmitModal = async(e:any) => {

    e.preventDefault();

    const obj = {
      id: id
    }

    const response = await axios.delete("/deleteAgent", {data: obj})
    deleteAgentNotification_(response.data);
    await getAllAgents();
    setAgentModalInfo(!agentModalInfo);
  }

  const addReview = async(e:any) => {
    e.preventDefault();
    const obj = {
      id: id,
      review: review
    }

    let agentID: String = obj.id!;

    let response = await axios.post("/addReview", obj);
    reviewNotification_(response.data);
    await getAllReviews(agentID);
    e.target.reset();

  }

  const handleChangeSearch = ({target}:{target:any}) => {
      setSearch(target.value);
  }

  const handleSubmitSearch = (e:any) => {
    e.preventDefault();

    let searchWord = search?.toUpperCase();

    let arraycopy = allAgentsCopy;
      let result = arraycopy.filter((agent) => {
        let word = `${agent.firstName} ${agent.lastName} ${agent.agentLicence} ${agent.address} ${agent.practiceAreas}
                    ${agent.aboutMe} ${agent.id}`.toUpperCase();
          return word.indexOf(searchWord!) >= 0; });

    setAgents(result);


    if(searchWord?.length! === 0){
      setAgents(allAgentsCopy);
    }

  }


  return (
      <React.Fragment>

        <Menubar isSearchBarActived={isSearchBarActived} handleChangeSearch={handleChangeSearch} handleSubmitSearch={handleSubmitSearch}/>

        <AddReviewAgentModal modal={modal} CloseModal={CloseModal} addReview={addReview}
                             updateChangeAgentModal={updateChangeAgentModal} firstName={firstName!} lastName={lastName!}
                             agentLicense={agentLicense!} address={address!} practiceAreas={practiceAreas!}
                             aboutMe={aboutMe!} allReviews={allReviews!}/>



        <UpdateOrDeleteModalAgent agentModalInfo={agentModalInfo} CloseAgentModalInfo={CloseAgentModalInfo} updateOrDeleteAgent={updateOrDeleteAgent}
                                  updateChangeAgentModal={updateChangeAgentModal} firstName={firstName!} lastName={lastName!}
                                  agentLicense={agentLicense!} address={address!} practiceAreas={practiceAreas!}
                                  aboutMe={aboutMe!} allReviews={allReviews!}/>

        <ToastContainer theme={"colored"} />

      {agents.map((agent) => (

          <AgentCards agent={agent} key={agent.id} AgentInfo={AgentInfo} AgentInfoUpdateOrDelete={AgentInfoUpdateOrDelete}/>


      ))}



      </React.Fragment>
  );
};

export default Agents;
