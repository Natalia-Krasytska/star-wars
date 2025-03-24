import React from 'react';
import Hero from "./Hero.jsx";
import FriendList from "./FriendList.jsx";
import StoryText from "./StoryText.jsx";

const Main = () => {
    return (
        <main className="clearfix">
            <Hero/>
            <FriendList/>
            <StoryText/>
        </main>
    );
};

export default Main;