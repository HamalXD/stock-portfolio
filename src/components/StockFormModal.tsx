import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { addStock, updateStock } from "../pages/portfolio/slice/portfolioSlice";

import type { TStocks } from "../types";

export default function StockFormModal({ open, onClose, editStock }: any) {
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

  const [errors, setErrors] = useState<any>({});

  useEffect(() => {
    if (editStock) setForm(editStock);
    else
      setForm({
        id: Date.now().toString(),
        ticker: "",
        companyName: "",
        quantity: 0,
        purchasePrice: 0,
        currentPrice: 0,
        date: "",
      });

    setErrors({});
  }, [editStock]);

  if (!open) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.type === "number" ? +e.target.value : e.target.value,
    });
  };

  // This is basic validation for the form
  const validate = () => {
    const err: any = {};

    if (!form.ticker.trim()) err.ticker = "Ticker is required";

    if (!form.companyName.trim()) err.companyName = "Company is required";

    if (form.quantity <= 0) err.quantity = "Must be greater than 0";

    if (form.purchasePrice <= 0) err.purchasePrice = "Must be greater than 0";

    if (form.currentPrice <= 0) err.currentPrice = "Must be greater than 0";

    if (!form.date) err.date = "Date is required";

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const submit = () => {
    if (!validate()) return;

    if (editStock) dispatch(updateStock(form));
    else dispatch(addStock(form));

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white w-120 rounded-2xl shadow-xl p-6 space-y-5">
        {/* HEADER */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            {editStock ? "Edit Stock" : "Add Stock"}
          </h2>
          <p className="text-sm text-gray-500">
            Manage your investment details
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {/* Ticker */}
          <div>
            <label className="text-sm text-gray-600">Ticker</label>
            <input
              name="ticker"
              value={form.ticker}
              onChange={handleChange}
              placeholder="AAPL"
              className="w-full mt-1 border rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            {errors.ticker && (
              <p className="text-red-500 text-xs mt-1">{errors.ticker}</p>
            )}
          </div>

          {/* Company */}
          <div>
            <label className="text-sm text-gray-600">Company</label>
            <input
              name="companyName"
              value={form.companyName}
              onChange={handleChange}
              placeholder="Apple Inc."
              className="w-full mt-1 border rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            {errors.companyName && (
              <p className="text-red-500 text-xs mt-1">{errors.companyName}</p>
            )}
          </div>

          {/* Quantity */}
          <div>
            <label className="text-sm text-gray-600">Quantity</label>
            <input
              type="number"
              name="quantity"
              value={form.quantity}
              onChange={handleChange}
              className="w-full mt-1 border rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            {errors.quantity && (
              <p className="text-red-500 text-xs mt-1">{errors.quantity}</p>
            )}
          </div>

          {/* Purchase Price */}
          <div>
            <label className="text-sm text-gray-600">Purchase Price</label>
            <input
              type="number"
              name="purchasePrice"
              value={form.purchasePrice}
              onChange={handleChange}
              className="w-full mt-1 border rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            {errors.purchasePrice && (
              <p className="text-red-500 text-xs mt-1">
                {errors.purchasePrice}
              </p>
            )}
          </div>

          {/* Current Price */}
          <div>
            <label className="text-sm text-gray-600">Current Price</label>
            <input
              type="number"
              name="currentPrice"
              value={form.currentPrice}
              onChange={handleChange}
              className="w-full mt-1 border rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            {errors.currentPrice && (
              <p className="text-red-500 text-xs mt-1">{errors.currentPrice}</p>
            )}
          </div>

          {/* Date */}
          <div>
            <label className="text-sm text-gray-600">Purchase Date</label>
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className="w-full mt-1 border rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            {errors.date && (
              <p className="text-red-500 text-xs mt-1">{errors.date}</p>
            )}
          </div>
        </div>

        {/* BUTTONS */}
        <div className="flex justify-end gap-3 pt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg border hover:bg-gray-100"
          >
            Cancel
          </button>

          <button
            onClick={submit}
            className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            {editStock ? "Update Stock" : "Add Stock"}
          </button>
        </div>
      </div>
    </div>
  );
}
