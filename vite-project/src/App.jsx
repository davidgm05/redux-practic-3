import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Provider} from "react-redux"
import './App.css'
import store from './core/store/store'
import MicroserviciosComponent from './components/microseviciosComponent/microserviciosComponent'

function App() {
 

  return (
    <Provider store={store}>
      <MicroserviciosComponent/>
    </Provider>
  )
}

export default App
