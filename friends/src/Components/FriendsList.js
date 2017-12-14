import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFriends, addFriend } from '../actions';
import Friend from './Friend'

class FriendList extends Component {
    constructor() {
        super();

        this.state = {
            name: '',
            age: '',
            email: '',
            index: ''
        };
    }

    
    
    
    componentDidMount() {
        this.props.getFriends();
    }
    
    render() {
        
        return (
           <div>

                <ul>
                    {this.props.friends.map((friend, i) => <Friend friend={friend} key={i} index={i}/>)}
                        
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        friends: state.friends
    };
};

export default connect(mapStateToProps, { getFriends })(FriendList);