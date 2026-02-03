import axios, { AxiosError } from "axios"
import type { ApiError, User } from "../types"

export const axiosClient = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
})

export async function axiosUsers(
  signal?: AbortSignal
): Promise<User[]> {
  try {
    const response = await axiosClient.get<User[]>("/users", {
      signal,
    })
    return response.data
  } catch (err) {
    if (axios.isCancel(err)) {
      throw {
        message: "Request canceled",
        source: "axios",
      } as ApiError
    }

    const error = err as AxiosError

    throw {
      message: error.message,
      status: error.response?.status,
      source: "axios",
    } as ApiError
  }
}
