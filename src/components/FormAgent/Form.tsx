import React from "react";
import Menubar from "../Menu/Menubar";
import "./Form.css";
import user from "../../img/user.png"

const Form = () => {

    return (
        <>
            <Menubar/>

            <div className={"container-fluid"} id={"form"} >

               <div>
                   <h3 id={"title"}>
                       <p id={"text"}>Register Agent</p>
                       <img src={user} id={"user"}/>
                   </h3>
               </div>

                    <div className={"datosFormulario"}>
                        <form>

                            <div className={"form-floating"}>
                                <input placeholder={"Ingrese su nombre"} type={"text"} name={"nombreEstudiante"} required
                                        className={"form-control"} autoComplete={"off"}/><br/>
                                <label htmlFor={"Nombre"}>Nombre</label>
                            </div>

                            <div className={"form-floating"}>
                                <input placeholder={"Ingrese su apellido"} type={"text"} name={"apellidoEstudiante"} required
                                        className={"form-control"} autoComplete={"off"}/><br/>
                                <label htmlFor={"Apellido"}>Apellido</label>
                            </div>

                            <div className={"form-floating"}>
                                <input placeholder={"Ingrese su matricula"} type={"text"} name={"matriculaEstudiante"} required
                                      className={"form-control"} autoComplete={"off"}/><br/><br/>
                                <label htmlFor={"Matricula"} >Matricula</label>
                            </div>

                            <div className={"form-floating"}>
                                <input placeholder={"Ingrese su matricula"} type={"text"} name={"matriculaEstudiante"} required
                                       className={"form-control"} autoComplete={"off"}/><br/><br/>
                                <label htmlFor={"Matricula"} >Matricula</label>
                            </div>

                            <div className={"form-floating"}>
                                <input placeholder={"Ingrese su matricula"} type={"text"} name={"matriculaEstudiante"} required
                                       className={"form-control"} autoComplete={"off"}/><br/><br/>
                                <label htmlFor={"Matricula"} >Matricula</label>
                            </div>

                            <div className={"form-floating"}>
                                <input placeholder={"Ingrese su matricula"} type={"text"} name={"matriculaEstudiante"} required
                                       className={"form-control"} autoComplete={"off"}/><br/><br/>
                                <label htmlFor={"Matricula"} >Matricula</label>
                            </div>

                            <div className={"form-floating"}>
                                <input placeholder={"Ingrese su matricula"} type={"text"} name={"matriculaEstudiante"} required
                                       className={"form-control"} autoComplete={"off"}/><br/><br/>
                                <label htmlFor={"Matricula"} >Matricula</label>
                            </div>

                            {/*<button type={"submit"} id={"SaveButtonForm"} className={"btn btn-primary"}>Guardar</button>*/}
                            <button className="btn btn-primary" id={"SaveButtonForm"}>Register</button>
                        </form>
                    </div>
            </div>


        </>
    )
}


export default Form;