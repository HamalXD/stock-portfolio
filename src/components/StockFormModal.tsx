import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import type { TStocks } from "../types";
import { addStock, updateStock } from "../pages/portfolio/slice/portfolioSlice";

interface Props {
  open: boolean;
  onClose: () => void;
  editStock?: TStocks | null;
}

export default function StockFormModal({ open, onClose, editStock }: Props) {
  const dispatch = useDispatch();

  const [form, setForm] = useState<TStocks>({
    id: "",
    ticker: "",
    companyName: "",
    quantity: 0,
    purchasePrice: 0,
    currentPrice: 0,
    date: "",
  });

  useEffect(() => {
    if (editStock) {
      setForm(editStock);
    } else {
      setForm({
        id: Date.now().toString(),
        ticker: "",
        companyName: "",
        quantity: 0,
        purchasePrice: 0,
        currentPrice: 0,
        date: "",
      });
    }
  }, [editStock]);

  if (!open) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (editStock) {
      dispatch(updateStock(form));
    } else {
      dispatch(addStock(form));
    }

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg w-100 space-y-3">
        <h2 className="font-bold text-lg">
          {editStock ? "Edit Stock" : "Add Stock"}
        </h2>

        <input
          name="ticker"
          placeholder="Ticker"
          value={form.ticker}
          onChange={handleChange}
          className="border p-2 w-full"
        />

        <input
          name="companyName"
          placeholder="Company"
          value={form.companyName}
          onChange={handleChange}
          className="border p-2 w-full"
        />

        <input
          name="quantity"
          type="number"
          value={form.quantity}
          onChange={handleChange}
          className="border p-2 w-full"
        />

        <input
          name="purchasePrice"
          type="number"
          value={form.purchasePrice}
          onChange={handleChange}
          className="border p-2 w-full"
        />

        <input
          name="currentPrice"
          type="number"
          value={form.currentPrice}
          onChange={handleChange}
          className="border p-2 w-full"
        />

        <input
          name="date"
          type="date"
          value={form.date}
          onChange={handleChange}
          className="border p-2 w-full"
        />

        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="border px-4 py-2 rounded">
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
