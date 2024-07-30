import { ErrorMessage } from './styles';

interface WeatherErrorProps {
    message: string;
}

const WeatherError = ({ message }: WeatherErrorProps) => {
    return <ErrorMessage>{message}</ErrorMessage>;
};

export default WeatherError;
