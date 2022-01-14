import React, { useEffect, useState } from "react"
import Player from './Player'
import './PlayerList.css'
function PlayerList() {

    const headShotUrl = "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/"
    const [playerListArray, setPlayerListArray] = useState([]);

    useEffect(() => {
        const playerStatsUrl = "https://data.nba.com/data/v2015/json/mobile_teams/nba/2021/teams/nets/player_averages_02.json";
        const fetchData = async () => {
            try {
                
                const playerStatResponse = await fetch(playerStatsUrl)
                const playerStatJson = await playerStatResponse.json();
                const playerStatArray = playerStatJson.tpsts.pl

                setPlayerListArray(playerStatArray);

            } catch (error) {
                console.log("error", error);
            }
        };
        fetchData();
    }, []);

    return (
        <div  className='Player-Container'>
            <table className = 'Player-Row'>
                {playerListArray.map(player => {
                    return (
                        <Player key={player.pid} headShotSrc={`${headShotUrl}${player.pid}.png`} fn={player.fn} ln={player.ln} avg={player.avg} tot={player.tot} />
                    )
                })}
            </table>
        </div>
    )

}

export default PlayerList