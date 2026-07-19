import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import enterpriseList from '../../mock/enterprise.json';

export default function EnterpriseProfile() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find the selected enterprise, default to the first one (Highland Milk) if not found
  const enterpriseId = id || '1';
  const ent = enterpriseList.find(e => e.id === enterpriseId) || enterpriseList[0];

  const formatCurrency = (val) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <div className="space-y-lg animate-in fade-in duration-300">
      {/* Profile Header Navigation */}
      <div className="flex items-center gap-md mb-md">
        <span 
          onClick={() => navigate('/officer/dashboard')}
          className="material-symbols-outlined text-primary cursor-pointer active:opacity-80 transition-all p-1 hover:bg-surface-container-high rounded-full"
        >
          arrow_back
        </span>
        <h1 className="font-headline-md text-headline-md font-bold text-primary">Enterprise Profile Details</h1>
      </div>

      {/* Profile Header Card */}
      <section className="bg-surface-container-lowest rounded-xl p-lg shadow-sm border border-outline-variant flex flex-col md:flex-row items-start md:items-center justify-between gap-md">
        <div className="flex items-center gap-lg">
          <div className="relative">
            <div 
              className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-cover bg-center overflow-hidden border border-outline-variant" 
              style={{ backgroundImage: `url('${ent.imageUrl}')` }}
            ></div>
            <div className="absolute -bottom-2 -right-2 bg-primary text-on-primary p-1.5 rounded-lg shadow-md border-2 border-surface">
              <span className="material-symbols-outlined text-[18px] font-bold">verified</span>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">{ent.name}</h2>
              <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${ent.riskBg} ${ent.riskColor}`}>
                {ent.riskStatus}
              </span>
            </div>
            <p className="text-body-md text-on-surface-variant font-medium mt-1">{ent.owner} — Rural Producer</p>
            <p className="text-label-sm text-on-surface-variant mt-0.5 font-bold">{ent.region}</p>
          </div>
        </div>

        <div className="flex gap-md w-full md:w-auto">
          <button 
            onClick={() => alert(`Initiating priority audit for ${ent.name}.`)}
            className="flex-1 md:flex-none px-6 py-2.5 bg-primary text-on-primary rounded-lg font-bold hover:opacity-90 active:scale-95 transition-all shadow-sm"
          >
            Audit File
          </button>
          <button 
            onClick={() => alert(`Contacting entrepreneur ${ent.owner}.`)}
            className="flex-1 md:flex-none px-6 py-2.5 border border-outline text-primary rounded-lg font-bold hover:bg-surface-container-high transition-all"
          >
            Contact Owner
          </button>
        </div>
      </section>

      {/* Performance Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-lg">
        <div className="bg-surface-container-lowest p-md rounded-xl border border-outline-variant shadow-sm text-center">
          <p className="text-label-sm text-on-surface-variant font-semibold">Credit Score</p>
          <h3 className="text-headline-md font-bold text-primary mt-1">{ent.creditScore}</h3>
          <span className="text-[10px] text-on-surface-variant font-bold uppercase">{ent.creditRating}</span>
        </div>
        <div className="bg-surface-container-lowest p-md rounded-xl border border-outline-variant shadow-sm text-center">
          <p className="text-label-sm text-on-surface-variant font-semibold">Ledger Cash Balance</p>
          <h3 className="text-headline-md font-bold text-on-surface mt-1">{formatCurrency(ent.balance)}</h3>
          <span className="text-[10px] text-primary font-bold uppercase">Healthy Inflow</span>
        </div>
        <div className="bg-surface-container-lowest p-md rounded-xl border border-outline-variant shadow-sm text-center">
          <p className="text-label-sm text-on-surface-variant font-semibold">Outstanding Loan</p>
          <h3 className="text-headline-md font-bold text-error mt-1">{formatCurrency(ent.outstandingLoan)}</h3>
          <span className="text-[10px] text-on-surface-variant font-bold uppercase">KCC Limit Active</span>
        </div>
        <div className="bg-surface-container-lowest p-md rounded-xl border border-outline-variant shadow-sm text-center">
          <p className="text-label-sm text-on-surface-variant font-semibold">Next Repayment</p>
          <h3 className="text-headline-sm font-bold text-on-surface mt-2">{ent.nextRepayment}</h3>
          <span className="text-[10px] text-on-surface-variant font-bold uppercase">Auto-Debit Linked</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl">
        {/* Cash Flow History (8/12) */}
        <div className="lg:col-span-8 space-y-lg">
          <div className="bg-surface-container-lowest p-lg rounded-xl border border-outline-variant shadow-sm">
            <h3 className="font-label-md text-label-md text-on-surface mb-lg uppercase tracking-widest font-bold">Cash Flow History (5-Month)</h3>
            <div className="h-48 flex items-end justify-between gap-4 mt-6">
              {ent.cashFlowHistory.map((item, idx) => {
                const maxVal = Math.max(...ent.cashFlowHistory.map(h => Math.max(h.income, h.expense)));
                const incPct = (item.income / maxVal) * 80;
                const expPct = (item.expense / maxVal) * 80;
                return (
                  <div key={idx} className="flex-1 flex flex-col items-center justify-end h-full">
                    <div className="w-full flex justify-center gap-1 items-end h-full">
                      <div 
                        className="w-3 bg-primary rounded-t-sm"
                        style={{ height: `${incPct}%` }}
                        title={`Inflow: ${formatCurrency(item.income)}`}
                      />
                      <div 
                        className="w-3 bg-error rounded-t-sm"
                        style={{ height: `${expPct}%` }}
                        title={`Outflow: ${formatCurrency(item.expense)}`}
                      />
                    </div>
                    <span className="text-[10px] font-bold text-on-surface-variant mt-2 uppercase">{item.month}</span>
                  </div>
                );
              })}
            </div>
            <div className="flex gap-4 justify-center mt-6">
              <span className="flex items-center gap-1 text-label-sm font-semibold">
                <span className="w-2.5 h-2.5 rounded bg-primary inline-block"></span> Inflow
              </span>
              <span className="flex items-center gap-1 text-label-sm font-semibold">
                <span className="w-2.5 h-2.5 rounded bg-error inline-block"></span> Outflow
              </span>
            </div>
          </div>

          {/* Transactions List */}
          <div className="bg-surface-container-lowest p-lg rounded-xl border border-outline-variant shadow-sm">
            <h3 className="font-label-md text-label-md text-on-surface mb-lg uppercase tracking-widest font-bold">Ledger Transactions</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-outline-variant text-on-surface-variant font-bold text-label-sm">
                    <th className="pb-sm font-bold">Date</th>
                    <th className="pb-sm font-bold">Description</th>
                    <th className="pb-sm font-bold">Type</th>
                    <th className="pb-sm font-bold">Method</th>
                    <th className="pb-sm text-right font-bold">Amount</th>
                  </tr>
                </thead>
                <tbody className="text-body-sm">
                  {ent.transactions.map((tr) => (
                    <tr key={tr.id} className="border-b border-outline-variant last:border-0 hover:bg-surface-container-low transition-colors">
                      <td className="py-md text-on-surface-variant font-medium">{tr.date}</td>
                      <td className="py-md font-bold text-on-surface">{tr.description}</td>
                      <td className="py-md">
                        <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase ${tr.type === 'income' ? 'bg-primary-fixed text-on-primary-fixed' : 'bg-error-container text-on-error-container'}`}>
                          {tr.type}
                        </span>
                      </td>
                      <td className="py-md text-on-surface-variant font-semibold">{tr.method}</td>
                      <td className={`py-md text-right font-bold ${tr.type === 'income' ? 'text-primary' : 'text-error'}`}>
                        {tr.type === 'income' ? '+' : '-'}{formatCurrency(tr.amount)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* AI Insight & Analysis Sidebar (4/12) */}
        <div className="lg:col-span-4 space-y-lg">
          <div className="bg-surface-container-lowest p-lg rounded-xl border border-outline-variant shadow-sm">
            <h3 className="font-label-md text-label-md text-on-surface mb-lg uppercase tracking-widest font-bold">Risk Intelligence</h3>
            <div className="p-4 bg-surface-container rounded-xl">
              <h4 className="font-label-md text-on-surface mb-xs flex items-center gap-2 font-bold">
                <span className="material-symbols-outlined text-primary">psychology</span>
                AI Analysis Explanation
              </h4>
              <p className="text-body-sm text-on-surface-variant leading-relaxed mt-2 font-medium">
                "Subject shows stable transaction liquidity. Outstanding debt service ratio is fully matched by milk cooperative payouts. Primary risk element is dry season fodder price spike, partially hedged by regional supplier contracts."
              </p>
            </div>

            <div className="mt-6 space-y-4">
              <div>
                <div className="flex justify-between items-center text-label-sm mb-1.5 font-bold">
                  <span className="text-on-surface-variant">Credit Reliability</span>
                  <span className="text-primary">92%</span>
                </div>
                <div className="w-full h-2 bg-surface-container rounded-full overflow-hidden">
                  <div className="h-full bg-primary" style={{ width: '92%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center text-label-sm mb-1.5 font-bold">
                  <span className="text-on-surface-variant">Repayment Stability</span>
                  <span className="text-secondary">85%</span>
                </div>
                <div className="w-full h-2 bg-surface-container rounded-full overflow-hidden">
                  <div className="h-full bg-secondary" style={{ width: '85%' }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-surface-container-lowest p-lg rounded-xl border border-outline-variant shadow-sm">
            <h3 className="font-label-md text-label-md text-on-surface mb-lg uppercase tracking-widest font-bold">Audit History</h3>
            <div className="space-y-4 font-body-sm">
              <div className="border-l-2 border-primary pl-4 py-1">
                <p className="font-bold text-on-surface">Field Visit Complete</p>
                <p className="text-on-surface-variant text-[10px] font-bold">12 June 2026 by Officer V. Sharma</p>
                <p className="text-on-surface-variant mt-1">Verified herd inventory, confirmed installation of automatic milk chilling tank unit.</p>
              </div>
              <div className="border-l-2 border-outline pl-4 py-1">
                <p className="font-bold text-on-surface">Credit Rating Review</p>
                <p className="text-on-surface-variant text-[10px] font-bold">04 Jan 2026 by system_ai</p>
                <p className="text-on-surface-variant mt-1">Credit limits raised to 3.0L based on sustained digital UPI revenue growth.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
