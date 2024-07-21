"use client"

import { useEffect, useState } from "react";
import axios from "axios";

import InputSearch from "@/components/InputSearch";
import ListCharacters from "@/components/ListCharacters";

export default function Home() {
  const [ characters, setCharacters ] = useState([]);
  const [ searchTerm, setSearchTerm ] = useState('');


  useEffect(() => {
    async function getData() {
      const { data } = await axios.get('https://rickandmortyapi.com/api/character');
      setCharacters(data.results);
    }

    getData();
  }, [searchTerm]);

  return (
    <div className="flex flex-col gap-4 items-center pt-12">
      <InputSearch searchTerm={searchTerm}/>
      <ListCharacters characters={characters}/>
    </div>
  );
}
