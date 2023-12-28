// const { useState } = React
// const { useSelector, useDispatch } = ReactRedux
import logoPng from '../assets/img/logo.png'
import { useDispatch, useSelector } from "react-redux"


export function HomePage() {
    const dispatch = useDispatch()

    function changeCount(diff) {
        console.log('Changing count by:', diff)
        dispatch({ type: 'CHANGE_BY', diff })
    }

    return (
        <section>
            <h1>Helo</h1>
        </section >
    )
}