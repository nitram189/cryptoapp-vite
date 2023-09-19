


export default function Pagination({ totalPosts, postPerPage, handleCurrentPage, currentPage }) {

    let pages = [];

    for( let i = 1; i <= (totalPosts / postPerPage); i++) {
        pages.push(i);
    }

  return (
    <div className="flex justify-center gap-5">
      { pages?.map(( page, index ) => (
        <button
          key={ index }
          onClick={() => handleCurrentPage( page ) }
          className={`border-2 border-orange-100 rounded text-orange-100 py-1 px-3 font-semibold hover:text-orange-500 hover:border-orange-500 ${ page === currentPage ? 'text-orange-500 border-orange-500' : '' }`}>
            { page }
        </button>
      )) }
    </div>
  )
}
