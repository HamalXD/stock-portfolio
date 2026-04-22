import { render, screen } from "@testing-library/react";
import Table from "../Table";
import type { ColumnDef } from "@tanstack/react-table";

type Row = {
  ticker: string;
};

const data: Row[] = [{ ticker: "AAPL" }, { ticker: "TSLA" }];

const columns: ColumnDef<Row>[] = [
  {
    accessorKey: "ticker",
    header: "Ticker",
  },
];

describe("Table", () => {
  test("renders rows", () => {
    render(<Table data={data} columns={columns} />);

    expect(screen.getByText("AAPL")).toBeInTheDocument();

    expect(screen.getByText("TSLA")).toBeInTheDocument();
  });
});
