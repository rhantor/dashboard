import React from "react";
import Header from "./Header";
import TopCards from "./TopCards";
import BarChart from "./BarChart";
import OrderLists from "./OrderList";

const App = () => {
  return (
    <main className="h-screen bg-gray-100 overflow-x-hidden">
      <Header />

      <TopCards />
      <div className="grid md:grid-cols-3 gap-4 p-4">
        <BarChart />
        <OrderLists />
      </div>
    </main>
  );
};

export default App;
