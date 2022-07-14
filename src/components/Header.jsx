import frefrozztea from '../assets/freefrozztea.png'
import './module.header.css'

export default function Header(){
  return(
    <header>
      <div>
        <a href="https://github.com/freefrozztea" target="_blank" rel="noopener noreferrer">
          <img src={frefrozztea} className="logo freefrozztea" alt="freefrozztea logo" />
        </a>
      </div>
      <h1>Counter</h1>
    </header>
  )
}