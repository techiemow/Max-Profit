import React, { useState } from 'react';
import './App.css';

function EarningsCalculator() {
  const [timeUnit, setTimeUnit] = useState('');
  const [targetEarnings, setTargetEarnings] = useState('');
  const [results, setResults] = useState([]);

  function findSolutions(timeUnit, targetEarnings) {
    const theatre = { time: 5, earnings: 1500, name: 'T' };
    const pub = { time: 4, earnings: 1000, name: 'P' };
    const commercialPark = { time: 10, earnings: 3000, name: 'C' };

    let solutions = [];

    function exploreCombinations(tCount, pCount, cCount, remainingTime, currentEarnings) {
        // Calculate total time used and total earnings
        const totalTime = (tCount * theatre.time) + (pCount * pub.time) + (cCount * commercialPark.time);

        // Check if we match the target earnings and if within time limit
        if (currentEarnings === targetEarnings && totalTime <= timeUnit) {
          solutions.push({ t: tCount, p: pCount, c: cCount, totalTime });
        }

        // Explore adding one property at a time if there's remaining time
        if (remainingTime > 0) {
            // Try adding a Theatre
            if (remainingTime >= theatre.time) {
                const newRemainingTime = remainingTime - theatre.time;
                exploreCombinations(tCount + 1, pCount, cCount, newRemainingTime, currentEarnings + (newRemainingTime * theatre.earnings));
            }

            // Try adding a Pub
            if (remainingTime >= pub.time) {
                const newRemainingTime = remainingTime - pub.time;
                exploreCombinations(tCount, pCount + 1, cCount, newRemainingTime, currentEarnings + (newRemainingTime * pub.earnings));
            }

            // Try adding a Commercial Park
            if (remainingTime >= commercialPark.time) {
                const newRemainingTime = remainingTime - commercialPark.time;
                exploreCombinations(tCount, pCount, cCount + 1, newRemainingTime, currentEarnings + (newRemainingTime * commercialPark.earnings));
            }
        }
    }

    // Start exploring combinations
    exploreCombinations(0, 0, 0, timeUnit, 0);
    setResults(solutions);
  }

  const handleSubmit = (e) => {

      e.preventDefault();
      const time = parseInt(timeUnit, 10);
      const earnings = parseInt(targetEarnings, 10);
      if (!isNaN(time) && !isNaN(earnings)) {
        findSolutions(time, earnings);
        setTimeUnit('');       // Reset timeUnit field
        setTargetEarnings('');  // Reset targetEarnings field
      } else {
        alert("Please enter valid numbers for time unit and target earnings.");
      }
  };
  
  

  return (
    <div className="calculator-container">

      <h2>Solutions Calculator</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label>Time Unit:</label>
          <input
            type="number"
            value={timeUnit}
            onChange={(e) => setTimeUnit(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Target Earnings:</label>
          <input
            type="number"
            value={targetEarnings}
            onChange={(e) => setTargetEarnings(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-button">Calculate</button>
      </form>

      <div className="results">
        <h3>Results</h3>
        {results.length > 0 ? (
          results.map((solution, index) => (
            <p key={index}>
              T: {solution.t}, P: {solution.p}, C: {solution.c} 
            </p>
          ))
        ) : (
          <p>No solutions found for the given parameters.</p>
        )}
      </div>
    </div>
  );
}

export default EarningsCalculator;
