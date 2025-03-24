import React from 'react';
import friend1 from "../assets/friend1.jpg";
import friend2 from "../assets/friend2.jpg";
import friend3 from "../assets/friend3.jpg";
import friend4 from "../assets/friend4.jpg";
import friend5 from "../assets/friend5.jpg";
import friend6 from "../assets/friend6.jpg";
import friend7 from "../assets/friend7.jpg";
import friend8 from "../assets/friend8.jpg";
import friend9 from "../assets/friend9.jpg";

const FriendList = () => {
    const friends = [friend1, friend2, friend3, friend4, friend5, friend6, friend7, friend8, friend9];

    return (
        <section className="float-end w-50 row border rounded-bottom-4 ms-2 me-0">
            <h2 className="col-sm-12 text-center">Dream Team</h2>
            {friends.map((friend, index) => (
                <img
                    key={index}
                    className={`col-sm-4 p-1 ${index === 6 ? 'bottomLeft' : ''} ${index === 8 ? 'bottomRight' : ''}`}
                    src={friend}
                    alt="Friend"
                />
            ))}
        </section>
    );
};



export default FriendList;