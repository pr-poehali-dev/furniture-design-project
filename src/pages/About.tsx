import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const values = [
  {
    icon: 'Sparkles',
    title: 'Качество',
    description: 'Мы используем только премиальные материалы и контролируем каждый этап производства',
  },
  {
    icon: 'Users',
    title: 'Клиентоориентированность',
    description: 'Индивидуальный подход к каждому клиенту и внимание к деталям',
  },
  {
    icon: 'Leaf',
    title: 'Экологичность',
    description: 'Используем экологически чистые материалы и безопасные покрытия',
  },
  {
    icon: 'Lightbulb',
    title: 'Инновации',
    description: 'Следим за трендами и внедряем современные решения в производство',
  },
];

export default function About() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-8">О компании</h1>

        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-xl text-muted-foreground leading-relaxed">
            «Комфорт Дома» — это семейная компания с 15-летней историей производства качественной
            мебели. Мы создаём изделия, которые служат не один десяток лет и становятся частью
            уютного дома наших клиентов.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="animate-fade-in">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-4">Наша миссия</h2>
              <p className="text-muted-foreground leading-relaxed">
                Создавать мебель, которая объединяет эстетику, комфорт и долговечность. Мы верим,
                что качественная мебель способна преобразить пространство и сделать жизнь комфортнее.
              </p>
            </CardContent>
          </Card>

          <Card className="animate-fade-in" style={{ animationDelay: '100ms' }}>
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-4">Наше производство</h2>
              <p className="text-muted-foreground leading-relaxed">
                Собственное производство площадью 5000 м² оснащено современным оборудованием.
                Команда из 80+ мастеров создаёт до 500 изделий ежемесячно с сохранением высочайшего
                качества.
              </p>
            </CardContent>
          </Card>
        </div>

        <h2 className="text-4xl font-bold text-center mb-12">Наши ценности</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {values.map((value, index) => (
            <Card
              key={value.title}
              className="animate-fade-in hover:shadow-lg transition-shadow"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center">
                    <Icon name={value.icon as any} size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-muted">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold mb-6 text-center">Цифры, которые говорят за нас</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <p className="text-4xl font-bold text-primary mb-2">15+</p>
                <p className="text-muted-foreground">лет на рынке</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-primary mb-2">12000+</p>
                <p className="text-muted-foreground">довольных клиентов</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-primary mb-2">500+</p>
                <p className="text-muted-foreground">изделий в месяц</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-primary mb-2">80+</p>
                <p className="text-muted-foreground">мастеров в команде</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
