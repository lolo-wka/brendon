import React, { useEffect, useState } from "react";
import Card from "./Card";

const Cards =({products, setBasket})=>{
    const[cards, setCards] = useState(products)
    const[value, setValue] = useState("")
    const[sort, setSort] = useState("default")

    useEffect(()=>{
        if(sort==="a-z"){
            setCards([...cards.sort((a,b)=a.price - b.price)])
        }else if(sort === "z-a"){
            setCards([...cards.sort((a,b)=b.price - a.price)])
        }else{
            setCards(cards.sort((a, b)=> a.price - b.price))
        }
    }, [sort])

    useEffect(()=>{
        setCards(products.filter(p=>p.text.toLowerCase().includes(value.toLowerCase())))
    }, [value])
    return(
        <div className="cards">
            <div className="search">
                <input type="text" value={value} onChange={(e)=>setValue(e.target.value)}/>
            

                <select value={sort} onChange={(e)=> setSort(e.target.value)}>
                    <option value="default">по умолчанию</option>
                    <option value="a-z">по возрастанию</option>
                    <option value="z-a">по убиванию</option>
                </select>
            </div>

            {cards.map(p => <Card key = {p.id} product = {p} setBasket = {setBasket} data = "cards" />)}
        </div>
    )
}

export default Cards