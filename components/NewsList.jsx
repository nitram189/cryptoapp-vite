import { dateFormat } from "../helpers";

export default function NewsList({ card }) {

  return (
    <>
      <div
        className="p-3 mx-4 border border-orange-500/50 rounded-lg flex flex-col justify-between hover:bg-slate-800/80">

        <div className="flex items-center gap-5">
          <img
            src={card.source_info.img}
            alt={`${card.title} image`}
            className="w-10 rounded-full" />
          <h5 className="text-orange-100">{card.source_info.name}</h5>
        </div>

        <div className="py-1 flex flex-col gap-2">

          <a href={card.url}
            target="_blank"
            className="font-semibold text-orange-500 card-title">
              {card.title}
          </a>

          <div className="flex justify-between items-center">
            <p className="text-sm text-orange-100/60">{dateFormat(card.published_on)}</p>
          </div>
        
        </div>
      </div>
    </>
  )
}

