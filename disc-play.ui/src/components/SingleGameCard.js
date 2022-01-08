import React from 'react';
import PropTypes from 'prop-types';

function SingleGameCard({
  hole,
  gameScore
}) {
  function totalScore(holeInfo) {
    let total = 0;
    total += Number(holeInfo.hole1);
    total += Number(holeInfo.hole2);
    total += Number(holeInfo.hole3);
    total += Number(holeInfo.hole4);
    total += Number(holeInfo.hole5);
    total += Number(holeInfo.hole6);
    total += Number(holeInfo.hole7);
    total += Number(holeInfo.hole8);
    total += Number(holeInfo.hole9);
    total += Number(holeInfo.hole10);
    total += Number(holeInfo.hole11);
    total += Number(holeInfo.hole12);
    total += Number(holeInfo.hole13);
    total += Number(holeInfo.hole14);
    total += Number(holeInfo.hole15);
    total += Number(holeInfo.hole16);
    total += Number(holeInfo.hole17);
    total += Number(holeInfo.hole18);

    return total;
  }

  function gameAvg(holeInfo) {
    let avg = 0;
    avg += Number(holeInfo.hole1);
    avg += Number(holeInfo.hole2);
    avg += Number(holeInfo.hole3);
    avg += Number(holeInfo.hole4);
    avg += Number(holeInfo.hole5);
    avg += Number(holeInfo.hole6);
    avg += Number(holeInfo.hole7);
    avg += Number(holeInfo.hole8);
    avg += Number(holeInfo.hole9);
    avg += Number(holeInfo.hole10);
    avg += Number(holeInfo.hole11);
    avg += Number(holeInfo.hole12);
    avg += Number(holeInfo.hole13);
    avg += Number(holeInfo.hole14);
    avg += Number(holeInfo.hole15);
    avg += Number(holeInfo.hole16);
    avg += Number(holeInfo.hole17);
    avg += Number(holeInfo.hole18);
    avg /= 18;
    return avg.toFixed(2);
  }

  return (
    <div>
      <h1>COURSE</h1>
      <h2>{hole.course}</h2>
      <h2>HOLE 1</h2>
      <h3>Strokes: {hole.hole1}</h3>
      <h2>HOLE 2 </h2>
      <h3>Strokes: {hole.hole2}</h3>
      <h2>HOLE 3</h2>
      <h3>Strokes: {hole.hole3}</h3>
      <h2>HOLE 4</h2>
      <h3>Strokes: {hole.hole4}</h3>
      <h2>HOLE 5</h2>
      <h3>Strokes: {hole.hole5}</h3>
      <h2>HOLE 6</h2>
      <h3>Strokes: {hole.hole6}</h3>
      <h2>HOLE 7 </h2>
      <h3>Strokes: {hole.hole7}</h3>
      <h2>HOLE 8</h2>
      <h3>Strokes: {hole.hole8}</h3>
      <h2>HOLE 9</h2>
      <h3>Strokes: {hole.hole9}</h3>
      <h2>HOLE 10</h2>
      <h3>Strokes: {hole.hole10}</h3>
      <h2>HOLE 11</h2>
      <h3>Strokes: {hole.hole11}</h3>
      <h2>HOLE 12</h2>
      <h3>Strokes: {hole.hole12}</h3>
      <h2>HOLE 13</h2>
      <h3>Strokes: {hole.hole13}</h3>
      <h2>HOLE 14</h2>
      <h3>Strokes: {hole.hole14}</h3>
      <h2>HOLE 15</h2>
      <h3>Strokes: {hole.hole15}</h3>
      <h2>HOLE 16</h2>
      <h3>Strokes: {hole.hole16}</h3>
      <h2>HOLE 17</h2>
      <h3>Strokes: {hole.hole17}</h3>
      <h2>HOLE 18</h2>
      <h3>Strokes: {hole.hole18}</h3>
      <h2>TOTAL: {totalScore(hole)}</h2>
      <h2>Average: {gameAvg(hole)}</h2>
      <h5>TimeStamp: {hole.timeStamp}</h5>
      <h2>{gameScore}</h2>
      <footer>&#169; 2022</footer>
    </div>
  );
}

SingleGameCard.propTypes = {
  hole: PropTypes.object,
  total: PropTypes.number,
  avg: PropTypes.string,
  timeStamp: PropTypes.any,
  gameScore: PropTypes.string,
};

export default SingleGameCard;