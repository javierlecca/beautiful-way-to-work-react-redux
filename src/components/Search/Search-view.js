
import React from 'react';
import './style.css';

function View(props){
    const {
        match,
        setwordToSearch
    } = props
    return(
        <div className="Search">
            <input type="text" placeholder="busca un usuario" onChange={setwordToSearch}/>
            <div className="Search" onClick={match}>Buscar</div>
        </div>
    );
}
export default View;
