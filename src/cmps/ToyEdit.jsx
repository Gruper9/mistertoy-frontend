import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { toyService } from '../services/toy.service.js'
import { saveToy } from '../store/actions/toy.actions.js'

export function ToyEdit() {
    const { toyId } = useParams()
    const navigate = useNavigate()
    const [toy, setToy] = useState(toyService.getEmptyToy())


    useEffect(() => {
        if (toyId) {
            toyService.getById(toyId).then(toy => {
                setToy(toy)
            })
        }
    }, [toyId])

    function handleSubmit(e) {
        e.preventDefault()
        if (!toy.name || !toy.price) return
        onAddToy(toy)
        navigate('/toy')
    }
    function onAddToy(toy) {

        saveToy(toy)
            .then((savedToy) => {
                showSuccessMsg(`toy added`)
            })
            .catch(err => {
                console.log('Cannot add toy', err)
                showErrorMsg('Cannot add toy')
            })
    }


    function handleChange(e) {
        const { name, value } = e.target
        setToy(prevToy => ({ ...prevToy, [name]: value }))
    }

    return (
        <div className="backdrop" onClick={() => navigate('/toy')}>
            <div className="toy-edit" onClick={ev => ev.stopPropagation()}>
                <form onSubmit={handleSubmit}>
                    <h3>{toyId ? 'Edit toy' : 'Add New toy'}</h3>
                    <div>
                        <label>name:</label>
                        <input
                            type="text"
                            name="name"
                            value={toy.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label>price:</label>
                        <input
                            type="number"
                            name="price"
                            value={toy.price}
                            onChange={handleChange}
                        />
                    </div>
                    <button className="btn" type="submit">
                        Add
                    </button>
                </form>
            </div>
        </div>
    )
}
