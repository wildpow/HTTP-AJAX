import axios from 'axios'

export const GET_FRIENDS = 'GET_FRIENDS';
export const ADD_FRIEND = 'ADD_FRIEND';

export const getFriends = () => {
    const apiUrl = 'http://localhost:5000/friends';
    const friendsRequest = axios.get(apiUrl);

    return {
        type: GET_FRIENDS,
        payload:  friendsRequest
    }
}

export const addFriend = (friendData) => {
    const update = axios.post('http://localhost:5000/new-friend', friendData);

    return {
        type: ADD_FRIEND,
        payload: update
    }
}