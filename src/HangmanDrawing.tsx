const head = (
    <div style={{width: "50px", height: "50px", borderRadius: "100%", border: "10px solid black", position: "absolute", top: "50px", right: "-30px"}}/>
)
const body = (
    <div style={{width: "10px", height: "100px", position: "absolute", top: "120px", right: 0, background: "black"}} />
)
const rightArm = (
    <div style={{width: "100px", height: "10px", position: "absolute", top: "150px", right: "-100px", background: "black", rotate: "-30deg", transformOrigin: "left bottom"}}/>
)
const leftArm = (
    <div style={{width: "100px", height: "10px", position: "absolute", top: "145px", right: "-100px", background: "black", rotate: "-150deg", transformOrigin: "left bottom"}}/>
)
const rightLeg = (
    <div style={{width: "100px", height: "10px", position: "absolute", top: "210px", right: "-90px", background: "black", rotate: "60deg", transformOrigin: "left bottom"}}/>
)
const leftLeg = (
    <div style={{width: "100px", height: "10px", position: "absolute", top: "210px", right: "-90px", background: "black", rotate: "120deg", transformOrigin: "left bottom"}}/>
)

export const HangmanDrawing = () => {
    return <div style={{position: "relative"}}>
        {head}
        {body}
        {rightArm}
        {leftArm}
        {rightLeg}
        {leftLeg}

        <div style={{height: "50px", width: "10px", background: "black", position: 'absolute', top: 0, right: 0}}/>
        <div style={{height: "10px", width: "200px", background: "black", marginLeft: "120px"}}/>
        <div style={{height: "400px", width: "10px", background: "black", marginLeft: "120px"}}/>
        <div style={{height: "10px", width: "250px", background: "black"}}/>
    </div>
}