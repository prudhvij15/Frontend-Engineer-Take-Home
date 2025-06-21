import React, { useState, useRef } from "react";
import {
  Search,
  RefreshCw,
  ChevronDown,
  ChevronUp,
  X,
  Check,
  Wand2,
  Info,

} from "lucide-react";
import type { Variable } from "../../constants/data";
import {  VARIABLES, CATEGORY_MAP, PRIMARY_IDS, SECONDARY_IDS } from "../../constants/data";

// Variable Chip Component
const VariableChip: React.FC<{
  variable: Variable;
  isSelected: boolean;
  onSelect: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}> = ({
  variable,
  isSelected,
  onSelect,
  onMouseEnter,
  onMouseLeave,
}) => (
  <div
    className={`flex items-center gap-2 px-4 py-2 rounded-full shadow-sm border transition-all cursor-pointer select-none
      ${
        isSelected
          ? "bg-lime-700 text-white border-lime-500"
          : "bg-gray-800 text-gray-300 border-gray-700 hover:bg-gray-700"
      }
      min-w-[120px]`}
    onClick={onSelect}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <span className="font-medium flex-1">{variable.name}</span>
    {isSelected && <Check size={18} className="text-white ml-2" />}
  </div>
);

// Collapsible Section Component
const CollapsibleSection: React.FC<{
  title: string;
  children: React.ReactNode;
  open: boolean;
  onToggle: () => void;
  highlight?: boolean;
}> = ({ title, children, open, onToggle, highlight }) => (
  <div className="mb-2">
    <button
      className={`w-full flex justify-between items-center px-4 py-3 rounded-lg border shadow-sm transition-colors
        ${
          highlight
            ? "bg-lime-900/60 border-lime-700 text-lime-300"
            : "bg-gray-900 border-gray-700 text-gray-200"
        }
        hover:bg-lime-900/80`}
      onClick={onToggle}
    >
      <span className="font-semibold">{title}</span>
      {open ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
    </button>
    {open && <div className="p-3">{children}</div>}
  </div>
);

export default function VariableEditForm({ onClose }: { onClose: () => void }) {
  const [search, setSearch] = useState("");
  const [selectedVarIds, setSelectedVarIds] = useState<string[]>([
    "co2-distribution",
  ]);

  const [hoveredVarId, setHoveredVarId] = useState<string | null>(null);
  const hoverTimer = useRef<number | null>(null);

  const [catOpen, setCatOpen] = useState([true, true, true]);
  const [primaryOpen, setPrimaryOpen] = useState(true);
  const [secondaryOpen, setSecondaryOpen] = useState(true);

  const filteredCategories = Object.entries(CATEGORY_MAP).map(([cat, varIds]) => [
    cat,
    varIds.filter((id) => VARIABLES[id].name.toLowerCase().includes(search.toLowerCase())),
  ] as [string, string[]]);

  const primaryVars = PRIMARY_IDS.map((id) => VARIABLES[id]);
  const secondaryVars = SECONDARY_IDS.map((id) => VARIABLES[id]);
  const contextVariable = hoveredVarId ? VARIABLES[hoveredVarId] : null;

  const handleSelect = (id: string) => {
    setSelectedVarIds((prev) =>
      prev.includes(id) ? prev.filter((vid) => vid !== id) : [...prev, id]
    );
  };

  const handleMouseEnter = (id: string) => {
    if (hoverTimer.current) {
      clearTimeout(hoverTimer.current);
    }
    hoverTimer.current = window.setTimeout(() => {
      setHoveredVarId(id);
    }, 1500);
  };

  const handleMouseLeave = () => {
    if (hoverTimer.current) {
      clearTimeout(hoverTimer.current);
    }
    setHoveredVarId(null);
  };

  return (
    <div className="fixed inset-y-0 right-0 w-full max-w-xl bg-black shadow-2xl border-l border-gray-800 flex flex-col z-50 rounded-l-2xl overflow-hidden animate-slideIn">
      {/* Top Toolbar */}
      <div className="flex items-center gap-2 px-6 pt-6 pb-4 border-b border-gray-800 bg-black/80">
        <h2 className="text-2xl font-bold flex-1 text-white">Edit Variables</h2>
        <button
          className="text-gray-400 hover:text-white p-2 rounded-full transition"
          onClick={onClose}
          aria-label="Close"
        >
          <X size={28} />
        </button>
      </div>
      <div className="flex items-center gap-2 px-6 pt-4 pb-2 bg-black/80">
        <div className="relative flex-1">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-lime-400" />
          <input
            className="w-full rounded-lg border border-gray-700 bg-gray-900 py-2 pl-10 pr-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-lime-400 focus:outline-none shadow"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <button className="flex items-center gap-2 rounded-lg border border-lime-700 bg-lime-700 px-4 py-2 text-sm text-white font-semibold shadow hover:bg-lime-600 transition">
          <Wand2 size={18} />
          Autofill
        </button>
        <button className="flex items-center gap-2 rounded-lg border border-lime-700 bg-lime-700 px-4 py-2 text-sm text-white font-semibold shadow hover:bg-lime-600 transition">
          <RefreshCw size={18} />
          Rerun
        </button>
      </div>
      {/* Variable Categories */}
      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4 custom-scrollbar">
        {filteredCategories.map(([cat, varIds], i) => (
          <CollapsibleSection
            key={cat}
            title={cat}
            open={catOpen[i]}
            onToggle={() => setCatOpen((prev) => prev.map((o, idx) => (idx === i ? !o : o)))}
            highlight={true}
          >
            <div className="flex flex-wrap gap-3">
              {varIds.length === 0 && (
                <span className="text-gray-500 text-sm">No variables found.</span>
              )}
              {varIds.map((id) => {
                const variable = VARIABLES[id];
                return (
                  <VariableChip
                    key={id}
                    variable={variable}
                    isSelected={selectedVarIds.includes(id)}
                    onSelect={() => handleSelect(id)}
                    onMouseEnter={() => handleMouseEnter(id)}
                    onMouseLeave={handleMouseLeave}
                  />
                );
              })}
            </div>
          </CollapsibleSection>
        ))}
        {/* Description Panel */}
        {contextVariable && (
          <div className="mt-6 mb-2 p-5 rounded-xl bg-gray-900 border border-lime-700 shadow-lg">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-bold text-lg text-white">
                {contextVariable.name}
              </span>
              <Info size={18} className="text-lime-400" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {contextVariable.description}
            </p>
          </div>
        )}
        {/* Bottom  Sections */}
        <CollapsibleSection
          title="Primary Variables"
          open={primaryOpen}
          onToggle={() => setPrimaryOpen((o) => !o)}
          highlight={true}
        >
          <div className="flex flex-wrap gap-2">
            {primaryVars.map((v: Variable) => (
              <span
                key={v.id}
                className="px-3 py-1 rounded-full bg-lime-800 text-lime-200 font-semibold text-xs shadow border border-lime-600"
              >
                {v.name}
              </span>
            ))}
          </div>
        </CollapsibleSection>
        <CollapsibleSection
          title="Secondary Variables"
          open={secondaryOpen}
          onToggle={() => setSecondaryOpen((o) => !o)}
        >
          <div className="flex flex-wrap gap-2">
            {secondaryVars.map((v: Variable) => (
              <span
                key={v.id}
                className="px-3 py-1 rounded-full bg-gray-800 text-lime-300 font-semibold text-xs shadow border border-lime-700"
              >
                {v.name}
              </span>
            ))}
          </div>
        </CollapsibleSection>
      </div>
    </div>
  );
}
