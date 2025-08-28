"use client";

interface StatsCardProps {
    title: string;
    value: number;
    color: string;
}

export function StatsCard({ title, value, color }: StatsCardProps) {
  return (
    <div className="bg-white rounded-lg border border-border p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500 mb-1">{title}</p>
          <p className="text-2xl font-medium text-gray-900">{value}</p>
        </div>
        <div className={`w-4 h-4 rounded ${color}`}></div>
      </div>
    </div>
  );
}