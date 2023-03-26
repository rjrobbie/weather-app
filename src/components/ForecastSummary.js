import React from 'react'

function ForecastSummary(props) {
    const {
        date,
        description,
        icon,
        temperatureMin,
        temperatureMax
    } = props;

  return (
    <div className="forecast-summary">
        <div className='forecast-summary__date'>
            {date}
        </div>
        <div className='forecast-summary__icon'>
            {icon}
        </div>
        <div className='forecast-summary__temperatureMin'>
            {temperatureMin}
        </div>
        <div className='forecast-summary__temperatureMax'>
            {temperatureMax}
        </div>
        <div className='forecast-summary__description'>
            {description}
        </div>
    </div>
  )
}

export default ForecastSummary;
