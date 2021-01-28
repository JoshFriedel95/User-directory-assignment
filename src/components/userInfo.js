import React from 'react'

function UserInfo(props) {

    return (
        <div className='user-info-container'>
            <div className='User-info'>
                <h1 className='User-name-displayed'>{props.currentUser.name.first} {props.currentUser.name.last} </h1>
                <div>
                    <h2>From: {props.currentUser.city}, {props.currentUser.country}</h2>
                    <h2>Job Title: {props.currentUser.title}</h2>
                    <h2>Employer: {props.currentUser.employer}</h2>
                </div>
                <div>
                    <h2>Favorite Movies:</h2>
                    <ol>
                        <li>{props.currentUser.favoriteMovies[0]}</li>
                        <li>{props.currentUser.favoriteMovies[1]}</li>
                        <li>{props.currentUser.favoriteMovies[2]}</li>
                    </ol>
                </div>
            </div>
            <h1 className="id-counter">{props.currentUser.id}/25</h1>
        </div >
    )
}

export default UserInfo