
import React from 'react';
import './style.css';
import{ i_idCrd } from '../../data/images';

function View(props){
    const {
        id,
        name
    } = props;
    return(
        <div className="User">
            <img src={i_idCrd.img_id_card} className="img-card" alt="card" />
            <span>{id + " - " + name}</span>
        </div>
    );
}
export default View;
