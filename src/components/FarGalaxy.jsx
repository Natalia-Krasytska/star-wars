import {useEffect, useState} from "react";
import {base_url} from "../utils/constants.js";

const FarGalaxy = () => {
    const [openingCrawl, setOpenningCrawl] = useState('Loading...');

    useEffect(() => {
        const episode = Math.floor(Math.random() * 6 + 1);
        fetch(`${base_url}/v1/films/3`)
            .then(response => response.json())
            .then(data => setOpenningCrawl(data.opening_crawl))


    }, [])

    return (
        <p className="farGalaxy">
            {openingCrawl}
        </p>
    );
};

export default FarGalaxy;