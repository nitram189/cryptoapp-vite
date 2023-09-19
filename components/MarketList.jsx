

export default function MarketList({ coin }) {

    const { name, fullName, price, marketCap, image, changeDay } = coin;

  return (
    <tr className="border-b text-center hover:bg-slate-700/50 hover:cursor-pointer duration-200 ease-linear">

        <td className="py-2 hidden sm:table-cell">
          <div className="flex items-center gap-4 px-4">
            <img
              src={`${'https://www.cryptocompare.com'}${image}`}
              alt={`${ coin.fullName } logo`}
              className="w-8" />
          
            <h5 className="text-orange-100">{ fullName }</h5>
          </div>
        </td>
        <td className="text-orange-400 font-semibold py-2">{ name }</td>
        <td className="text-orange-100">{ price }</td>
        <td className={`${ changeDay < 0
            ? 'text-red-500'
            : changeDay > 0 
              ? 'text-green-500'
              :'text-orange-100' }`}>
              { changeDay }%
          </td>
        <td className="text-orange-100">{ marketCap }</td>
    </tr>
  )
}
