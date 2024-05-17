import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { useProductContext } from "../../ProductContext/ProductContext.tsx";
import { NavLink } from "react-router-dom";

interface Product {
  _id: string;
  name: string;
  image: string;
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
    <>
      <div className="carts lg:mt-36 pb-5">
        <div className="flex flex-col justify-center items-center pt-24 lg:pt-2 mb-4">
          <h1 className="text-3xl xs:mb-5 font-bold text-[#d94b4b]">
            {" "}
            Giỏ Hàng{" "}
          </h1>
          <p className="text-center text-slate-500">
            Các sản phẩm được các khách hàng mua nhiều với đa số đều có phản hồi
            tốt
          </p>
          <div className="flex flex-row md:w-[80%]  justify-between items-center shadow-md mt-8 mb-12 px-10 py-5 font-bold gap-8">
            <div className="text-black">Product</div>
            <div className="text-black ml-[20px]">Price</div>
            <div className="text-black">Quantity</div>
            <div className="text-black">Subtotal</div>
          </div>

          {cart.map((product) => (
            <div
              key={product._id}
              className="flex flex-row md:w-[80%]  justify-between items-center shadow-md mt-8 mb-12 px-10 py-5 font-bold gap-8"
            >
              <div className="flex flex-col items-center gap-4">
                <img
                  className="w-20 h-20 object-cover"
                  src={product.image}
                  alt={product.image}
                />
                <div className=" text-black">{product.name}</div>
              </div>
              <div className="text-black">${product.price}</div>
              <div className="quantity-container flex flex-col justify-center items-center w-[50px] h-full mr-[40px] border-2 border-black text-black">
                <button onClick={() => incrQty(product._id)}>
                  <FontAwesomeIcon icon={faCaretUp} />
                </button>
                <p>{product.quantity}</p>
                <button onClick={() => decrQty(product._id)}>
                  <FontAwesomeIcon icon={faCaretDown} />
                </button>
              </div>
              <div className="text-black">
                ${(product.quantity ?? 1) * product.price}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center">
        <NavLink
          to="/home"
          className="back-home mb-12 py-2 flex justify-center items-center rounded-xl w-[250px] h-[50px] border-2 boder-sol_id font-semibold shadow-lg border-black text-black bg-white hover:bg-pinky-50 hover:text-slate-500 cursor-pointer"
        >
          Quay Trở Lại Cửa Hàng
        </NavLink>
      </div>
      <div className="summary flex flex-col lg:flex-row justify-evenly items-start text-black gap-8 mb-24">
        <div className="voucherFree flex flex-row ml-5 xs:ml-10 sm:ml-32 md:ml-48 lg:ml-0 gap-8">
          <input
            type="text"
            placeholder="Mã giảm giá"
            className="flex justify-start items-center pl-4 py-4 rounded-md h-[40px] border-[1px] border-sol_id border-black"
          />
          <button
            type="submit"
            className="flex justify-center items-center w-full px-4 py-4 rounded-md h-[40px] bg-pinky-600 text-white shadow-md"
          >
            Áp dụng mã
          </button>
        </div>

        <div className="flex flex-col w-[380px] lg:w-[400px] h-[330px] ml-5 xs:ml-10 sm:ml-32 md:ml-48 lg:ml-0  border-2 border-sol_id border-black p-5">
          <h2 className="text-xl font-bold text-black mb-2">Tổng Giỏ Hàng</h2>
          <div className="products flex flex-row justify-between mb-2 border-b border-sol_id border-slate-600">
            <p className="text-m text-black">Sản Phẩm:</p>
            <p className="text-m text-black">${totalAmt}</p>
          </div>
          <div className="products flex flex-row justify-between mb-2 border-b border-sol_id border-slate-600">
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