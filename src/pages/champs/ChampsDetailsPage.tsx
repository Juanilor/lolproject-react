import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ChampsService from '../../services/ChampsServices';
import MenuWrapper from '../../Components/MenuWrapper';


export const ChampsDetailsPage = () => {
  const params = useParams();
  const [champ, setChamp] = useState({})

    
  useEffect(() => {
    if (params.id) {
      ChampsService.getOne(params.id).then(data => setChamp(data.data));
    }
  }, [params.id])
  
  console.log(champ)

  return (
    <MenuWrapper>
      <div>ChampsDetails</div>
      <p>{params.id}</p>
    </MenuWrapper>
  )
}
