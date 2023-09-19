import { useState } from "react";


export default function SupportForm() {

  const [request, setRequest] = useState({
    name: '',
    email: '',
    area: ''
  });
  const [alert, setAlert] = useState(false);

  const handleRequest = e => {
    setRequest({
      ...request,
      [e.target.name]: e.target.value
    })
  }


  const handleSubmit = e => {
    e.preventDefault();
    if (Object.values(request).includes('')) {
      setAlert(true)
      return
    }
    setAlert(false)
    setRequest({
      name: '', email: '', area: ''
    })
  }


  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-5">

      {alert &&
        <p className="text-orange-600 border-2 border-orange-600 rounded-lg text-center py-2 font-semibold text-lg">all fields must be filled</p>}

      <div className="w-1/2">
        <div className="flex flex-col gap-1">
          <label
            className="text-orange-100 font-medium text-lg"
            htmlFor="name">
            name.</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Crypto Lover"
            value={request.name}
            onChange={handleRequest}
            className="py-1 px-3 rounded-lg bg-black/10 text-white/90 border-2 border-slate-400 hover:bg-slate-800 hover:cursor-pointer w-full outline-orange-100" />
        </div>

        <div className="flex flex-col gap-1">
          <label
            className="text-orange-100 font-medium text-lg"
            htmlFor="email">
            email.</label>
          <input
            id="email"
            name="email"
            type="email"
            value={request.email}
            onChange={handleRequest}
            placeholder="cryptolover123@cryptoapp.com"
            className="py-1 px-3 rounded-lg bg-black/10 text-white/90 border-2 border-slate-400 hover:bg-slate-800 hover:cursor-pointer w-full outline-orange-100" />
        </div>
      </div>

      <div className="w-1/2">
        <div className="flex flex-col gap-1">
          <label
            className="text-orange-100 font-medium text-lg"
            htmlFor="area">write your enquery.</label>
          <textarea
            id="area"
            name="area"
            cols="30"
            rows="5"
            value={request.area}
            onChange={e => handleRequest(e)}
            className="p-3 rounded-lg bg-black/10 text-white/90 border-2 border-slate-400 hover:bg-slate-800 w-full outline-orange-100">
          </textarea>
        </div>

        <div>
          <button
            type="submit"
            className="py-1 px-3 rounded-lg text-slate-100 font-semibold border-2 border-slate-100 text-center text-lg hover:border-orange-500 hover:bg-transparent hover:text-orange-500 duration-200 ease-in-out">
            send enquery.
          </button>
        </div>
      </div>

    </form>
  )
}
