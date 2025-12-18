import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const products = [
  {
    id: 1,
    name: 'Классический стул "Элегант"',
    category: 'chairs',
    price: 12500,
    image: 'https://cdn.poehali.dev/projects/429afa72-3e9a-4040-a6da-076c62cd8227/files/198391a6-9a06-4a31-869f-12cef75826c8.jpg',
    discount: 15,
  },
  {
    id: 2,
    name: 'Подвесное кресло "Релакс"',
    category: 'hanging',
    price: 28900,
    image: 'https://cdn.poehali.dev/projects/429afa72-3e9a-4040-a6da-076c62cd8227/files/198391a6-9a06-4a31-869f-12cef75826c8.jpg',
    discount: 0,
  },
  {
    id: 3,
    name: 'Садовый комплект "Уют"',
    category: 'garden',
    price: 45000,
    image: 'https://cdn.poehali.dev/projects/429afa72-3e9a-4040-a6da-076c62cd8227/files/68262583-277c-444b-bd55-25135eabbb9c.jpg',
    discount: 20,
  },
  {
    id: 4,
    name: 'Лежанка для собак "Комфорт"',
    category: 'pets',
    price: 8500,
    image: 'https://cdn.poehali.dev/projects/429afa72-3e9a-4040-a6da-076c62cd8227/files/c8dd4660-ac9b-4d67-9f46-ba3fff0cdb4f.jpg',
    discount: 0,
  },
  {
    id: 5,
    name: 'Обеденный стул "Престиж"',
    category: 'chairs',
    price: 15200,
    image: 'https://cdn.poehali.dev/projects/429afa72-3e9a-4040-a6da-076c62cd8227/files/198391a6-9a06-4a31-869f-12cef75826c8.jpg',
    discount: 10,
  },
  {
    id: 6,
    name: 'Садовый столик "Природа"',
    category: 'garden',
    price: 22000,
    image: 'https://cdn.poehali.dev/projects/429afa72-3e9a-4040-a6da-076c62cd8227/files/68262583-277c-444b-bd55-25135eabbb9c.jpg',
    discount: 0,
  },
];

const categories = [
  { id: 'all', name: 'Все товары' },
  { id: 'chairs', name: 'Домашние стулья' },
  { id: 'hanging', name: 'Подвесные кресла' },
  { id: 'garden', name: 'Садовые комплекты' },
  { id: 'pets', name: 'Товары для животных' },
];

export default function Catalog() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') || 'all';
  const [selectedCategory, setSelectedCategory] = useState(categoryParam);

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
    if (categoryId === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', categoryId);
    }
    setSearchParams(searchParams);
  };

  const filteredProducts =
    selectedCategory === 'all'
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-5xl font-bold mb-8">Каталог товаров</h1>

      <div className="flex flex-wrap gap-3 mb-8">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={selectedCategory === category.id ? 'default' : 'outline'}
            onClick={() => handleCategoryChange(category.id)}
            className="transition-all"
          >
            {category.name}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product, index) => (
          <Card
            key={product.id}
            className="group hover:shadow-xl transition-all duration-300 animate-fade-in"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div className="aspect-square overflow-hidden relative">
              {product.discount > 0 && (
                <Badge className="absolute top-4 right-4 z-10 bg-destructive text-destructive-foreground">
                  -{product.discount}%
                </Badge>
              )}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <div className="flex items-center gap-3">
                {product.discount > 0 ? (
                  <>
                    <span className="text-2xl font-bold text-primary">
                      {Math.round(product.price * (1 - product.discount / 100)).toLocaleString()} ₽
                    </span>
                    <span className="text-lg text-muted-foreground line-through">
                      {product.price.toLocaleString()} ₽
                    </span>
                  </>
                ) : (
                  <span className="text-2xl font-bold text-primary">
                    {product.price.toLocaleString()} ₽
                  </span>
                )}
              </div>
              <Button className="w-full mt-4">Подробнее</Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-20">
          <p className="text-xl text-muted-foreground">Товары в данной категории появятся скоро</p>
        </div>
      )}
    </div>
  );
}
