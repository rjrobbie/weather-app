import React from "react";
import ForecastSummary from './ForecastSummary';

function ForecastSummaries ({forecasts}) {
    return (
      <div className="forecast-summaries">
        {forecasts.map((forecast, index) => (
          <ForecastSummary
            key={index}
            date={forecast.date}
            description={forecast.description}
            icon={forecast.icon}
            temperature={forecast.temperature}
          />
        ))}
      </div>
    )
  };

export default ForecastSummaries;
