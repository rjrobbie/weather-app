import React from "react";
import { render } from "@testing-library/react";
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
});