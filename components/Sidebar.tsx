import { Users, CreditCard, Clock, FileText, Bell, BarChart3, LogOut } from "lucide-react";
import { Button } from "./ui/button";

interface SidebarProps {
  activeItem: string;
  onItemClick: (item: string) => void;
  onLogout?: () => void;
}

export function Sidebar({ activeItem, onItemClick, onLogout }: SidebarProps) {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { id: 'data-siswa', label: 'Data Siswa', icon: Users },
    { id: 'pembayaran', label: 'Pembayaran', icon: CreditCard },
    { id: 'tunggakan', label: 'Tunggakan', icon: Clock },
    { id: 'laporan', label: 'Laporan', icon: FileText },
    { id: 'notifikasi', label: 'Notifikasi', icon: Bell },
  ];

  return (
    <div className="w-64 bg-white border-r border-border h-screen flex flex-col">
      <div className="p-6">
        <h1 className="text-xl font-medium text-gray-900">Admin</h1>
        <p className="text-sm text-gray-900">SMK Taruna Bhakti</p>
      </div>
      
      <nav className="flex-1 px-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.id}>
                <button
                  onClick={() => onItemClick(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                    activeItem === item.id
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-500 hover:bg-accent hover:text-gray-900'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Logout Button */}
      {onLogout && (
        <div className="p-4 border-t border-border">
          <Button
            onClick={onLogout}
            variant="ghost"
            className="w-full flex items-center gap-3 px-4 py-3 text-destructive text-gray-900 hover:bg-red-50 hover:text-red-700"
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span> 
          </Button>
        </div>
      )}
    </div>
  );
}