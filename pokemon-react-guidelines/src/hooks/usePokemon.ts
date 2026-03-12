import { useQuery } from "@tanstack/react-query"
import { fetchPokemon, fetchPokemonList } from "../api/pokemonApi"

export function usePokemonList() {
  return useQuery({
    queryKey: ["pokemonList"],
    queryFn: fetchPokemonList,
  })
}

export function usePokemon(name: string) {
  return useQuery({
    queryKey: ["pokemon", name],
    queryFn: () => fetchPokemon(name),
    enabled: !!name,
  })
}