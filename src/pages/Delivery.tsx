import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const deliveryOptions = [
  {
    icon: 'Truck',
    title: 'Доставка по Москве',
    price: 'от 1 500 ₽',
    description: 'Доставка в пределах МКАД на следующий день после оформления заказа',
  },
  {
    icon: 'MapPin',
    title: 'Доставка по России',
    price: 'от 3 000 ₽',
    description: 'Отправляем транспортными компаниями в любой город России',
  },
  {
    icon: 'Package',
    title: 'Самовывоз',
    price: 'Бесплатно',
    description: 'Забрать заказ можно со склада в Москве',
  },
];

const paymentMethods = [
  {
    icon: 'Banknote',
    title: 'Наличные',
    description: 'Оплата наличными курьеру при получении',
  },
  {
    icon: 'CreditCard',
    title: 'Банковская карта',
    description: 'Visa, Mastercard, МИР онлайн или курьеру',
  },
  {
    icon: 'Building',
    title: 'Безналичный расчёт',
    description: 'По счёту для юридических лиц и ИП',
  },
  {
    icon: 'Wallet',
    title: 'Рассрочка 0-0-12',
    description: 'Без процентов и переплат на 12 месяцев',
  },
];

export default function Delivery() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-12">Доставка и оплата</h1>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Способы доставки</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {deliveryOptions.map((option, index) => (
              <Card
                key={option.title}
                className="animate-fade-in hover:shadow-lg transition-shadow"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center">
                      <Icon name={option.icon as any} size={32} />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{option.title}</h3>
                  <p className="text-2xl font-bold text-accent mb-3">{option.price}</p>
                  <p className="text-sm text-muted-foreground">{option.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-8 bg-accent/10">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <Icon name="Gift" size={32} className="text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Бесплатная доставка</h3>
                  <p className="text-muted-foreground">
                    При заказе от 50 000 рублей доставка по Москве и Московской области бесплатная.
                    По России — скидка 50% на доставку.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Способы оплаты</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {paymentMethods.map((method, index) => (
              <Card
                key={method.title}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center">
                      <Icon name={method.icon as any} size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
                      <p className="text-muted-foreground">{method.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-8">Частые вопросы</h2>
          <Card>
            <CardHeader>
              <CardTitle>Ответы на популярные вопросы</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Можно ли отследить статус доставки?</AccordionTrigger>
                  <AccordionContent>
                    Да, после отправки заказа вы получите трек-номер для отслеживания. Также наши
                    менеджеры будут держать вас в курсе на каждом этапе доставки.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>Что делать, если товар повреждён при доставке?</AccordionTrigger>
                  <AccordionContent>
                    При получении обязательно осмотрите товар в присутствии курьера. Если обнаружены
                    повреждения, сфотографируйте их и оформите акт. Мы заменим повреждённый товар в
                    течение 3 дней.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>Входит ли подъём на этаж в стоимость доставки?</AccordionTrigger>
                  <AccordionContent>
                    Подъём на этаж на лифте входит в стоимость доставки. Подъём по лестнице
                    оплачивается дополнительно — 300 рублей за этаж.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>Можно ли изменить адрес доставки после оформления?</AccordionTrigger>
                  <AccordionContent>
                    Да, вы можете изменить адрес доставки, связавшись с нашим менеджером не позднее
                    чем за 24 часа до планируемой доставки.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger>Предоставляете ли вы услугу сборки мебели?</AccordionTrigger>
                  <AccordionContent>
                    Да, мы предлагаем профессиональную сборку мебели. Стоимость услуги зависит от
                    сложности изделия и рассчитывается индивидуально. В среднем сборка стула — 500 ₽,
                    садового комплекта — 2 500 ₽.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
