import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
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
            <div>ChampsPage</div>
            <div>
                {Object.values(champList).map((champ: any) => (
                    <div key={champ.key} onClick={() => navigate(`${champ.id}`)}>
                        <div >{champ.id}</div>
                        <img src={ChampsService.getImg(champ.id)} />
                    </div>

                ))}
            </div>
        </MenuWrapper>
    )
}

export default ChampsPage;