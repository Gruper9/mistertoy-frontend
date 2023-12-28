import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import './assets/style/main.css'

import { AppHeader } from './cmps/AppHeader'


import { HomePage } from './pages/HomePage'
import { AboutUs } from './pages/AboutUs'
import { ToyIndex } from './pages/ToyIndex.jsx'
import { store } from './store/store'
import { ToyDetails } from './pages/ToyDetails.jsx'


export function App() {

  return (
    <Provider store={store}>
      <Router>
        <section className="main-layout app">
          <AppHeader />
          <main>
            <Routes>
              <Route element={<HomePage />} path="/" />
              <Route element={<AboutUs />} path="/about" />
              <Route element={<ToyDetails />} path="/toy/:toyId" />
              <Route element={<ToyIndex />} path="/toy" />
            </Routes>
          </main>
        </section>
      </Router>
    </Provider>
  )
}


