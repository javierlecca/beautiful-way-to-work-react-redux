import { type as findResultsType } from '../actions/users-list-filter';
import {userList}  from '../../data/user-list';
const defaultState = userList;

function reducer(state = defaultState, { type, payload }) {
    switch (type) {
        case findResultsType: {
            if(payload.length >0){
                return defaultState.filter(dt => dt.name.indexOf(payload) >= 0);
            }else{
                return payload || defaultState;
            }
        }
        default:
            return state;
    }
}

export default reducer;