"use client";

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../components/product-card';
// import PrivateRoute from '../components/PrivateRoute';
import Logo from '../components/logo';
import '../../src/app/globals.css'; // Adjust the path accordingly

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

// interface PrivateRouteProps extends RouteProps {
//   component: React.ComponentType<any>;
//   isAuthenticated: boolean;
// }
const HomePage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get('https://fakestoreapi.com/products');
      setProducts(response.data);
    };

    fetchProducts();
  }, []);

  // Search filter
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="min-h-screen bg-white">
      <Logo />

      {/* Search Bar */}
      <div className="max-w-3xl mx-auto mb-8">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full p-4 border border-gray-300 rounded-lg"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
        {currentProducts.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mb-8">
        {Array.from({ length: Math.ceil(filteredProducts.length / productsPerPage) }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => paginate(i + 1)}
            className={`px-4 py-2 mx-1 ${
              currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-white border border-gray-300'
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
