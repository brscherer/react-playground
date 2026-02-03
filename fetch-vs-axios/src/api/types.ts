export interface User {
  id: number
  name: string
  email: string
}

export interface ApiError {
  message: string
  status?: number
  source: "fetch" | "axios"
}
