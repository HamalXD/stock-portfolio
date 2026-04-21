import type { ColumnDef } from "@tanstack/react-table";
import type { TStocks } from "../../types";

interface Props {
  onEdit: (stock: TStocks) => void;
  onDelete: (id: string) => void;
}

export const portfolioColumns = ({
  onEdit,
  onDelete,
}: Props): ColumnDef<TStocks>[] => [
  {
    accessorKey: "ticker",
    header: "Ticker",
  },
  {
    accessorKey: "companyName",
    header: "Company",
  },
  {
    accessorKey: "quantity",
    header: "Quantity",
  },
  {
    accessorKey: "purchasePrice",
    header: "Buy Price",
  },
  {
    accessorKey: "currentPrice",
    header: "Current Price",
  },
  {
    accessorKey: "date",
    header: "Date of purchase",
  },
  {
    header: "Actions",
    cell: ({ row }) => {
      const stock = row.original;

      return (
        <div className="flex gap-2 items-center justify-center">
          <button
            onClick={() => onEdit(stock)}
            className="px-2 py-1 bg-yellow-500 text-white rounded"
          >
            Edit
          </button>

          <button
            onClick={() => onDelete(stock.id)}
            className="px-2 py-1 bg-red-500 text-white rounded"
          >
            Delete
          </button>
        </div>
      );
    },
  },
];
