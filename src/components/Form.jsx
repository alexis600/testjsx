import { render } from "@testing-library/react";
import { React, useState } from "react";

const Form  = ()=> {

    const [nombre, setNombre] = useState("");
    const [edad, setEdad] = useState("");

    const Validar = (evento)=> {
        evento.preventDefault();
        console.log("pulsado boton")
        if (!nombre.trim()) {
            console.log("el nombre esta vacío");
            return
        }
        if (!edad.trim()) {
            console.log("la edad esta vacía");
            return
        }
    }

    return (        
        <div className="d-grid gap-2">
            <br></br>
            <form className="form-group d-grid gap-2"
            onSubmit={Validar}>
                <input 
                    placeholder="ingrese el nombre" 
                    className="form-control mb-2" 
                    type="text"
                    onChange={(evt)=>{setNombre(evt.target.value)}}
                />
                <input 
                    placeholder="ingrese la edad" 
                    className="form-control mb-2" 
                    type="text"
                    onChange={(evt)=>{setEdad(evt.target.value)}}
                />
                <input 
                    className="btn btn-primary" 
                    type="submit"
                />
            </form>
        </div>
    )
}

export default Form;