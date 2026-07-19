import React from 'react';
import { useNavigate } from 'react-router-dom';
import enterpriseList from '../../mock/enterprise.json';
import analyticsData from '../../mock/analytics.json';

export default function Dashboard() {
  const navigate = useNavigate();
  const { riskDistribution } = analyticsData;

  const handleRowClick = (id) => {
    navigate(`/officer/enterprise/${id}`);
  };

  return (
    <div className="space-y-xl animate-in fade-in duration-300">
      {/* Page Header & Filters */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-xl gap-md">
        <div>
          <h1 className="font-headline-lg text-headline-lg text-on-surface font-bold">Field Officer Dashboard</h1>
          <p className="text-body-md text-on-surface-variant">Monitoring 1,248 rural micro-enterprises across 4 districts.</p>
        </div>
        <div className="flex flex-wrap items-center gap-sm">
          <select className="bg-surface-container-lowest border-outline-variant rounded-lg text-label-md px-4 py-2 focus:ring-2 focus:ring-secondary font-bold">
            <option>All Districts</option>
            <option>West Highlands</option>
            <option>East Plains</option>
            <option>North Valley</option>
          </select>
          <select className="bg-surface-container-lowest border-outline-variant rounded-lg text-label-md px-4 py-2 focus:ring-2 focus:ring-secondary font-bold">
            <option>All Sectors</option>
            <option>Dairy</option>
            <option>Poultry</option>
            <option>Grains</option>
          </select>
          <button className="bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-2 flex items-center gap-2 hover:bg-surface-container-high transition-colors font-bold text-label-sm">
            <span className="material-symbols-outlined text-sm">filter_list</span>
            <span>Risk Level</span>
          </button>
        </div>
      </div>

      {/* Bento Grid - Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-md mb-xl">
        {/* Total Enterprises */}
        <div className="bg-surface-container-lowest p-lg rounded-xl border-l-4 border-secondary shadow-sm">
          <div className="flex justify-between items-start mb-sm">
            <span className="material-symbols-outlined text-secondary bg-secondary-fixed p-2 rounded-lg">store</span>
            <span className="text-label-sm text-on-surface-variant font-semibold">+12% vs last month</span>
          </div>
          <p className="text-label-md text-on-surface-variant uppercase tracking-wider font-semibold">Total Enterprises</p>
          <h3 className="text-headline-lg font-bold mt-1">{riskDistribution.total.toLocaleString()}</h3>
        </div>

        {/* Healthy */}
        <div className="bg-surface-container-lowest p-lg rounded-xl border-l-4 border-primary shadow-sm">
          <div className="flex justify-between items-start mb-sm">
            <span className="material-symbols-outlined text-primary bg-primary-fixed p-2 rounded-lg">check_circle</span>
            <span className="text-label-sm text-primary font-bold">84% of Portfolio</span>
          </div>
          <p className="text-label-md text-on-surface-variant uppercase tracking-wider font-semibold">Healthy</p>
          <h3 className="text-headline-lg font-bold mt-1">{riskDistribution.healthy.toLocaleString()}</h3>
        </div>

        {/* Medium Risk */}
        <div className="bg-surface-container-lowest p-lg rounded-xl border-l-4 border-[orange] shadow-sm">
          <div className="flex justify-between items-start mb-sm">
            <span className="material-symbols-outlined text-[orange] bg-orange-100 p-2 rounded-lg font-bold">warning</span>
            <span className="text-label-sm text-on-surface-variant font-semibold">Needs Attention</span>
          </div>
          <p className="text-label-md text-on-surface-variant uppercase tracking-wider font-semibold">Medium Risk</p>
          <h3 className="text-headline-lg font-bold mt-1">{riskDistribution.medium}</h3>
        </div>

        {/* High Risk */}
        <div className="bg-surface-container-lowest p-lg rounded-xl border-l-4 border-error shadow-sm">
          <div className="flex justify-between items-start mb-sm">
            <span className="material-symbols-outlined text-error bg-error-container p-2 rounded-lg font-bold">error</span>
            <span className="text-label-sm text-error font-bold">Urgent Action</span>
          </div>
          <p className="text-label-md text-on-surface-variant uppercase tracking-wider font-semibold">High Risk</p>
          <h3 className="text-headline-lg font-bold mt-1">{riskDistribution.high}</h3>
        </div>
      </div>

      {/* Map & Risks Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-xl mb-xl">
        {/* Map Placeholder */}
        <div className="lg:col-span-2 bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm flex flex-col border border-outline-variant">
          <div className="p-lg border-b border-outline-variant flex justify-between items-center">
            <h4 className="font-headline-sm font-semibold">Regional Risk Distribution</h4>
            <div className="flex gap-4">
              <span className="flex items-center gap-1.5 text-label-sm font-semibold">
                <span className="w-2.5 h-2.5 rounded-full bg-primary inline-block"></span> Low
              </span>
              <span className="flex items-center gap-1.5 text-label-sm font-semibold">
                <span className="w-2.5 h-2.5 rounded-full bg-[orange] inline-block"></span> Med
              </span>
              <span className="flex items-center gap-1.5 text-label-sm font-semibold">
                <span className="w-2.5 h-2.5 rounded-full bg-error inline-block"></span> High
              </span>
            </div>
          </div>
          <div className="flex-1 relative min-h-[400px] bg-surface-container-high group flex items-center justify-center">
            <div 
              className="absolute inset-0 bg-cover bg-center grayscale opacity-60" 
              style={{ backgroundImage: "url('/regional_risk_map.png')" }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent"></div>
            
            {/* Hotspots */}
            <div className="absolute top-1/4 left-1/3 group-hover:scale-105 transition-transform cursor-pointer z-10">
              <div className="bg-error w-8 h-8 rounded-full border-4 border-white shadow-lg animate-pulse"></div>
              <div className="absolute top-full mt-2 bg-surface-container-lowest px-2 py-1 rounded shadow-md text-label-sm font-bold whitespace-nowrap">
                West Highlands (High)
              </div>
            </div>
            
            <div className="absolute bottom-1/3 right-1/4 group-hover:scale-105 transition-transform cursor-pointer z-10">
              <div className="bg-primary w-6 h-6 rounded-full border-2 border-white shadow-lg"></div>
              <div className="absolute top-full mt-2 bg-surface-container-lowest px-2 py-1 rounded shadow-md text-label-sm font-bold whitespace-nowrap">
                East Plains (Low)
              </div>
            </div>
          </div>
        </div>

        {/* Priority Alerts Feed */}
        <div className="bg-surface-container-lowest rounded-xl p-lg shadow-sm border border-outline-variant flex flex-col h-full">
          <h4 className="font-headline-sm mb-md font-semibold">Priority Alerts</h4>
          <div className="space-y-md overflow-y-auto max-h-[420px] pr-2">
            <div 
              onClick={() => handleRowClick('2')}
              className="flex gap-md p-md hover:bg-surface-container transition-colors rounded-lg cursor-pointer"
            >
              <div className="mt-1 bg-error-container text-error rounded-full w-8 h-8 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-sm font-bold">arrow_downward</span>
              </div>
              <div>
                <h5 className="font-label-md text-on-surface font-semibold">Kiambu Broilers</h5>
                <p className="text-body-sm text-on-surface-variant mt-0.5">Cash flow dropped 40% below forecast in the last 48h.</p>
                <span className="text-label-sm text-error font-bold uppercase mt-1 inline-block">Urgent Audit Needed</span>
              </div>
            </div>

            <div 
              onClick={() => handleRowClick('3')}
              className="flex gap-md p-md hover:bg-surface-container transition-colors rounded-lg cursor-pointer"
            >
              <div className="mt-1 bg-orange-100 text-[orange] rounded-full w-8 h-8 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-sm font-bold">schedule</span>
              </div>
              <div>
                <h5 className="font-label-md text-on-surface font-semibold">Viwanda Grains</h5>
                <p className="text-body-sm text-on-surface-variant mt-0.5">Loan repayment window closing in 4 days. Incomplete data.</p>
                <span className="text-label-sm text-[orange] font-bold uppercase mt-1 inline-block">Medium Priority</span>
              </div>
            </div>

            <div 
              onClick={() => handleRowClick('1')}
              className="flex gap-md p-md hover:bg-surface-container transition-colors rounded-lg cursor-pointer"
            >
              <div className="mt-1 bg-primary-fixed text-primary rounded-full w-8 h-8 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-sm font-bold">trending_up</span>
              </div>
              <div>
                <h5 className="font-label-md text-on-surface font-semibold">Highland Milk</h5>
                <p className="text-body-sm text-on-surface-variant mt-0.5">Exceptional harvest forecast. Potential for credit expansion.</p>
                <span className="text-label-sm text-primary font-bold uppercase mt-1 inline-block">Growth Opp</span>
              </div>
            </div>
          </div>
          <button 
            onClick={() => navigate('/alerts')}
            className="mt-auto w-full py-2.5 text-primary font-label-md border border-primary rounded-lg hover:bg-primary hover:text-white transition-all font-bold"
          >
            View All Alerts
          </button>
        </div>
      </div>

      {/* Enterprise Table */}
      <div className="bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant overflow-hidden">
        <div className="p-lg flex justify-between items-center border-b border-outline-variant">
          <h4 className="font-headline-sm font-semibold">Enterprise Performance</h4>
          <button 
            onClick={() => alert('Demo Action: Exporting CSV')}
            className="flex items-center gap-2 text-label-md text-secondary font-bold"
          >
            <span className="material-symbols-outlined">download</span> Export CSV
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-surface-container-low text-on-surface-variant">
              <tr>
                <th className="px-lg py-4 font-label-md uppercase tracking-tighter font-bold">Enterprise Name</th>
                <th className="px-lg py-4 font-label-md uppercase tracking-tighter font-bold">Sector</th>
                <th className="px-lg py-4 font-label-md uppercase tracking-tighter font-bold">Village/District</th>
                <th className="px-lg py-4 font-label-md uppercase tracking-tighter font-bold">Risk Status</th>
                <th className="px-lg py-4 font-label-md uppercase tracking-tighter font-bold">Cash Flow (30d)</th>
                <th className="px-lg py-4 font-label-md uppercase tracking-tighter font-bold">Last Update</th>
                <th className="px-lg py-4"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant">
              {enterpriseList.map((ent) => (
                <tr 
                  key={ent.id}
                  onClick={() => handleRowClick(ent.id)}
                  className="hover:bg-surface-container-low transition-colors group cursor-pointer"
                >
                  <td className="px-lg py-4">
                    <div className="flex items-center gap-md">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${ent.riskBg} ${ent.riskColor}`}>
                        {ent.avatar}
                      </div>
                      <span className="font-bold text-on-surface">{ent.name}</span>
                    </div>
                  </td>
                  <td className="px-lg py-4">
                    <span className="px-3 py-1 rounded-full bg-surface-container text-label-sm font-semibold text-on-surface-variant">
                      {ent.sector}
                    </span>
                  </td>
                  <td className="px-lg py-4 text-on-surface-variant font-medium">{ent.region}</td>
                  <td className="px-lg py-4">
                    <span className={`flex items-center gap-2 font-bold ${ent.riskColor}`}>
                      <span className={`w-2.5 h-2.5 rounded-full inline-block ${ent.riskStatus === 'Healthy' ? 'bg-primary' : ent.riskStatus === 'Medium Risk' ? 'bg-[orange]' : 'bg-error'}`}></span>
                      {ent.riskStatus}
                    </span>
                  </td>
                  
                  {/* Matching simulated mini chart from field_officer_dashboard */}
                  <td className="px-lg py-4">
                    <div className="flex items-end gap-[2px] h-8 w-24">
                      {ent.cashFlowHistory.map((h, i) => {
                        const heights = ['h-3', 'h-5', 'h-4', 'h-7', 'h-6'];
                        const heightClass = heights[i % heights.length];
                        const colorClass = ent.riskStatus === 'Healthy' ? 'bg-primary animate-pulse' : ent.riskStatus === 'Medium Risk' ? 'bg-[orange]' : 'bg-error';
                        return (
                          <div 
                            key={i} 
                            className={`${colorClass} w-2 ${heightClass} rounded-t-sm`} 
                            title={`${h.month} Cash Flow`}
                          />
                        );
                      })}
                    </div>
                  </td>
                  
                  <td className="px-lg py-4 text-on-surface-variant font-medium">{ent.lastUpdate}</td>
                  <td className="px-lg py-4 text-right">
                    <button className="p-2 opacity-0 group-hover:opacity-100 hover:bg-surface-container-high rounded-full transition-all">
                      <span className="material-symbols-outlined">chevron_right</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-lg flex justify-between items-center bg-surface-container-low border-t border-outline-variant">
          <span className="text-body-sm text-on-surface-variant font-medium">Showing 1-3 of {riskDistribution.total.toLocaleString()} enterprises</span>
          <div className="flex gap-sm">
            <button className="p-2 rounded-lg border border-outline-variant hover:bg-surface-container transition-colors disabled:opacity-50" disabled>
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button className="p-2 rounded-lg border border-outline-variant bg-primary text-on-primary hover:bg-primary-container transition-colors font-bold">1</button>
            <button className="p-2 rounded-lg border border-outline-variant hover:bg-surface-container transition-colors font-bold" disabled>2</button>
            <button className="p-2 rounded-lg border border-outline-variant hover:bg-surface-container transition-colors disabled:opacity-50" disabled>
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
