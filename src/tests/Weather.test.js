import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import Weather from "../components/weather";

test('render content', () => {
    
    const data = {
        locationName:'Spain', 
        temperature:20, 
        condition:'soleado', 
        precip:4,
       
    }
    render(<Weather {...data} />);
    screen.getByText(/Spain/);
    screen.getByText(/20º/);
    screen.getByText(/soleado/);
   // screen.getByText(/description1/);
   // screen.getByText(/no acepta colab/);
});
   