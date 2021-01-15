import React from 'react';

export default function PokemonList({pokemon}) {
    return (
        <div>
            {pokemon.map((p, i) => (
                <div key={p}>{p}</div>
            ))}
        </div>
    )
}
