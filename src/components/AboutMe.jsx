import { useEffect, useState } from 'react';
import { base_url } from "../utils/constants.js";
import main from "../assets/main.jpg";

const AboutMe = () => {
    const [hero, setHero] = useState(null);

    useEffect(() => {
        const fetchHero = async () => {
            try {
                const res = await fetch(`${base_url}/v1/peoples/1`);
                const data = await res.json();
                setHero(data);
            } catch {
                setHero('Error');
            }
        };

        fetchHero();
    }, []);

    if (!hero) return
    <div>Loading...</div>;

    return (
        <div className="farGalaxy">
            <img className="float-start w-25 me-3" src={main} alt="Hero" />
            {['name', 'gender', 'height', 'eye_color', 'mass', 'birth_year'].map((i) => (
                <p key={i}><strong>{i.replace('_', ' ').toUpperCase()}:</strong> {hero[i]}</p>
            ))}
        </div>
    );
};

export default AboutMe;
