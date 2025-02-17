import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Pencil, ShoppingCart } from 'lucide-react';

const PencilStore = () => {
  const [cart, setCart] = useState([]);
  
  const pencils = [
    {
      id: 1,
      name: "Graphite Master 2B",
      price: 1.99,
      description: "Perfect for general writing and sketching",
      hardness: "2B",
      type: "Graphite"
    },
    {
      id: 2,
      name: "Artist Pro 6B",
      price: 2.49,
      description: "Soft lead for deep shading and artistic work",
      hardness: "6B",
      type: "Graphite"
    },
    {
      id: 3,
      name: "Technical Draft HB",
      price: 2.99,
      description: "Precise line work for technical drawings",
      hardness: "HB",
      type: "Graphite"
    },
    {
      id: 4,
      name: "Color Burst Red",
      price: 1.79,
      description: "Vibrant red colored pencil",
      type: "Colored"
    }
  ];

  const addToCart = (pencil) => {
    setCart([...cart, pencil]);
  };

  const removeFromCart = (pencilId) => {
    const index = cart.findIndex(item => item.id === pencilId);
    if (index > -1) {
      const newCart = [...cart];
      newCart.splice(index, 1);
      setCart(newCart);
    }
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <div className="container mx-auto p-4">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Pencil Store</h1>
        <div className="flex items-center space-x-2">
          <ShoppingCart className="w-6 h-6" />
          <span className="text-lg">Cart ({cart.length} items) - ${getTotalPrice()}</span>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {pencils.map((pencil) => (
          <Card key={pencil.id} className="bg-white">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Pencil className="w-5 h-5" />
                <span>{pencil.name}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">{pencil.description}</p>
              <div className="flex flex-col space-y-2">
                {pencil.hardness && (
                  <span className="text-sm">Hardness: {pencil.hardness}</span>
                )}
                <span className="text-sm">Type: {pencil.type}</span>
                <span className="font-bold">${pencil.price.toFixed(2)}</span>
                <div className="flex space-x-2">
                  <button
                    onClick={() => addToCart(pencil)}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
                  >
                    Add to Cart
                  </button>
                  {cart.some(item => item.id === pencil.id) && (
                    <button
                      onClick={() => removeFromCart(pencil.id)}
                      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
                    >
                      Remove
                    </button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PencilStore;
