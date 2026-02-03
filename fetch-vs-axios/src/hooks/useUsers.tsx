import { useEffect, useState } from "react"
import { axiosUsers } from "../api/clients/axiosClient"
import { fetchUsers } from "../api/clients/fetchClient"
import type { User, ApiError } from "../api/types"

type Mode = "fetch" | "axios"

export function useUsers(mode: Mode) {
  const [data, setData] = useState<User[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<ApiError | null>(null)

  useEffect(() => {
    setLoading(true)
    setError(null)

    const fn = mode === "fetch" ? fetchUsers : axiosUsers

    fn()
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false))
  }, [mode])

  return { data, loading, error }
}
