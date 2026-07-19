import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayout from '../layouts/DashboardLayout';

// Auth Pages
import Login from '../pages/Auth/Login';

// Enterprise Pages
import EnterpriseDashboard from '../pages/Enterprise/Dashboard';
import CashflowForecast from '../pages/Enterprise/Cashflow';
import RiskAnalysis from '../pages/Enterprise/RiskAnalysis';
import AIRecommendations from '../pages/Enterprise/Recommendations';

// Officer Pages
import OfficerDashboard from '../pages/Officer/Dashboard';
import EnterpriseProfile from '../pages/Officer/EnterpriseProfile';
import Analytics from '../pages/Officer/Analytics';

// Shared Alerts Page
import Alerts from '../pages/Alerts/Alerts';

export default function AppRoutes() {
  return (
    <Routes>
      {/* Public Login Route */}
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />

      {/* Enterprise Portal (Protected dashboard routes in real app, mocked here) */}
      <Route path="/enterprise" element={<DashboardLayout />}>
        <Route path="" element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<EnterpriseDashboard />} />
        <Route path="cashflow" element={<CashflowForecast />} />
        <Route path="risk-analysis" element={<RiskAnalysis />} />
        <Route path="recommendations" element={<AIRecommendations />} />
      </Route>

      {/* Field Officer Portal */}
      <Route path="/officer" element={<DashboardLayout />}>
        <Route path="" element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<OfficerDashboard />} />
        <Route path="enterprise" element={<EnterpriseProfile />} />
        {/* Support dynamic IDs too */}
        <Route path="enterprise/:id" element={<EnterpriseProfile />} />
        <Route path="analytics" element={<Analytics />} />
      </Route>

      {/* Global Alerts Route inside Dashboard layout */}
      <Route path="/" element={<DashboardLayout />}>
        <Route path="alerts" element={<Alerts />} />
      </Route>

      {/* Catch-all redirection */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}
