import React from "react";

import "./profile_description.styles.css"


const ProfileDescription = () => {
    const balance = 49.99
    const username = "Varun Kumar"
    return (
        <div className="profile-description">
            <img 
                className="profile-picture"
                src="https://media.istockphoto.com/id/1298261537/vector/blank-man-profile-head-icon-placeholder.jpg?s=612x612&w=0&k=20&c=CeT1RVWZzQDay4t54ookMaFsdi7ZHVFg2Y5v7hxigCA="
                alt=""
            />
            <h1 className="user-name">{username}</h1>
            <h2 className="balance-header">Balance: ${balance}</h2>
            <button className="add-funds">Add Funds</button>
        </div>
    );
};
export default ProfileDescription;