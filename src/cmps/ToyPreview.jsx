import { Link } from "react-router-dom"


export function ToyPreview({ toy, onRemoveToy, onEditToy, addToCart }) {
    return (
        <li className="toy-preview" key={toy._id}>
            <Link to={`/toy/${toy._id}`} >
                <h1>{toy.name}</h1>
            </Link>
            <img src="../src/assets/img/toy.png" />
            <p>Price: {toy.price} <span></span></p>
            <div>
                <button onClick={() => {
                    onRemoveToy(toy._id)
                }}>x</button>
                <button onClick={() => {
                    onEditToy(toy)
                }}>Edit</button>
            </div>
            <button className="buy" onClick={() => {
                addToCart(toy)
            }}>Add to Cart</button>

        </li>
    )
}
