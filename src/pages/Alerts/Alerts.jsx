import React, { useState } from 'react';

export default function Alerts() {
  const [activeTab, setActiveTab] = useState('all'); // 'all', 'critical', 'warning', 'info'

  const allAlerts = [
    {
      id: 1,
      title: 'Market Volatility Warning',
      description: 'Milk prices are expected to decrease by 10% next month due to increased regional supply. Prepare your cash reserves for a temporary dip in revenue.',
      type: 'critical',
      tag: 'Urgent Audit Needed',
      icon: 'trending_down',
      bgColor: 'bg-error-container',
      textColor: 'text-on-error-container',
      iconColor: 'text-error',
      date: 'Just now'
    },
    {
      id: 2,
      title: 'Repayment Window Closing',
      description: 'Village Dairy Group loan repayment window is closing in 4 days. Current ledger updates are incomplete.',
      type: 'warning',
      tag: 'Medium Priority',
      icon: 'schedule',
      bgColor: 'bg-orange-100',
      textColor: 'text-on-surface',
      iconColor: 'text-[orange]',
      date: '10 mins ago'
    },
    {
      id: 3,
      title: 'Severe Rainfall Forecast',
      description: 'West Highlands district expects heavy monsoon downpours next week. Advise dairy farms to reinforce crop storage and maintain cattle shading.',
      type: 'critical',
      tag: 'Weather Risk',
      icon: 'rainy',
      bgColor: 'bg-error-container',
      textColor: 'text-on-error-container',
      iconColor: 'text-error',
      date: '2 hours ago'
    },
    {
      id: 4,
      title: 'Commodity Price Spike',
      description: 'Wheat wholesale price indices are showing an upward pressure of +5.2% in East Plains cooperative markets.',
      type: 'info',
      tag: 'Growth Opp',
      icon: 'trending_up',
      bgColor: 'bg-primary-fixed',
      textColor: 'text-on-primary-fixed',
      iconColor: 'text-primary',
      date: '4 hours ago'
    },
    {
      id: 5,
      title: 'Fertilizer Rate Hike Alert',
      description: 'State cooperative mills are raising secondary fertilizer prices by 8% starting next Monday. Refill inventory before price changes apply.',
      type: 'warning',
      tag: 'Farming Tip',
      icon: 'shopping_cart_checkout',
      bgColor: 'bg-orange-100',
      textColor: 'text-on-surface',
      iconColor: 'text-[orange]',
      date: '1 day ago'
    }
  ];

  const filteredAlerts = allAlerts.filter(alert => {
    if (activeTab === 'all') return true;
    return alert.type === activeTab;
  });

  return (
    <div className="space-y-lg animate-in fade-in duration-300">
      {/* Header Section */}
      <section className="mb-lg">
        <h1 className="font-headline-lg text-headline-lg text-on-surface font-bold">Priority Alerts Center</h1>
        <p className="text-on-surface-variant body-md mt-1">Real-time risk warnings, weather anomalies, and market volatility updates.</p>
      </section>

      {/* Tabs */}
      <div className="flex gap-2 p-1 bg-surface-container rounded-lg border border-outline-variant max-w-md">
        {['all', 'critical', 'warning', 'info'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-2 rounded-md text-label-md transition-all font-bold ${
              activeTab === tab
                ? 'bg-surface-container-lowest text-primary shadow-sm font-bold'
                : 'text-on-surface-variant hover:bg-surface-container-high'
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Alerts Feed */}
      <div className="space-y-md">
        {filteredAlerts.length > 0 ? (
          filteredAlerts.map((alert) => (
            <div 
              key={alert.id}
              className="bg-surface-container-lowest rounded-xl p-lg shadow-sm border border-outline-variant flex gap-md items-start hover:shadow-md transition-shadow"
            >
              <div className={`mt-1 rounded-full w-10 h-10 flex items-center justify-center shrink-0 ${alert.bgColor} ${alert.iconColor}`}>
                <span className="material-symbols-outlined">{alert.icon}</span>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start flex-wrap gap-2">
                  <div>
                    <h3 className="font-headline-sm text-[18px] text-on-surface font-bold">{alert.title}</h3>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase mt-1 inline-block ${alert.bgColor} ${alert.iconColor}`}>
                      {alert.tag}
                    </span>
                  </div>
                  <span className="text-label-sm text-on-surface-variant font-semibold">{alert.date}</span>
                </div>
                <p className="text-body-md text-on-surface-variant mt-3 leading-relaxed font-medium">
                  {alert.description}
                </p>
                <div className="flex gap-sm mt-4">
                  <button 
                    onClick={() => alert(`Taking action on: ${alert.title}`)}
                    className="px-4 py-2 bg-primary text-on-primary rounded-lg text-label-sm font-bold hover:opacity-90 active:scale-95 transition-all shadow-sm"
                  >
                    Take Action
                  </button>
                  <button 
                    onClick={() => alert('Alert dismissed.')}
                    className="px-4 py-2 border border-outline text-on-surface-variant rounded-lg text-label-sm font-bold hover:bg-surface-container transition-all"
                  >
                    Dismiss
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="bg-surface-container-lowest rounded-xl p-xl shadow-sm border border-outline-variant text-center">
            <span className="material-symbols-outlined text-outline text-5xl">notifications_off</span>
            <h3 className="font-headline-sm text-headline-sm mt-md font-bold">No Alerts Found</h3>
            <p className="text-body-sm text-on-surface-variant mt-1 font-semibold">Everything is running smoothly in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
