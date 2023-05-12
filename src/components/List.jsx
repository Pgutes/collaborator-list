import React, {useState} from "react"

const List = ({collaborators, searchTerm})=>{
    const filteredCollaborators = collaborators.filter((collaborator) => {
        const searchValue = searchTerm.toLowerCase()
        return(
            collaborator.name.toLowerCase().includes(searchValue) ||
            collaborator.email.toLowerCase().includes(searchValue) ||
            collaborator.id.toString().includes(searchValue)
        );
    });
    return (
        <table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Nombre</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody>
    {filteredCollaborators.map((collaborator)=>{
        
        return(
            <tr key={collaborator.id}>
            <td>{collaborator.id}</td>
            <td>{collaborator.name}</td>
            <td>{collaborator.email}</td>
            </tr>
        )
    })}
  </tbody>
</table>
    )
}


export default List;