import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const navigation = [
    { id: 'home', label: 'Главная' },
    { id: 'portfolio', label: 'Портфолио' },
    { id: 'services', label: 'Услуги' },
    { id: 'process', label: 'Процесс работы' },
    { id: 'about', label: 'Обо мне' },
    { id: 'reviews', label: 'Отзывы' },
    { id: 'contacts', label: 'Контакты' },
  ];

  const portfolioProjects = [
    {
      id: 1,
      title: 'Современная кухня в стиле минимализм',
      description: 'Черные глянцевые фасады, встроенная техника',
      image: 'https://cdn.poehali.dev/projects/227bcc1e-bd57-4fb3-9580-249e3461826e/files/54f2421a-7d06-434b-b1db-bd044e56aba9.jpg',
      area: '15 м²',
      year: '2024',
    },
    {
      id: 2,
      title: 'Скандинавская кухня',
      description: 'Белые матовые фасады с черными акцентами',
      image: 'https://cdn.poehali.dev/projects/227bcc1e-bd57-4fb3-9580-249e3461826e/files/6825b429-6564-485f-8c47-6eb4b9e54f0d.jpg',
      area: '18 м²',
      year: '2024',
    },
    {
      id: 3,
      title: 'Кухня с островом',
      description: 'Лаконичный дизайн с открытыми полками',
      image: 'https://cdn.poehali.dev/projects/227bcc1e-bd57-4fb3-9580-249e3461826e/files/820b73ed-a975-429f-8a35-461ca5716780.jpg',
      area: '22 м²',
      year: '2023',
    },
  ];

  const services = [
    {
      icon: 'Ruler',
      title: 'Замеры помещения',
      description: 'Точные замеры с учетом всех коммуникаций',
    },
    {
      icon: 'Pencil',
      title: '3D-визуализация',
      description: 'Реалистичная визуализация будущей кухни',
    },
    {
      icon: 'Package',
      title: 'Производство мебели',
      description: 'Изготовление на современном оборудовании',
    },
    {
      icon: 'Truck',
      title: 'Доставка и монтаж',
      description: 'Профессиональная установка под ключ',
    },
  ];

  const processSteps = [
    { number: '01', title: 'Консультация', text: 'Обсуждаем ваши пожелания и бюджет' },
    { number: '02', title: 'Замер', text: 'Выезд на объект для точных измерений' },
    { number: '03', title: 'Проект', text: 'Создание дизайн-проекта и 3D-визуализации' },
    { number: '04', title: 'Производство', text: 'Изготовление мебели по вашему проекту' },
    { number: '05', title: 'Установка', text: 'Монтаж и финальная настройка' },
  ];

  const reviews = [
    {
      name: 'Анна Петрова',
      text: 'Восхитительный результат! Кухня получилась именно такой, какую я представляла. Спасибо за внимание к деталям!',
      rating: 5,
    },
    {
      name: 'Михаил Сидоров',
      text: 'Профессиональный подход на всех этапах. Особенно впечатлила точность замеров и качество сборки.',
      rating: 5,
    },
    {
      name: 'Елена Волкова',
      text: 'Современная кухня моей мечты! Минимализм, качество и функциональность - все на высшем уровне.',
      rating: 5,
    },
  ];

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-semibold tracking-tight">KITCHEN DESIGN</div>
            <div className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-black ${
                    activeSection === item.id ? 'text-black' : 'text-gray-500'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <Button
              variant="outline"
              size="sm"
              className="md:hidden"
              onClick={() => scrollToSection('contacts')}
            >
              Контакты
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight">
                Дизайн кухонь
                <br />
                <span className="font-semibold">под ключ</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-lg">
                Создаю функциональные и элегантные пространства в стиле минимализм. 
                От проекта до установки.
              </p>
              <div className="flex gap-4">
                <Button size="lg" onClick={() => scrollToSection('contacts')} className="bg-black text-white hover:bg-gray-800">
                  Заказать проект
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('portfolio')}>
                  Портфолио
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[600px]">
              <img
                src="https://cdn.poehali.dev/projects/227bcc1e-bd57-4fb3-9580-249e3461826e/files/54f2421a-7d06-434b-b1db-bd044e56aba9.jpg"
                alt="Современная кухня"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-4">Портфолио</h2>
            <p className="text-gray-600">Реализованные проекты кухонь</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden border-0 shadow-sm hover:shadow-lg transition-shadow">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-medium">{project.title}</h3>
                  <p className="text-gray-600 text-sm">{project.description}</p>
                  <div className="flex gap-4 text-sm text-gray-500">
                    <span>{project.area}</span>
                    <span>•</span>
                    <span>{project.year}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-4">Услуги</h2>
            <p className="text-gray-600">Полный цикл работ от замера до установки</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-black text-white">
                  <Icon name={service.icon} size={28} />
                </div>
                <h3 className="text-xl font-medium">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-4">Процесс работы</h2>
            <p className="text-gray-600">Как мы создаем вашу кухню</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="space-y-4">
                <div className="text-6xl font-light text-gray-200">{step.number}</div>
                <h3 className="text-xl font-medium">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-light mb-6">Обо мне</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Привет! Я дизайнер-конструктор кухонной мебели с опытом работы более 10 лет.
                </p>
                <p>
                  Специализируюсь на минималистичных интерьерах, где каждая деталь продумана до мелочей. 
                  Верю, что кухня должна быть не только красивой, но и максимально функциональной.
                </p>
                <p>
                  Работаю с качественными материалами и современными технологиями производства. 
                  Каждый проект - это индивидуальное решение под ваш образ жизни и потребности.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-8">
                <div>
                  <div className="text-3xl font-light mb-2">150+</div>
                  <div className="text-sm text-gray-600">Проектов</div>
                </div>
                <div>
                  <div className="text-3xl font-light mb-2">10+</div>
                  <div className="text-sm text-gray-600">Лет опыта</div>
                </div>
                <div>
                  <div className="text-3xl font-light mb-2">100%</div>
                  <div className="text-sm text-gray-600">Довольных клиентов</div>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] bg-gray-100"></div>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-4">Отзывы клиентов</h2>
            <p className="text-gray-600">Что говорят о моей работе</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="p-8 border-0 shadow-sm">
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={18} className="fill-black" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{review.text}"</p>
                <div className="font-medium">{review.name}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-4">Контакты</h2>
            <p className="text-gray-600">Свяжитесь со мной для обсуждения проекта</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Icon name="Phone" size={24} className="mt-1" />
                <div>
                  <div className="font-medium mb-1">Телефон</div>
                  <a href="tel:+79001234567" className="text-gray-600 hover:text-black transition-colors">
                    +7 (900) 123-45-67
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Icon name="Mail" size={24} className="mt-1" />
                <div>
                  <div className="font-medium mb-1">Email</div>
                  <a href="mailto:info@kitchen-design.ru" className="text-gray-600 hover:text-black transition-colors">
                    info@kitchen-design.ru
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Icon name="MapPin" size={24} className="mt-1" />
                <div>
                  <div className="font-medium mb-1">Адрес</div>
                  <div className="text-gray-600">Москва, ул. Примерная, д. 1</div>
                </div>
              </div>
            </div>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Ваше имя"
                className="w-full px-4 py-3 border border-gray-200 focus:outline-none focus:border-black transition-colors"
              />
              <input
                type="tel"
                placeholder="Телефон"
                className="w-full px-4 py-3 border border-gray-200 focus:outline-none focus:border-black transition-colors"
              />
              <textarea
                placeholder="Сообщение"
                rows={4}
                className="w-full px-4 py-3 border border-gray-200 focus:outline-none focus:border-black transition-colors resize-none"
              ></textarea>
              <Button className="w-full bg-black text-white hover:bg-gray-800" size="lg">
                Отправить заявку
              </Button>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-xl font-semibold tracking-tight mb-4">KITCHEN DESIGN</div>
          <p className="text-gray-400 text-sm">
            © 2024 Все права защищены. Дизайн и конструирование кухонной мебели.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
