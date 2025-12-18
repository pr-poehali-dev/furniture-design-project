import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const advantages = [
  {
    icon: 'CreditCard',
    title: 'Удобная оплата',
    description: 'Наличные, карты, банковский перевод, рассрочка 0-0-12',
  },
  {
    icon: 'Home',
    title: 'Шоу-рум в Москве',
    description: 'Посетите наш выставочный зал и оцените качество лично',
  },
  {
    icon: 'Headphones',
    title: 'Консультации',
    description: 'Поможем с выбором мебели под ваш интерьер',
  },
  {
    icon: 'Wrench',
    title: 'Сборка и установка',
    description: 'Профессиональная сборка мебели нашими мастерами',
  },
  {
    icon: 'Gift',
    title: 'Программа лояльности',
    description: 'Накопительные скидки и специальные предложения',
  },
  {
    icon: 'RotateCcw',
    title: 'Обмен и возврат',
    description: 'Возврат товара в течение 14 дней без объяснения причин',
  },
];

export default function Retail() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold mb-8">Розничным покупателям</h1>

        <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
          Мы рады каждому клиенту и предлагаем комфортные условия покупки для частных лиц.
          Качественная мебель с доставкой и гарантией от производителя.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {advantages.map((advantage, index) => (
            <Card
              key={advantage.title}
              className="animate-fade-in hover:shadow-lg transition-shadow"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="w-14 h-14 bg-primary text-primary-foreground rounded-full flex items-center justify-center">
                    <Icon name={advantage.icon as any} size={28} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{advantage.title}</h3>
                <p className="text-muted-foreground">{advantage.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-gradient-to-br from-accent/20 to-accent/5">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-4">Рассрочка 0-0-12</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Покупайте мебель в рассрочку без переплат на 12 месяцев. Оформление за 15 минут
                прямо в шоу-руме или онлайн.
              </p>
              <ul className="space-y-2 text-muted-foreground mb-6">
                <li className="flex items-start">
                  <Icon name="Check" size={20} className="mr-2 mt-0.5 flex-shrink-0 text-primary" />
                  Без первоначального взноса
                </li>
                <li className="flex items-start">
                  <Icon name="Check" size={20} className="mr-2 mt-0.5 flex-shrink-0 text-primary" />
                  Без процентов и переплат
                </li>
                <li className="flex items-start">
                  <Icon name="Check" size={20} className="mr-2 mt-0.5 flex-shrink-0 text-primary" />
                  Решение за 5 минут
                </li>
              </ul>
              <Button>Узнать подробнее</Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-primary/10 to-primary/5">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-4">Индивидуальный заказ</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Не нашли подходящий вариант? Изготовим мебель по вашим размерам и эскизам.
                Выбор материалов, цветов и фурнитуры.
              </p>
              <ul className="space-y-2 text-muted-foreground mb-6">
                <li className="flex items-start">
                  <Icon name="Check" size={20} className="mr-2 mt-0.5 flex-shrink-0 text-primary" />
                  Бесплатный выезд замерщика
                </li>
                <li className="flex items-start">
                  <Icon name="Check" size={20} className="mr-2 mt-0.5 flex-shrink-0 text-primary" />
                  3D визуализация проекта
                </li>
                <li className="flex items-start">
                  <Icon name="Check" size={20} className="mr-2 mt-0.5 flex-shrink-0 text-primary" />
                  Срок изготовления от 14 дней
                </li>
              </ul>
              <Button variant="outline">Оставить заявку</Button>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-muted">
          <CardContent className="p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Посетите наш шоу-рум</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Приглашаем вас в наш выставочный зал, где представлено более 100 моделей мебели.
              Опытные консультанты помогут с выбором и расскажут о преимуществах каждой модели.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contacts">
                <Button size="lg">Адрес и время работы</Button>
              </Link>
              <Link to="/catalog">
                <Button size="lg" variant="outline">
                  Смотреть каталог
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
