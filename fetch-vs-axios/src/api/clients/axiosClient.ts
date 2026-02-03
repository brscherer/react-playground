import axios from "axios"
import type { User } from "../types"

export const axiosClient = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
})

export async function axiosUsers(): Promise<User[]> {
  const response = await axiosClient.get<User[]>("/users")
  return response.data
}
