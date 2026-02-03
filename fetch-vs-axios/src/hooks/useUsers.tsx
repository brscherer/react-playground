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
    const controller = new AbortController()

    setLoading(true)
    setError(null)

    const fn =
      mode === "fetch"
        ? fetchUsers
        : axiosUsers

    fn(controller.signal)
      .then(setData)
      .catch((err) => {
        if (err.message !== "Request canceled") {
          setError(err)
        }
      })
      .finally(() => setLoading(false))

    return () => {
      controller.abort()
    }
  }, [mode])

  return { data, loading, error }
}
