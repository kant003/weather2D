import { getByText, prettyDOM, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import WheatherPhases from "../components/WheatherPhases";
import mock from '../components/mock'

test('render content', () => {
    const astro = mock.forecast.forecastday[0].astro
    render(<WheatherPhases astro={astro}></WheatherPhases>);
    screen.getByText(/Salida: 06:48 AM/);
    screen.getByText(/Puesta: 09:39 PM/);
});
   