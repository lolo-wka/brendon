import Card from "./Card"

const Basket = ({products, setBasket}) => {
    return(
        <div className="basket">
            <h1>Basket</h1>
            {products.map(p => <Card key = {p.id} product = {p} setBasket={setBasket} card = "basket"/>)}
        </div>
    )
}

export default Basket