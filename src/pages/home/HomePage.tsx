import React from 'react'
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate(); 

  return (
    <>
      <div>home</div>
      <div onClick={() => navigate("/champs")}>champs</div>
      <div onClick={() => navigate("/items")}>items</div>
    </>

  )
}

export default HomePage;
