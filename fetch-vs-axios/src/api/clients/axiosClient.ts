import axios, { AxiosError } from "axios"
import type { User, ApiError } from "../types"

export const axiosClient = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
})

export async function axiosUsers(): Promise<User[]> {
  try {
    const response = await axiosClient.get<User[]>("/users")
    return response.data
  } catch (err) {
    const error = err as AxiosError

    const apiError: ApiError = {
      message: error.message,
      status: error.response?.status,
      source: "axios",
    }

    throw apiError
  }
}
