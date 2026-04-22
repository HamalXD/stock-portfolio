import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../app/store";
import StockFormModal from "../StockFormModal";

describe("StockFormModal", () => {
  test("shows validation errors when submitting empty form", () => {
    render(
      <Provider store={store}>
        <StockFormModal open={true} onClose={jest.fn()} />
      </Provider>,
    );

    const button = screen.getByRole("button", {
      name: /add stock|update stock/i,
    });

    fireEvent.click(button);

    expect(
      screen.getAllByText(/required|invalid|must/i).length,
    ).toBeGreaterThan(0);
  });
});
