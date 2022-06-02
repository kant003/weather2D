import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import Weather from "../components/weather";
import { createRef } from "react";
import mock from "../components/mock";

test('render content', () => {

    const svgRef = createRef()

    render(<Weather jsonData={mock} svgRef={svgRef}></Weather>);
    screen.getByText(/Madrid/);
    screen.getByText(/Despejado/);
    screen.getByText(/18º/);
   // screen.getByText(/description1/);
   // screen.getByText(/no acepta colab/);
});
   