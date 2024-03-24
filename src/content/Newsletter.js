import { useState } from "react"


export function Newsletter() {
    const [input, setInput] = useState('');

    const inputText = (e) => {
        setInput(e.target.value);
    }

    return (
        <section id="newsletter">
            <h1 id="news-h1">Subscribe To Our Newsletter<br></br>
            GET -15% OFF!</h1>

            <div id="sub-container">
                <input type="text" placeholder="example@gmail.com" value={input} onChange={inputText} required></input>
                <button id="inp-btn" type="submit" onClick={() => setInput('')}>Subscribe</button>
            </div>
        </section>
    )
}