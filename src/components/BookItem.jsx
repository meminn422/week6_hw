import {Link} from 'react-router'
 
function ProductItem({product}){
    return(
        <section className="pt-4 px-3 lg:px-4">
            <div className="max-w-xs mx-auto border border-gray-500 rounded overflow-hidden">
                <Link to={`/products/id/${product.id}`}>
                    <img className=" w-full" src={product.cover} alt={product.name}/>
                </Link>
                <div className="p-4">
                    <h4 className="text-white font-bold mb-1">
                        {product.title}
                    </h4>
                    <h6 className="text-gray-400 mb-3">
                        {product.author}
                    </h6>
                    <p className="text-white opacity-70 mb-3">{product.summary_short}</p>
                    <div className="flex justify-between flex-wrap">
                        <Link to={`/products/id/${product.id}`} className="text-purple-300 no-underline flex items-center">
                            See More
                            <svg width="24" height="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </Link>
                        <span className="text-gray-500 inline-flex items-center leading-none text-lg pr-3 py-1 font-bold">
                            {product.price}
                        </span>
               </div>
                </div>
            </div>
        </section>
    )
}

export default ProductItem