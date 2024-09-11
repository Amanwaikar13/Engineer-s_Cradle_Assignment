import React from 'react';

interface ProductCardProps {
  title: string;
  price: number;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, price, image }) => {
  return (
    <div className="relative bg-white border rounded-lg overflow-hidden shadow-lg">
      {/* Image container with relative positioning */}
      <div className="relative">
        {/* Product Image */}
        <img src={image} alt={title} className="w-full h-64 object-cover" />

        {/* Price Tag positioned inside the image */}
        <div className="absolute bottom-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-lg transform rotate-12">
          ${price.toFixed(2)}
        </div>
      </div>

      {/* Product Title */}
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
    </div>
  );
};

export default ProductCard;
