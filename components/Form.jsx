import { useRef, useState } from "react";
import { currencies } from "../helpers";
import { useCoin } from "../hooks/useCoin";
import useMktCapCoins from "../hooks/useMktCapCoins";


export default function Form() {

    const [ search, setSearch ] = useState({ currency: '', crypto: '' });
    const { coins } = useMktCapCoins(15);
    const { handleQuote } = useCoin();

    const previousSearch = useRef( search );
    
    const handleSearch = e => {
        setSearch({
          ...search,
          [ e.target.name ]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        if( Object.values( search ).includes('') || search === previousSearch.current ) return;

        previousSearch.current = search
        handleQuote( search )
    }


  return (
    <div>
      <form
        onSubmit={ handleSubmit }
        className="md:flex justify-center gap-10">

        <div className="pb-5 md:pb-0 md:w-1/3">
          <select
            name="crypto"
            id="crypto"
            value={ search.crypto }
            onChange={ handleSearch }
            className="py-2 rounded-lg bg-black/10 text-white/90 font-medium border-2 border-slate-400 text-center text-lg hover:bg-slate-800 hover:cursor-pointer w-3/4 md:w-full">
            <option
              value="">select your crypto</option>
                { coins?.map( crypto => (
                    <option
                      key={ crypto.fullName }
                      value={ crypto.name }>
                        { crypto.name } - { crypto.fullName }
                    </option>   
                ))}
          </select>
        </div>

        <div className="pb-5 md:pb-0 md:w-1/3">
          <select
            name="currency"
            id="currency"
            value={ search.currency }
            onChange={ handleSearch }
            className="py-2 rounded-lg bg-black/10 text-white/90 font-medium border-2 border-slate-400 text-center text-lg hover:bg-slate-700/90 hover:cursor-pointer w-3/4 md:w-full">
            <option
              value=""
              className="">
                select your currency</option>
                { currencies.map( currency => (
                    <option
                      key={ currency.id }
                      value={ currency.id }>
                        { currency.name }
                    </option>   
                ))}
          </select>
        </div>

        <button
          type="submit"
          className="py-1 px-3 rounded-lg bg-white/10 backdrop-blur-lg font-bold border-2 border-slate-400 text-white/90 text-center text-lg hover:border-orange-500 hover:bg-transparent hover:text-orange-500 duration-200 ease-in-out">
            get quote.
        </button>
        
      </form>
    </div>
  )
}
