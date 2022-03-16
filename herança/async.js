async function resolverPromise(){
    const myPromise = new Promise((resolve, reject) => {
        window.setTimeout(() =>{
            resolver("resolvida");
        },3000);
    }); 
    const resolved = await myPromise
    .then((result) => result + 'passando pelo then')
    .then((result) => result + 'e agora acabou!')
    .catch((err)=> console.log(err.message));
    return resolved;
    }
