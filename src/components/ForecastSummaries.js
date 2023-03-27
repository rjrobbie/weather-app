import React from 'react';
import ForecastSummary from './ForecastSummary';

function ForecastSummaries ({ forecasts = [] }) {
    console.log(forecasts);
  return (
    <div className="forecast-summaries">
      {forecasts.map(forecast => (
        <ForecastSummary
          key={forecast.date}
          description={forecast.description}
          icon={forecast.icon}
          temperature={forecast.temperature}
        />
      ))}
    </div>
  )
};

export default ForecastSummaries;
