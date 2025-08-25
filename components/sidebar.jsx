import {Home, User, DollarSign, Clock, FileText, Bell } from 'lucide-react';

const menuItems = [
  { name: "Dashboard", icon: <Home size={20} />, href: "/dashboard" },
  { name: "Data Siswa", icon: <Users size={20} />, href: "/siswa" },
  { name: "Pembayaran", icon: <DollarSign size={20} />, href: "/pembayaran" },
  { name: "Tunggakan", icon: <Clock size={20} />, href: "/tunggakan" },
  { name: "Laporan", icon: <FileText size={20} />, href: "/laporan" },
  { name: "Notifikasi", icon: <Bell size={20} />, href: "/notifikasi" },
];

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white flex flex-col">
      <div className="p-4 text-2xl font-bold border-b border-gray-700">
        Admin Panel
      </div>
      <nav className="flex-1 p-4">
        <ul>
          {menuItems.map((item) => (
            <li key={item.name} className="mb-4">
              <a
                href={item.href}
                className="flex items-center p-2 rounded hover:bg-gray-700 transition"
              >
                {item.icon}
                <span className="ml-3">{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}