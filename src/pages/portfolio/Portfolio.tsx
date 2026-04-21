import type { ColumnDef } from "@tanstack/react-table";
import { useSelector } from "react-redux";
import type { TStocks } from "../../types";
import type { RootState } from "../../app/store";
import Table from "../../components/Table";

export default function Portfolio() {
  const stocks = useSelector((state: RootState) => state.portfolio);

  const columns: ColumnDef<TStocks, string>[] = [
    {
      accessorKey: "ticker",
      header: "Ticker",
    },
    {
      accessorKey: "companyName",
      header: "Company Name",
    },
    {
      accessorKey: "quantity",
      header: "Quantity",
    },
    {
      accessorKey: "purchasePrice",
      header: "Purchase Price",
    },
    {
      accessorKey: "currentPrice",
      header: "Current Price",
    },
    {
      accessorKey: "date",
      header: "Date",
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">My Portfolio</h1>

      <Table data={stocks} columns={columns} />
    </div>
  );
}
