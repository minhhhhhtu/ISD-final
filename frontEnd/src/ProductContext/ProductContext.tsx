import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import axios from "axios";
import { toast } from "react-toastify";

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
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>(() => {
    const storedCart = localStorage.getItem("savedProduct");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/api/products/get-all"
        );
        setProducts(response.data.data);
      } catch (error) {
        console.error("Error fetching products", error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    localStorage.setItem("savedProduct", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      if (!Array.isArray(prevCart)) return []; // Ensure prevCart is an array
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
      if (!Array.isArray(prevCart)) return []; // Ensure prevCart is an array
      return prevCart.map((product) =>
        product.id === productId
          ? { ...product, quantity: (product.quantity || 0) + 1 }
          : product
      );
    });
  };

  const decrQty = (productId: number) => {
    setCart((prevCart) => {
      if (!Array.isArray(prevCart)) return []; // Ensure prevCart is an array

      let productRemoved = false;

      const updatedCart = prevCart
        .map((product) => {
          if (product.id === productId) {
            const newQuantity = (product.quantity || 0) - 1;
            if (newQuantity > 0) {
              return { ...product, quantity: newQuantity };
            } else {
              localStorage.removeItem(`product_${productId}`);
              productRemoved = true; // Mark that the product is removed
              return null; // Mark product for removal
            }
          }
          return product;
        })
        .filter((product): product is Product => product !== null); // Remove null values

      if (productRemoved) {
        toast.warning("Product removed from cart");
      }

      return updatedCart;
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
