import React from 'react';

import './Person.css';

const Person = (props) => {

    const personNames = [
        {'name': 'John Doe'},
        {'name': 'Mica Roxas'},
        {'name': 'John Wick'}
    ];
    
    const randomNumber = (min, max) => {
        return Math.floor(Math.random() * max) + min;
    }

    const luckyNumber = randomNumber(0, personNames.length);
    const name = personNames[luckyNumber]['name'];

    return (
        <div className="Person">
            <p onClick={props.parentClick}>Role: {props.role} --- occupied by {name}! {props.children}</p>
            <input id={props.id} type="text" onChange={props.changeRole} value={props.role} />
        </div>
    );
};

export default Person;
