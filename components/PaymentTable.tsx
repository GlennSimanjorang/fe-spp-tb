"use client";

import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

interface PaymentRecord {
  id: string;
  waktu: string;
  nis: string;
  namaSiswa: string;
  kelas: string;
  periode: string;
  jumlah: string;
  metode: string;
  bukti: string;
  status: string;
}

export function PaymentTable() {
  const sampleData: PaymentRecord[] = [
    {
      id: "1",
      waktu: "24/07/2025 14:32",
      nis: "2024001",
      namaSiswa: "Satria Nur Najmuddin",
      kelas: "XII RPL 2",
      periode: "Juli 2025",
      jumlah: "Rp 600.000",
      metode: "Transfer Bank",
      bukti: "TF240724001",
      status: "Pending"
    }
  ];

  return (
    <div className="bg-white rounded-lg border border-border">
      <div className="p-6 border-b border-border">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Pembayaran Baru</h3>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4" />
          <Input 
            placeholder="Cari Data Siswa" 
            className="pl-10 bg-input-background border-border"
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-muted/50 border-b border-border">
            <tr>
              <th className="text-left p-4 text-sm font-medium text-gray-500">
                <input type="checkbox" className="rounded border-border" />
              </th>
              <th className="text-left p-4 text-sm font-medium text-gray-500">Waktu</th>
              <th className="text-left p-4 text-sm font-medium text-gray-500">NIS</th>
              <th className="text-left p-4 text-sm font-medium text-gray-500">Nama Siswa</th>
              <th className="text-left p-4 text-sm font-medium text-gray-500">Kelas</th>
              <th className="text-left p-4 text-sm font-medium text-gray-500">Periode</th>
              <th className="text-left p-4 text-sm font-medium text-gray-500">Jumlah</th>
              <th className="text-left p-4 text-sm font-medium text-gray-500">Metode</th>
              <th className="text-left p-4 text-sm font-medium text-gray-500">Bukti</th>
              <th className="text-left p-4 text-sm font-medium text-gray-500">Status</th>
              <th className="text-left p-4 text-sm font-medium text-gray-500">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {sampleData.map((record) => (
              <tr key={record.id} className="border-b border-border hover:bg-muted/25">
                <td className="p-4">
                  <input type="checkbox" className="rounded border-border" />
                </td>
                <td className="p-4 text-sm text-gray-900">{record.waktu}</td>
                <td className="p-4 text-sm text-gray-900">{record.nis}</td>
                <td className="p-4 text-sm text-gray-900">{record.namaSiswa}</td>
                <td className="p-4 text-sm text-gray-900">{record.kelas}</td>
                <td className="p-4 text-sm text-gray-900">{record.periode}</td>
                <td className="p-4 text-sm text-gray-900">{record.jumlah}</td>
                <td className="p-4 text-sm text-gray-900">{record.metode}</td>
                <td className="p-4 text-sm text-gray-900">{record.bukti}</td>
                <td className="p-4">
                  <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 border-yellow-200">
                    {record.status}
                  </Badge>
                </td>
                <td className="p-4">
                  <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50">
                    Detail
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="p-4 border-t border-border flex items-center justify-center">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" disabled>
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <span className="text-sm text-gray-500">1 2 3 4 5</span>
          <Button variant="ghost" size="sm">
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}