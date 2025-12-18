import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

export default function Account() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('login');

  if (!isLoggedIn) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Личный кабинет</h1>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">Вход</TabsTrigger>
              <TabsTrigger value="register">Регистрация</TabsTrigger>
            </TabsList>
            <TabsContent value="login">
              <Card>
                <CardHeader>
                  <CardTitle>Войти в аккаунт</CardTitle>
                  <CardDescription>Введите email и пароль для входа</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="example@mail.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Пароль</Label>
                    <Input id="password" type="password" />
                  </div>
                  <Button className="w-full" onClick={() => setIsLoggedIn(true)}>
                    Войти
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="register">
              <Card>
                <CardHeader>
                  <CardTitle>Создать аккаунт</CardTitle>
                  <CardDescription>Заполните форму для регистрации</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Имя</Label>
                    <Input id="name" placeholder="Иван Иванов" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="reg-email">Email</Label>
                    <Input id="reg-email" type="email" placeholder="example@mail.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон</Label>
                    <Input id="phone" type="tel" placeholder="+7 (999) 123-45-67" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="reg-password">Пароль</Label>
                    <Input id="reg-password" type="password" />
                  </div>
                  <Button className="w-full" onClick={() => setIsLoggedIn(true)}>
                    Зарегистрироваться
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-bold">Личный кабинет</h1>
        <Button variant="outline" onClick={() => setIsLoggedIn(false)}>
          Выйти
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Профиль</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center">
                <Icon name="User" size={40} />
              </div>
              <div>
                <p className="font-semibold">Иван Иванов</p>
                <p className="text-sm text-muted-foreground">example@mail.com</p>
              </div>
            </div>
            <Button variant="outline" className="w-full">
              Редактировать профиль
            </Button>
          </CardContent>
        </Card>

        <Card className="col-span-1 md:col-span-2">
          <CardHeader>
            <CardTitle>Мои заказы</CardTitle>
            <CardDescription>История ваших покупок</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3].map((order) => (
                <div key={order} className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-semibold">Заказ #{1000 + order}</p>
                    <span className="text-sm text-muted-foreground">15.12.2024</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    {order === 1 && 'Классический стул "Элегант" x2'}
                    {order === 2 && 'Садовый комплект "Уют"'}
                    {order === 3 && 'Подвесное кресло "Релакс"'}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-bold">
                      {order === 1 && '25 000 ₽'}
                      {order === 2 && '36 000 ₽'}
                      {order === 3 && '28 900 ₽'}
                    </span>
                    <span className="text-sm text-green-600 font-medium">Доставлено</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-1 md:col-span-3">
          <CardHeader>
            <CardTitle>Специальные предложения</CardTitle>
            <CardDescription>Акции и скидки для вас</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border rounded-lg p-4 bg-gradient-to-br from-accent/20 to-accent/5">
                <h3 className="font-semibold text-lg mb-2">Скидка 15% на первый заказ</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Используйте промокод FIRST15 при оформлении заказа
                </p>
                <Button size="sm">Использовать</Button>
              </div>
              <div className="border rounded-lg p-4 bg-gradient-to-br from-primary/10 to-primary/5">
                <h3 className="font-semibold text-lg mb-2">Бесплатная доставка</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  При заказе от 50 000 рублей доставка бесплатная
                </p>
                <Button size="sm" variant="outline">
                  Подробнее
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
