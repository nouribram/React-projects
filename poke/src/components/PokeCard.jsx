import { useEffect, useState } from "react"

export function PokeCard(props) {

    const { selectedPokemon } = props
    const {data, setData} = useState(null)
    const {loading, setLoading} = useState(false)
    const {name, height, abilities, stats, types, moves, sprites } = 
    data || {}

/****************** */ 

    useEffect(() => {
       
        if (loading || !localStorage) { return }
        let cache = {} 

        if (localStorage.getItem('pokedex')) {
            cache = Json.parse(localStorage.getItem('pokemon'))
        }

        if (selectedPokemon in cache) {
               setData(cache[selectedPokemon])
               return
        } 
        async function fetchPokemonData() {
            setLoading(true)
            try {
               const baseUrl = 'https://pokeapi.co/api/v2/'
               const suffix = 'pokemon/' + getPokedexNumber
               (selectedPokemon)
               const finalUrl = baseUrl + suffix
               const res = await fetch(finalUrl)
               const pokemonData = await res.json()
               setData(pokemonData)


              cashe[selectedPokemon] = PokemonData 
              localStorage.setItem('pokemon',JSON.stringify(cashe))

            } catch (err) {
                console.log(err.message)
            } finally {
                setLoading(false)
            }
        }
          
        fetchPokemonData()

    }, [loading, selectedPokemon])
    
    if (loading || !data) {

        return (
            <div>
                <h4>Loading</h4>
            </div>
        )
    }

    return (
        <div className="poke-card">
            <div>
                <h4>{getFullPokedexNumber(selectedPokemon)}</h4>
                <h2>{name}</h2>
            </div>
            <div className="type-container">
                {types.map((type, typeIndex) => {
                    return (
                        <TypeCard key={typeIndex} type={type}/>
                    )
                })}
            </div>
        </div>
    )
}