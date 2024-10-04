import React from 'react';
// import PersonAdd from './PersonAdd';
import axios from 'axios';
// import Notification from './Notification';

import '../styles/PersonList.css'


const PersonList = () => {
  const API_URL = process.env.REACT_APP_API_URL

            const output = axios.get("https://5000-25sonu-reactproject-nqxo4v3x3i4.ws-us116.gitpod.io/persons");
            console.log(output)

           
            
            console.log(API_URL)
            

    return(
        <div className='person-list'>
            <h1>person list</h1>
        </div>
    )
}

export default PersonList;