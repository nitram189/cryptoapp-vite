import { createContext, useEffect, useState } from "react";
import { getQuote } from "../helpers";
import useMktCapCoins from "../hooks/useMktCapCoins";


export const CoinContext = createContext();

export const CoinProvider = ({ children }) => {

    const { coins } = useMktCapCoins(4);
    const [ quote, setQuote ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(false);

    useEffect(() => {
      setTimeout(() => {
        setIsLoading( false )
      }, 1000 )
    }, [ quote ])

    const handleQuote = pair => {
      setIsLoading( true )
      getQuote( pair )
        .then( res => setQuote([...quote, res ]) )
    }
    const clearSearch = () => {
      setQuote([])
    }

    return (
        <CoinContext.Provider
            value={{
              coins,
              quote,
              handleQuote,
              isLoading,
              clearSearch
            }}>
          { children }
        </CoinContext.Provider>
    )
}