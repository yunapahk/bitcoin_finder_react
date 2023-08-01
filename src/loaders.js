export const priceLoader = async ({params}) => {

    const symbol = params.symbol
   
    const apiKey = "xxxxxxxx"
   
    return (await fetch(`http://rest-sandbox.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`)).json()
   } 
   