import axios from 'axios';

const BASE_URL = 'https://apimocha.com/buildingmng';

export default {
    async getBuildingInfo() {
        let endpoint = '/floors';
        return await axios.get(BASE_URL + endpoint);
    },
};
