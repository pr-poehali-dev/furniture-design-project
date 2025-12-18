import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Комфорт Дома</h3>
            <p className="text-sm opacity-90">
              Производство качественной мебели для дома, дачи и ваших любимых питомцев с 2010 года
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Каталог</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <Link to="/catalog?category=chairs" className="hover:opacity-100 transition-opacity">
                  Домашние стулья
                </Link>
              </li>
              <li>
                <Link to="/catalog?category=hanging" className="hover:opacity-100 transition-opacity">
                  Подвесные кресла
                </Link>
              </li>
              <li>
                <Link to="/catalog?category=garden" className="hover:opacity-100 transition-opacity">
                  Садовые комплекты
                </Link>
              </li>
              <li>
                <Link to="/catalog?category=pets" className="hover:opacity-100 transition-opacity">
                  Товары для животных
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Информация</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <Link to="/about" className="hover:opacity-100 transition-opacity">
                  О компании
                </Link>
              </li>
              <li>
                <Link to="/wholesale" className="hover:opacity-100 transition-opacity">
                  Оптовым клиентам
                </Link>
              </li>
              <li>
                <Link to="/delivery" className="hover:opacity-100 transition-opacity">
                  Доставка и оплата
                </Link>
              </li>
              <li>
                <Link to="/promo" className="hover:opacity-100 transition-opacity">
                  Акции
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li className="flex items-center space-x-2">
                <Icon name="Phone" size={16} />
                <span>+7 (495) 123-45-67</span>
              </li>
              <li className="flex items-center space-x-2">
                <Icon name="Mail" size={16} />
                <span>info@komfortdoma.ru</span>
              </li>
              <li className="flex items-center space-x-2">
                <Icon name="MapPin" size={16} />
                <span>Москва, ул. Примерная, 123</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-90">
          <p>&copy; 2024 Комфорт Дома. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
