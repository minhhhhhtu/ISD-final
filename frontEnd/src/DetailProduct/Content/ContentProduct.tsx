import React from "react";
import "../DetailProductPage.css";

class ContentProduct extends React.Component {
  render(): React.ReactNode {
    return (
      <>
        <div className="bigContainer w-[100%] lg:w-[78%] h-[530px] mx-auto mt-3 mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 lg:gap-3 h-full place-items-center">
            {/* Xử lý hình ảnh */}
            <div className="Img w-full h-full flex flex-row justify-start items-center">
              <div className="itemPicture basis-1/3 ">
                <div className="flex flex-col justify-around ">
                  <div className="small-picture small-picture-active bg-[url('https://i.pinimg.com/564x/93/68/d6/9368d6422eab93c20b886cfbe2ae6115.jpg')]"></div>
                  <div className="small-picture bg-[url('https://i.pinimg.com/564x/a2/14/5b/a2145ba1f7824b3867da7482177c0692.jpg')]"></div>
                  <div className="small-picture bg-[url('https://i.pinimg.com/564x/6c/a1/20/6ca120389a49088c23d6087e7258e2cf.jpg')]"></div>
                  <div className="small-picture bg-[url('https://i.pinimg.com/564x/a2/14/5b/a2145ba1f7824b3867da7482177c0692.jpg')]"></div>
                </div>
              </div>

              <div className="mainPicture basis-2/3 relative">
                <div className="flex justify-center items-center mx-auto">
                  <div className="w-[50vh] h-[50vh] p-20 border-2 border-black bg-cover bg-no-repeat bg-[url('https://i.pinimg.com/564x/93/68/d6/9368d6422eab93c20b886cfbe2ae6115.jpg')]"></div>
                </div>
              </div>

              {/* DOTS */}
              <div className="dot absolute bottom-20 left-1/2 flex flex-row transform translate-x-[-220%]">
                <div className="dot-type dot-type-active"></div>
                <div className="dot-type "></div>
                <div className="dot-type "></div>
                <div className="dot-type "></div>
              </div>
            </div>

            {/* Xử lý nội dung */}
            <div className="w-full h-full">
              <h1 className="font-semibold text-3xl text-black mb-5">
                {" "}
                Túi da Melanie du lịch medium size travel simili bag - TVBM{" "}
              </h1>
              {/* Price */}
              <div className="price flex flex-row items-center mb-5">
                <div className="onSale line-through text-xl mr-3">500.000</div>
                <div className="mainPrice text-2xl text-orange-600 font-bold mr-3">
                  430.000<span className="line-through text-[20px]">đ</span>
                </div>
                <div className="flex justify-center items-center perSale w-auto h-[20px] flex-grow-1 bg-red-600 text-s p-3 text-slate-50 font-semibold">
                  14% GIẢM
                </div>
              </div>
              {/* Tăng Giảm giá */}
              <div className="number flex flex-row items-center mb-10">
                <div className="flex justify-center items-center minusButton w-[50px] h-[50px] border-[1px] border-solid border-slate-200 bg-[#F3F4F4] text-l font-bold text-black">
                  -
                </div>
                <div className="flex justify-center items-center minusButton w-[50px] h-[50px] border-[1px] border-solid border-slate-200 bg-white text-l font-bold text-black">
                  1
                </div>
                <div className="flex justify-center items-center minusButton w-[50px] h-[50px] border-[1px] border-solid border-slate-200 bg-[#F3F4F4] text-l font-bold text-black">
                  +
                </div>
              </div>
              {/* Voucher */}
              <div className="voucher flex flex-row items-center mb-5">
                <div className="flex justify-center items-center text-center w-[50%] h-[50px] border-[1px] border-solid border-slate-200 bg-[#F3F4F4] text-l font-bold text-black mr-5 py-10">
                Freeship đơn hàng giá trị trên 1 triệu đồng
                </div>
                <div className="flex justify-center items-center text-center w-[50%] h-[50px] border-[1px] border-solid border-slate-200 bg-[#F3F4F4] text-l font-bold text-black ml-5 py-10">
                Đổi hàng chưa qua sử dụng trong vòng 30 ngày
                </div>
              </div>

              {/* Infomation */}
              <div className="infomation">
                <h1 className="text-black font-semibold text-l mb-3">THÔNG TIN SẢN PHẨM</h1>
                <ul className="detail-information text-slate-600">
                  <li className="text-m tracking-wide">- Chất liệu: simili</li>
                  <li className="text-m tracking-wide">- Hoạ tiết: in lụa trực tiếp lên sản phẩm</li>
                  <li className="text-m tracking-wide">- Size: ngang 35, rộng 18, cao 22cm</li>
                  <li className="text-m tracking-wide">- Thương hiệu: Melanie</li>
                  <li className="text-m tracking-wide">- Sản xuất: Việt Nam</li>
                  <li className="text-m tracking-wide">- Màu sắc và họa tiết được thiết kế riêng bởi team design Melanie</li>
                </ul>
                
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ContentProduct;
