import React from "react";

class RelateProduct extends React.Component {
  render(): React.ReactNode {
    return (
      <>
        <div className="w-[100%] lg:w-[78%] h-[530px] mx-auto mt-3 mb-2">
          <h1 className="text-center text-2xl font-bold text-black m-20">
            Những sản phẩm liên quan
          </h1>
          <div className="grid grid-cols-5 gap-3 h-full place-items-start">
            <div className="product-1 w-[200px] h-[300px]">
              <div className='w-full h-full bg-[url("https://i.pinimg.com/564x/20/85/4c/20854c2e9ebdae7fbe35dfc44fdbf828.jpg")] bg-cover bg-no-repeat mb-4'></div>
              <p className="title text-slate-800 font-medium">
                Áo thun Degrey thiết kế 2 lớp Signature Degrey double tee
              </p>
              <div className="price flex flex-row justify-start items-center">
                <div className=" line-through text-m mr-3">
                  500,000<span className=" line-through text-s">đ</span>
                </div>
                <div className=" text-l text-black font-bold">
                  350,000<span className=" text-s">đ</span>
                </div>
              </div>
            </div>


            <div className='product-1 w-[200px] h-[300px]'>
                        <div className='w-full h-full bg-[url("https://i.pinimg.com/564x/20/85/4c/20854c2e9ebdae7fbe35dfc44fdbf828.jpg")] bg-cover bg-no-repeat mb-4'></div>
                        <p className="title text-slate-800 font-medium">Áo thun Degrey thiết kế 2 lớp Signature Degrey double tee</p>
                        <div className='price flex flex-row justify-start items-center'>
                            <div className=" line-through text-m mr-3">500,000<span className=' line-through text-s'>đ</span></div>
                            <div className=" text-l text-black font-bold">350,000<span className=' text-s'>đ</span></div>
                        </div>
                    </div>


                    <div className='product-1 w-[200px] h-[300px]'>
                        <div className='w-full h-full bg-[url("https://i.pinimg.com/564x/20/85/4c/20854c2e9ebdae7fbe35dfc44fdbf828.jpg")] bg-cover bg-no-repeat mb-4'></div>
                        <p className="title text-slate-800 font-medium">Áo thun Degrey thiết kế 2 lớp Signature Degrey double tee</p>
                        <div className='price flex flex-row justify-start items-center'>
                            <div className=" line-through text-m mr-3">500,000<span className=' line-through text-s'>đ</span></div>
                            <div className=" text-l text-black font-bold">350,000<span className=' text-s'>đ</span></div>
                        </div>
                    </div>

                    <div className='product-1 w-[200px] h-[300px]'>
                        <div className='w-full h-full bg-[url("https://i.pinimg.com/564x/20/85/4c/20854c2e9ebdae7fbe35dfc44fdbf828.jpg")] bg-cover bg-no-repeat mb-4'></div>
                        <p className="title text-slate-800 font-medium">Áo thun Degrey thiết kế 2 lớp Signature Degrey double tee</p>
                        <div className='price flex flex-row justify-start items-center'>
                            <div className=" line-through text-m mr-3">500,000<span className=' line-through text-s'>đ</span></div>
                            <div className=" text-l text-black font-bold">350,000<span className=' text-s'>đ</span></div>
                        </div>
                    </div>

                    <div className='product-1 w-[200px] h-[300px]'>
                        <div className='w-full h-full bg-[url("https://i.pinimg.com/564x/20/85/4c/20854c2e9ebdae7fbe35dfc44fdbf828.jpg")] bg-cover bg-no-repeat mb-4'></div>
                        <p className="title text-slate-800 font-medium">Áo thun Degrey thiết kế 2 lớp Signature Degrey double tee</p>
                        <div className='price flex flex-row justify-start items-center'>
                            <div className=" line-through text-m mr-3">500,000<span className=' line-through text-s'>đ</span></div>
                            <div className=" text-l text-black font-bold">350,000<span className=' text-s'>đ</span></div>
                        </div>
                    </div>
          </div>
        </div>
      </>
    );
  }
}

export default RelateProduct;
