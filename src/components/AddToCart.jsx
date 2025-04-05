// src/components/AddToCart.jsx
import { useDispatch } from 'react-redux';
import { addCartItems } from '../redux/cartSlice';

function AddToCart({ product, qty }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(
        addCartItems({
          id: product.id,
          title: product.title,
          price: product.price,
          qty: qty, // 👈 確保是數字！
        })
    );      
    if (!qty || qty < 1) {
        alert("請選擇有效數量！");
        return;
      }
      
    alert(`🛒 已加入 ${product.title} × ${qty}`);
  };

  return (
    <button
      onClick={handleClick}
      className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
    >
      加入購物車
    </button>
  );
}

export default AddToCart;
