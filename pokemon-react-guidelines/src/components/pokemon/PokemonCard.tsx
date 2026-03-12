import { Card } from "../ui/Card"

interface Props {
  name: string
  onClick: () => void
}

export function PokemonCard({ name, onClick }: Props) {
  return (
    <Card onClick={onClick}>
      <h3 style={{ textTransform: "capitalize" }}>{name}</h3>
    </Card>
  )
}