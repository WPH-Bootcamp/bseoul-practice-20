import React, { useState, useEffect } from "react";

export const BatchedStateUpdates: React.FC = () => {
  const [totalScore, setTotalScore] = useState<number>(0);
  const [percentage, setPercentage] = useState<number>(0);

  const handleScoreUpdate = () => {
    setTotalScore((prev) => prev + 1);
  };

  useEffect(() => {
    setPercentage(totalScore / 100);
  }, [totalScore]);

  return (
    <div>
      <h1>Total Score : {totalScore}</h1>
      <h2>Percentage : {percentage}%</h2>

      <button onClick={handleScoreUpdate}>Increase Score</button>
    </div>
  );
};
