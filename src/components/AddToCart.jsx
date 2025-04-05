function AddToCart({ product, qty }) {
    return (
      <button
        className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
        onClick={() =>
          console.log(`🛒 加入：${product.title} x ${qty}`)
        }
      >
        加入購物車
      </button>
    );
  }
  
  export default AddToCart;
  