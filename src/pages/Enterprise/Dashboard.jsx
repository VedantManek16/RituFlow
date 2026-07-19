import React from 'react';
import { useNavigate } from 'react-router-dom';
import dashboardData from '../../mock/dashboard.json';
import AreaChart from '../../components/charts/AreaChart';
import BarChart from '../../components/charts/BarChart';
import LineChart from '../../components/charts/LineChart';
import RiskGauge from '../../components/charts/RiskGauge';

export default function Dashboard() {
  const navigate = useNavigate();
  const { summary, aiInsights, commodityPrices, incomeVsExpense, upiTrends } = dashboardData;

  const formatCurrency = (val) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <div className="space-y-xl animate-in fade-in duration-300">
      {/* Summary Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-lg mb-xl">
        {/* Current Cash Balance */}
        <div className="bg-surface-container-lowest p-lg rounded-xl shadow-sm border-l-4 border-primary">
          <p className="text-label-sm text-on-surface-variant mb-xs font-semibold">Current Cash Balance</p>
          <h3 className="font-headline-lg text-headline-lg text-on-surface font-bold">
            {formatCurrency(summary.currentBalance)}
          </h3>
          <div className="flex items-center gap-1 mt-sm text-primary">
            <span className="material-symbols-outlined text-[18px]">trending_up</span>
            <span className="text-label-sm font-semibold">{summary.balanceChange}</span>
          </div>
        </div>

        {/* Monthly Income */}
        <div className="bg-surface-container-lowest p-lg rounded-xl shadow-sm">
          <p className="text-label-sm text-on-surface-variant mb-xs font-semibold">Monthly Income</p>
          <h3 className="font-headline-md text-headline-md text-on-surface font-bold">
            {formatCurrency(summary.monthlyIncome)}
          </h3>
          <p className="text-label-sm text-on-surface-variant mt-sm font-semibold">
            {summary.upiTransactionsCount} UPI Transactions today
          </p>
        </div>

        {/* Monthly Expenses */}
        <div className="bg-surface-container-lowest p-lg rounded-xl shadow-sm">
          <p className="text-label-sm text-on-surface-variant mb-xs font-semibold">Monthly Expenses</p>
          <h3 className="font-headline-md text-headline-md text-on-surface font-bold">
            {formatCurrency(summary.monthlyExpenses)}
          </h3>
          <p className="text-label-sm text-on-surface-variant mt-sm font-semibold">{summary.expenseInsight}</p>
        </div>

        {/* Risk Level */}
        <div className="bg-surface-container-lowest p-lg rounded-xl shadow-sm">
          <p className="text-label-sm text-on-surface-variant mb-xs font-semibold">Current Risk Level</p>
          <div className="mt-xs">
            <span className="bg-primary-fixed text-on-primary-fixed px-3 py-1 rounded-full text-label-md font-bold inline-flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              {summary.riskLevel}
            </span>
          </div>
          <p className="text-label-sm text-on-surface-variant mt-md font-semibold">{summary.riskTrajectory}</p>
        </div>
      </div>

      {/* Dashboard Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-lg">
        {/* Main Chart Area (8 cols) */}
        <div className="lg:col-span-8 space-y-lg">
          {/* Cash Flow Forecast Area Chart */}
          <div 
            onClick={() => navigate('/enterprise/cashflow')}
            className="bg-surface-container-lowest p-lg rounded-xl shadow-sm border border-outline-variant cursor-pointer hover:border-primary/40 transition-all duration-300"
          >
            <div className="flex justify-between items-center mb-lg">
              <h4 className="font-headline-sm text-headline-sm text-on-surface font-bold">Cash Flow Forecast</h4>
              <div className="flex items-center gap-md">
                <span className="flex items-center gap-1 text-label-sm text-on-surface-variant font-semibold">
                  <span className="w-3 h-3 rounded-full bg-primary"></span> Historical
                </span>
                <span className="flex items-center gap-1 text-label-sm text-on-surface-variant font-semibold">
                  <span className="w-3 h-3 rounded-full bg-secondary"></span> Predicted
                </span>
              </div>
            </div>
            
            {/* Smooth curve SVG chart component */}
            <AreaChart />

            <div className="flex justify-between mt-sm px-2 text-label-sm text-on-surface-variant font-bold">
              <span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span>
            </div>
          </div>

          {/* Secondary Charts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
            <div className="bg-surface-container-lowest p-lg rounded-xl shadow-sm border border-outline-variant flex flex-col justify-between h-64">
              <h4 className="font-label-md text-label-md text-on-surface mb-xs font-bold">Income vs Expense Trend</h4>
              <div className="flex-grow flex items-center justify-center">
                <BarChart data={incomeVsExpense} />
              </div>
            </div>
            
            <div className="bg-surface-container-lowest p-lg rounded-xl shadow-sm border border-outline-variant flex flex-col justify-between h-64">
              <h4 className="font-label-md text-label-md text-on-surface mb-xs font-bold">Monthly UPI Transaction Trend</h4>
              <div className="flex-grow flex items-center justify-center">
                <LineChart data={upiTrends} />
              </div>
            </div>
          </div>

          {/* Recommendations */}
          <section>
            <h4 className="font-headline-sm text-headline-sm text-on-surface mb-md font-bold">AI Insights & Recommendations</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
              {aiInsights.map((insight) => (
                <div 
                  key={insight.id}
                  onClick={() => navigate('/enterprise/recommendations')}
                  className="bg-surface-container-lowest p-md rounded-xl border border-outline-variant flex gap-md items-start hover:shadow-md transition-shadow cursor-pointer animate-in fade-in"
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${insight.colorClass}`}>
                    <span className="material-symbols-outlined">{insight.icon}</span>
                  </div>
                  <div>
                    <p className="font-label-md text-label-md text-on-surface font-semibold">{insight.title}</p>
                    <p className="text-body-sm text-on-surface-variant mt-0.5">{insight.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Sidebar (4 cols) */}
        <div className="lg:col-span-4 space-y-lg">
          {/* Risk Panel */}
          <div 
            onClick={() => navigate('/enterprise/risk-analysis')}
            className="bg-surface-container-lowest p-lg rounded-xl shadow-sm border border-outline-variant cursor-pointer hover:border-secondary/40 transition-colors"
          >
            <h4 className="font-label-md text-label-md text-on-surface mb-lg uppercase tracking-widest font-bold">Risk Intelligence</h4>
            
            <div className="py-4">
              {/* Premium gradient circle gauge */}
              <RiskGauge score={summary.riskScore} />
            </div>

            <div className="mt-lg p-md bg-surface-container rounded-lg">
              <div className="flex justify-between items-center mb-sm">
                <span className="text-label-sm text-on-surface-variant font-semibold">Forecast Confidence</span>
                <span className="text-label-md font-bold text-primary">{summary.forecastConfidence}%</span>
              </div>
              <div className="w-full h-2 bg-outline-variant rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full" style={{ width: `${summary.forecastConfidence}%` }}></div>
              </div>
            </div>
            
            <div className="mt-xl">
              <h5 className="font-label-md text-label-md text-on-surface mb-sm flex items-center gap-2 font-bold">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>psychology</span>
                AI Explanation
              </h5>
              <p className="text-body-sm text-on-surface-variant leading-relaxed font-semibold">
                "{summary.aiExplanation}"
              </p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-surface-container-lowest p-lg rounded-xl shadow-sm border border-outline-variant">
            <h4 className="font-label-md text-label-md text-on-surface mb-lg uppercase tracking-widest font-bold">Quick Actions</h4>
            <div className="grid grid-cols-2 gap-md">
              <button 
                onClick={(e) => { e.stopPropagation(); alert('Demo Action: Add Income'); }}
                className="flex flex-col items-center justify-center p-md rounded-xl bg-surface-container hover:bg-primary-fixed transition-colors gap-2 group"
              >
                <span className="material-symbols-outlined text-primary text-[28px] group-hover:scale-110 transition-transform">add_circle</span>
                <span className="text-label-sm font-bold">Add Income</span>
              </button>
              <button 
                onClick={(e) => { e.stopPropagation(); alert('Demo Action: Add Expense'); }}
                className="flex flex-col items-center justify-center p-md rounded-xl bg-surface-container hover:bg-error-container transition-colors gap-2 group"
              >
                <span className="material-symbols-outlined text-error text-[28px] group-hover:scale-110 transition-transform">remove_circle</span>
                <span className="text-label-sm font-bold">Add Expense</span>
              </button>
              <button 
                onClick={(e) => { e.stopPropagation(); alert('Demo Action: Update Loan'); }}
                className="flex flex-col items-center justify-center p-md rounded-xl bg-surface-container hover:bg-secondary-fixed transition-colors gap-2 group"
              >
                <span className="material-symbols-outlined text-secondary text-[28px] group-hover:scale-110 transition-transform">history_edu</span>
                <span className="text-label-sm font-bold">Update Loan</span>
              </button>
              <button 
                onClick={(e) => { e.stopPropagation(); navigate('/enterprise/cashflow'); }}
                className="flex flex-col items-center justify-center p-md rounded-xl bg-surface-container hover:bg-primary-fixed transition-colors gap-2 group"
              >
                <span className="material-symbols-outlined text-primary text-[28px] group-hover:scale-110 transition-transform">visibility</span>
                <span className="text-label-sm font-bold">View Forecast</span>
              </button>
            </div>
          </div>

          {/* Visual Accent Card */}
          <div className="relative h-48 rounded-xl overflow-hidden shadow-lg group">
            <div 
              className="bg-cover bg-center w-full h-full transform group-hover:scale-105 transition-transform duration-500" 
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCRVByv8vbEt1vTIhrkOIMP6sgHkKeUXMaJOPjc7cRrh7xvzWPXUS99SIPBrErgH4YwzNCbebG7dhUqegKN6TxKrTpW-Of9naB30k9kpjQLW0eZ8UNz2LqmDHYJCpFV9c-ASXMKXoONBCqnXRz2Wd5DvZyJs_B2o08m_hXuwKInqRQv5feGmWl7CRy4cJ2WOxzrldQxSjPTEtlCYrORydrq8STeDyuCoL-UmidRc0v3nmM6-_desqLmiQ')" }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-lg text-surface">
              <p className="font-label-md text-label-md opacity-80 font-bold">Local Market Update</p>
              <h4 className="font-headline-sm text-headline-sm font-bold">{commodityPrices[0].crop} prices expected to rise {commodityPrices[0].change}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
