import React from 'react';
import { WeatherData } from '../../types';
import { InfoContainer, WeatherIcon, Temp, City } from './styles';

interface WeatherInfoProps {
    data: WeatherData;
}

const WeatherInfo = ({ data }: WeatherInfoProps) => {
    return (
        <InfoContainer>
            <Temp>{Math.round(data.main.temp)}°</Temp>
            <City>{data.name}</City>
            <WeatherIcon src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`} alt={data.weather[0].description} />
        </InfoContainer>
    );
};

export default WeatherInfo;
