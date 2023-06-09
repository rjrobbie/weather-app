import React from "react";

const ForecastSummary = (props) => {
    const { date, icon, temperature, description } = props;
  
    return (
      <div className="forecast-summary" data-testid="forecast-summary">
        <div className="forecast-summary__date">{date}</div>
        <div className="forecast-summary__icon" data-testid="forecast-icon">
          {icon}
        </div>
        <div className="forecast-summary__temperature">
          {temperature.max}&deg;C
        </div>
        <div className="forecast-summary__description">{description}</div>
      </div>
    );
  };

export default ForecastSummary;