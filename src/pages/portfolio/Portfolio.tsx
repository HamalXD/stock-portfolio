import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

import type { RootState } from "../../app/store";
import type { TStocks } from "../../types";

import StockFormModal from "../../components/StockFormModal";
import Table from "../../components/Table";
import { deleteStock } from "./slice/portfolioSlice";
import { portfolioColumns } from "../../hooks/usePorfolioTableColumns";

export default function Portfolio() {
  const dispatch = useDispatch();

  const stocks = useSelector((state: RootState) => state.portfolio);

  const [open, setOpen] = useState(false);
  const [editStock, setEditStock] = useState<TStocks | null>(null);

  const handleAdd = () => {
    setEditStock(null);
    setOpen(true);
  };

  const handleEdit = (stock: TStocks) => {
    setEditStock(stock);
    setOpen(true);
  };

  const handleDelete = (id: string) => {
    dispatch(deleteStock(id));
  };

  const columns = portfolioColumns({
    onEdit: handleEdit,
    onDelete: handleDelete,
  });

  return (
    <div className="p-6 space-y-4">
      <div className="flex justify-between">
        <h1 className="text-xl font-bold">My Portfolio</h1>

        <button
          onClick={handleAdd}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add Stock
        </button>
      </div>

      <Table data={stocks} columns={columns} />

      <StockFormModal
        open={open}
        onClose={() => setOpen(false)}
        editStock={editStock}
      />
    </div>
  );
}
