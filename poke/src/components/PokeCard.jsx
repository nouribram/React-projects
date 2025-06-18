import { useEffect, useState } from "react"

export function PokeCard(props) {

    const { selectedPokemon } = props
    const {data, setData} = useState(null)
    const {loading, setLoading} = useState(false)

    useEffect(() => {
       
        if (loading || !localStorage) { return }
    }, [selectedPokemon])
    
    return (
        <div></div>
    )
}