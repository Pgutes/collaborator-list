import React, { useState, useRef } from "react";
import Swal from "sweetalert2";

const Insert = ({ onSubmit }) =>{
    const [collaborator,setCollaborator] = useState ({
        id:0,
        name:'',
        email:'',
    });
    const [inputClasses, setInputClasses] = useState({
        name: "form-control",
        email: "form-control"
    })
    const nameInputRef = useRef(null);
    const emailInputRef = useRef(null);
    const handleChange = (e) =>{
        setCollaborator({
            ...collaborator,
            [e.target.id]: e.target.value
        })
        setInputClasses({
            ...inputClasses,
            [e.target.id]: e.target.value.trim() == "" ? "form-control is invalid" : "form-control is valid"
        });
    }
    const saveCollaborator= (e) =>{
        e.preventDefault();
        if(!collaborator.name || !collaborator.email){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Debes completar todos los campos!',
                footer: '<a href="">Necesitas ayuda?</a>'
            }).then(() => {
                setInputClasses({
                    name: collaborator.name.trim() === "" ? "form-control is-invalid" : "form-control is-valid",
                    email: collaborator.email.trim() === "" ? "form-control is-invalid" : "form-control is-valid"
                });
                if (!collaborator.name) {
                    nameInputRef.current.focus();

                } else if (!collaborator.email) {
                    emailInputRef.current.focus();
                }
            });
            
            return;
        }
        e.preventDefault();
        onSubmit(collaborator);
    }
    return(
        <form onSubmit={saveCollaborator}>
  <div className="mb-3">
    <label for="name" className="form-label">Nombre</label>
    <input type="text" className={inputClasses.name} id="name" onChange={handleChange} ref={nameInputRef}/>
  </div>
  <div className="mb-3">
    <label for="email" className="form-label">Email</label>
    <input type="email" className={inputClasses.email} id="email" onChange={handleChange} ref={emailInputRef}/>
  </div>
  <button type="submit" className="btn btn-primary">Guardar</button>
</form>
    )
    
}

export default Insert;