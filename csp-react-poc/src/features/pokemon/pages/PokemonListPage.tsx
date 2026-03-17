import { useQuery } from "@tanstack/react-query";
import { fetchPokemons } from "../api";

export function PokemonListPage() {
  const { data, isLoading } = useQuery({
    queryKey: ["pokemons"],
    queryFn: fetchPokemons,
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Pokemons</h1>
      {data.map((p: { name: string}) => (
        <div key={p.name}>{p.name}</div>
      ))}
    </div>
  );
}