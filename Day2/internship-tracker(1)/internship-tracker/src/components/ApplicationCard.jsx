import statuses from "../data/statuses.js";

function ApplicationCard({ application, onStatusChange, onDelete }) {
  const current = statuses.find((s) => s.value === application.status);

  return (
    <article className="flex flex-col rounded-2xl bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-bold">{application.company}</h3>
          <p className="text-slate-600">{application.role}</p>
        </div>
        <span className={`rounded-full px-3 py-1 text-xs font-bold ${current.badge}`}>
          {application.status}
        </span>
      </div>

      {application.date && <p className="mt-3 text-sm text-slate-500">📅 {application.date}</p>}
      {application.notes && <p className="mt-2 text-sm text-slate-700">{application.notes}</p>}
      {application.link && (
        <a href={application.link} target="_blank" rel="noreferrer" className="mt-2 text-sm font-medium text-indigo-700 underline">
          View posting
        </a>
      )}

      <div className="mt-auto flex items-center gap-3 pt-4">
        <label htmlFor={`status-${application.id}`} className="sr-only">
          Change status for {application.company}
        </label>
        <select
          id={`status-${application.id}`}
          value={application.status}
          onChange={(e) => onStatusChange(application.id, e.target.value)}
          className="flex-1 rounded-lg border border-slate-300 px-2 py-1.5 text-sm"
        >
          {statuses.map((s) => (
            <option key={s.value} value={s.value}>{s.value}</option>
          ))}
        </select>
        <button
          type="button"
          onClick={() => onDelete(application.id)}
          className="rounded-lg px-3 py-1.5 text-sm font-semibold text-red-700 hover:bg-red-50"
        >
          Delete
        </button>
      </div>
    </article>
  );
}

export default ApplicationCard;
