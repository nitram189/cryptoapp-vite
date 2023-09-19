
export const dateFormat = date => {
    const newDate = new Date( date * 1000 );
    const options = {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    }
  return newDate.toLocaleDateString('en-EN', options)
}

////////////////////////////////////////////////////////////////

export const currencies = [
  { id:'USD', name:'USD - American Dollar' },
  { id:'AUD', name:'AUD - Australian Dollar' },
  { id:'EUR', name:'EUR - Euro' },
  { id:'JPY', name:'JPY - Japanese Yen' },
  { id:'ARS', name:'ARS - Argentinian Peso' },
  { id:'MXN', name:'MXN - Mexican Peso' },
  { id:'BRL', name:'BRL - Brazilian Real' },
  { id:'KRW', name:'KRW - South Korean Won' },
  { id:'HKD', name:'HKD - Hong Kong Dollar' },
]

////////////////////////////////////////////////////////////////

export const getQuote = async ( coinPair ) => {
  
  try {
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${ coinPair.crypto }&tsyms=${ coinPair.currency }`
    const res = await fetch( url )
    const { DISPLAY } = await res.json()
  
    const mappedCryptoData = {
      price: DISPLAY[coinPair.crypto][coinPair.currency].PRICE,
      highDay: DISPLAY[coinPair.crypto][coinPair.currency].HIGHDAY,
      lowDay: DISPLAY[coinPair.crypto][coinPair.currency].LOWDAY,
      marketCap: DISPLAY[coinPair.crypto][coinPair.currency].MKTCAP,
      image: DISPLAY[coinPair.crypto][coinPair.currency].IMAGEURL,
      market: DISPLAY[coinPair.crypto][coinPair.currency].MARKET,
      changeDay: DISPLAY[coinPair.crypto][coinPair.currency].CHANGEPCTHOUR
    }
    return mappedCryptoData
    }
    catch (error) {
      console.log( error )
  } 
}

////////////////////////////////////////////////////////////////

export const getCoins = async ( numberOfCoins ) => {
        
   const res = await fetch(`https://min-api.cryptocompare.com/data/top/mktcapfull?limit=${ numberOfCoins }&tsym=USD`)

   if( !res.ok ) {
    throw new Error('Oops, something went wrong!')
   }
   
   const { Data } = await res.json()

   const mappedData = Data?.map(({ CoinInfo, DISPLAY }) => ({
      name: CoinInfo.Name,
      fullName: CoinInfo.FullName,
      image: CoinInfo.ImageUrl,
      price: DISPLAY?.USD?.PRICE,
      changeDay: DISPLAY?.USD?.CHANGEPCTDAY,
      marketCap: DISPLAY?.USD?.MKTCAP,
   }))

   return mappedData
  }


////////////////////////////////////////////////////////////////

export const getNewsList = async () => {
  try {
    const response = await fetch('https://min-api.cryptocompare.com/data/v2/news/?lang=EN')
    const { Data } = await response.json()

    const newsList = Data.slice(0,12)

    return newsList
  }
  catch (error) {
    console.log('Error fetching data:', error)
  }
}


