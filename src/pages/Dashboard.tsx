import React from "react";
import {
  Menu,
  Home,
  Bell,
  FileText,
  UploadCloud,
  Settings,
  LogOut,
  Zap,
  Star,
  ChevronUp,
  MoreHorizontal,
  Info,
  Plus,
  RefreshCw,
  Upload,
  Search,
  ChevronDown,
} from "lucide-react";
import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router-dom";

import SlideOver from "../components/common/SlideOver";
import VariableEditForm from "../components/variables/VariableEditForm";
import ChartSection from "../components/dashboard/ChartSection";

const Dashboard = () => {
  const [showSlideOver, setShowSlideOver] = React.useState(false);
  const { user, loading, logout } = useAuth();
  const [isScenarioResultOpen , setisScenarioResultOpen] = React.useState(false);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-black text-white">
        Loading...
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }
  const handleScenarios = () => {
    setisScenarioResultOpen(!isScenarioResultOpen);
  }
  return (
    <div className="flex h-screen bg-black text-gray-300 font-sans">
      {/* Sidebar */}
      <aside className="w-20 flex flex-col items-center justify-between py-6 px-2 bg-gray-900/50 border-r border-gray-800">
        <div className="flex flex-col items-center gap-6">
          <button className="text-lime-400">
            <Menu size={24} />
          </button>
          <nav className="flex flex-col items-center gap-8 mt-4">
            <a href="#" className="p-2 bg-gray-800 rounded-lg text-white">
              <Home size={22} />
            </a>
            <a href="#" className="text-gray-500 hover:text-white">
              <Bell size={22} />
            </a>
            <a href="#" className="text-gray-500 hover:text-white">
              <FileText size={22} />
            </a>
            <a href="#" className="text-gray-500 hover:text-white">
              <UploadCloud size={22} />
            </a>
            <a href="#" className="text-gray-500 hover:text-white">
              <Settings size={22} />
            </a>
          </nav>
        </div>
        <div className="flex flex-col items-center gap-6">
          <button onClick={logout} className="text-gray-500 hover:text-white">
            <LogOut size={22} />
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Top bar */}
        <header className="flex items-center justify-between px-8 py-4 border-b border-gray-800">
          <div className="flex items-center gap-4">
            <button className="px-4 py-2 text-sm font-semibold bg-gray-800 text-white rounded-md border border-gray-700">
              Charging Stations
            </button>
            <button className="px-4 py-2 text-sm text-gray-400 hover:text-white">
              Fleet Sizing
            </button>
            <button className="px-4 py-2 text-sm text-gray-400 hover:text-white">
              Parking
            </button>
          </div>
          <div className="relative">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
            />
            <input
              type="text"
              placeholder="Search"
              className="bg-gray-900 border border-gray-700 rounded-md py-2 pl-10 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-lime-500"
            />
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
          {/* Title and actions */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-white flex items-center gap-3">
              <Zap className="text-lime-400" />
              Charging Station
            </h1>
            <div className="flex items-center gap-3">
              <button className="p-2 rounded-md bg-gray-800 border border-gray-700 hover:bg-gray-700">
                <RefreshCw size={18} />
              </button>
              <button
                onClick={() => setShowSlideOver(true)}
                className="px-4 py-2 text-sm font-semibold rounded-md bg-gray-800 border border-gray-700 hover:bg-gray-700 flex items-center gap-2"
              >
                Edit Variables
              </button>
              <button className="p-2 rounded-md bg-gray-800 border border-gray-700 hover:bg-gray-700">
                <Upload size={18} />
              </button>
            </div>
          </div>

          {/* Best Scenario Results */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl mb-8">
            <div className="flex justify-between items-center p-4 border-b border-gray-800">
              <h2 className="text-lg font-semibold flex items-center gap-2">
                <Star className="text-lime-400" /> Best Scenario Results
              </h2>
              <button className="p-2 rounded-full bg-lime-900/50 text-lime-400">
               {isScenarioResultOpen ? <ChevronUp size={20}  onClick={handleScenarios}/> : <ChevronDown size={20} onClick={handleScenarios}/>}
              </button>
            </div>
            {isScenarioResultOpen && <div className="p-4 space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-800/50 border border-lime-800 rounded-lg">
                <p className="text-sm text-gray-300">
                  The best found configuration based on profit is characterized
                  by 11 zones (max) with charging stations and 48 total number
                  of poles.
                </p>
                <button className="text-gray-500">
                  <MoreHorizontal />
                </button>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-800/50 border border-lime-800 rounded-lg">
                <p className="text-sm text-gray-300">
                  The best found configuration based on satisfied demand is
                  characterized by 11 zones (max) with charging stations and 48
                  total number of poles.
                </p>
                <button className="text-gray-500">
                  <MoreHorizontal />
                </button>
              </div>
            </div>}
          </div>

          {/* Graphs and KPIs */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-xl font-semibold mb-4">Graphs</h2>
              <div className="p-4 bg-gray-900/50 border border-gray-800 rounded-xl h-96">
                <ChartSection />
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">
                  Key Performance Indicators
                </h2>
                <button className="flex items-center gap-1 text-sm text-lime-400">
                  Variables <Plus size={16} />
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: "Infrastructure Units", value: "€421.07" },
                  { title: "Charging Growth", value: "33.07" },
                  { title: "Localization change", value: "21.9%" },
                  { title: "Fleet growth", value: "7.03%" },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="p-4 bg-gray-900/50 border border-gray-800 rounded-xl"
                  >
                    <div className="flex items-center justify-between text-gray-400 text-sm mb-1">
                      <span>{item.title}</span> <Info size={16} />
                    </div>
                    <p className="text-xs text-gray-500 mb-3">
                      This describes variable two and what the shown data
                      means.
                    </p>
                    <p className="text-3xl font-bold text-white">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <SlideOver open={showSlideOver} onClose={() => setShowSlideOver(false)}>
        <VariableEditForm onClose={() => setShowSlideOver(false)} />
      </SlideOver>
    </div>
  );
};

export default Dashboard; 