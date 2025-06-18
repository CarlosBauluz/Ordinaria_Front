import { Character } from "./type.ts";

export const getPersonajes = async (): Promise<Character[]> => {
  const url = "https://hp-api.onrender.com/api/characters";
  const data = await fetch(url);
  const personajes = await data.json();
  const devolver = personajes.map((p: Character) => {
    return {
      id: p.id,
      name: p.name,
      house: p.house,
      alive: p.alive,
      image: p.image,
    };
  });
  return devolver;
};

export const getEspecificPersonaje = async (id: string) => {
  const url = `https://hp-api.onrender.com/api/character/${id}`;
  const data = await fetch(url);
  const personaje = await data.json();
  const personajeVerdadero = personaje.map((e) => { 
    return {
      id: e.id,
      name: e.name,
      house: e.house,
      alive: e.alive,
      image: e.image,
    }
  })
  return personajeVerdadero
};

export const getPersonajesFavoritos = async (
  ids: string[],
): Promise<Character[]> => {
  const url = "https://hp-api.onrender.com/api/characters";
  const data = await fetch(url);
  const personajes = await data.json();
  const favoritos = personajes.filter((e: Character) => ids.includes(e.id));
  const devolver = favoritos.map((p: Character) => {
    return {
      id: p.id,
      name: p.name,
      house: p.house,
      alive: p.alive,
      image: p.image,
    };
  });
  return devolver;
};
