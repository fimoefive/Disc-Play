import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SingleGameCard from '../components/SingleGameCard';
import { getSingleGame } from '../helpers/data/GameData';

function SingleGame() {
    const [hole, setHole] = useState({});
    const { gameID } = useParams();

    useEffect(() => {
        getSingleGame(gameID).then(setHole);
    }, [gameID]);

    return (
        <div>
            <SingleGameCard hole={hole}>
                <h2>course={hole.course}</h2>
                course={hole.course}
                <h2>{hole.hole1}</h2>
                <h2>{hole.hole2}</h2>
                <h2>{hole.hole3}</h2>
                <h2>{hole.hole4}</h2>
                <h2>{hole.hole5}</h2>
                <h2>{hole.hole6}</h2>
                <h2>{hole.hole7}</h2>
                <h2>{hole.hole8}</h2>
                <h2>{hole.hole9}</h2>
                <h2>{hole.hole10}</h2>
                <h2>{hole.hole11}</h2>
                <h2>{hole.hole12}</h2>
                <h2>{hole.hole13}</h2>
                <h2>{hole.hole14}</h2>
                <h2>{hole.hole15}</h2>
                <h2>{hole.hole16}</h2>
                <h2>{hole.hole17}</h2>
                <h2>{hole.hole18}</h2>
            </SingleGameCard>
        </div>
    );
}

export default SingleGame;