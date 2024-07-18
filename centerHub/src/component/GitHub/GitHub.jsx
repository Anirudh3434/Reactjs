import React from "react";
import { useLoaderData } from "react-router-dom";

function GitHub() {
    let data = useLoaderData();
   
    

    return (
        <div style={{ backgroundColor: 'grey', padding: '10px', borderRadius: '5px' }}>
            <span>Your GitHub follower count is: {data.followers}</span>
        </div>
    );
}


export default GitHub

export async function gitinfo() {
    const response = await fetch('https://api.github.com/users/Anirudh3434');
    if (!response.ok) {
        throw new Error('Failed to fetch GitHub data');
    }
    return response.json();
}
