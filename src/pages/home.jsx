import { Link } from 'react-router-dom'
import comming from '../assets/image.png'

export default function Home() {

  return (
    <div style={{ height: "100vh", width: "100vw", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#171d88"}}>
          <center>
            <div className='w-100'>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={comming} className="logo" alt="Vite logo" />
                </a>
            </div>
            <h1 className='text-white'>Property managemeent</h1>
            <Link to="/login" className='btn btn-primary mt-5'>Login</Link>
          </center>
    </div>
  )
}