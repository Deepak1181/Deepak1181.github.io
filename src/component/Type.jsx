import Typewriter from "typewriter-effect"

export default function Type(){

    return <div className="type" >
<Typewriter 
onInit={(typewriter)=>{
    typewriter.typeString("Coding").start()
    .pauseFor(1000)
    // .typeString('👋')
    .pauseFor('2000')
    .deleteAll()
    .typeString("Desiging")
    .start()
    .deleteAll()
    .pause(2000)
    .typeString('Reading').start()
    
}}
options={{loop:true}}
/>
    </div>


}
