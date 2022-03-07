let is_ok = true;
// Funciona como llamada a la API
const customFetch = (timeout, task) =>{
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            if(is_ok) {
                resolve(task)
            }else {
                reject('KO')
            }
        }, timeout);
    })
}
export default customFetch;