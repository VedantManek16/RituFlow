import React from 'react';
import { useNavigate } from 'react-router-dom';
import dashboardData from '../../mock/dashboard.json';

export default function Recommendations() {
  const navigate = useNavigate();
  const { commodityPrices } = dashboardData;

  return (
    <div className="space-y-lg animate-in fade-in duration-300">
      {/* Header Section */}
      <section className="mb-xl">
        <h1 className="font-headline-lg text-headline-lg text-on-surface mb-xs font-bold">AI Recommendations</h1>
        <p className="font-body-md text-body-md text-on-surface-variant">Intelligent insights based on your farm's performance and market trends.</p>
      </section>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-12 gap-6">
        {/* Insight Feed (Primary) */}
        <div className="col-span-12 lg:col-span-8 bg-surface-container-lowest p-lg shadow-sm border-l-4 border-error rounded-xl border border-outline-variant flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start mb-md">
              <div>
                <span className="px-3 py-1 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm uppercase tracking-wider font-bold">Critical Alert</span>
                <h2 className="font-headline-sm text-headline-sm mt-sm font-semibold">Market Volatility Insight</h2>
              </div>
              <span className="material-symbols-outlined text-error text-3xl">trending_down</span>
            </div>
            <p className="font-body-lg text-body-lg text-on-surface mb-lg">
              Milk prices are expected to decrease by <span className="font-bold text-error">10% next month</span> due to increased regional supply. Prepare your cash reserves for a temporary dip in revenue.
            </p>
          </div>
          <div className="flex flex-wrap gap-md mt-4">
            <button 
              onClick={() => alert('Strategy review initiated.')}
              className="bg-primary text-on-primary font-bold py-3 px-6 rounded-lg font-label-md text-label-md active:opacity-80 transition-all shadow-sm"
            >
              Review Strategy
            </button>
            <button 
              onClick={() => alert('Alert dismissed.')}
              className="border border-outline text-primary font-bold py-3 px-6 rounded-lg font-label-md text-label-md hover:bg-surface-container-low transition-all"
            >
              Dismiss
            </button>
          </div>
        </div>

        {/* Suggested Action: Inventory */}
        <div className="col-span-12 sm:col-span-6 lg:col-span-4 bg-surface-container-lowest p-lg shadow-sm border-l-4 border-error rounded-xl border border-outline-variant flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-sm mb-md text-error">
              <span className="material-symbols-outlined">shopping_cart_off</span>
              <span className="font-label-md text-label-md font-bold">Priority: High</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm mb-sm font-semibold">Reduce inventory purchase</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-lg">Current feed levels are sufficient for 45 days. Delaying the next bulk order saves ₹8,200 this month.</p>
            <div 
              className="w-full h-32 rounded-lg bg-cover bg-center mb-md" 
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDlve52s6TADWgUKBlljJhuWIGiTVoH4l3YEgTZdPCAOE8uWLLqWiSFx3pmI9dvO81LRsrX35xXjvvjiE4mWS9Q5SCwh4_2BVdilFIFwV-khsG-zDvYLiSErCz4HSZWZwN_ShQuwV_LsHOt-SRV6DtwGNJeHU3_0Eyma0AYHzdlcQa-uT_heieXfOnV031hNSIQ3wX2zxWKTyR3XcD6_YN2JwoOftT9mhRZn063uYxLlRwZN3wrcztVaw')" }}
            ></div>
          </div>
          <button 
            onClick={() => alert('Budget adjusted.')}
            className="w-full py-2 bg-surface-container-high rounded-lg font-label-md text-label-md text-on-surface-variant hover:bg-surface-variant transition-colors font-bold"
          >
            Adjust Budget
          </button>
        </div>

        {/* Suggested Action: Savings */}
        <div className="col-span-12 sm:col-span-6 lg:col-span-4 bg-surface-container-lowest p-lg shadow-sm border-l-4 border-secondary rounded-xl border border-outline-variant flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-sm mb-md text-secondary">
              <span className="material-symbols-outlined">savings</span>
              <span className="font-label-md text-label-md font-bold">Priority: Medium</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm mb-sm font-semibold">Build emergency savings</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-lg">Allocate 5% of this week's profit to your 'Climate Risk' fund to offset potential monsoon delays.</p>
            <div className="h-2 w-full bg-surface-container-high rounded-full mb-md overflow-hidden">
              <div className="h-full bg-secondary rounded-full" style={{ width: '65%' }}></div>
            </div>
          </div>
          <button 
            onClick={() => alert('Funds transferred.')}
            className="w-full py-2 bg-secondary text-on-secondary rounded-lg font-label-md text-label-md font-bold shadow-sm active:scale-95 transition-all"
          >
            Transfer Funds
          </button>
        </div>

        {/* Suggested Action: Digital Payments */}
        <div className="col-span-12 sm:col-span-6 lg:col-span-4 bg-surface-container-lowest p-lg shadow-sm border-l-4 border-primary rounded-xl border border-outline-variant flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-sm mb-md text-primary">
              <span className="material-symbols-outlined">qr_code_2</span>
              <span className="font-label-md text-label-md font-bold">Priority: Low</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm mb-sm font-semibold">Increase digital payments</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-lg">80% of your transactions are cash. Switching to digital will improve your credit score by 15 points.</p>
            <div className="flex items-center justify-center p-md bg-secondary-fixed rounded-lg mb-md">
              <span className="material-symbols-outlined text-secondary text-5xl">contactless</span>
            </div>
          </div>
          <button 
            onClick={() => alert('Linking bank account...')}
            className="w-full py-2 border border-outline text-primary rounded-lg font-label-md text-label-md font-bold hover:bg-surface-container-low transition-colors"
          >
            Connect Bank
          </button>
        </div>

        {/* Suggested Action: Diversify */}
        <div className="col-span-12 sm:col-span-6 lg:col-span-4 bg-surface-container-lowest p-lg shadow-sm border-l-4 border-secondary rounded-xl border border-outline-variant flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-sm mb-md text-secondary">
              <span className="material-symbols-outlined">diversity_2</span>
              <span className="font-label-md text-label-md font-bold">Priority: Medium</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm mb-sm font-semibold">Diversify products</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-lg">Demand for organic yogurt in your area has risen by 25%. Consider small-batch production.</p>
            <div 
              className="w-full h-32 rounded-lg bg-cover bg-center mb-md" 
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAiE9N5NGRqEPpKCfb0wP-H0zzyFNb63ALcWOiCC76RFVaelI9M3M-FZfn8BMWI9BQqDwjHn7nkgiMKA9Uk5cPCwjzGv45juqr-Jd6XqRJ0se18I8OsATI7aQ-TlL7aNEBAknJ0VmHIvXYA2wAtuBwMaO1cbqDFtA-MZAkPR75_X1saTfwwgt7u1VCDnxyf-CtvgO9PJhOgmUKkbaoaLnUXdCDfl9hnu5lq8DipXfbXbdDeH9wsKi2h9w')" }}
            ></div>
          </div>
          <button 
            onClick={() => alert('Exploring yogurt production markets...')}
            className="w-full py-2 bg-surface-container-high rounded-lg font-label-md text-label-md text-on-surface-variant hover:bg-surface-variant transition-colors font-bold"
          >
            Explore Market
          </button>
        </div>

        {/* Market Forecast Mini-Table */}
        <div className="col-span-12 lg:col-span-12 bg-surface-container-lowest p-lg shadow-sm rounded-xl border border-outline-variant">
          <div className="flex items-center justify-between mb-lg">
            <h3 className="font-headline-sm text-headline-sm font-semibold">Category Market Trends</h3>
            <button 
              onClick={() => navigate('/enterprise/cashflow')}
              className="text-primary font-label-md text-label-md flex items-center gap-xs font-bold"
            >
              View full report <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-outline-variant">
                  <th className="pb-md font-label-md text-label-md text-on-surface-variant font-bold">Category</th>
                  <th className="pb-md font-label-md text-label-md text-on-surface-variant font-bold">Expected Shift</th>
                  <th className="pb-md font-label-md text-label-md text-on-surface-variant font-bold">Reliability</th>
                  <th className="pb-md font-label-md text-label-md text-on-surface-variant font-bold">Action</th>
                </tr>
              </thead>
              <tbody className="font-body-sm text-body-sm">
                <tr className="border-b border-outline-variant hover:bg-surface-container-low transition-colors">
                  <td className="py-md flex items-center gap-sm font-semibold text-on-surface">
                    <span className="material-symbols-outlined text-primary">agriculture</span>
                    Dairy
                  </td>
                  <td className="py-md text-error font-bold">-10% next month</td>
                  <td className="py-md text-on-surface-variant font-semibold">High (85%)</td>
                  <td className="py-md"><span className="text-secondary font-bold hover:underline cursor-pointer">Hedge Prices</span></td>
                </tr>
                <tr className="border-b border-outline-variant hover:bg-surface-container-low transition-colors">
                  <td className="py-md flex items-center gap-sm font-semibold text-on-surface">
                    <span className="material-symbols-outlined text-primary">grain</span>
                    Wheat
                  </td>
                  <td className="py-md text-primary font-bold">+5.2% harvest season</td>
                  <td className="py-md text-on-surface-variant font-semibold">Medium (72%)</td>
                  <td className="py-md"><span className="text-secondary font-bold hover:underline cursor-pointer">Optimize Storage</span></td>
                </tr>
                <tr className="border-b border-outline-variant hover:bg-surface-container-low transition-colors">
                  <td className="py-md flex items-center gap-sm font-semibold text-on-surface">
                    <span className="material-symbols-outlined text-primary">local_florist</span>
                    Cotton
                  </td>
                  <td className="py-md text-primary font-bold">+8.4% this quarter</td>
                  <td className="py-md text-on-surface-variant font-semibold">High (90%)</td>
                  <td className="py-md"><span className="text-secondary font-bold hover:underline cursor-pointer">Expand Acreage</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
