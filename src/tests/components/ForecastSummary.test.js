import React from "react";
import { getByTestId, getByText, render } from "@testing-library/react";
import ForecastSummary from "../../components/ForecastSummary";

describe("ForecastSummary", () => {
    const validProps = {
        date: 1111111,
        description: "Stub description",
        icon: "stubIcon",
        temperatureMin: 12,
        temperatureMax: 22
    };

    it("renders correctly", () => {
        const { asFragment } = render(
            <ForecastSummary 
            date={validProps.date}
            description={validProps.description}
            icon={validProps.icon}
            temperatureMin={validProps.temperatureMin}
            temperatureMax={validProps.temperatureMax}
            />
        );

        expect(asFragment()).toMatchSnapshot();
    });

    it("renders correct values for props", () => {
        const { getByText, getByTestId } = render(
            <ForecastSummary 
            date={validProps.date}
            description={validProps.description}
            icon={validProps.icon}
            temperatureMin={validProps.temperatureMin}
            temperatureMax={validProps.temperatureMax}
            />
        );

        expect(getByText("1111111")).toHaveAttribute("class", "forecast-summary__date");
        expect(getByText("Stub description")).toHaveAttribute("class", "forecast-summary__description");
        expect(getByTestId("forecast-icon")).toHaveAttribute("class", "forecast-summary__icon");
        expect(getByText("22")).toHaveAttribute("class", "forecast-summary__temperatureMax");
        expect(getByText("12")).toHaveAttribute("class", "forecast-summary__temperatureMin");
    });
});