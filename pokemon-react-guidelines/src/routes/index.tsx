import { useState } from "react"
import { usePokemonList } from "../hooks/usePokemon"
import { PokemonGrid } from "../components/pokemon/PokemonGrid"
import { PokemonDetailsModal } from "../components/pokemon/PokemonDetailsModal"
import { Spinner } from "../components/ui/Spinner"

export default function HomePage() {
  const { data, isLoading } = usePokemonList()

  const [selectedPokemon, setSelectedPokemon] = useState<string>()

  if (isLoading) return <Spinner />

  return (
    <div style={{ padding: 40 }}>
      <h1>Pokemon Explorer</h1>

      <PokemonGrid
        pokemons={data?.results || []}
        onSelect={setSelectedPokemon}
      />

      <PokemonDetailsModal
        pokemonName={selectedPokemon}
        onClose={() => setSelectedPokemon(undefined)}
      />
    </div>
  )
}