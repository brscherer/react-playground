import { useEffect, useState } from "react"
import { fetchUsers } from "../api/clients/fetchClient"
import { axiosUsers } from "../api/clients/axiosClient"
import type { User } from "../api/types"

type Mode = "fetch" | "axios"

export function useUsers(mode: Mode) {
  const [data, setData] = useState<User[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    setLoading(true)
    setError(null)

    const fn = mode === "fetch" ? fetchUsers : axiosUsers

    fn()
      .then(setData)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [mode])

  return { data, loading, error }
}
