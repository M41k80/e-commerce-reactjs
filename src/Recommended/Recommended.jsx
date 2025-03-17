import './Recommended.css'
import Button from '../components/Buttons'

const Recommended = ({ handleClick }) => {
  return (
    <>
      <h2 className='recommended-title'>Recommended For You</h2>
      <div className="recommended-flex">
          <Button onClickHandler={handleClick} value="" title="All Products" />
          <Button onClickHandler={handleClick} value="Nike" title="Nike" />
          <Button onClickHandler={handleClick} value="Adidas" title="Adidas" />
          <Button onClickHandler={handleClick} value="Puma" title="Puma" />
          <Button onClickHandler={handleClick} value="Vans" title="Vans" />
        </div>
    </>
  )
}

export default Recommended
