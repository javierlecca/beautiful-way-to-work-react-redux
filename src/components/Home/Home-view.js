
import React from 'react';
import './style.css';
import Search from '../Search/Search-controller';
import UserList from '../UserList/UserList-controller';

function View(){
    return(
        <div className="Home">
            <div className="title">
                FILTER USERS
            </div>
            <div className="content">
                <div className="filters">
                    <div className="search">
                        <Search/>
                    </div>
                </div>
                <div className="list">
                    <UserList/>
                </div>
            </div>
        </div>
    );
}
export default View;
