import React, { useEffect, useState } from 'react'
import ItemsServices from '../../services/ItemsServices'
import MenuWrapper from '../../Components/MenuWrapper'

const ItemsPage = () => {
    const [itemList, setItemList] = useState({})

    useEffect(() => {
        ItemsServices.getAll().then(data => {
            return setItemList(data.data);
        });
    }, [])

    console.log(itemList)


    return (
        <MenuWrapper>
            <div>ItemsPage</div>
            {Object.entries(itemList).map((item: any) => (
                <>
                    <div>{item[0]}</div>
                    {/* <img src={ItemsServices.getImg(item[0])}/> */}
                    <div>{item[1].description}</div>
                </>
            ))}
        </MenuWrapper>
    )
}

export default ItemsPage