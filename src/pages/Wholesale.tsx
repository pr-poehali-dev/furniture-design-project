import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const benefits = [
  {
    icon: 'TrendingDown',
    title: 'Выгодные цены',
    description: 'Скидки до 40% при оптовых закупках',
  },
  {
    icon: 'Package',
    title: 'Большой ассортимент',
    description: 'Более 200 моделей в наличии',
  },
  {
    icon: 'Truck',
    title: 'Логистика',
    description: 'Организуем доставку в любой регион',
  },
  {
    icon: 'FileText',
    title: 'Документы',
    description: 'Полный пакет документов и сертификатов',
  },
];

const discounts = [
  { from: 100000, to: 300000, discount: 15 },
  { from: 300000, to: 500000, discount: 25 },
  { from: 500000, to: Infinity, discount: 40 },
];

export default function Wholesale() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-8">Оптовым клиентам</h1>

        <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
          Мы предлагаем выгодные условия сотрудничества для магазинов мебели, дизайнеров интерьеров
          и оптовых покупателей. Работаем с юридическими лицами и индивидуальными предпринимателями.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <Card
              key={benefit.title}
              className="animate-fade-in hover:shadow-lg transition-shadow"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center">
                    <Icon name={benefit.icon as any} size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-3xl">Система скидок</CardTitle>
            <CardDescription>Скидки зависят от объёма закупки</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {discounts.map((tier, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div>
                    <p className="font-semibold">
                      От {tier.from.toLocaleString()} до{' '}
                      {tier.to === Infinity ? '∞' : tier.to.toLocaleString()} ₽
                    </p>
                  </div>
                  <div className="text-2xl font-bold text-accent">{tier.discount}%</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-3xl">Стать партнёром</CardTitle>
            <CardDescription>Заполните форму и мы свяжемся с вами в течение 24 часов</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="company">Название компании</Label>
                  <Input id="company" placeholder="ООО Мебель+" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="inn">ИНН</Label>
                  <Input id="inn" placeholder="1234567890" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="contact-name">Контактное лицо</Label>
                  <Input id="contact-name" placeholder="Иван Иванов" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон</Label>
                  <Input id="phone" type="tel" placeholder="+7 (999) 123-45-67" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="example@company.com" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Комментарий</Label>
                <Textarea
                  id="message"
                  placeholder="Расскажите о вашем бизнесе и планируемых объёмах закупок"
                  rows={4}
                />
              </div>

              <Button type="submit" size="lg" className="w-full">
                Отправить заявку
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
