import React from 'react';
import analyticsData from '../../mock/analytics.json';

export default function Analytics() {
  const { districts, sectors, riskDistribution } = analyticsData;

  const getRiskPct = (val) => {
    return ((val / riskDistribution.total) * 100).toFixed(1);
  };

  return (
    <div className="space-y-lg animate-in fade-in duration-300">
      {/* Header Section */}
      <section className="mb-lg">
        <h1 className="font-headline-lg text-headline-lg text-on-surface font-bold">Portfolio & District Analytics</h1>
        <p className="text-on-surface-variant body-md mt-1">Aggregated financial intelligence across regional agrarian cooperative markets.</p>
      </section>

      {/* Portfolio overview grids */}
      <div className="grid grid-cols-12 gap-6">
        {/* District Risk Table (8/12) */}
        <div className="col-span-12 lg:col-span-8 bg-surface-container-lowest rounded-xl border border-outline-variant p-lg shadow-sm">
          <div className="flex justify-between items-center mb-lg">
            <h3 className="font-headline-sm text-headline-sm font-semibold">Regional Performance Index</h3>
            <span className="px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm font-bold">4 Districts Active</span>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-outline-variant text-on-surface-variant text-label-sm font-bold">
                  <th className="pb-sm font-bold">District Name</th>
                  <th className="pb-sm font-bold text-center">Active Farms</th>
                  <th className="pb-sm font-bold text-center">Average Risk Index</th>
                  <th className="pb-sm text-right font-bold">Status</th>
                </tr>
              </thead>
              <tbody className="text-body-sm">
                {districts.map((item, idx) => (
                  <tr key={idx} className="border-b border-outline-variant last:border-0 hover:bg-surface-container-low transition-colors">
                    <td className="py-md font-bold text-on-surface">{item.name}</td>
                    <td className="py-md text-center text-on-surface-variant font-semibold">{item.enterprises}</td>
                    <td className="py-md text-center">
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-20 h-2 bg-surface-container rounded-full overflow-hidden">
                          <div className={`h-full ${item.status === 'Low Risk' ? 'bg-primary' : item.status === 'Medium Risk' ? 'bg-[orange]' : 'bg-error'}`} style={{ width: `${item.avgRiskScore}%` }}></div>
                        </div>
                        <span className="font-bold">{item.avgRiskScore}</span>
                      </div>
                    </td>
                    <td className={`py-md text-right font-bold ${item.color}`}>
                      {item.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Portfolio Risk Share (4/12) */}
        <div className="col-span-12 lg:col-span-4 bg-surface-container-lowest rounded-xl border border-outline-variant p-lg shadow-sm flex flex-col justify-between">
          <div>
            <h3 className="font-label-md text-label-md text-on-surface mb-lg uppercase tracking-widest font-bold">Risk Concentration Share</h3>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center text-label-sm mb-1.5 font-bold">
                  <span className="text-on-surface-variant">Healthy (Low Risk)</span>
                  <span className="text-primary font-bold">{getRiskPct(riskDistribution.healthy)}%</span>
                </div>
                <div className="w-full h-2.5 bg-surface-container rounded-full overflow-hidden">
                  <div className="h-full bg-primary" style={{ width: `${getRiskPct(riskDistribution.healthy)}%` }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center text-label-sm mb-1.5 font-bold">
                  <span className="text-on-surface-variant">Medium Priority Risk</span>
                  <span className="text-[orange] font-bold">{getRiskPct(riskDistribution.medium)}%</span>
                </div>
                <div className="w-full h-2.5 bg-surface-container rounded-full overflow-hidden">
                  <div className="h-full bg-[orange]" style={{ width: `${getRiskPct(riskDistribution.medium)}%` }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center text-label-sm mb-1.5 font-bold">
                  <span className="text-on-surface-variant">High Alert Risk</span>
                  <span className="text-error font-bold">{getRiskPct(riskDistribution.high)}%</span>
                </div>
                <div className="w-full h-2.5 bg-surface-container rounded-full overflow-hidden">
                  <div className="h-full bg-error" style={{ width: `${getRiskPct(riskDistribution.high)}%` }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-md bg-surface-container rounded-xl mt-6 text-center">
            <p className="text-[10px] text-on-surface-variant uppercase tracking-wider font-bold">Portfolio Leverage Score</p>
            <h3 className="text-headline-md font-bold text-primary mt-1">8.5x Coverage</h3>
            <p className="text-body-sm text-on-surface-variant mt-1 leading-relaxed">Overall portfolio indicates high credit security.</p>
          </div>
        </div>
      </div>

      {/* Crop/Sector credit performance index */}
      <section className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg shadow-sm">
        <h3 className="font-headline-sm text-headline-sm text-on-surface mb-lg font-bold">Sector Credit Performance Index</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sectors.map((sec, idx) => (
            <div key={idx} className="p-md bg-surface rounded-xl border border-outline-variant/60 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-sm">
                  <span className="font-label-md text-on-surface font-bold">{sec.name}</span>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${sec.status === 'Stable' || sec.status === 'Growth' ? 'bg-primary-fixed text-on-primary-fixed' : 'bg-error-container text-on-error-container'}`}>
                    {sec.status}
                  </span>
                </div>
                <p className="text-headline-md font-bold text-on-surface mt-2">{sec.activeCount} Farms</p>
                <p className="text-body-sm text-on-surface-variant mt-1 font-semibold">Average Credit Score: {sec.avgCreditScore}</p>
              </div>
              <div className="mt-4 pt-3 border-t border-outline-variant/40">
                <div className="flex justify-between items-center text-label-sm text-on-surface-variant font-bold">
                  <span>Outstanding Ratio</span>
                  <span>{sec.outstandingPercentage}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
