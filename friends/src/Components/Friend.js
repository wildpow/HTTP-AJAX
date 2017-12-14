import React from 'react';


export default class Friend extends React.Component {
    render() {
        return (
            <div className='friend'>
            
                            <li>
                                <p>{`Name: ${this.props.friend.name}`}</p>
                                <p>{`Age: ${this.props.friend.age}`}</p>
                                <p>{`Email: ${this.props.friend.email}`}</p>
                            </li>
                        
                    
            </div>
        )
    }
}
