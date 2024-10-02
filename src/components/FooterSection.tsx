import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import { FaInstagram } from "react-icons/fa6";
import { FaVk } from "react-icons/fa";
import Link from "next/link";

const FooterSection = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="min-h-56 bg-button py-6  lg:-mx-0 flex flex-col text-center justify-center items-center gap-4">
      <nav className="flex flex-col sm:flex-row gap-3 items-center justify-center tracking-widest">
        <a
          href="#services"
          className="text-accent hover:underline underline-offset-2"
        >
          Услуги
        </a>
        <a
          href="#workshop"
          className="text-accent hover:underline underline-offset-2"
        >
          Наши работы
        </a>
        <a
          href="#contact"
          className="text-accent hover:underline underline-offset-2"
        >
          Контакты
        </a>
        <a
          href="/login"
          className="sm:text-accent hover:underline underline-offset-2"
        >
          Вход для админов
        </a>
      </nav>
      <a
        href="#form"
        className={cn(
          buttonVariants(),
          "text-base tracking-wider rounded-none hover:bg-pink-700"
        )}
      >
        Записаться онлайн
      </a>

      <div className="text-accent tracking-widest flex flex-col sm:flex-row gap-1 sm:gap-2 items-center mb-4">
        <p>
          9:00-20:00 <span className="hidden sm:inline"> |</span>
        </p>
        <p>
          gombreichsalon@yandex.ru <span className="hidden sm:inline"> |</span>
        </p>
        <p>+7 (939) 796-48-99</p>
      </div>
      <p className="text-accent -mt-2">ул. Красных Мадьяр, 29, Иркутск</p>
      <div className="flex gap-2">
        <Link href={"https://www.instagram.com/gombraih"} target="_blank">
          <FaInstagram
            size={24}
            className="text-black hover:text-white transition-colors"
          />
        </Link>
        <Link href={"https://vk.com/gombraih_studia"} target="_blank">
          <FaVk
            size={24}
            className="text-black hover:text-white transition-colors"
          />
        </Link>
      </div>
      <hr className="h-px w-3/5 border-t-0 bg-transparent bg-gradient-to-r from-transparent via-black to-transparent opacity-25 dark:via-neutral-400" />

      <p className="max-w-96 text-sm">
        Не является публичной офертой. Окончательная стоимость услуг
        определяется после консультации со специалистом.
      </p>
      <p className="text-center tracking-tighter">
        &copy; {currentYear} Гомбрайх. Все права защищены.
      </p>
    </footer>
  );
};

export default FooterSection;
