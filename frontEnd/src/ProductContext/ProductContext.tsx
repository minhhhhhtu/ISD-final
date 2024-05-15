import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

interface Product {
  id: number;
  name: string;
  url: string;
  price: number;
  viewer: string;
  onSale?: boolean;
  priceOnSale: number;
  quantity?: number;
}

interface ProductContextType {
  products: Product[];
  filteredProducts: Product[];
  handleSearch: (searchTerm: string) => void;
  loadStoredSearchResults: () => void;
  cart: Product[];
  addToCart: (product: Product) => void;
  incrQty: (productId: number) => void;
  decrQty: (productId: number) => void;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [products] = useState<Product[]>([
    {
      id: 1,
      name: "Image-1",
      url: "https://4kwallpapers.com/images/walls/thumbs_3t/548.jpg",
      price: 60.0,
      viewer: "(4.1k) Customer Reviews",
      onSale: true,
      priceOnSale: 70.0,
    },
    {
      id: 2,
      name: "Image-2",
      url: "https://4kwallpapers.com/images/walls/thumbs_3t/15250.jpg",
      price: 50.0,
      viewer: "(4.1k) Customer Reviews",
      onSale: false,
      priceOnSale: 0,
    },
    {
      id: 3,
      name: "Image-3",
      url: "https://4kwallpapers.com/images/walls/thumbs_3t/6629.jpeg",
      price: 50.0,
      viewer: "(4.1k) Customer Reviews",
      onSale: false,
      priceOnSale: 0,
    },
    {
      id: 4,
      name: "Image-4",
      url: "https://4kwallpapers.com/images/walls/thumbs_2t/5391.jpeg",
      price: 80.0,
      viewer: "(4.1k) Customer Reviews",
      onSale: true,
      priceOnSale: 70.0,
    },
    {
      id: 5,
      name: "Image-5",
      url: "https://4kwallpapers.com/images/walls/thumbs_2t/5391.jpeg",
      price: 80.0,
      viewer: "(4.1k) Customer Reviews",
      onSale: false,
      priceOnSale: 70.0,
    },
    {
      id: 6,
      name: "Image-6",
      url: "https://4kwallpapers.com/images/walls/thumbs_2t/5391.jpeg",
      price: 80.0,
      viewer: "(4.1k) Customer Reviews",
      onSale: true,
      priceOnSale: 70.0,
    },
    {
      id: 7,
      name: "Image-7",
      url: "https://4kwallpapers.com/images/walls/thumbs_2t/5391.jpeg",
      price: 80.0,
      viewer: "(4.1k) Customer Reviews",
      onSale: false,
      priceOnSale: 70.0,
    },
    {
      id: 8,
      name: "Image-8",
      url: "https://4kwallpapers.com/images/walls/thumbs_2t/5391.jpeg",
      price: 80.0,
      viewer: "(4.1k) Customer Reviews",
      onSale: false,
      priceOnSale: 70.0,
    },
    {
      id: 9,
      name: "Image-9",
      url: "https://4kwallpapers.com/images/walls/thumbs_2t/5391.jpeg",
      price: 80.0,
      viewer: "(4.1k) Customer Reviews",
      onSale: false,
      priceOnSale: 70.0,
    },
  ]);

  const [cart, setCart] = useState<Product[]>(() => {
    const storedCart = localStorage.getItem("savedProduct");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("savedProduct", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      if (!Array.isArray(prevCart)) return [];  // Ensure prevCart is an array
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 0) + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const incrQty = (productId: number) => {
    setCart((prevCart) => {
      if (!Array.isArray(prevCart)) return [];  // Ensure prevCart is an array
      return prevCart.map((product) =>
        product.id === productId
          ? { ...product, quantity: (product.quantity || 0) + 1 }
          : product
      );
    });
  };

  const decrQty = (productId: number) => {
    setCart((prevCart) => {
      if (!Array.isArray(prevCart)) return [];  // Ensure prevCart is an array
      return prevCart.map((product) =>
        product.id === productId && (product.quantity || 0) > 1
          ? { ...product, quantity: (product.quantity || 0) - 1 }
          : product
      );
    });
  };

  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  const handleSearch = (searchTerm: string) => {
    const results = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(results);
    localStorage.setItem("searchResults", JSON.stringify(results));
    localStorage.setItem("searchTerm", searchTerm);
  };

  const loadStoredSearchResults = () => {
    const storedResults = localStorage.getItem("searchResults");
    const storedTerm = localStorage.getItem("searchTerm");
    if (storedResults) {
      setFilteredProducts(JSON.parse(storedResults));
    }
    if (storedTerm) {
      // Optional: Set the search term if needed
    }
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        filteredProducts,
        handleSearch,
        loadStoredSearchResults,
        cart,
        addToCart,
        incrQty,
        decrQty,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = (): ProductContextType => {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error("useProductContext must be used within a ProductProvider");
  }
  return context;
};
