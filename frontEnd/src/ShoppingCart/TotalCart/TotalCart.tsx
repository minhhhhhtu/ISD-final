import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { useProductContext } from "../../ProductContext/ProductContext.tsx";

interface Product {
  id: number;
  name: string;
  url: string;
  price: number;
  viewer: string;
  quantity?: number;
  onSale?: boolean;
  priceOnSale: number;
  isFavorite?: boolean;
}

function TotalCart() {
  const { cart, incrQty, decrQty } = useProductContext();
  const [totalAmt, setTotalAmt] = useState<number>(0);

  useEffect(() => {
    if (Array.isArray(cart)) {
      const total = cart.reduce(
        (acc, product) => acc + product.price * (product.quantity || 1),
        0
      );
      setTotalAmt(total);
    } else {
      setTotalAmt(0);
    }
  }, [cart]);
  
  return (
    <div className="carts lg:mt-36 pb-5">
      {Array.isArray(cart) && cart.length > 0 ? (
        cart.map((product) => (
          <div className="text-black" key={product.id}>
            <div className="flex justify-between items-center">
              <div>
                <h2>{product.name}</h2>
                <p>Price: ${product.price}</p>
                <p>Quantity: {product.quantity}</p>
              </div>
              <div>
                <button onClick={() => incrQty(product.id)}>
                  <FontAwesomeIcon icon={faCaretUp} />
                </button>
                <button onClick={() => decrQty(product.id)}>
                  <FontAwesomeIcon icon={faCaretDown} />
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="text-black">Không có sản phẩm nào.</div>
      )}
      
    </div>
  );
}

export default TotalCart;
