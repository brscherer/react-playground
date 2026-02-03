import { useState } from "react"
import { useUsers } from "./hooks/useUsers"

function App() {
  const [mode, setMode] = useState<"fetch" | "axios">("fetch")
  const { data, loading, error } = useUsers(mode)

  return (
    <div style={{ padding: 20 }}>
      <h1>Fetch vs Axios</h1>

      <button onClick={() => setMode("fetch")}>Fetch</button>
      <button onClick={() => setMode("axios")}>Axios</button>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <ul>
        {data.map((u) => (
          <li key={u.id}>
            {u.name} ({u.email})
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
