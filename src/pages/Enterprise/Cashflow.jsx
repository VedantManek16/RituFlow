import React from 'react';
import { useNavigate } from 'react-router-dom';
import dashboardData from '../../mock/dashboard.json';
import AreaChart from '../../components/charts/AreaChart';

export default function Cashflow() {
  const navigate = useNavigate();
  const { summary, weather, commodityPrices, loans } = dashboardData;

  return (
    <div className="space-y-lg animate-in fade-in duration-300">
      {/* Header Section */}
      <section className="mb-lg">
        <h1 className="font-headline-lg text-headline-lg text-on-surface font-bold">Cash Flow Forecast</h1>
        <p className="text-on-surface-variant body-md mt-1">Multi-month predictive simulation mapping agrarian variables to enterprise liquidity.</p>
      </section>

      {/* Main Grid */}
      <div className="grid grid-cols-12 gap-8">
        {/* Main Chart Section (8/12) */}
        <div className="col-span-12 lg:col-span-8 space-y-8">
          {/* Prediction Chart Card */}
          <div className="bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant p-lg relative overflow-hidden">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-headline-sm text-headline-sm font-semibold">6-Month Liquidity Forecast</h2>
              <div className="flex items-center gap-2 text-primary bg-primary-fixed px-3 py-1 rounded-full font-label-sm font-bold">
                <span className="material-symbols-outlined text-[16px]">auto_awesome</span>
                <span>High Confidence (88%)</span>
              </div>
            </div>
            
            {/* Custom SVG area chart component */}
            <AreaChart />

            {/* Axis Label details */}
            <div className="flex justify-between mt-8 px-2 text-label-sm text-outline font-bold">
              <span>MAY</span>
              <span>JUN</span>
              <span>JUL (TODAY)</span>
              <span>AUG</span>
              <span>SEP</span>
              <span>OCT</span>
              <span>NOV</span>
            </div>
          </div>

          {/* Seasonal Trend Indicator */}
          <div className="p-4 bg-tertiary-fixed rounded-xl flex items-center gap-lg">
            <div className="w-12 h-12 rounded-full bg-tertiary-container flex items-center justify-center text-on-tertiary shrink-0">
              <span className="material-symbols-outlined">eco</span>
            </div>
            <div className="flex-1">
              <p className="font-label-md text-on-tertiary-fixed font-bold">{weather.condition} Optimization</p>
              <p className="text-body-sm text-on-tertiary-fixed-variant mt-0.5">{weather.forecast}</p>
            </div>
          </div>

          {/* Detailed ledger predictions (simulated table) */}
          <div className="bg-surface-container-lowest rounded-xl border border-outline-variant p-lg shadow-sm">
            <h3 className="font-label-md text-label-md text-on-surface mb-4 uppercase tracking-widest font-bold">Forecast Ledger Insights</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-outline-variant">
                <div>
                  <h4 className="font-label-md text-on-surface font-semibold">Predicted Wholesale Rice Harvest</h4>
                  <p className="text-label-sm text-on-surface-variant">Estimated inflow based on weather patterns</p>
                </div>
                <div className="text-right">
                  <span className="text-primary font-bold">+₹1,85,000</span>
                  <p className="text-[10px] text-on-surface-variant font-semibold">October 2026</p>
                </div>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-outline-variant">
                <div>
                  <h4 className="font-label-md text-on-surface font-semibold">Bulk Fertilizer & Pesticide Purchase</h4>
                  <p className="text-label-sm text-on-surface-variant">Estimated seasonal agricultural expense</p>
                </div>
                <div className="text-right">
                  <span className="text-error font-bold">-₹42,000</span>
                  <p className="text-[10px] text-on-surface-variant font-semibold">August 2026</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Forecast Variables Sidebar (4/12) */}
        <div className="col-span-12 lg:col-span-4 space-y-8">
          {/* Agrarian variables panel */}
          <div className="bg-surface-container-lowest p-lg rounded-xl border border-outline-variant shadow-sm">
            <h3 className="font-label-md text-label-md text-on-surface mb-lg uppercase tracking-widest font-bold">Agrarian Regulators</h3>
            <div className="space-y-md">
              <div className="flex items-center justify-between p-md bg-surface-container rounded-lg">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">cloud</span>
                  <span className="text-label-sm text-on-surface-variant font-semibold">Rainfall Probability</span>
                </div>
                <span className="font-bold text-on-surface">{weather.rainfallProbability}</span>
              </div>
              <div className="flex items-center justify-between p-md bg-surface-container rounded-lg">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">science</span>
                  <span className="text-label-sm text-on-surface-variant font-semibold">Soil Moisture Index</span>
                </div>
                <span className="font-bold text-on-surface">{weather.soilMoisture}</span>
              </div>
              <div className="flex items-center justify-between p-md bg-surface-container rounded-lg">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">trending_up</span>
                  <span className="text-label-sm text-on-surface-variant font-semibold">Market Price Offset</span>
                </div>
                <span className="font-bold text-primary">+4.8%</span>
              </div>
            </div>
          </div>

          {/* Commodity rates snapshot */}
          <div className="bg-surface-container-lowest p-lg rounded-xl border border-outline-variant shadow-sm">
            <h3 className="font-label-md text-label-md text-on-surface mb-lg uppercase tracking-widest font-bold">Commodity Index</h3>
            <div className="space-y-sm">
              {commodityPrices.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center py-2 border-b border-outline-variant/35 last:border-0">
                  <span className="font-label-md text-on-surface font-semibold">{item.crop}</span>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-on-surface">{item.price}</span>
                    <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${item.trend === 'up' ? 'bg-primary-fixed text-on-primary-fixed' : 'bg-error-container text-on-error-container'}`}>
                      {item.change}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Active Loans block */}
          <div className="bg-surface-container-lowest p-lg rounded-xl border border-outline-variant shadow-sm">
            <h3 className="font-label-md text-label-md text-on-surface mb-lg uppercase tracking-widest font-bold">Credit Impact</h3>
            <div className="p-md bg-surface-container rounded-lg flex items-center justify-between">
              <div>
                <p className="text-[10px] text-on-surface-variant uppercase tracking-wider font-bold">Next Repayment</p>
                <p className="font-bold text-on-surface mt-0.5">{loans.nextEmiDate}</p>
              </div>
              <div className="text-right">
                <span className="font-headline-sm text-headline-sm text-error font-bold">₹{loans.nextEmi.toLocaleString()}</span>
              </div>
            </div>
            <button 
              onClick={() => alert('Demo Action: Repay EMI')}
              className="w-full mt-4 bg-primary text-on-primary py-3 px-4 rounded-lg font-bold hover:opacity-90 active:scale-95 transition-all shadow-sm flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined">credit_card</span>
              <span>Repay Loan EMI</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
