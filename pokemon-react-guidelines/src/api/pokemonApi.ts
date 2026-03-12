import type { PokemonListResponse, Pokemon } from "../types/pokemon"

const BASE_URL = "https://pokeapi.co/api/v2"

export async function fetchPokemonList(): Promise<PokemonListResponse> {
  const res = await fetch(`${BASE_URL}/pokemon?limit=20`)
  if (!res.ok) throw new Error("Failed to fetch pokemon list")
  return res.json()
}

export async function fetchPokemon(name: string): Promise<Pokemon> {
  const res = await fetch(`${BASE_URL}/pokemon/${name}`)
  if (!res.ok) throw new Error("Failed to fetch pokemon")
  return res.json()
}