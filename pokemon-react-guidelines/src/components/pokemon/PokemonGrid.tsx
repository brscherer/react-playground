import type { PokemonListItem } from "../../types/pokemon"
import { PokemonCard } from "./PokemonCard"

interface Props {
  pokemons: PokemonListItem[]
  onSelect: (name: string) => void
}

export function PokemonGrid({ pokemons, onSelect }: Props) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
        gap: 20,
      }}
    >
      {pokemons.map((pokemon) => (
        <PokemonCard
          key={pokemon.name}
          name={pokemon.name}
          onClick={() => onSelect(pokemon.name)}
        />
      ))}
    </div>
  )
}