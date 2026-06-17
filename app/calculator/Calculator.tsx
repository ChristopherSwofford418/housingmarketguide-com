"use client";
import { useState } from "react";

const CITIES = [
  { city: "Indianapolis, IN", medianPrice: 285000, daysOnMarket: 27, inventoryChange: 8, priceChange: 2.1 },
  { city: "Columbus, OH", medianPrice: 310000, daysOnMarket: 24, inventoryChange: 5, priceChange: 3.2 },
  { city: "Kansas City, MO", medianPrice: 295000, daysOnMarket: 22, inventoryChange: 12, priceChange: 1.8 },
  { city: "Pittsburgh, PA", medianPrice: 225000, daysOnMarket: 30, inventoryChange: 6, priceChange: 4.1 },
  { city: "Charlotte, NC", medianPrice: 385000, daysOnMarket: 28, inventoryChange: 15, priceChange: 2.9 },
  { city: "Raleigh, NC", medianPrice: 420000, daysOnMarket: 25, inventoryChange: 18, priceChange: 3.5 },
  { city: "Nashville, TN", medianPrice: 465000, daysOnMarket: 32, inventoryChange: 22, priceChange: 1.2 },
  { city: "Austin, TX", medianPrice: 520000, daysOnMarket: 45, inventoryChange: 45, priceChange: -3.2 },
  { city: "Denver, CO", medianPrice: 580000, daysOnMarket: 38, inventoryChange: 28, priceChange: -1.8 },
  { city: "Phoenix, AZ", medianPrice: 430000, daysOnMarket: 40, inventoryChange: 35, priceChange: -2.1 },
  { city: "Tampa, FL", medianPrice: 395000, daysOnMarket: 42, inventoryChange: 68, priceChange: -4.5 },
  { city: "Miami, FL", medianPrice: 620000, daysOnMarket: 55, inventoryChange: 41, priceChange: -2.8 },
  { city: "Seattle, WA", medianPrice: 720000, daysOnMarket: 22, inventoryChange: 10, priceChange: 1.5 },
  { city: "San Francisco, CA", medianPrice: 1100000, daysOnMarket: 28, inventoryChange: 8, priceChange: -1.2 },
  { city: "Los Angeles, CA", medianPrice: 850000, daysOnMarket: 35, inventoryChange: 12, priceChange: 0.8 },
  { city: "New York, NY", medianPrice: 780000, daysOnMarket: 65, inventoryChange: 5, priceChange: 2.1 },
  { city: "Chicago, IL", medianPrice: 340000, daysOnMarket: 30, inventoryChange: 7, priceChange: 3.8 },
  { city: "Minneapolis, MN", medianPrice: 345000, daysOnMarket: 20, inventoryChange: 9, priceChange: 2.5 },
  { city: "Atlanta, GA", medianPrice: 380000, daysOnMarket: 33, inventoryChange: 20, priceChange: 1.9 },
  { city: "Dallas, TX", medianPrice: 410000, daysOnMarket: 38, inventoryChange: 32, priceChange: -1.5 },
];

export default function Calculator() {
  const [selected, setSelected] = useState<string>("");
  const city = CITIES.find(c => c.city === selected);

  const marketType = city
    ? city.daysOnMarket <= 25 && city.inventoryChange <= 10
      ? "Seller's Market"
      : city.daysOnMarket >= 40 || city.inventoryChange >= 30
      ? "Buyer's Market"
      : "Balanced Market"
    : null;

  const marketColor = marketType === "Seller's Market" ? "text-red-600" : marketType === "Buyer's Market" ? "text-green-600" : "text-yellow-600";

  return (
    <div className="bg-soft rounded-2xl p-6 border border-line">
      <div className="mb-6">
        <label className="block text-sm font-semibold text-ink mb-2">Select a City</label>
        <select
          className="w-full border border-line rounded-lg px-4 py-3 text-ink bg-white focus:outline-none focus:ring-2 focus:ring-accent"
          value={selected}
          onChange={e => setSelected(e.target.value)}
        >
          <option value="">— Choose a city —</option>
          {CITIES.map(c => <option key={c.city} value={c.city}>{c.city}</option>)}
        </select>
      </div>

      {city && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-xl p-4 border border-line text-center">
            <div className="text-2xl font-bold text-ink">${city.medianPrice.toLocaleString()}</div>
            <div className="text-xs text-gray-500 mt-1">Median Home Price</div>
          </div>
          <div className="bg-white rounded-xl p-4 border border-line text-center">
            <div className={`text-2xl font-bold ${city.priceChange >= 0 ? "text-green-600" : "text-red-600"}`}>
              {city.priceChange >= 0 ? "+" : ""}{city.priceChange}%
            </div>
            <div className="text-xs text-gray-500 mt-1">YoY Price Change</div>
          </div>
          <div className="bg-white rounded-xl p-4 border border-line text-center">
            <div className="text-2xl font-bold text-ink">{city.daysOnMarket}</div>
            <div className="text-xs text-gray-500 mt-1">Days on Market</div>
          </div>
          <div className="bg-white rounded-xl p-4 border border-line text-center">
            <div className={`text-2xl font-bold ${marketColor}`}>{marketType}</div>
            <div className="text-xs text-gray-500 mt-1">Market Condition</div>
          </div>
        </div>
      )}

      {!city && (
        <p className="text-center text-gray-500 py-8">Select a city above to see housing market data.</p>
      )}
    </div>
  );
}
