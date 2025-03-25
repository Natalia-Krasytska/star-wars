import React from 'react';
import {starWarsInfo} from "../utils/constants.js";

const StarWars = () => {
    return (
        <div>
            {starWarsInfo}

        </div>
    );
};

export default StarWars;
export const base_url = `https://sw-info-api.herokuapp.com`;