import { useState } from "react"

import Navigation from "./Navigation/Nav"
import Products from "./Products/Products"
import products from "./db/data"
import Recommended from "./Recommended/Recommended"
import Sidebar from "./Sidebar/Sidebar"
import Card from "./components/Card"
import "./index.css"
import ThemeToggle from "./components/ThemeToggle"

import { FaMoon, FaSun } from "react-icons/fa"

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem('isDarkMode') === 'true'
  )

  // ----------- Input Filter -----------
  const [query, setQuery] = useState("")

  const handleInputChange = (event) => {
    setQuery(event.target.value)
  }

  const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  )

  // ----------- Radio Filtering -----------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value)
  }

  // ------------ Button Filtering -----------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value)
  }

  function filteredData(products, selected, query) {
    let filteredProducts = products

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems
    }

    // Applying selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      )
    }

    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    )
  }

  const toggleTheme = () => {
    const newMode = !isDarkMode
    setIsDarkMode(newMode)
    localStorage.setItem('isDarkMode', newMode)
  }

  const themeStyles = {
    backgroundColor: isDarkMode ? '#121212' : '#ffffff',
    color: isDarkMode ? '#e0e0e0' : '#000000',
    minHeight: '100vh',
  }



  const result = filteredData(products, selectedCategory, query);

  return (
    <div style={themeStyles}>
      {/* // button to toggle theme */}
      <button onClick={toggleTheme}
      style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '10px',
        borderRadius: '50%',
        border: 'none',
        cursor: 'pointer',
        backgroundColor: isDarkMode ? '#333' : '#eee',
        color: isDarkMode ? '#fff' : '#000',
        }}
        >
        {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
        </button>

      <Sidebar handleChange={handleChange} />
      
      <Navigation query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Products result={result} />
      {/* <ThemeToggle /> */}
    </div>
  )
}

export default App