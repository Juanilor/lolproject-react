import React, { useEffect, useState } from 'react'
import ItemsServices from '../../services/ItemsServices'
import MenuWrapper from '../../Components/MenuWrapper'
import './itemsPage.scss'

const ItemsPage = () => {
    const [itemList, setItemList] = useState({})
    const [item, setItem] = useState('')

    useEffect(() => {
        ItemsServices.getAll().then(data => {
            return setItemList(data.data);
        });
    }, [])

    console.log(item)

    return (
        <MenuWrapper>
            <div className='item-page-title'>ItemsPage</div>
            <div className='itemsContainer'>
                {Object.entries(itemList).map((item: any) => (
                    !(item[1].inStore === false || item[1].name === 'Obsidian Edge') ? (
                        <div className='itemI' onClick={() => setItem(item[1])}>
                            <img src={ItemsServices.getImg(item[0])} />
                            <div className='itemTitle'>{item[1].name}</div>
                        </div >
                    ) : null
                ))}
            </div>
        </MenuWrapper>
    )
}

export default ItemsPage