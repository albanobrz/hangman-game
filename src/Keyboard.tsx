import style from './Keyboard.module.css'

const keys = [ 
"a",
"b",
"c",
"d",
"e",
"f",
"g",
"h",
"i",
"j",
"k",
"l",
"m",
"n",
"o",
"p",
"q",
"r",
"s",
"t",
"u",
"v",
"w",
"x",
"y",
"z",]

export const Keyboard = () => {
    return <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr)", gap: ".5rem"}}>
        {keys.map((key) => (
            <button key={key} className={`${style.btn}`}>{key}</button>
        ))}
    </div>
}