import './Sidebar.css'
import Category from './Category/Category'
import Colors from './Colors/Colors'
import Price from './Price/Price'
import { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa"

const Sidebar = ({ handleChange }) => {

  const [isSidebarVisible, setIsSidebarVisible] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible)
  }

  return (
    <>
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        {isSidebarVisible ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>
      <aside className={`sidebar ${isSidebarVisible ? "visible" : ""}`}>
        <div className='logo-container'>
          <h1>
            🛒 My Shop
          </h1>
        </div>
        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />
        <Colors handleChange={handleChange} />
        
      </aside>
    </>
  )
}

export default Sidebar
