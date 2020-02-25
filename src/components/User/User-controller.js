
import React from 'react';
import View from './User-view';

class User extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        };
    };
    render() {
        return (
            <View
                id={this.props.id}
                name={this.props.name}
            />
        );
    }
}
export default User;
