const cargador1 = ['pium!','pium!','pium!','pium!','pium!','pium!','pium!',]

const cargador2 = ['pium!','pium!','pium!']
const cargador3 = ['pium!','pium!']

const probabilityToShot = []


// const getRandomNumber = (min,max,boolean) => {
//     let numberOfProbability = []
//     if (boolean) {
//         while(numberOfProbability.length < 2){
//             let getNumber = Math.floor(Math.random() * (max - min)+ min)
//             if (!numberOfProbability.includes(getNumber)) {
//                 numberOfProbability.push(getNumber)
                
//             }
//         }
//     }else{
//         return Math.floor(Math.random() * (max - min)+ min)
//     }
//     return numberOfProbability
// }
// const chauchat = (cargador) => {
//     //Si array viene vacio, retornar mensaje
//     if (cargador.length <= 0) {
//         console.log('Es hora de orar, vas a morir!!!');
//     }
    
//     //Si array es 3 de longitud, a disparar!
//     if (cargador.length <= 3) {
//         cargador.forEach(bullet => {
//             console.log(bullet)
//         });
//     }else{
//         const probabilityToShot = getRandomNumber(0,10,true)
        
//         const canItShot = getRandomNumber(0,10,false)
//         if (!probabilityToShot.includes(canItShot)) {
            
//             console.log('llo, me he quedao pillá!');
//         }else{
//             let contador = 1
//             cargador.forEach((bala)=>{
                
//                 if (contador === 3 ) {
//                     console.log(bala)
//                     console.log(' ');
//                     contador = 1
//                 }else{
                    
//                     console.log(bala)
//                     contador += 1
                                        
//                 }
                
//             })
//         }
//     }
// }
// chauchat(cargador1)

//Version2 

const getRandomNumber = (min,max) => {
    
    return Math.floor(Math.random() * (max - min)+ min)
}


const chauchat = (cargador) => {
    //Si array viene vacio, retornar mensaje
    const getProbability = getRandomNumber(1,101)
    if (cargador.length < 1) {
        console.log('Es hora de orar, vas a morir!!!');
        return
    }
    //Si cargador tiene 3 o menos balas disparar de una vez
    if (cargador.length <=3) {
        cargador.forEach(bala => {
            console.log(bala);
        });
        return;
    }

    
    //No dispara
    if (getProbability > 20) {
       console.log('"Illo, me he quedao pillá!"');
       return;
    }

    //disparar
    let counter = 0
    cargador.forEach(bala =>{
        console.log(bala)
        counter++
        if (counter % 3 === 0) console.log(' '); 
    })
}

chauchat(cargador1)