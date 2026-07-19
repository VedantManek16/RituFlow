import React from 'react';

export default function BarChart({ data }) {
  // Fallback to default data if not provided
  const items = data || [
    { month: 'Mar', income: 'h-[80%]', expense: 'h-[40%]' },
    { month: 'Apr', income: 'h-[90%]', expense: 'h-[30%]' },
    { month: 'May', income: 'h-[70%]', expense: 'h-[50%]' }
  ];

  return (
    <div className="h-40 flex items-end justify-around gap-4 px-2 w-full">
      {items.map((item, idx) => (
        <div key={idx} className="flex-1 flex flex-col justify-end gap-1 h-full items-center">
          <div className="w-full flex gap-2 h-full items-end justify-center">
            {/* Income Bar */}
            <div 
              style={{ height: typeof item.income === 'number' ? `${item.income}%` : undefined }}
              className={`w-4 bg-primary rounded-sm transition-all duration-500 hover:opacity-90 ${typeof item.income === 'string' ? item.income : ''}`}
              title={`Income: ${item.income}`}
            />
            {/* Expense Bar */}
            <div 
              style={{ height: typeof item.expense === 'number' ? `${item.expense}%` : undefined }}
              className={`w-4 bg-error rounded-sm transition-all duration-500 hover:opacity-90 ${typeof item.expense === 'string' ? item.expense : ''}`}
              title={`Expense: ${item.expense}`}
            />
          </div>
          <span className="text-[10px] font-bold text-on-surface-variant uppercase mt-1">
            {item.month}
          </span>
        </div>
      ))}
    </div>
  );
}
