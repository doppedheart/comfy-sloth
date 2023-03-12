import { useAuth0 } from '@auth0/auth0-react';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
const StripeCheckout = () => {
  const navigate = useNavigate();
  const {user} =useAuth0();
  useEffect(()=>{
     setInterval(()=>{
      navigate('/');
    },4000)

  },[user])
  return (
    <div>
      <h4>payment will be added shortly <br />
       till while keep in touch</h4>
    </div>
  )
}

export default StripeCheckout