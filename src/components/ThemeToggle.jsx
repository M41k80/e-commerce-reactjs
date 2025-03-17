// Test Theme Toggle Button
import React, {useState} from 'react'


const ThemeToggle = () => {

    const [isDarkMode, setIsDarkMode] = useState(false)

    const toggleTheme = () => {
        setIsDarkMode((prevMode) => !prevMode)
    }

    const themeStyles = {
        backgroundColor: isDarkMode ? 'black' : 'white',
        color: isDarkMode ? '#ccc' : 'black',
        padding: '20px',
        texAlign: 'center',
        height: '100vh',
    }

  return (
    <div style={themeStyles}>
        <h1>Modo: {isDarkMode ? 'Dark' : 'Light'}</h1>
        <button onClick={toggleTheme}
        style={{
            padding: '10px 20px',
            fontSize: '16px',
            cursor: 'pointer',
            backgroundColor: isDarkMode ? '#333' : '#eee',
            color: isDarkMode ? '#ccc' : 'black',
            border: 'none',
            borderRadius: '5px',

        }}>Change Theme {isDarkMode ? 'Light' : 'Dark'}</button>

        <p>This is a paragraph.</p>
        <p>This is another paragraph.</p>
      
    </div>
  )
}

export default ThemeToggle
