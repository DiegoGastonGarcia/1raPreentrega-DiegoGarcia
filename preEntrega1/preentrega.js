// calculadora de daños de un juego de cartas, por el momento basico: contara daño plano con efectos de estado aplicados o no

function calculadora () {

    let objetivo = "0"

    do {
        objetivo = prompt ("Ingresar vida del objetivo")
        console.log(objetivo)
            if (objetivo){
                if ( isNaN(objetivo)) {
                    alert("Solo números")
                }else {
                    console.log(`La vida del objetivo es de ${objetivo}`)
            
                    let debuffED = false
                    
                    function espada () {
                        let espadaDoble = 50
                        // descripcion espadaDoble: aplicara vulnerable, 10% de daño extra con cada ataque
                        let dmgEspadaDoble = objetivo - espadaDoble
                        console.log(`La vida restante del objetivo es ${dmgEspadaDoble} y se aplico vulnerable: "10% de daño adicional"`)
                        debuffED = true
                    }

                    espada ()

            
                    function estrella () {
                        
                        let estrellaMortal = 90
                        // descripcion estrellaMortal: si el objetivo tiene 90 o menos puntos de vida lo ejecutará
                        if (debuffED){
                            estrellaMortal = estrellaMortal + (estrellaMortal * 0.1) 
                        }   
                
                        let dmgEstrella = objetivo - estrellaMortal
                        alert(`La vida restante del objetivo es ${dmgEstrella}`)
                        console.log(`La vida restante del objetivo es ${dmgEstrella}`)
                
                        if (dmgEstrella <= 90){
                            alert("el objetivo fue eliminado")
                            console.log("el objetivo fue eliminado")
                        }else{
                            alert("el objetivo no fue eliminado")
                            console.log("el objetivo no fue eliminado")
                        }
                    }
                    estrella ()
            
            
                    function nueces () {
                        let rompeNueces = "0"
                        // descripcion rompeNueces: ganara 5 de daño cada vez que se juegue esta carta hasta 5 veces, limite: 25 de daño extra
                            rompeNueces = prompt("Ingrese el valor de su Rompe Nueces")
                            if (rompeNueces) {
                                while ( isNaN(rompeNueces)) {
                                alert("Solo números")
                                rompeNueces = parseInt (prompt("Ingrese el valor de su Rompe Nueces")) 
                            }
                            for ( let i = 5;  i<=25; i+=5){
                                let dmgRompeNueces = rompeNueces + i
                                if (debuffED){
                                    dmgRompeNueces = (parseInt(rompeNueces)+ i) * 1.1
                                }
                                alert (`El daño del proximo rompenueces es de ${dmgRompeNueces}`)
                                console.log(`El daño del proximo rompenueces es de ${dmgRompeNueces}`)
                
                            }
                        }  
                     
                    }
                    nueces ()
                } 
            }else {break}
    }while (isNaN(objetivo))
}

calculadora ()












        
