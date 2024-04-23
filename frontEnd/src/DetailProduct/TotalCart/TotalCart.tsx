import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";

interface Product {
  id: number;
  imgProduct: string;
  product: string;
  price: number;
  quantity: number;
}

function TotalCart() {
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      imgProduct:
        "https://s3-alpha-sig.figma.com/img/7f1c/6359/5947d0d599d4c32ede2fdbec46416e2a?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pNJhQfZoy0HRZPvfsr0oO~F0ksnnz1A7lE25kV~Ne32nYGSQlKvB6eRqYz7pOAi4C3sM8oMC69iKQFNZrH-nmT1Zg-Sj5NBvT9qenE6NNpsmdLbcpkvgjCLCOvbXcQhyK2bZ4nrcugaNZetG6LlvcZaU0Nmledzge0~eXt~dgoxOr-lArs7TA9zQLUnRHGRjLl~I8xfC~sJpAS-j9x6xDyvZhi7-ooObnPTFQAvIpoeOmfjsIhXeZR0CxgGRscHB5yFFAQUMYV9RJc~xtA1Lx2NUcV0gyj0fcLEfNYNE28c111Vu4Je85cpXai~oRjLT8UHgDOYN8AnXWNQp0ykYQQ__",
      product: "T-Shirt",
      quantity: 1,
      price: 10,
    },
    {
      id: 2,
      imgProduct:
        "https://s3-alpha-sig.figma.com/img/7f1c/6359/5947d0d599d4c32ede2fdbec46416e2a?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pNJhQfZoy0HRZPvfsr0oO~F0ksnnz1A7lE25kV~Ne32nYGSQlKvB6eRqYz7pOAi4C3sM8oMC69iKQFNZrH-nmT1Zg-Sj5NBvT9qenE6NNpsmdLbcpkvgjCLCOvbXcQhyK2bZ4nrcugaNZetG6LlvcZaU0Nmledzge0~eXt~dgoxOr-lArs7TA9zQLUnRHGRjLl~I8xfC~sJpAS-j9x6xDyvZhi7-ooObnPTFQAvIpoeOmfjsIhXeZR0CxgGRscHB5yFFAQUMYV9RJc~xtA1Lx2NUcV0gyj0fcLEfNYNE28c111Vu4Je85cpXai~oRjLT8UHgDOYN8AnXWNQp0ykYQQ__",
      product: "Dress",
      quantity: 2,
      price: 20,
    },
  ]);

  const [totalAmt, setTotalAmt] = useState(0);

  useEffect(() => {
    const total = products.reduce(
      (acc, curr) => (acc += curr.price * curr.quantity),
      0
    );
    setTotalAmt(total);
  }, [products]);

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

    const handleProduct = products.find((product) => {
      if (product.quantity === 1) {
        return alert("Hệ thống sẽ xóa sản phẩm nếu về 0");
      }
    });
  };

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

            {products.map((product) => (
              <div
                key={product.id}
                className="flex flex-row md:w-[80%]  justify-between items-center shadow-md mt-8 mb-12 px-10 py-5 font-bold gap-8"
              >
                <div className="flex flex-col items-center gap-4">
                  <img
                    className="w-20 h-20 object-cover"
                    src={product.imgProduct}
                    alt={product.product}
                  />
                  <div className=" text-black">{product.product}</div>
                </div>
                <div className="text-black">${product.price}</div>
                <div className="quantity-container flex flex-col justify-center items-center w-[50px] h-full mr-[40px] border-2 border-black text-black">
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
                <div className="text-black">
                  ${product.quantity * product.price}
                </div>
              </div>
            ))}
          </div>
      </div>
      <div className="flex justify-center items-center">
        <NavLink
          to="/"
          className="back-home mb-12 py-2 flex justify-center items-center rounded-xl w-[250px] h-[50px] border-2 boder-solid font-semibold shadow-lg border-black text-black bg-white hover:bg-pinky-50 hover:text-slate-500 cursor-pointer"
        >
          Quay Trở Lại Cửa Hàng
        </NavLink>
      </div>

      <div className="summary flex flex-col lg:flex-row justify-evenly items-start text-black gap-8 mb-24">
        <div className="voucherFree flex flex-row ml-5 xs:ml-10 sm:ml-32 md:ml-48 lg:ml-0 gap-8">
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

        <div className="flex flex-col w-[380px] lg:w-[400px] h-[330px] ml-5 xs:ml-10 sm:ml-32 md:ml-48 lg:ml-0  border-2 border-solid border-black p-5">
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
