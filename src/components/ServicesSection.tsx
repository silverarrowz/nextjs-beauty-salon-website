import { LuFlower } from "react-icons/lu";

const ServicesSection = () => {
  const services = [
    {
      title: "Маникюр",
      description:
        "Классический френч, оздоровительный японский, гель-лак или наращивание — широкий выбор цветов и материалов",
      image: "/images/works/nails2.jpg",
    },
    {
      title: "Педикюр",
      description:
        "Уход за кожей стоп, очистка ногтевой пластины с удалением кутикулы, обработкой питательными маслами, покрытием лечебным или декоративным лаком",
      image: "images/works/pedicure1.jpeg",
    },
    {
      title: "Стрижка и окрашивание",
      description:
        "Подчеркнуть индивидуальность, избавиться от седины, выделить достоинства внешности можно благодаря грамотному окрашиванию и стрижке волос",
      image: "/images/works/hair5.jpg",
    },
    {
      title: "Укладка волос",
      description:
        "Укладки на волосы любой длины, плетение кос, формирование локонов, укладки с декором и аксессуарами на любой случай",
      image: "/images/works/hair4.jpg",
    },
    {
      title: "Макияж",
      description:
        "Макияж на любой случай — легкий дневной или вечерний, для свадьбы или тематической вечеринки. Включает в себя увлажнение кожи, выполняется качественными, профессиональными средствами",
      image: "/images/works/makeup6.jpg",
    },
    {
      title: "Образ: макияж + прическа",
      description:
        "Законченный, индивидуально подобранный образ, подчеркивающий Ваши достоинства и индивидуальность, на любой случай - свадьба, вечеринка или деловая встреча",
      image: "/images/works/makeup8.jpg",
    },
    {
      title: "Ресницы",
      description:
        "Наращивание, окрашивание или ламинирование, выполняется в различных техниках, подчеркнет красоту Ваших глаз и позволит забыть о туши",
      image: "/images/works/lashes2.jpg",
    },
    {
      title: "Брови",
      description:
        "Ламинирование, окрашивание, долгосрочная укладка и уход подчеркнут естественную красоту Ваших бровей. Подберем цвет и форму, подходящие именно к Вашим чертам лица",
      image: "/images/works/brows1.jpg",
    },
  ];

  return (
    <div className="py-4 px-8 bg-background">
      <LuFlower className="text-center mx-auto mb-8" size={36} />
      <p className="italic text-xl leading-tight max-w-[60%] text-center mx-auto mb-10">
        «В девушке должны быть красивы две вещи —{" "}
        <span className="bg-button/30">взгляд</span> и{" "}
        <span className="bg-pink-700/30">губы</span>, потому что взглядом она
        может влюбить, а губами доказать, что любит» — Мэрилин Монро
      </p>
      <p className="mb-10">
        Но мы в салоне Гомбрайх дарим Вам красоту от кончиков волос до кончиков
        пальцев — каждая деталь станет красивой и изящной в руках наших
        мастеров. Наша beauty-команда —{" "}
        <span className="bg-card">самая большая в городе</span> и оказывает
        широкий спектр услуг:
      </p>
      <div>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
          {services.map((service) => (
            <li
              key={service.title}
              className="max-w-96 sm:max-w-72 p-6 shadow-sm rounded-lg bg-card justify-self-center"
            >
              <img
                className="object-cover aspect-[4/3] sm:aspect-square mb-5"
                src={service.image}
                alt={service.title}
              />
              <h3 className="mb-4 uppercase tracking-widest text-muted-foreground">
                {service.title}
              </h3>
              <p className="leading-tight text-sm">{service.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServicesSection;