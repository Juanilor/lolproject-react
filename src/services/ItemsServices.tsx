import { BASE_URL } from "../ApiConfig"


const ItemsServices = {
    getAll: () => {
       return fetch(`${BASE_URL}/data/en_US/item.json`).then(res => res.json())
    },
    getImg: (id: number) => {
        return (`${BASE_URL}/img/item/${id}.png`)
    }
}

export default ItemsServices