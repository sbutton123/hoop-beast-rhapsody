import { ShoppingCart, Star, Package, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Beast Pro Hoop",
      price: "$89.99",
      originalPrice: "$109.99",
      rating: 4.9,
      reviews: 234,
      description: "Professional-grade weighted hoop designed for serious training",
      features: [
        "Adjustable weight system",
        "Foam padding for comfort",
        "Durable construction",
        "Available in multiple colors"
      ],
      category: "Hoops",
      inStock: true
    },
    {
      id: 2,
      name: "Beast Beginner Set",
      price: "$49.99",
      originalPrice: "$64.99",
      rating: 4.7,
      reviews: 189,
      description: "Complete starter kit perfect for beginners",
      features: [
        "Lightweight beginner hoop",
        "Instructional DVD",
        "Exercise guide",
        "Carrying case included"
      ],
      category: "Kits",
      inStock: true
    },
    {
      id: 3,
      name: "Beast Apparel Collection",
      price: "$34.99",
      originalPrice: "$44.99",
      rating: 4.8,
      reviews: 156,
      description: "High-performance athletic wear for beast workouts",
      features: [
        "Moisture-wicking fabric",
        "Flexible design",
        "Beast logo embroidery",
        "Available in S-XXL"
      ],
      category: "Apparel",
      inStock: true
    },
    {
      id: 4,
      name: "LED Beast Hoop",
      price: "$129.99",
      originalPrice: "$149.99",
      rating: 4.6,
      reviews: 87,
      description: "Light-up hoop for stunning performances and night sessions",
      features: [
        "RGB LED lights",
        "Rechargeable battery",
        "Multiple light patterns",
        "Water-resistant design"
      ],
      category: "Hoops",
      inStock: false
    },
    {
      id: 5,
      name: "Beast Recovery Kit",
      price: "$39.99",
      originalPrice: "$54.99",
      rating: 4.5,
      reviews: 143,
      description: "Essential recovery tools for post-workout care",
      features: [
        "Foam roller",
        "Resistance bands",
        "Massage balls",
        "Recovery guide"
      ],
      category: "Accessories",
      inStock: true
    },
    {
      id: 6,
      name: "Beast Nutrition Bundle",
      price: "$79.99",
      originalPrice: "$99.99",
      rating: 4.4,
      reviews: 98,
      description: "Complete nutrition package for optimal performance",
      features: [
        "Pre-workout supplement",
        "Post-workout recovery",
        "Meal replacement shakes",
        "Nutrition guide"
      ],
      category: "Nutrition",
      inStock: true
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star 
        key={index} 
        className={`h-4 w-4 ${index < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-beast py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-bangers text-5xl md:text-6xl text-white mb-6">
            BEAST PRODUCTS
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            From custom-made hoops to downloadable workout guides and Beast-approved merch, here’s where you gear up. Shop tools that help you grow your skills, support your training, and show off your Beast pride.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-4 mb-12 justify-center">
            {['All', 'Hoops', 'Kits', 'Apparel', 'Accessories', 'Nutrition'].map((category) => (
              <Button
                key={category}
                variant="outline"
                className="font-bangers hover:bg-gradient-beast hover:text-white"
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="hover-lift shadow-beast">
                <CardHeader>
                  {/* Product Image Placeholder */}
                  <div className="aspect-square bg-gradient-beast-light rounded-lg mb-4 flex items-center justify-center">
                    <Package className="h-16 w-16 text-white/70" />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                      {product.category}
                    </span>
                    {!product.inStock && (
                      <span className="text-sm font-medium text-red-600 bg-red-100 px-2 py-1 rounded">
                        Out of Stock
                      </span>
                    )}
                  </div>
                  
                  <CardTitle className="font-bangers text-xl text-gradient-beast mt-2">
                    {product.name}
                  </CardTitle>
                  
                  {/* Rating */}
                  <div className="flex items-center space-x-2">
                    <div className="flex">
                      {renderStars(product.rating)}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <CardDescription className="mb-4">
                    {product.description}
                  </CardDescription>
                  
                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Price and Actions */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="font-bangers text-2xl text-gradient-beast">
                        {product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          {product.originalPrice}
                        </span>
                      )}
                    </div>
                    
                    <Button 
                      className="btn-beast"
                      disabled={!product.inStock}
                    >
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Shipping Info */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Truck className="h-12 w-12 text-primary mb-4" />
              <h3 className="font-bangers text-xl text-gradient-beast mb-2">
                FREE SHIPPING
              </h3>
              <p className="text-muted-foreground">
                On orders over $75
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Package className="h-12 w-12 text-primary mb-4" />
              <h3 className="font-bangers text-xl text-gradient-beast mb-2">
                EASY RETURNS
              </h3>
              <p className="text-muted-foreground">
                30-day return policy
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Star className="h-12 w-12 text-primary mb-4" />
              <h3 className="font-bangers text-xl text-gradient-beast mb-2">
                QUALITY GUARANTEE
              </h3>
              <p className="text-muted-foreground">
                Beast-approved quality
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
