"use client";

import { useState } from "react";
import { Sidebar } from "../../components/Sidebar";
import { Dashboard } from "../../components/Dashboard";

export default function App() {
  const [activeItem, setActiveItem] = useState('dashboard');

  const renderContent = () => {
    switch (activeItem) {
      case 'dashboard':
        return <Dashboard />;
      case 'data-siswa':
        return (
          <div className="flex-1 p-6">
            <h2 className="text-xl font-medium text-foreground mb-4">Data Siswa</h2>
            <p className="text-muted-foreground">Halaman data siswa akan ditampilkan di sini.</p>
          </div>
        );
      case 'pembayaran':
        return (
          <div className="flex-1 p-6">
            <h2 className="text-xl font-medium text-foreground mb-4">Pembayaran</h2>
            <p className="text-muted-foreground">Halaman pembayaran akan ditampilkan di sini.</p>
          </div>
        );
      case 'tunggakan':
        return (
          <div className="flex-1 p-6">
            <h2 className="text-xl font-medium text-foreground mb-4">Tunggakan</h2>
            <p className="text-muted-foreground">Halaman tunggakan akan ditampilkan di sini.</p>
          </div>
        );
      case 'laporan':
        return (
          <div className="flex-1 p-6">
            <h2 className="text-xl font-medium text-foreground mb-4">Laporan</h2>
            <p className="text-muted-foreground">Halaman laporan akan ditampilkan di sini.</p>
          </div>
        );
      case 'notifikasi':
        return (
          <div className="flex-1 p-6">
            <h2 className="text-xl font-medium text-foreground mb-4">Notifikasi</h2>
            <p className="text-muted-foreground">Halaman notifikasi akan ditampilkan di sini.</p>
          </div>
        );
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar activeItem={activeItem} onItemClick={setActiveItem} />
      {renderContent()}
    </div>
  );
}