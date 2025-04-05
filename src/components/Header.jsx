import {Link} from "react-router"
import CartSummary from "./CartSummary"
import CartButton from './CartButton';

function Header({title,slogan}){
    //const [isOnTouch,setisOnTouch] = useState(false);
    return(
        <header data-theme="luxury" className="text-purple-200 text-center flex flex-col items-center header">
            <Link to='/'>
            <h2 className="pt-5 pb-2 text-3xl">{title}</h2>
            </Link>
            
            <p className="text-gray-400  text-opacity-80 text-base leading-relaxed xl:w-1/2 lg:w-3/4 mx-auto">{slogan}</p>
            <CartSummary/>
            {/* <CartButton/> */}
            <div className="flex mt-6 justify-center">
                <hr className="border-0 border-t-[10px] my-[23px] mx-auto w-[300px]  opacity-100 rounded" />
            </div>
        </header>
    )
}   
export default Header