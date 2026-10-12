import { useState } from "react";
import statuses from "../data/statuses.js";

const emptyForm = { company: "", role: "", status: "Applied", date: "", link: "", notes: "" };

function ApplicationForm({ onAdd }) {
  const [form, setForm] = useState(emptyForm);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.company.trim() || !form.role.trim()) {
      setError("Company and role are required.");
      return;
    }
    onAdd({ ...form, company: form.company.trim(), role: form.role.trim() });
    setForm(emptyForm);
    setError("");
  };

  const inputClass =
    "mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200";

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl bg-white p-6 shadow-sm lg:sticky lg:top-6">
      <h2 className="text-xl font-bold">➕ Add Application</h2>

      <div>
        <label htmlFor="company" className="font-medium">Company</label>
        <input id="company" name="company" value={form.company} onChange={handleChange} placeholder="e.g. Zoho" className={inputClass} />
      </div>
      <div>
        <label htmlFor="role" className="font-medium">Role</label>
        <input id="role" name="role" value={form.role} onChange={handleChange} placeholder="e.g. Frontend Intern" className={inputClass} />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label htmlFor="status" className="font-medium">Status</label>
          <select id="status" name="status" value={form.status} onChange={handleChange} className={inputClass}>
            {statuses.map((s) => (
              <option key={s.value} value={s.value}>{s.value}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="date" className="font-medium">Date</label>
          <input id="date" name="date" type="date" value={form.date} onChange={handleChange} className={inputClass} />
        </div>
      </div>
      <div>
        <label htmlFor="link" className="font-medium">Link (optional)</label>
        <input id="link" name="link" type="url" value={form.link} onChange={handleChange} placeholder="https://..." className={inputClass} />
      </div>
      <div>
        <label htmlFor="notes" className="font-medium">Notes (optional)</label>
        <textarea id="notes" name="notes" rows="3" value={form.notes} onChange={handleChange} placeholder="Recruiter name, next steps..." className={inputClass} />
      </div>

      {error && <p className="text-sm text-red-600" role="alert">{error}</p>}

      <button type="submit" className="w-full rounded-full bg-indigo-600 px-5 py-2.5 font-semibold text-white hover:bg-indigo-700">
        Add Application
      </button>
    </form>
  );
}

export default ApplicationForm;
