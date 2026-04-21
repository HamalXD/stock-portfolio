# Stock Portfolio Tracker

A frontend stock portfolio management application built with **React, TypeScript, Redux Toolkit, TanStack Table, and Recharts**.  
It allows users to manage stocks and visualize portfolio performance using interactive charts.

---

## Features

### Stock Visualization

- Line chart showing stock price trends (Recharts)
- Bar chart showing portfolio value per stock
- Fully responsive charts
- Auto-updates when portfolio changes

### Portfolio Management

- Add new stocks to portfolio
- Edit existing stocks
- Delete stocks from portfolio
- Persistent state using localStorage

### Stock Data Table

- Built using TanStack Table
- Displays:
  - Ticker
  - Company Name
  - Quantity
  - Purchase Price
  - Current Price
- Actions column (Edit / Delete)

### Form System

- Custom modal
- Add / Edit stock in same form
- Basic validation (required fields + numeric checks)
- Inline error messages

### Navigation

- Simple navbar routing:
  - Dashboard (Charts)
  - Portfolio (Table)

---

## Tech Stack

- React (Vite)
- TypeScript
- Redux Toolkit
- React Router DOM
- TanStack Table
- Recharts
- Tailwind CSS

---

## 📦 Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/HamalXD/stock-portfolio.git
cd stock-portfolio
```

### 2. Install dependencies

```bash

npm install
```

### 3. Run the development server

```bash

npm run dev
```
