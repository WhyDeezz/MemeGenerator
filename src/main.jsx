
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './Components/App.jsx'
import Header from './Components/Header.jsx'

createRoot(document.getElementById('root')).render(

    <>
    <Header/>
    <App />
    </>

)
