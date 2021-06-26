export function requstPOST(url, data){
    return (
       fetch(url, {
           method: "POST",
           body: new FormData(data)
       })
   );
}

export function requestGET(url){
   return(
       fetch(url)
   )
}

export function requestDelete(url){
    return(
        fetch(url, {
            method: "DELETE"
        })
    )
}