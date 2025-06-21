
import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip as RechartsTooltip,
  ResponsiveContainer,
  ReferenceLine,
  ReferenceDot,
} from "recharts";

const data = [
  { name: "Jan", value: 40000 },
  { name: "Feb", value: 30000 },
  { name: "Mar", value: 20000 },
  { name: "Apr", value: 27800 },
  { name: "May", value: 18900 },
  { name: "Jun", value: 23900 },
  { name: "Jul", value: 89600 },
  { name: "Aug", value: 60000 },
  { name: "Sep", value: 30000 },
  { name: "Oct", value: 55000 },
];

interface HoveredData {
  label: string;
  payload: {
    name: string;
    value: number;
  };
}


export default function ChartSection() {
  const [hovered, setHovered] = useState<HoveredData | null>(null);

  return (
    <div className="relative bg-white rounded shadow p-6 mb-4 min-h-[300px] flex items-center justify-center">
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={data}
          onMouseLeave={() => setHovered(null)}
          onMouseMove={(e) => {
            if (
              e &&
              e.activeTooltipIndex !== undefined &&
              e.activeTooltipIndex !== null
            ) {
              const index = e.activeTooltipIndex;
              setHovered({
                label: data[index].name,
                payload: data[index],
              });
            }
          }}
        >
          <XAxis dataKey="name" />
          <YAxis
            tickFormatter={(v) => `$${(v / 1000).toFixed(0)}K`}
          />
          <RechartsTooltip content={() => null} />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#A3FF12"
            strokeWidth={2}
            dot={{ r: 4, stroke: "#0D0F10", strokeWidth: 2, fill: "#A3FF12" }}
            activeDot={{
              r: 6,
              stroke: "#0D0F10",
              strokeWidth: 2,
              fill: "#A3FF12",
            }}
          />
          {hovered && (
            <>
              <ReferenceLine
                x={hovered.label}
                stroke="#A3FF12"
                strokeDasharray="4 4"
              />
              <ReferenceDot
                x={hovered.label}
                y={hovered.payload.value}
                r={6}
                fill="#A3FF12"
                stroke="#0D0F10"
                strokeWidth={2}
                isFront
              />
            </>
          )}
        </LineChart>
      </ResponsiveContainer>

      {/* Tooltip Label */}
      {hovered && (
        <div
          className="absolute px-4 py-3 rounded-xl border border-gray-600 shadow-xl bg-[#1A1C1D] text-white w-[160px] text-left z-50"
          style={{
            top: 30,
            left: `calc(${(data.findIndex(d => d.name === hovered.label) / (data.length - 1)) * 100}% - 80px)`,
          }}
        >
          <div className="text-lg font-semibold">
            ${ (hovered.payload.value / 1000).toFixed(2) }k
          </div>
          <div className="mt-1 text-sm text-green-400 font-medium">
            4.6% above target
          </div>
        </div>
      )}
    </div>
  );
}
