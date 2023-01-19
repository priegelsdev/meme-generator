import Pepe from '../assets/pepe.png'

export default function Header() {
  return (
    <header>
      <div className="page-brand">
        <img className="brand-logo" src={Pepe} alt="brand logo"/>
        <h1 className="brand-name">Meme Generator</h1>
      </div>
      <h3>React Practice</h3>
    </header>
  )
}