import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import mock from '../components/mock'
import WeatherDaySummary from "../components/WeatherDaySummary";

test('render content', () => {
    const day = mock.forecast.forecastday[0].day
    render(<WeatherDaySummary day={day}></WeatherDaySummary>);
    screen.getByText(/Temperatura media: 23º/);
});
   