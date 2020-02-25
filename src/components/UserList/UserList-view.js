
import React from 'react';
import './style.css';
import User from '../User/User-controller';

function View(props){
    const {list} = props;
    return(
        <div>
            {
                list.length > 0 && list.map(l=>
                    <User
                        key={l.id}
                        id={l.id}
                        name={l.name}
                    />
                )
            }
        </div>
    );
}
export default View;
