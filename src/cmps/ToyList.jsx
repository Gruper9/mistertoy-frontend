import { ToyPreview } from "./ToyPreview.jsx";


export function ToyList({ toys, onRemoveToy, onEditToy, addToCart }) {
    return (
        <ul className="toy-list">
            {toys.map(toy =>
                <ToyPreview
                    key={toy._id}
                    toy={toy}
                    onRemoveToy={onRemoveToy}
                    onEditToy={onEditToy}
                    addToCart={addToCart}
                />
            )}
        </ul>
    )
}
