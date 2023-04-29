import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './champsPage.scss';
import ChampsService from '../../services/ChampsServices';
import MenuWrapper from '../../Components/MenuWrapper';


const ChampsPage = () => {
    const navigate = useNavigate()

    const [champList, setChampList] = useState({});


    useEffect(() => {
        ChampsService.getAll().then(data => setChampList(data.data));
    }, [])

    console.log(champList)


    const arrayItems = [{ id: 1 }, { id: 2 }, { id: 3 },]

    return (
        <MenuWrapper>
            <div className='champs-page-title'>ChampsPage</div>
            <div className='all-champs-container'>
                {Object.values(champList).map((champ: any) => (
                    <div key={champ.key} className='all-champs-item' onClick={() => navigate(`${champ.id}`)}>
                        <div className='all-champs-title'>{champ.name}</div>
                        <img src={ChampsService.getImg(champ.id)} />
                    </div>

                ))}
            </div>
        </MenuWrapper>
    )
}

export default ChampsPage;