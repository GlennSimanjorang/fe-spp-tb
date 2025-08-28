"use client";

import { StatsCard } from "./StatsCard";
import { PaymentTable } from "./PaymentTable";

export function Dashboard() {
  return (
    <div className="flex-1 overflow-auto">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-lg m-6 mb-8">
        <h2 className="text-xl font-medium mb-1">Hi, Admin!</h2>
        <p className="text-blue-100 text-sm">Sistem Pembayaran SPP - SMK Taruna Bhakti</p>
      </div>

      {/* Stats Cards */}
      <div className="px-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatsCard 
            title="Total Siswa" 
            value={5} 
            color="bg-blue-500" 
          />
          <StatsCard 
            title="Pembayaran bulan ini" 
            value={5} 
            color="bg-blue-400" 
          />
          <StatsCard 
            title="Tunggakan" 
            value={5} 
            color="bg-blue-600" 
          />
        </div>
      </div>

      {/* Payment Table */}
      <div className="px-6 pb-6">
        <PaymentTable />
      </div>
    </div>
  );
}