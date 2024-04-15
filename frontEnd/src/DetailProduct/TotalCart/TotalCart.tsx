import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";

interface Product {
  id: number;
  product: string;
  price: number;
  quantity: number;
}

function TotalCart() {
  const [products, setProducts] = useState<Product[]>([
    { id: 1, product: "T-Shirt", quantity: 1, price: 10 },
    { id: 2, product: "Dress", quantity: 1, price: 20 },
  ]);

  const [totalAmt, setTotalAmt] = useState(0);

  useEffect(() => {
    const total = products.reduce(
      (acc, curr) => (acc += curr.price * curr.quantity),
      0
    );
    setTotalAmt(total);
  }, [products]);

  const handleMoveProduct = (productId: number) => {
    const updatedProducts = products.filter(
      (product) => product.id !== productId
    );
    setProducts(updatedProducts);
  };

  const incrQty = (productId: number) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };
  const decrQty = (productId: number) => {
    setProducts((prevProducts) => {
      const updatedProducts = prevProducts.map((product) =>
        product.id === productId && product.quantity > 0
          ? { ...product, quantity: product.quantity - 1 }
          : product
      );
      return updatedProducts.filter((product) => product.quantity > 0); // Remove the product if quantity becomes 0
    });
  };

  return (
    <>
      <div className="flex flex-col items-center mb-4">
        <div className="flex flex-row md:w-[80%] justify-around items-center shadow-md mb-12 py-2 font-bold gap-8">
          <div className="text-black">Product</div>
          <div className="text-black">Price</div>
          <div className="text-black">Quantity</div>
          <div className="text-black">Subtotal</div>
        </div>

        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-row md:w-[80%] items-center shadow-md mb-5 p-10 gap-72"
          >
            <div className="basis-1/4 text-black">{product.product}</div>
            <div className="basis-1/4 text-black">{product.price}</div>
            <div className="quantity-container basis-1/4 flex flex-col justify-center items-center h-full border-2 border-black text-black">
              <button onClick={() => incrQty(product.id)}>
                <FontAwesomeIcon icon={faCaretUp} />
              </button>
              <div className="">{product.quantity}</div>
              {product.quantity > 0 && (
                <button onClick={() => decrQty(product.id)}>
                  <FontAwesomeIcon icon={faCaretDown} />
                </button>
              )}
            </div>
            <div className="basis-1/4 text-black">
              {product.quantity * product.price}
            </div>
          </div>
        ))}
      </div>
      <div className="back-home mb-12 ml-[150px] py-2 flex justify-center items-center rounded-xl w-[250px] h-[50px] border-2 boder-solid font-semibold shadow-lg border-black text-black bg-white hover:bg-pinky-50 hover:text-slate-500">
        Quay Trở Lại Cửa Hàng
      </div>

      <div className="summary flex flex-row justify-evenly items-center text-black gap-8 mb-24">
        <div className="voucherFree flex flex-row gap-8">
          <div className="flex justify-start items-center pl-4 w-[200px] py-4 rounded-md h-[40px] border-2 border-black">Mã giảm giá</div>
          <div className="flex justify-center items-center w-[200px] py-4 rounded-md h-[40px] bg-pinky-600 text-white shadow-md">Áp dụng mã</div>
        </div>
        <div>Heading 1</div>
      </div>
    </>
  );
}

export default TotalCart;
