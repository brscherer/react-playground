import type { User, ApiError } from "../types"

const BASE_URL = "https://jsonplaceholder.typicode.com"

export async function fetchUsers(): Promise<User[]> {
  try {
    const response = await fetch(`${BASE_URL}/users`)

    if (!response.ok) {
      const error: ApiError = {
        message: "HTTP error",
        status: response.status,
        source: "fetch",
      }
      throw error
    }

    return response.json()
  } catch (err) {
    if (err instanceof TypeError) {
      const error: ApiError = {
        message: "Network error",
        source: "fetch",
      }
      throw error
    }

    throw err
  }
}
