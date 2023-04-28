import { BASE_URL } from "../ApiConfig";

const ChampsService = {
    getAll: () => {
        return fetch(`${BASE_URL}/data/en_US/champion.json`).then(res => res.json());
    },
    getOne: (id: string) => {
        return fetch(`${BASE_URL}/data/en_US/champion/${id}.json`).then(res => res.json());
    },
    getImg: (id: string) => {
        return `${BASE_URL}/img/champion/${id}.png`
    }
}

export default ChampsService;