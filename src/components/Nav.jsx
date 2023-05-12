import React from "react";

const Nav = ({onSearchChange}) => {
    const handleSearchChange = (e) => {
        onSearchChange(e.target.value);
    }
    return (
        <nav className="navbar bg-body-tertiary bg-dark">
            <div className="container-fluid">
            <a className="navbar-brand text-white">Buscador de Colaboradores</a>
            <form className="d-flex mx-4" role="search">
                <input className="form-control mx-2" type="search" placeholder="Buscar" aria-label="Search" onChange={handleSearchChange}/>
                <button className="btn btn-outline-success" type="submit">Buscar</button>
            </form>
            </div>
        </nav>
    )
};

export default Nav;