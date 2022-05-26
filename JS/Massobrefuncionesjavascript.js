const hacerAlgo=(c,d)=>{
    //apunta al objeto global
    console.log(this);

    //las variables se convierten en globales
     this.a = c;
     this.b=d;
     
     // a 
     console.log(a);
     // b
      console.log(b);
    }
    const resultado=hacerAlgo('a','b');
      // a 
      console.log(a);
      // b
       console.log(b);
       // error
        console.log(c);
       // error
        console.log(d);

        functionhacerAlgo(c,d){
            // hacerAlgo {}
             console.log(this);
             this.a = c;
             this.b = d;
              // a 
              console.log(this.a);
              // undefined
               console.log(this.c);

              //error
              //console.log(a);
              //error
              //console.log(b);
             }
              let resultado = new hacerAlgo('a','b');
              // a 
              console.log(resultado.a);
              // b
               console.log(resultado.b);
               //error
               //console.log(a);
               //error
               //console.log(b);
               //error
               //console.log(c);
               //error
               //console.log(d);

//Argumentos para as funciones:
               function saludar(saludo){
                   if(!saludo)console.log('nohaysaludo');
                    elseconsole.log(saludo);
                }
                //no hay saludo saludar();
                //hola saludar ('hola');
                //hola saludar ('hola','Alejandro');

//Objetos "Arguments":
unction saludar(){
    const saludo = arguments[0]; 
    const nombre = arguments[1];
    
    // undefined 
    console.log(arguments[2]);

    //Adiós,Carlos!
    console.log(saludo+', '+ nombre +'!');

}saludar('Adiós','Carlos');
