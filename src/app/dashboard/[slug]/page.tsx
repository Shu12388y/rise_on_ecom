"use client";
import React from "react";
import dynamic from "next/dynamic";
import "chart.js/auto";
const data = {
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  datasets: [
    {
      label: "Line Chart for products sold per months",
      data: [65, 59, 80, 81, 56, 90, 72, 88, 60, 95, 85, 75],
      fill: false,
      tension: 0,
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(255, 159, 64, 0.2)",
        "rgba(255, 205, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(201, 203, 207, 0.2)",
      ],
      borderColor: [
        "rgb(255, 99, 132)",
        "rgb(255, 159, 64)",
        "rgb(255, 205, 86)",
        "rgb(75, 192, 192)",
        "rgb(54, 162, 235)",
        "rgb(153, 102, 255)",
        "rgb(201, 203, 207)",
      ],
      borderWidth: 1,
    },
  ],
};

const Bar = dynamic(() => import("react-chartjs-2").then((mod) => mod.Bar), {
  ssr: false,
});

import Link  from "next/link";
import { Button } from "@/components/ui/button";


const Page = ({ params }: { params: { slug: string } }) => {
  const platformSales = [
    { platform: "Amazon", sales: 120, revenue: 15000, pending: 2000 },
    { platform: "Flipkart", sales: 80, revenue: 10000, pending: 1000 },
    { platform: "Meesho", sales: 50, revenue: 7000, pending: 500 },
  ];

  const productInsights = [
    { name: "Product A", sales: 60, returns: 2, inventory: 20 },
    { name: "Product B", sales: 40, returns: 1, inventory: 15 },
    { name: "Product C", sales: 20, returns: 3, inventory: 10 },
  ];

  const amazonSales = {
    totalSales: 120,
    totalRevenue: 15000,
    amountReceived: 14000,
    amountPending: 1000,
    platformSales: [
      { platform: "Amazon", sales: 120, revenue: 15000, pending: 1000 },
    ],
    productInsights: [
      { name: "Product A", sales: 60, returns: 2, inventory: 20 },
      { name: "Product B", sales: 40, returns: 1, inventory: 15 },
      { name: "Product C", sales: 20, returns: 3, inventory: 10 },
    ],
  };

  if (params.slug == "amazon") {
    return (
      <div className="min-h-screen bg-gray-100 p-4">
        <h1 className="text-2xl font-bold mb-6">Amazon Sales Dashboard</h1>

        {/* Sales Overview */}
        <section className="mb-6">
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-white p-4 shadow rounded-lg">
              <h2 className="text-lg font-semibold">Total Sales</h2>
              <p className="text-xl font-bold">{amazonSales.totalSales}</p>
            </div>
            <div className="bg-white p-4 shadow rounded-lg">
              <h2 className="text-lg font-semibold">Total Revenue</h2>
              <p className="text-xl font-bold">₹{amazonSales.totalRevenue}</p>
            </div>
            <div className="bg-white p-4 shadow rounded-lg">
              <h2 className="text-lg font-semibold">Amount Received</h2>
              <p className="text-xl font-bold">₹{amazonSales.amountReceived}</p>
            </div>
            <div className="bg-white p-4 shadow rounded-lg">
              <h2 className="text-lg font-semibold">Amount Pending</h2>
              <p className="text-xl font-bold">₹{amazonSales.amountPending}</p>
            </div>
          </div>
        </section>

        {/* Amazon Platform Sales Overview */}
        <section className="mb-6">
          <h2 className="text-xl font-bold mb-4">Amazon Sales Overview</h2>
          <div className="grid grid-cols-1 gap-4">
            {amazonSales.platformSales.map((platform) => (
              <div
                key={platform.platform}
                className="bg-white p-4 shadow rounded-lg"
              >
                <h3 className="text-lg font-semibold">{platform.platform}</h3>
                <p>Sales: {platform.sales}</p>
                <p>Revenue: ₹{platform.revenue}</p>
                <p>Pending: ₹{platform.pending}</p>
              </div>
            ))}
            <Link prefetch href="/pages/amazoninfo">
              <Button className="bg-blue-500 ">
                Sales Info
              </Button>
            </Link>
          </div>
        </section>

        {/* Amazon Sales Timeline (Placeholder for Chart) */}
        <section className="mb-6">
          <h2 className="text-xl font-bold mb-4">Sales Timeline</h2>
          <div className="bg-white p-4 shadow rounded-lg">
            <div className="h-64">
              <Bar
                data={data}
                options={{
                  responsive: true,
                  maintainAspectRatio: false, // Ensure the chart scales properly
                }}
              />
            </div>
          </div>
        </section>

        {/* Amazon Product Insights */}
        <section className="mb-6">
          <h2 className="text-xl font-bold mb-4">Product Insights</h2>
          <div className="grid grid-cols-3 gap-4">
            {amazonSales.productInsights.map((product) => (
              <div
                key={product.name}
                className="bg-white p-4 shadow rounded-lg"
              >
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p>Sales: {product.sales}</p>
                <p>Returns: {product.returns}</p>
                <p>Inventory: {product.inventory}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Amazon Inventory Overview */}
        <section>
          <h2 className="text-xl font-bold mb-4">Inventory Overview</h2>
          <div className="bg-white p-4 shadow rounded-lg">
            <p className="text-gray-500">[Inventory Data Placeholder]</p>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      {/* Sales Overview */}
      <section className="mb-6">
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-white p-4 shadow rounded-lg">
            <h2 className="text-lg font-semibold">Total Sales</h2>
            <p className="text-xl font-bold">250</p>
          </div>
          <div className="bg-white p-4 shadow rounded-lg">
            <h2 className="text-lg font-semibold">Total Revenue</h2>
            <p className="text-xl font-bold">₹32,000</p>
          </div>
          <div className="bg-white p-4 shadow rounded-lg">
            <h2 className="text-lg font-semibold">Amount Received</h2>
            <p className="text-xl font-bold">₹29,000</p>
          </div>
          <div className="bg-white p-4 shadow rounded-lg">
            <h2 className="text-lg font-semibold">Amount Pending</h2>
            <p className="text-xl font-bold">₹3,000</p>
          </div>
        </div>
      </section>

      {/* Platform Sales Overview */}
      <section className="mb-6">
        <h2 className="text-xl font-bold mb-4">Platform Sales Overview</h2>
        <div className="grid grid-cols-3 gap-4">
          {platformSales.map((platform) => (
            <div
              key={platform.platform}
              className="bg-white p-4 shadow rounded-lg"
            >
              <h3 className="text-lg font-semibold">{platform.platform}</h3>
              <p>Sales: {platform.sales}</p>
              <p>Revenue: ₹{platform.revenue}</p>
              <p>Pending: ₹{platform.pending}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Line Chart Placeholder */}
      <section className="mb-6">
        <h2 className="text-xl font-bold mb-4">Sales Timeline</h2>
        <div className="bg-white p-4 shadow rounded-lg">
          <div className="h-[20rem]">
            <Bar
              data={data}
              options={{
                responsive: true,
                maintainAspectRatio: false, // Ensure the chart scales properly
              }}
            />
          </div>
        </div>
      </section>

      {/* Product Insights */}
      <section className="mb-6">
        <h2 className="text-xl font-bold mb-4">Product Insights</h2>
        <div className="grid grid-cols-3 gap-4">
          {productInsights.map((product) => (
            <div key={product.name} className="bg-white p-4 shadow rounded-lg">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p>Sales: {product.sales}</p>
              <p>Returns: {product.returns}</p>
              <p>Inventory: {product.inventory}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Inventory Overview */}
      <section>
        <h2 className="text-xl font-bold mb-4">Inventory Overview</h2>
        <div className="bg-white p-4 shadow rounded-lg">
          <p className="text-gray-500">[Inventory Data Placeholder]</p>
        </div>
      </section>
    </div>
  );
};

export default Page;
