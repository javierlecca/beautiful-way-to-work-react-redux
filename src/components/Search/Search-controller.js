
import React from 'react';
import View from './Search-view';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import userListFilter from '../../redux/actions/users-list-filter';

class Search extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            wordToSearch: ''
        };
        this.Match = this.Match.bind(this);
        this.SetwordToSearch = this.SetwordToSearch.bind(this);
    }
    
    Match = async (e) => {
        this.props.userListFilter(this.state.wordToSearch);
    }

    SetwordToSearch = async (e) => {
        this.setState({ wordToSearch: e.target.value })
    }

    render() {
        return (
            <View
                match = {this.Match}
                setwordToSearch = {this.SetwordToSearch}
            />
        );
    }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = {
    userListFilter
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Search)
);