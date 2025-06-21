import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip as RechartsTooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", value: 400, users: 240 },
  { name: "Feb", value: 300, users: 139 },
  { name: "Mar", value: 200, users: 980 },
  { name: "Apr", value: 278, users: 390 },
  { name: "May", value: 189, users: 480 },
  { name: "Jun", value: 239, users: 380 },
  { name: "Jul", value: 349, users: 430 },
];

export default function ChartSection() {
  const [hovered, setHovered] = useState<any>(null);

  return (
    <div className="relative bg-white rounded shadow p-6 mb-4 min-h-[300px] flex items-center justify-center">
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={data}
          onMouseLeave={() => setHovered(null)}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <RechartsTooltip
            content={({ active, payload, label }) => {
              if (active && payload && payload.length) {
                setHovered({ label, payload: payload[0].payload });
              } else {
                setHovered(null);
              }
              return null;
            }}
          />
          <Line type="monotone" dataKey="value" stroke="#2563eb" strokeWidth={2} dot />
          <Line type="monotone" dataKey="users" stroke="#f59e42" strokeWidth={2} dot />
        </LineChart>
      </ResponsiveContainer>
      {hovered && (
        <div
          className="absolute left-1/2 top-8 -translate-x-1/2 bg-white border rounded shadow-lg p-4 min-w-[180px] animate-fadein z-20"
          style={{ animation: "fadein 0.3s" }}
        >
          <div className="font-semibold mb-1">{hovered.label}</div>
          <div className="text-sm text-gray-700">Value: {hovered.payload.value}</div>
          <div className="text-sm text-gray-700">Users: {hovered.payload.users}</div>
        </div>
      )}
      <style>{`
        @keyframes fadein {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadein {
          animation: fadein 0.3s;
        }
      `}</style>
    </div>
  );
} 