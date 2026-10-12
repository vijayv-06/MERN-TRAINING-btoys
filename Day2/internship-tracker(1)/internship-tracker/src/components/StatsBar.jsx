import statuses from "../data/statuses.js";

function StatsBar({ applications }) {
  const total = applications.length;

  return (
    <section aria-label="Application summary" className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
      <div className="rounded-2xl bg-white p-4 shadow-sm">
        <p className="text-sm text-slate-500">Total</p>
        <p className="text-3xl font-extrabold text-indigo-700">{total}</p>
      </div>
      {statuses.map((s) => (
        <div key={s.value} className="rounded-2xl bg-white p-4 shadow-sm">
          <p className="text-sm text-slate-500">{s.value}</p>
          <p className="text-3xl font-extrabold">
            {applications.filter((a) => a.status === s.value).length}
          </p>
        </div>
      ))}
    </section>
  );
}

export default StatsBar;
