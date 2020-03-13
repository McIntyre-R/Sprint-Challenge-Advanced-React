import React from 'react'

function PlayerCard(props) {
return(
    <div>
        <h1>{props.player.name}</h1>
        <p> Country: {props.player.country}</p>
        <p> Searches: {props.player.searches}</p>
    </div>
)
}
export default PlayerCard;