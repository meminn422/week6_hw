import { useState } from 'react';
import AddToCart from './AddToCart';

function ProductDetail({ product }) {
  const [qty, setQty] = useState(product.stock > 0 ? 1 : 0);

  return (
    <div data-theme="luxury" className="flex flex-col lg:flex-row items-center justify-center px-6 py-10">
      <div className="max-w-6xl w-full bg-[#1e1e1e] rounded-2xl shadow-xl overflow-hidden flex flex-col lg:flex-row">

        {/* 圖片區塊 */}
        <div className="lg:w-1/2 w-full h-64 lg:h-auto">
          <img
            alt={product.title}
            src={product.cover}
            className="w-full h-full object-cover object-top rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none"
          />
        </div>

        {/* 資訊區塊 */}
        <div className="lg:w-1/2 w-full p-6 flex flex-col justify-between">
          <div>
            <h1 className="text-white text-3xl font-bold mb-2">{product.title}</h1>
            <h2 className="text-white opacity-40 mb-1 text-lg">{product.author}</h2>
            <p className="text-white opacity-60 text-base mb-6">{product.summary}</p>
          </div>

          <div className="text-purple-400 flex flex-col items-end gap-4">
            <p className="text-2xl font-semibold">US${product.price}.00</p>

            {/* 數量選單（DaisyUI + 動態庫存） */}
            <div className="text-white flex items-center gap-2">
              <label htmlFor="qty">數量：</label>
              <select
                id="qty"
                className="select select-bordered w-20 bg-[#111818] text-white"
                defaultValue={product.countInStock > 0 ? 1 : 0}
                onChange={e => setQty(Number(e.target.value))}
              >
                {Array(product.stock).fill(0).map((_, x) => (
                  <option key={x + 1} value={x + 1}>
                    {x + 1}
                  </option>
                ))}
              </select>
            </div>

            {/* 加入購物車 */}
            <AddToCart product={product} qty={qty} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
