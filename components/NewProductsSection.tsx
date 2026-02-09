import { Button } from './ui/button';
import Image from 'next/image';

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  imageAlt: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Single Wall Matte Black Coffee Cup',
    price: 'From R1.09',
    image: '/cup.png',
    imageAlt: 'Single Wall Matte Black Coffee Cup'
  },
  {
    id: 2,
    name: 'Paper Pulp Cup Holder',
    price: 'From R1.55',
    image: '/tray.png',
    imageAlt: 'Paper Pulp Cup Holder'
  },
  {
    id: 3,
    name: 'Dessert Cup (90mm)',
    price: 'From R1.38',
    image: '/jar.png',
    imageAlt: 'Dessert Cup'
  },
  {
    id: 4,
    name: 'Dessert Cup Flat Lid (90mm)',
    price: 'From R0.63',
    image: '/lid.png',
    imageAlt: 'Dessert Cup Flat Lid'
  }
];

export default function NewProductsSection() {
  return (
    <section id="products" className="w-full py-16 md:py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl md:text-5xl font-light text-foreground">
            New Products
          </h2>
          <Button 
            variant="outline"
            className="bg-white border-foreground text-foreground hover:bg-foreground hover:text-white rounded-lg px-6 py-5"
          >
            Shop now
          </Button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              {/* Product Image Card */}
              <div className="relative bg-gray-100 rounded-2xl overflow-hidden aspect-square mb-4">
                {/* NEW Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <div className="bg-[#79443B] text-white text-xs font-normal px-3 py-2 rounded">
                    NEW
                  </div>
                </div>

                {/* Product Image */}
                <div className="relative w-full h-full">
                  <Image
                    src={product.image}
                    alt={product.imageAlt}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-1">
                <h3 className="text-base font-normal text-foreground">
                  {product.name}
                </h3>
                <p className="text-sm text-foreground">
                  {product.price} <span className="text-muted-foreground">incl. vat</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
