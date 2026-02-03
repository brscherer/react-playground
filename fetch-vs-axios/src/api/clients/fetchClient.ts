import type { User, ApiError } from "../types"

const BASE_URL = "https://jsonplaceholder.typicode.com"

export async function fetchUsers(
  signal?: AbortSignal
): Promise<User[]> {
  try {
    const response = await fetch(`${BASE_URL}/users`, { signal })

    if (!response.ok) {
      throw {
        message: "HTTP error",
        status: response.status,
        source: "fetch",
      } as ApiError
    }

    return response.json()
  } catch (err: unknown) {
    if (err && typeof err === "object" && "name" in err && err.name === "AbortError") {
      throw {
        message: "Request canceled",
        source: "fetch",
      } as ApiError
    }

    if (err instanceof TypeError) {
      throw {
        message: "Network error",
        source: "fetch",
      } as ApiError
    }

    throw err
  }
}
