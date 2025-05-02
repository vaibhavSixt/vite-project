interface TimeProps {
    time: number; // Or number, depending on the expected type
}
interface BoxProps {
    value: number,
    className:string
}
const Box = ({value}:BoxProps)=>{
    const p1 = (value/60)*100;
    const p2 = 100-p1;
   return (<div
        className="time-input"
        style={{
            borderRightWidth: '12px', // Define border width
            borderRightStyle: 'solid', // Define border style
            borderImageSource:  `linear-gradient(to top, rgb(0, 100, 42) ${p1}%, #abc ${p2}%)`, // Apply gradient as border image source
            borderImageSlice: 1, // Use the full gradient
            borderRightColor: 'transparent' // Make the base border color transparent or set a fallback
        }}
    >
        {value}
    </div>);
}
export default function Time({time}: TimeProps) {
    const hour = Math.floor(Number(time)/3600);
    const min = Math.floor(Number(time)/60);
    const sec = Number(time)%60;
    return (<div className="clock"><Box value={hour} className="time-input" /> <Box value={min} className="time-input"/> <Box value={sec} className="time-input"/></div>);
} 