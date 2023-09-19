

export default function HomeCoins({ coin }) {

    
  return (
    <li className="flex flex-col items-center ">
        <img
          src={`${'https://www.cryptocompare.com'}${coin.image}`}
          alt={`${ coin.fullName } logo`}
          className="w-12 md:w-20" />
        
        <div className="flex gap-3">
          <h4 className="font-semibold text-white">{ coin.fullName }</h4>
          
          <p className={`${ coin.changeDay < 0
            ? 'text-red-500'
            : coin.changeDay > 0 
              ? 'text-green-500'
              :'text-white' } font-medium`}>
                { coin.changeDay }%
          </p>
        </div>
       

        <p className="font-semibold text-orange-300">{ coin.price }</p>
    </li>
  )
}
