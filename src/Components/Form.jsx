export default function Form() {
  return (
    <main>
      <form>
        <input className="top-caption" type="text" placeholder="Top caption"></input>
        <input className="bottom-caption" type="text" placeholder="Bottom caption"></input>
        <button className="submit-btn">Get meme</button>
      </form>
    </main>
  )
}