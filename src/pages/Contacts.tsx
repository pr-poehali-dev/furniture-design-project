import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

export default function Contacts() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold mb-12">Контакты</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center">
                    <Icon name="Phone" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Телефон</h3>
                    <p className="text-muted-foreground mb-2">+7 (495) 123-45-67</p>
                    <p className="text-sm text-muted-foreground">Ежедневно с 9:00 до 21:00</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center">
                    <Icon name="Mail" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Email</h3>
                    <p className="text-muted-foreground mb-2">info@komfortdoma.ru</p>
                    <p className="text-sm text-muted-foreground">Ответим в течение 24 часов</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center">
                    <Icon name="MapPin" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Шоу-рум и производство</h3>
                    <p className="text-muted-foreground mb-2">Москва, ул. Примерная, д. 123</p>
                    <p className="text-sm text-muted-foreground mb-4">
                      Пн-Пт: 9:00 - 20:00
                      <br />
                      Сб-Вс: 10:00 - 18:00
                    </p>
                    <Button variant="outline" size="sm">
                      Построить маршрут
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center">
                    <Icon name="MessageCircle" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Мессенджеры</h3>
                    <div className="flex gap-3">
                      <Button variant="outline" size="sm">
                        WhatsApp
                      </Button>
                      <Button variant="outline" size="sm">
                        Telegram
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6">Напишите нам</h2>
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Ваше имя</Label>
                  <Input id="name" placeholder="Иван Иванов" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-phone">Телефон</Label>
                  <Input id="contact-phone" type="tel" placeholder="+7 (999) 123-45-67" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="example@mail.com" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Сообщение</Label>
                  <Textarea id="message" placeholder="Напишите ваш вопрос или комментарий" rows={5} />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Отправить сообщение
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-muted">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-4">Реквизиты компании</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-muted-foreground mb-1">Название</p>
                <p className="font-medium">ООО "Комфорт Дома"</p>
              </div>
              <div>
                <p className="text-muted-foreground mb-1">ИНН</p>
                <p className="font-medium">7701234567</p>
              </div>
              <div>
                <p className="text-muted-foreground mb-1">КПП</p>
                <p className="font-medium">770101001</p>
              </div>
              <div>
                <p className="text-muted-foreground mb-1">ОГРН</p>
                <p className="font-medium">1234567890123</p>
              </div>
              <div className="md:col-span-2">
                <p className="text-muted-foreground mb-1">Юридический адрес</p>
                <p className="font-medium">123456, г. Москва, ул. Примерная, д. 123, офис 45</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
