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
      <h4>COURSE</h4>
      <h5>{hole.course}</h5>
      <h4>HOLE 1</h4>
      <h5>Strokes: {hole.hole1}</h5>
      <h3>HOLE 2 </h3>
      <h4>Strokes: {hole.hole2}</h4>
      <h3>HOLE 3</h3>
      <h4>Strokes: {hole.hole3}</h4>
      <h3>HOLE 4</h3>
      <h4>Strokes: {hole.hole4}</h4>
      <h3>HOLE 5</h3>
      <h4>Strokes: {hole.hole5}</h4>
      <h3>HOLE 6</h3>
      <h4>Strokes: {hole.hole6}</h4>
      <h3>HOLE 7 </h3>
      <h4>Strokes: {hole.hole7}</h4>
      <h3>HOLE 8</h3>
      <h4>Strokes: {hole.hole8}</h4>
      <h3>HOLE 9</h3>
      <h4>Strokes: {hole.hole9}</h4>
      <h3>HOLE 10</h3>
      <h4>Strokes: {hole.hole10}</h4>
      <h3>HOLE 11</h3>
      <h4>Strokes: {hole.hole11}</h4>
      <h3>HOLE 12</h3>
      <h4>Strokes: {hole.hole12}</h4>
      <h3>HOLE 13</h3>
      <h4>Strokes: {hole.hole13}</h4>
      <h3>HOLE 14</h3>
      <h4>Strokes: {hole.hole14}</h4>
      <h3>HOLE 15</h3>
      <h4>Strokes: {hole.hole15}</h4>
      <h3>HOLE 16</h3>
      <h4>Strokes: {hole.hole16}</h4>
      <h3>HOLE 17</h3>
      <h4>Strokes: {hole.hole17}</h4>
      <h3>HOLE 18</h3>
      <h4>Strokes: {hole.hole18}</h4>
      <h3>TOTAL: {totalScore(hole)}</h3>
      <h3>Average: {gameAvg(hole)}</h3>
      <h5>TimeStamp: {hole.timeStamp}</h5>
      <h3>{gameScore}</h3>
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