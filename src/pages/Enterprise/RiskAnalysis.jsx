import React from 'react';
import dashboardData from '../../mock/dashboard.json';
import RiskGauge from '../../components/charts/RiskGauge';

export default function RiskAnalysis() {
  const { summary, weather, commodityPrices, loans } = dashboardData;

  return (
    <div className="space-y-lg animate-in fade-in duration-300">
      {/* Header Section */}
      <section className="mb-lg">
        <h1 className="font-headline-lg text-headline-lg text-on-surface font-bold">Risk Analysis</h1>
        <p className="text-on-surface-variant body-md mt-1">AI-driven assessment of your farm's financial stability and operational hazards.</p>
      </section>

      {/* Bento Grid */}
      <div className="grid grid-cols-12 gap-6">
        {/* Risk Gauge Card */}
        <div className="col-span-12 lg:col-span-5 bg-surface-container-lowest rounded-xl p-lg flex flex-col items-center justify-center text-center relative overflow-hidden shadow-sm border border-outline-variant">
          <div className="absolute top-0 left-0 w-1.5 bg-secondary h-full"></div>
          <span className="text-label-md text-secondary font-bold uppercase tracking-wider mb-4">Current Risk Level</span>
          
          <RiskGauge score={summary.riskScore} />

          <div className="mt-6 flex flex-wrap gap-2 justify-center">
            <span className="bg-primary-fixed text-on-primary-fixed px-3 py-1 rounded-full text-label-sm font-bold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
              Low Operational Risk
            </span>
            <span className="bg-secondary-fixed text-on-secondary-fixed px-3 py-1 rounded-full text-label-sm font-bold">
              Stable repayment index
            </span>
          </div>
        </div>

        {/* Micro-Climate and Soil Cards (7 cols) */}
        <div className="col-span-12 lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Climate card */}
          <div className="bg-surface-container-lowest p-lg rounded-xl border border-outline-variant shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-md">
                <span className="material-symbols-outlined text-secondary bg-secondary-fixed/50 p-2 rounded-lg">wb_sunny</span>
                <span className="text-label-sm text-on-surface-variant font-semibold">Micro-Climate</span>
              </div>
              <h3 className="text-headline-md font-bold text-on-surface">{weather.temperature}</h3>
              <p className="text-body-sm text-on-surface-variant mt-1 font-medium">{weather.condition} - Soil Moisture: {weather.soilMoisture}</p>
            </div>
            <div className="mt-4 p-3 bg-surface-container rounded-lg">
              <span className="text-label-sm text-secondary font-bold">Risk Assessment: </span>
              <span className="text-label-sm text-on-surface-variant font-medium">Optimal soil parameters, no drought alert.</span>
            </div>
          </div>

          {/* Commodity price risks */}
          <div className="bg-surface-container-lowest p-lg rounded-xl border border-outline-variant shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-md">
                <span className="material-symbols-outlined text-primary bg-primary-fixed/50 p-2 rounded-lg">trending_up</span>
                <span className="text-label-sm text-on-surface-variant font-semibold">Commodity Volatility</span>
              </div>
              <h3 className="text-headline-md font-bold text-on-surface">+5.2% Index</h3>
              <p className="text-body-sm text-on-surface-variant mt-1 font-medium">Upward price pressure on major crop segments.</p>
            </div>
            <div className="mt-4 p-3 bg-surface-container rounded-lg">
              <span className="text-label-sm text-primary font-bold">Risk Assessment: </span>
              <span className="text-label-sm text-on-surface-variant font-medium">Favorable trading rates expected for wheat harvest.</span>
            </div>
          </div>

          {/* Credit and Repayment score cards */}
          <div className="bg-surface-container-lowest p-md rounded-xl border border-outline-variant shadow-sm flex items-center gap-4">
            <div className="p-3 bg-primary-fixed text-primary rounded-lg">
              <span className="material-symbols-outlined text-3xl">credit_score</span>
            </div>
            <div>
              <span className="text-label-sm text-on-surface-variant font-semibold">Credit Score Trajectory</span>
              <h4 className="text-headline-sm font-bold text-on-surface">780 / Excellent</h4>
            </div>
          </div>

          <div className="bg-surface-container-lowest p-md rounded-xl border border-outline-variant shadow-sm flex items-center gap-4">
            <div className="p-3 bg-secondary-fixed text-secondary rounded-lg">
              <span className="material-symbols-outlined text-3xl">savings</span>
            </div>
            <div>
              <span className="text-label-sm text-on-surface-variant font-semibold">Outstanding Loan Coverage</span>
              <h4 className="text-headline-sm font-bold text-on-surface">3.2x Revenue</h4>
            </div>
          </div>
        </div>
      </div>

      {/* Priority Mitigation Actions */}
      <section className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg shadow-sm">
        <h3 className="font-headline-sm text-headline-sm text-on-surface mb-lg font-bold">Priority Risk Mitigation Actions</h3>
        <div className="space-y-4">
          <div className="flex gap-md items-start p-md bg-surface border border-outline-variant/60 rounded-xl hover:shadow-md transition-shadow">
            <div className="bg-primary-fixed text-primary w-10 h-10 rounded-full flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined">directions_car</span>
            </div>
            <div>
              <h4 className="font-label-md text-on-surface font-semibold">Optimize Logistics Channels</h4>
              <p className="text-body-sm text-on-surface-variant mt-0.5">Local diesel prices have surged 18%. Switch wholesale transport to cooperative truck-pooling program to cut logistics expense by ₹8,200.</p>
            </div>
          </div>
          <div className="flex gap-md items-start p-md bg-surface border border-outline-variant/60 rounded-xl hover:shadow-md transition-shadow">
            <div className="bg-secondary-fixed text-secondary w-10 h-10 rounded-full flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined">health_and_safety</span>
            </div>
            <div>
              <h4 className="font-label-md text-on-surface font-semibold">Secure Crop Insurance Premium</h4>
              <p className="text-body-sm text-on-surface-variant mt-0.5">Monsoon rainfall forecasts show high local volatility. Secure state-subsidized crop protection plan before July 31 deadline to protect current Paddy seeding.</p>
            </div>
          </div>
          <div className="flex gap-md items-start p-md bg-surface border border-outline-variant/60 rounded-xl hover:shadow-md transition-shadow">
            <div className="bg-tertiary-fixed text-tertiary w-10 h-10 rounded-full flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined">payments</span>
            </div>
            <div>
              <h4 className="font-label-md text-on-surface font-semibold">Kisan Credit Card Allocation</h4>
              <p className="text-body-sm text-on-surface-variant mt-0.5">Divert ₹20,000 from current surplus to settle outstanding high-interest micro loans. This improves your debt service coverage ratio and increases your primary limit.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
