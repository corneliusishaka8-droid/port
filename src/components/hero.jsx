import mypic from "../assets/MYPIC,.jpeg"

export default function Hero() {
  return (
    <section id="home">
        <div className="hero_div">
            <h2>ishaka <br /><span>cornelius</span> <br /><span>OGHENEKPAROBOR</span></h2>

            <p>software engineer</p>
            <img
              src={mypic}
              alt="picture of eng"
              className="mypic"
              loading="eager"
              fetchPriority="high"
              decoding="sync"
            />
        </div>
    </section>
  )
}
