import React, { useState, useEffect } from "react";

interface products {
  product: string;
  price: number;
  quantity: number;
}

interface CartState {
  products: products[];
}
function TotalCart() {
  const [products, setProducts] = useState([
    { name: "T-Shirt", qty: 1, price: 10 },
    { name: "Dress", qty: 1, price: 20 },
  ]);

  const [totalAmt, setTotalAmt] = useState(0);

  useEffect(() => {
    const total = products.reduce((s, i) => (s += i.price * i.qty), 0);
    setTotalAmt(total);
  }, [products]);

  const incrQty = (index) => {
    setProducts((v) => {
      const a = JSON.parse(JSON.stringify(v)); // FOR AVOIDING MUTATING DATA, BECAUSE IN STRICT MODE THIS SETSTATE CALLBACK WILL TRIGGER TWICE
      a[index].qty += 1;
      return [...a];
    });
  };

  const decrQty = (index) => {
    setProducts((v) => {
      const a = JSON.parse(JSON.stringify(v));
      a[index].qty -= 1;
      return [...a];
    });
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-row md:w-[80%] justify-around items-center shadow-md mb-12 py-2 font-bold gap-8">
          <div className="text-black">Product</div>
          <div className="text-black">Price</div>
          <div className="text-black">Quantity</div>
          <div className="text-black">Subtotal</div>
        </div>

        {products.map((index, product) => (
          <div className="flex flex-row md:w-[80%] items-center shadow-md mb-5 p-10 gap-72">
            <div className="basis-1/4 text-black">{index.name}</div>
            <div className="basis-1/4 text-black">{index.price}</div>
            <div className="quantity-container basis-1/4 flex flex-row justify-center items-center text-black">
              <button onClick={() => incrQty(product)}>Incr Qty</button>
              <div className="">{index.qty}</div>
              {index.qty > 0 ? (
                <button onClick={() => decrQty(product)}>Decr Qty</button>
              ) : null}
            </div>
            <div className="basis-1/4 text-black">
              {index.qty * index.price}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default TotalCart;
