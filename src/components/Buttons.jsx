import '../Recommended/Recommended.css'
const Button = ({ onClickHandler, value, title }) => {
  return (
    <button onClick={onClickHandler} value={value} className="btns">
      {title}
    </button>
  )
}

export default Button