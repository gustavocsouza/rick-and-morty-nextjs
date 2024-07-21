import CharacterCard from "./CharacterCard";

export default function ListCharacters({ characters }) {
  if (!characters) {
    return null;
  }

  return (
    <div>
      <ul className='grid grid-cols-4 gap-4'>
        {characters.map(character => (
          <CharacterCard key={character.id} character={character}/>
        ))}
      </ul>
    </div>
  )
}