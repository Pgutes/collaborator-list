
import './App.css';
import { useState } from 'react';
import data from './data/data';
import Nav from './components/Nav.jsx';
import List from './components/List.jsx';
import Insert from './components/Insert.jsx'
import Swal from 'sweetalert2';

function App() {
  const [collaborators, setCollaborators] = useState (data);
  const [searchTerm,setSearch] =useState("");
  const [nextId, setNextId] = useState(data.length + 1);
  const handleAddCollaborator = (collaborator) =>{

    const errorMessages ={
      name: "El colaborador ya existe con ese nombre!",
      email: "El colaborador ya existe con ese email!",
    };
    const collaboratorExists = (field) =>
      collaborators.some((existingCollaborator) =>
          existingCollaborator[field].toLowerCase() ===
          collaborator[field].toLowerCase()
      );
    for (const field in errorMessages) {
      if (collaboratorExists(field)) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: errorMessages[field],
          footer: "<a href=''>Necesitas ayuda?</a>",
        });
        return;
      }
    }

    const updateCollaborator = {
      ...collaborator,
      id: nextId,
    };
    setCollaborators([...collaborators, updateCollaborator])
    setNextId(nextId + 1);
  }
  const handleSearchChange = (value) => {
    setSearch(value);
  }
  
  return (
    <div className="container-fluid">
      <Nav onSearchChange={handleSearchChange}/>
      <div className="container">
        <h1>Lista de Colaboradores</h1>
        <Insert onSubmit={handleAddCollaborator}/>
        <List collaborators={collaborators} searchTerm={searchTerm}/>
      </div>
    </div>
  );
}

export default App;
