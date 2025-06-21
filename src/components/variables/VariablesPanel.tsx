import React from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../../store/store";
import { toggleVariable } from "../../store/variablesSlice";

export default function VariablesPanel() {
  const dispatch = useDispatch<AppDispatch>();
  const variables = useSelector((state: RootState) => state.variables.variables); // adjust if needed
  const [hovered, setHovered] = React.useState<string | null>(null);

  return (
    <aside className="w-64 bg-gray-100 p-4 border-r h-full">
      <h2 className="text-xl font-semibold mb-4">Variables Panel</h2>
      <ul className="space-y-2">
        {variables.map((v) => (
          <li
            key={v.id}
            className={`flex items-center justify-between p-2 rounded cursor-pointer transition border ${
              v.active
                ? "bg-blue-100 border-blue-400"
                : "bg-white border-gray-200"
            } ${hovered === v.id ? "ring-2 ring-blue-300" : ""}`}
            onClick={() => dispatch(toggleVariable(v.id))}
            onMouseEnter={() => setHovered(v.id)}
            onMouseLeave={() => setHovered(null)}
          >
            <span className="font-medium">{v.name}</span>
            <span
              className={`w-3 h-3 rounded-full ml-2 ${
                v.active ? "bg-blue-500" : "bg-gray-300"
              }`}
            />
            {hovered === v.id && (
              <div className="absolute left-64 ml-2 p-2 bg-white border rounded shadow text-xs z-10 w-40">
                {v.description}
              </div>
            )}
          </li>
        ))}
      </ul>
      <div className="mt-4 text-xs text-gray-500">
        Click a variable to toggle its state. Hover to see details.
      </div>
    </aside>
  );
} 