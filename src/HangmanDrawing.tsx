const head = (
    <div style={{width: "50px", height: "50px", borderRadius: "100%", border: "10px solid #ddd", position: "absolute", top: "50px", right: "-30px"}}/>
)
const body = (
    <div style={{width: "10px", height: "100px", position: "absolute", top: "120px", right: 0, background: "#ddd"}} />
)
const rightArm = (
    <div style={{width: "100px", height: "10px", position: "absolute", top: "150px", right: "-100px", background: "#ddd", rotate: "-30deg", transformOrigin: "left bottom"}}/>
)
const leftArm = (
    <div style={{width: "100px", height: "10px", position: "absolute", top: "145px", right: "-100px", background: "#ddd", rotate: "-150deg", transformOrigin: "left bottom"}}/>
)
const rightLeg = (
    <div style={{width: "100px", height: "10px", position: "absolute", top: "210px", right: "-90px", background: "#ddd", rotate: "60deg", transformOrigin: "left bottom"}}/>
)
const leftLeg = (
    <div style={{width: "100px", height: "10px", position: "absolute", top: "210px", right: "-90px", background: "#ddd", rotate: "120deg", transformOrigin: "left bottom"}}/>
)

type HangmanDrawingProps = {
    numberOfGuesses: number
}

const bodyParts = [head, body, rightArm, leftArm, rightLeg, leftLeg]

export const HangmanDrawing = ({numberOfGuesses}: HangmanDrawingProps) => {
    return <div style={{position: "relative"}}>
        {bodyParts.slice(0, numberOfGuesses)}

        <div style={{height: "50px", width: "10px", background: "#ddd", position: 'absolute', top: 0, right: 0}}/>
        <div style={{height: "10px", width: "200px", background: "#ddd", marginLeft: "120px"}}/>
        <div style={{height: "400px", width: "10px", background: "#ddd", marginLeft: "120px"}}/>
        <div style={{height: "10px", width: "250px", background: "#ddd"}}/>
    </div>
}