import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
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
    { id: 2, product: "Dress", quantity: 2, price: 20 },
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
      return updatedProducts.filter((product) => product.quantity > 0);
    });

    const totalAmt = products.reduce(
      (accumulator, product) => accumulator + product.price * product.quantity,
      0
    );
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
            <div className="basis-1/4 text-black">${product.price}</div>
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
              ${product.quantity * product.price}
            </div>
          </div>
        ))}
      </div>
      <NavLink
        to="/home"
        className="back-home mb-12 ml-[150px] py-2 flex justify-center items-center rounded-xl w-[250px] h-[50px] border-2 boder-solid font-semibold shadow-lg border-black text-black bg-white hover:bg-pinky-50 hover:text-slate-500 cursor-pointer"
      >
        Quay Trở Lại Cửa Hàng
      </NavLink>

      <div className="summary flex flex-row justify-evenly items-start text-black gap-8 mb-24">
        <div className="voucherFree flex flex-row gap-8">
          <input
            type="text"
            placeholder="Mã giảm giá"
            className="flex justify-start items-center pl-4 py-4 rounded-md h-[40px] border-[1px] border-solid border-black"
          />
          <button
            type="submit"
            className="flex justify-center items-center w-full px-4 py-4 rounded-md h-[40px] bg-pinky-600 text-white shadow-md"
          >
            Áp dụng mã
          </button>
        </div>

        <div className="flex flex-col w-[400px] h-[330px]  border-2 border-solid border-black p-5">
          <h2 className="text-xl font-bold text-black mb-2">Tổng Giỏ Hàng</h2>
          <div className="products flex flex-row justify-between mb-2 border-b border-solid border-slate-600">
            <p className="text-m text-black">Sản Phẩm:</p>
            <p className="text-m text-black">${totalAmt}</p>
          </div>
          <div className="products flex flex-row justify-between mb-2 border-b border-solid border-slate-600">
            <p className="text-m text-black">Phí Giao Hàng:</p>
            <p className="text-m text-black">Free</p>
          </div>{" "}
          <div className="products flex flex-row justify-between mb-7">
            <p className="text-m text-black">Tổng:</p>
            <p className="text-m text-black">${totalAmt}</p>
          </div>
          <div className="flex justify-center items-center">
            <button
              type="submit"
              className="button flex justify-center items-center w-[60%] font-medium text-white bg-pinky-600"
            >
              Mua
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default TotalCart;
