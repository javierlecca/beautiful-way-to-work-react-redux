
import React from 'react';
import View from './UserList-view';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class UserList extends React.Component {
    render() {
        return (
            <View
                list = {this.props.usersReducers}
            />
        );
    }
}



const mapStateToProps = state => ({
    usersReducers: state.usersReducers,
});

const mapDispatchToProps = {

};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(UserList)
);