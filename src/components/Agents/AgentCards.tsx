import React from "react";
import {IAgent} from "../../types/Agent";


const AgentCards = ({agent, AgentInfo, AgentInfoUpdateOrDelete}:{agent:IAgent, AgentInfo:any, AgentInfoUpdateOrDelete:any}) => {

    return (
        <>
            <div className="container" key={agent.id}>
                <div className="dropdown">
                    <button className="btn bi bi-three-dots-vertical" data-bs-toggle="dropdown"
                            aria-expanded="false">
                    </button>
                    <ul className="dropdown-menu" >
                        <button className="dropdown-item" onClick={() => AgentInfoUpdateOrDelete(agent)}>Edit</button>
                    </ul>
                </div>

                <div className={"customContainer_"} onClick={() => AgentInfo(agent)}>

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
                    </div>
                </footer>
                </div>
            </div>


        </>
    )
}

export default AgentCards;