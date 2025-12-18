import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

const promos = [
  {
    id: 1,
    title: 'Скидка 20% на садовые комплекты',
    description:
      'Готовьтесь к дачному сезону заранее! Скидка 20% на все садовые комплекты при заказе до конца месяца.',
    image: 'https://cdn.poehali.dev/projects/429afa72-3e9a-4040-a6da-076c62cd8227/files/68262583-277c-444b-bd55-25135eabbb9c.jpg',
    discount: '20%',
    validUntil: '31 декабря 2024',
    code: 'GARDEN20',
  },
  {
    id: 2,
    title: 'Подвесное кресло в подарок',
    description:
      'При покупке любого садового комплекта стоимостью от 50 000 рублей — подвесное кресло "Мини" в подарок!',
    image: 'https://cdn.poehali.dev/projects/429afa72-3e9a-4040-a6da-076c62cd8227/files/198391a6-9a06-4a31-869f-12cef75826c8.jpg',
    discount: 'Подарок',
    validUntil: '15 января 2025',
    code: null,
  },
  {
    id: 3,
    title: 'Бесплатная доставка',
    description:
      'Бесплатная доставка и сборка при заказе от 30 000 рублей. Действует по всей России!',
    image: 'https://cdn.poehali.dev/projects/429afa72-3e9a-4040-a6da-076c62cd8227/files/c8dd4660-ac9b-4d67-9f46-ba3fff0cdb4f.jpg',
    discount: '0 ₽',
    validUntil: 'Постоянная акция',
    code: null,
  },
  {
    id: 4,
    title: 'Комплект для питомцев со скидкой',
    description:
      'Лежанка + миски + игрушка для вашего питомца со скидкой 30% при покупке комплектом.',
    image: 'https://cdn.poehali.dev/projects/429afa72-3e9a-4040-a6da-076c62cd8227/files/c8dd4660-ac9b-4d67-9f46-ba3fff0cdb4f.jpg',
    discount: '30%',
    validUntil: '20 января 2025',
    code: 'PETS30',
  },
];

export default function Promo() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-4">Акции и специальные предложения</h1>
        <p className="text-xl text-muted-foreground mb-12">
          Следите за нашими акциями, чтобы купить качественную мебель по выгодным ценам
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {promos.map((promo, index) => (
            <Card
              key={promo.id}
              className="overflow-hidden group hover:shadow-2xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative aspect-video overflow-hidden">
                <Badge className="absolute top-4 left-4 z-10 text-lg px-4 py-2 bg-destructive text-destructive-foreground">
                  {promo.discount}
                </Badge>
                <img
                  src={promo.image}
                  alt={promo.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-3">{promo.title}</h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">{promo.description}</p>

                <div className="flex items-center justify-between mb-4 pb-4 border-b">
                  <div>
                    <p className="text-sm text-muted-foreground">Действует до:</p>
                    <p className="font-semibold">{promo.validUntil}</p>
                  </div>
                  {promo.code && (
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">Промокод:</p>
                      <p className="font-bold text-lg text-accent">{promo.code}</p>
                    </div>
                  )}
                </div>

                <Link to="/catalog">
                  <Button className="w-full" size="lg">
                    Выбрать товар
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-12 bg-gradient-to-br from-primary/10 to-accent/10">
          <CardContent className="p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Подпишитесь на рассылку</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Получайте эксклюзивные предложения, новости о новых коллекциях и промокоды на скидку до 25%
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Ваш email"
                className="flex-1 px-4 py-3 rounded-md border border-border bg-background"
              />
              <Button size="lg" className="px-8">
                Подписаться
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
