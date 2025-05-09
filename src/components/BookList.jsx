import ProductItem from './BookItem'
import products from '../json/books.json'

function ProductList(){
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 content">
            {products.map((product)=>( //map來建立多個item
                <ProductItem key={product.ID} product={product}/>
            ))}
        </div>
    )
}
export default ProductList