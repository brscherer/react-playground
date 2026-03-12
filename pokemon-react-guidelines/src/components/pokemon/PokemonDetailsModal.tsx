import { usePokemon } from "../../hooks/usePokemon"
import { Modal } from "../ui/Modal"
import { Spinner } from "../ui/Spinner"

interface Props {
  pokemonName?: string
  onClose: () => void
}

export function PokemonDetailsModal({ pokemonName, onClose }: Props) {
  const { data, isLoading } = usePokemon(pokemonName || "")

  return (
    <Modal isOpen={!!pokemonName} onClose={onClose}>
      {isLoading && <Spinner />}

      {data && (
        <div style={{ textAlign: "center" }}>
          <h2 style={{ textTransform: "capitalize" }}>{data.name}</h2>

          <img src={data.sprites.front_default} />

          <p>Height: {data.height}</p>
          <p>Weight: {data.weight}</p>

          <p>
            Types:{" "}
            {data.types.map((t) => t.type.name).join(", ")}
          </p>
        </div>
      )}
    </Modal>
  )
}