import { useState, useEffect } from "react";
import StatsBar from "./components/StatsBar.jsx";
import ApplicationForm from "./components/ApplicationForm.jsx";
import FilterBar from "./components/FilterBar.jsx";
import ApplicationCard from "./components/ApplicationCard.jsx";

const STORAGE_KEY = "internshipApplications";

function App() {
  // Load saved applications once, when the app first renders
  const [applications, setApplications] = useState(() => {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  });
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  // Save to localStorage every time the list changes
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(applications));
  }, [applications]);

  const addApplication = (application) => {
    setApplications([{ ...application, id: Date.now() }, ...applications]);
  };

  const updateStatus = (id, status) => {
    setApplications(applications.map((a) => (a.id === id ? { ...a, status } : a)));
  };

  const deleteApplication = (id) => {
    setApplications(applications.filter((a) => a.id !== id));
  };

  const query = search.trim().toLowerCase();
  const visible = applications.filter((a) => {
    const matchesSearch =
      a.company.toLowerCase().includes(query) || a.role.toLowerCase().includes(query);
    const matchesStatus = statusFilter === "All" || a.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-h-screen">
      <header className="bg-gradient-to-r from-indigo-700 to-violet-600 text-white">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
          <h1 className="text-3xl font-extrabold sm:text-4xl">💼 Internship Tracker</h1>
          <p className="mt-2 text-indigo-100">
            Keep every application, interview and offer in one place.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8 sm:px-6">
        <StatsBar applications={applications} />

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <ApplicationForm onAdd={addApplication} />
          </div>

          <div className="lg:col-span-2">
            <FilterBar
              search={search}
              setSearch={setSearch}
              statusFilter={statusFilter}
              setStatusFilter={setStatusFilter}
            />

            {visible.length > 0 ? (
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {visible.map((application) => (
                  <ApplicationCard
                    key={application.id}
                    application={application}
                    onStatusChange={updateStatus}
                    onDelete={deleteApplication}
                  />
                ))}
              </div>
            ) : (
              <div className="mt-6 rounded-2xl bg-white p-12 text-center shadow-sm">
                <div className="text-5xl">📭</div>
                <h2 className="mt-3 text-xl font-bold">
                  {applications.length === 0 ? "No applications yet" : "No matches"}
                </h2>
                <p className="mt-1 text-slate-600">
                  {applications.length === 0
                    ? "Add your first internship using the form."
                    : "Try a different search or status filter."}
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
