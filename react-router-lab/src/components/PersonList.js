import React from 'react';
import axios from 'axios';

const output = axios.get("https://5000-25sonu-reactproject-thkeoygtcyw.ws-us116.gitpod.io/persons")
    const API_URL= process.env.REACT_APP_API_URL
const PersonList = () => {
    console.log(API_URL)
        
    console.log(output)

  
    
  return (
    <div>
      <h2>This is the Person List</h2>
    </div>
  );
};

export default PersonList;