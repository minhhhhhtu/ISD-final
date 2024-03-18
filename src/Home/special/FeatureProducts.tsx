import React from "react";

interface State {
  products: {
    id: number;
    name: string;
    url: string;
    price: number;
    onSale?: boolean;
    priceOnSale: number;
  }[];
}
class FeatureProducts extends React.Component<{}, State> {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id: 1,
          name: "Image 1",
          url: "https://4kwallpapers.com/images/walls/thumbs_3t/548.jpg",
          price: 60.0,
          onSale: true,
          priceOnSale: 70.0,
        },
        {
          id: 2,
          name: "Image 2",
          url: "https://4kwallpapers.com/images/walls/thumbs_3t/15250.jpg",
          price: 50.0,
          onSale: false,
          priceOnSale: 0,
        },
        {
          id: 3,
          name: "Image 3",
          url: "https://4kwallpapers.com/images/walls/thumbs_3t/6629.jpeg",
          price: 50.0,
          onSale: false,
          priceOnSale: 0,
        },
        {
          id: 4,
          name: "Image 4",
          url: "https://4kwallpapers.com/images/walls/thumbs_2t/5391.jpeg",
          price: 80.0,
          onSale: true,
          priceOnSale: 70.0,
        },
      ],
    };
  }
  render(): React.ReactNode {
    const { products } = this.state;
    return (
      <>
        {/* SUBHEADLINE */}
        <div className="subheadline flex">
          <div className="subheadline-deco-line"></div>
          <div className="subheadline-label">Feature Products</div>
          <div className="subheadline-deco-line"></div>
        </div>
        {/* END SUBHEADLINE */}

        {/* FEATURE PRODUCTS */}
        <div className="feature-mugs w-[95%] lg:w-[65%] mx-auto mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <div
                  className="h-[400px] sm:h-[540px] bg-cover bg-no-repeat bg-center"
                  style={{ backgroundImage: `url(${product.url})` }}
                >
                  <a href="#">
                    <div className="w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-400 relative group">
                      {product.onSale && (
                        <div className="absolute top-3 right-3 bg-white py-2 px-4 text-coffee-400 text-[18px] font-semibold">
                          On Sale
                        </div>
                      )}
                      <div className="button absolute w-11/12 bg-white text-gray-900 bottom-4 left-1/2 -translate-x-1/2 hidden group-hover:block group-hover:animate-fadeIn">
                        View Product
                      </div>
                    </div>
                  </a>
                </div>
                <div className="text-center mt-8">
                  <a href="#">
                    <div className="text-xl mb-2 hover:text-coffee-400 font-[400px] leading-5 tracking-wide">
                      {product.name}
                    </div>
                  </a>
                  <div>
                    <span className="text-lg text-coffee-400 tracking-wider">
                      ${product.price.toFixed(2)} USD
                    </span>
                    {product.onSale ? (
                      <span className=" ml-3 text-sm text-gray-500 line-through">
                        ${product.priceOnSale} USD
                      </span>
                    ) : null}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* END FEATURE PRODUCTS */}
      </>
    );
  }
}

export default FeatureProducts;
