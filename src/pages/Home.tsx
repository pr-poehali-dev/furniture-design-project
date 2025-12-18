import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const categories = [
  {
    id: 'chairs',
    name: 'Домашние стулья',
    description: 'Элегантные и комфортные стулья для вашего дома',
    image: 'https://cdn.poehali.dev/projects/429afa72-3e9a-4040-a6da-076c62cd8227/files/198391a6-9a06-4a31-869f-12cef75826c8.jpg',
  },
  {
    id: 'hanging',
    name: 'Подвесные кресла',
    description: 'Расслабьтесь в уютном подвесном кресле',
    image: 'https://cdn.poehali.dev/projects/429afa72-3e9a-4040-a6da-076c62cd8227/files/198391a6-9a06-4a31-869f-12cef75826c8.jpg',
  },
  {
    id: 'garden',
    name: 'Садовые комплекты',
    description: 'Мебель для отдыха на свежем воздухе',
    image: 'https://cdn.poehali.dev/projects/429afa72-3e9a-4040-a6da-076c62cd8227/files/68262583-277c-444b-bd55-25135eabbb9c.jpg',
  },
  {
    id: 'pets',
    name: 'Товары для животных',
    description: 'Комфорт для ваших любимых питомцев',
    image: 'https://cdn.poehali.dev/projects/429afa72-3e9a-4040-a6da-076c62cd8227/files/c8dd4660-ac9b-4d67-9f46-ba3fff0cdb4f.jpg',
  },
];

const features = [
  {
    icon: 'Award',
    title: 'Премиальное качество',
    description: 'Используем только лучшие материалы и проверенные технологии производства',
  },
  {
    icon: 'Truck',
    title: 'Доставка по всей России',
    description: 'Бесплатная доставка при заказе от 50 000 рублей',
  },
  {
    icon: 'Shield',
    title: 'Гарантия 3 года',
    description: 'Уверены в качестве нашей продукции и даём расширенную гарантию',
  },
  {
    icon: 'Package',
    title: 'Оптовые поставки',
    description: 'Специальные условия для оптовых покупателей и дилеров',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://cdn.poehali.dev/files/m-group-121.jpg)',
          }}
        >
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative z-10 text-center text-white px-4 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Комфорт Дома</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Мебель премиум-класса для дома, дачи и ваших питомцев
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/catalog">
              <Button size="lg" className="text-lg px-8">
                Посмотреть каталог
              </Button>
            </Link>
            <Link to="/promo">
              <Button size="lg" variant="outline" className="text-lg px-8 bg-white/10 backdrop-blur text-white border-white hover:bg-white/20">
                Текущие акции
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">Наши категории</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Link key={category.id} to={`/catalog?category=${category.id}`}>
              <Card
                className="group hover:shadow-xl transition-all duration-300 overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                  <p className="text-muted-foreground text-sm">{category.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Почему выбирают нас</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-full mb-4">
                  <Icon name={feature.icon as any} size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Готовы создать уют в вашем доме?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Посетите наш каталог или свяжитесь с нами для консультации
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/catalog">
              <Button size="lg" className="text-lg px-8">
                Открыть каталог
              </Button>
            </Link>
            <Link to="/contacts">
              <Button size="lg" variant="outline" className="text-lg px-8">
                Связаться с нами
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}