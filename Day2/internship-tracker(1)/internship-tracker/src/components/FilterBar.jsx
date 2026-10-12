import statuses from "../data/statuses.js";

function FilterBar({ search, setSearch, statusFilter, setStatusFilter }) {
  const options = ["All", ...statuses.map((s) => s.value)];

  return (
    <div className="space-y-3">
      <label htmlFor="search" className="sr-only">Search applications</label>
      <input
        id="search"
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="🔍 Search by company or role..."
        className="w-full rounded-full border border-slate-300 bg-white px-5 py-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
      />
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by status">
        {options.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => setStatusFilter(option)}
            aria-pressed={statusFilter === option}
            className={`rounded-full px-4 py-1.5 text-sm font-semibold transition ${
              statusFilter === option
                ? "bg-indigo-600 text-white"
                : "bg-white text-slate-700 hover:bg-indigo-50"
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default FilterBar;
