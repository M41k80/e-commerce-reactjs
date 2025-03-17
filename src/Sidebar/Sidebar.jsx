import './Sidebar.css'
import Category from './Category/Category'
import Colors from './Colors/Colors'
import Price from './Price/Price'

const Sidebar = ({ handleChange }) => {
  return (
    <>
      <section className='sidebar'>
        <div className='logo-container'>
          <h1>
            🛒 My Shop
          </h1>
        </div>
        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />
        <Colors handleChange={handleChange} />
        
      </section>
    </>
  )
}

export default Sidebar
