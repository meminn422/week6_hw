import { useSelector } from 'react-redux';
import { selectCartItems } from '../redux/cartSlice';
import { CartIcon } from './CartIcon';
import { Link } from 'react-router-dom';

function CartButton() {
  const cartItems = useSelector(selectCartItems);
  const totalQty = cartItems.reduce((sum, item) => sum + item.qty, 0); // ✅ 數量加總

  return (
    <Link to="/cart" className="relative inline-block">
      <CartIcon size={32} color="white" />
      {totalQty > 0 && (
        <span className="absolute -top-2 -right-2 bg-purple-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          {totalQty}
        </span>
      )}
    </Link>
  );
}

export default CartButton;
