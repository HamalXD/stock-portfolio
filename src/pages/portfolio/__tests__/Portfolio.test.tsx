import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";

import Portfolio from "../Portfolio";
import { store } from "../../../app/store";

describe("Portfolio Page", () => {
  test("renders portfolio title", () => {
    render(
      <Provider store={store}>
        <Portfolio />
      </Provider>,
    );

    expect(screen.getByText(/portfolio/i)).toBeInTheDocument();
  });
});
