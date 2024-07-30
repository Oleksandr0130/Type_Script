import { useState } from 'react';
import axios, { AxiosError } from 'axios';
import { WeatherPage, Button, Input, Loader } from './styles';
import WeatherInfo from './components/WeatherInfo/WeatherInfo';
import WeatherError from './components/WeatherError/WeatherError';
import { WeatherData, ErrorResponse } from './types';

const Weather = () => {
    const [city, setCity] = useState<string>('');
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const API_KEY = '11e63b6823d2a5a63a157cfce75c3ac5';

    const getWeather = async () => {
        if (!city) {
            alert('введите название города');
            return;
        }

        setLoading(true);
        setError(null);
        setWeatherData(null);

        try {
            const response = await axios.get<WeatherData>(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=ru`
            );
            setWeatherData(response.data);
        } catch (err) {
            if (axios.isAxiosError(err)) {
                const axiosError = err as AxiosError<ErrorResponse>;
                if (axiosError.response && axiosError.response.data) {
                    setError(axiosError.response.data.message);
                } else {
                    setError('Ошибка при получении данных');
                }
            } else {
                setError('Неизвестная ошибка');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <WeatherPage>
            <h1>Weather App</h1>
            <Input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Введите название города"
            />
            <Button onClick={getWeather}>Search</Button>
            {loading && <Loader />}
            {weatherData && <WeatherInfo data={weatherData} />}
            {error && <WeatherError message={error} />}
        </WeatherPage>
    );
};

export default Weather;
