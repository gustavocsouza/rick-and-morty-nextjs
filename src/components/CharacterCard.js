import Image from "next/image";

export default function CharacterCard({ character }) {
  return (
    <li 
      className='flex flex-col'
      key={character.id}
    >
        <Image
          className="rounded-lg"
          width={240}
          height={320}
          src={character.image}
          alt="" 
        />
        <div 
          className="bg-neutral-900 text-white"
          key={character.id}
        >
          <h4 className="text-xl">{character.name}</h4>
          <p><span></span>Alive</p>
        </div>
      </li>
  )
}
