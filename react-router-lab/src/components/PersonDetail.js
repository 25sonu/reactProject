import React from 'react';
// import axios from 'axios';
import '../styles/PersonDetail.css'




const PersonDetail = () => {
  const API_URL=process.env.REACT_APP_API_URL
    return(
        <div className='person-detail'>
            <h2> This page is use for show the person details </h2>
        </div>
    )
}

export default PersonDetail;