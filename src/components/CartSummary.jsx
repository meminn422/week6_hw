import React, { useState } from 'react';
import { CartIcon } from './CartIcon'; 

function CartSummary() {
    const [isOnTouch,setisOnTouch] = useState(false);
    const toggleModal=()=>{setisOnTouch(!isOnTouch);}
    return(
        <nav onClick={toggleModal} className="inline-block absolute top-6 right-6 md:right-6 cursor-pointer">
            <div className="indicator">
                {/* <span className="indicator-item badge badge-primary text-white">5</span> */}
                <CartIcon size={32} color="currentColor" />
            </div>
        <p className="text-xs opacity-60 mt-[-4px]">shopping bag</p>
        </nav>
    )
    
}
export default CartSummary