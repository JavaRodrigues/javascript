function validarArray (arr, num){
    try{
        if (!arr && !num) throw new ReferenceError("Envie os parametros");

        if(typeof arr !== "object")
            throw new TypeError("Array precisa ser do tipo abject");

        if(typeof num !== "number") 
            throw new TypeError("Num precisa ser do tipo number");

        if(arr.length !== num) 
        throw new RangeError("Tamanho Inválido");

        return arr;
         }  
    catch(e){
        if (e instanceof ReferenceError){
            console.log("Este erro é de ReferenceError")
            console.log (e.message);
        }
        else if (e instanceof TypeError){
            console.log("Este erro é de TypeError")
            console.log (e.message);
        }
        else if (e instanceof RangeError){
            console.log("Este erro é de RangeError")
            console.log (e.message);
        }
        else {
        console.log("Tipo de error não esperado." + e);
    }
    }
}

console.log(validarArray([], "a"));   