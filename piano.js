
const notes = [
    'c1', 'd1', 'e1', 'f1', 'g1', 'a1', 'h1', 'c2', 'd2', 'e2', 'f2', 'g2', 'a2', 'h2','c1-diez', 'd1-diez', 'f1-diez', 'g1-diez', 'a1-diez',  'c2-diez', 'd2-diez',  'f2-diez', 'g2-diez', 'a2-diez'
]


const playSound = (note)=>{
    const audio = document.getElementById('audio-'+ note)
    audio.pause();
    audio.currentTime = 0;
    audio.play()
}



for (let i = 0; i < notes.length; i++) {
    const id=notes[i];
    let e1 = document.getElementById(id)
    e1.addEventListener('click', (event) => {
        event.stopPropagation()
        playSound(id)
        if(e1.className.includes('piano-button')){
            e1.className='piano-button pressed'
        }else{
            e1.className='piano-black-button pressed'
        }
       setTimeout(()=>{
           if(e1.className.includes('piano-button')){
               e1.className='piano-button'
           }else{
               e1.className='piano-black-button'
           }
       }, 250)
    })
}







// e1.className = 'piano-button-pressed' + ' piano-button'
// // setTimeout(() => {
// //     e1.className = 'piano-button'
// // }, 250)