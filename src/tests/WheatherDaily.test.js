import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import mock from '../components/mock'
import WheatherDaily from "../components/WheatherDaily";

test('render content', () => {
    const hours = mock.forecast.forecastday[0].hour
    render(<WheatherDaily hours={hours}></WheatherDaily>);
    screen.getAllByText(/0:00/);
    screen.getAllByText(/1:00/);
    screen.getAllByText(/2:00/);
});
   