
const prompt = require('prompt-sync')({ sigint: true });//Es una forma de hacer un prompt en VS pq no se puede si no es en el browser 

console.log('----------------------Hola bienvenido al juego de piedra papel o tijeras---------------------------')

    let computerScore = 0;
    console.log(`Antes de iniciar ${computerScore}`);

    let humanScore = 0;
    console.log(`Antes de iniciar ${humanScore}`);

    console.log('--------------------------------------------------------------------------------------------------')

function replay(){


    const decisionJugador = prompt("Porfavor teclea un numero entre 1 y 3, para elegir piedra papel o tijeras:  [1]: Piedra , [2]: Papel , [3]: Tijeras, haz tu seleccion a continuacion: "
        
    );

    console.log('--------------------------------------------------------------------------------------------------')


    function decisionComputadora(){
        let numero = Math.floor(Math.random() * 3 + 1);
        return numero;

    }

    let opcionComputadoraAleatoria = decisionComputadora()//opcionComputadora= 1,2,3

    let nuevaOpcion = opcionComputadora(opcionComputadoraAleatoria);

    function opcionComputadora(opcionRecibida){
        if (opcionRecibida == 1){
            console.log("La computadora ha elegido [1]: Piedra");
            return opcionRecibida;

        } else if (opcionRecibida == 2){
            console.log("La computadora ha elegido [2]: Papel");
            return opcionRecibida;

        } else if(opcionRecibida ==3 ){
            console.log("La computadora ha elegido [3]: Tijeras");
            return opcionRecibida;
        }

    }   

    
    function contador(humanScore, computerScore){
        // humanScore+=humanScore;
        console.log(`Despues de iniciar, este es tu puntaje humano: ${humanScore }`);
        
        
        // computerScore+=computerScore;
        console.log(`Despues de iniciar, este es tu puntaje computadora: ${computerScore }`);
    }
    



    versusGame(parseInt(decisionJugador),nuevaOpcion);

    function versusGame(humanoOpcion,computadoraOpcion){

        if (humanoOpcion == 1 && computadoraOpcion == 3){//Piedra -> tijeras
            console.log(`Genial ganaste con [${humanoOpcion}]: Piedra a las [${computadoraOpcion}] tijeras de la computadora`);

            humanScore += 1;
            console.log(humanScore);
            contador(humanScore, computerScore);

            

        } else if(humanoOpcion == 3 && computadoraOpcion == 1){//tijeras <-  piedra
            console.log(`Perdiste con [${humanoOpcion}]: tijeras, la [${computadoraOpcion}] piedra de la computadora te gano`);
            computerScore += 1;
            console.log(computerScore);
            contador(humanScore, computerScore);


            

        } else if(humanoOpcion == 2 && computadoraOpcion == 3){//Papel <- tijeras
            console.log(`Perdiste con [${humanoOpcion}]: Papel, las [${computadoraOpcion}] tijeras de la computadora te ganaron`);
            computerScore += 1;
            console.log(computerScore);
            contador(humanScore, computerScore);


            

        } else if(humanoOpcion == 3 && computadoraOpcion == 2){//tijeras -> papel
            console.log(`Ganaste con [${humanoOpcion}]: Tijeras, el [${computadoraOpcion}] papel de la computadora perdio`);
            humanScore += 1;
            console.log(humanScore);
            contador(humanScore, computerScore);



        } else if(humanoOpcion == 2 && computadoraOpcion == 1){//papel -> piedra
            console.log(`Ganaste con [${humanoOpcion}]: Papel, la [${computadoraOpcion}] piedra de la computadora perdio`);
            humanScore += 1;
            console.log(humanScore);
            contador(humanScore, computerScore);



        }else if(humanoOpcion == 1 && computadoraOpcion == 2){//piedra <- papel
            console.log(`Perdiste con [${humanoOpcion}]: Piedra, el [${computadoraOpcion}] papel de la computadora te gano`);
            computerScore += 1;
            console.log(computerScore);
            contador(humanScore, computerScore);

            

        }else if(humanoOpcion == computadoraOpcion ) {// tijeras == tijeras, piedra == piedra, papel == papel 
            console.log(`Empate con [${humanoOpcion}] y  [${computadoraOpcion}]`);
            computerScore;
            humanScore;

            contador(humanScore, computerScore);
        }

    }
}

while (true) {
  replay();
  const again = prompt('¿Jugar otra vez? (s/n): ');
  if (!again || again.trim().toLowerCase() !== 's') break;
}