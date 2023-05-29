import Image from "next/image";
import html_image from "./img/html.png";
import mySql from "./img/mysql.png";
import python_image from "./img/python.png";
import css_image from "./img/css.png";
import javaScript from "./img/javascript.png";
import typescript_image from "./img/typescript.png";
import selenium from "./img/selenium.png";
import beautiSoup from "./img/beautifulsoup.jpg";
import scrapy from "./img/scrapy.png";
import django from "./img/django.jpg";
import office from "./img/office.jpeg";
import adobe_illustrator from "./img/abobe_illustrator.png";
import canva from "./img/canva.png";
import premiere from "./img/premiere.png";
import photoshop from "./img/photoshop.png";
import next from "@/public/next.svg";

export default function About() {
  return (
    <div id="skills" className="w-full p-4">
      <div className="max-w-[1240px] mx-auto">
        <p className="text-xl tracking-widest uppercase text-[#2b34a8] pt-2 pl-3 pb-6">
          Skills
        </p>
        <h2 className="py-4 text-6xl font-bold">What Can I Do</h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 relative">
          <div className="flex items-center justify-center">
            <div className="absolute top-0 right-0 p-2 text-white text-xs bg-[#2b34a8] rounded-bl-md">
              98%
            </div>
            <div className="relative">
              <Image
                src={html_image}
                alt=""
                className="h-24 w-24 object-contain"
                decoding="async"
                loading="lazy"
              />
            </div>
            <h3 className="pl-8 text-3xl font-bold">HTML</h3>
          </div>
        </div>
        <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 relative">
          <div className="flex items-center justify-center">
            <div className="absolute top-0 right-0 p-2 text-white text-xs bg-[#2b34a8] rounded-bl-md">
              92%
            </div>
            <div className="relative">
              <Image
                src={css_image}
                alt=""
                className="h-24 w-24 object-contain"
                decoding="async"
                loading="lazy"
              />
            </div>
            <h3 className="pl-5 text-3xl font-bold">CSS</h3>
          </div>
        </div>
        <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 relative">
          <div className="flex items-center justify-center">
            <div className="absolute top-0 right-0 p-2 text-white text-xs bg-[#2b34a8] rounded-bl-md">
              72%
            </div>
            <div className="relative">
              <Image
                src={javaScript}
                alt=""
                className="h-24 w-24 object-contain"
                decoding="async"
                loading="lazy"
              />
            </div>
            <h3 className="pl-5 text-3xl font-bold">JavaScript</h3>
          </div>
        </div>
        <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 relative">
          <div className="flex items-center justify-center">
            <div className="absolute top-0 right-0 p-2 text-white text-xs bg-[#2b34a8] rounded-bl-md">
              83%
            </div>
            <div className="relative">
              <Image
                src={typescript_image}
                alt=""
                className="h-24 w-24 object-contain"
                decoding="async"
                loading="lazy"
              />
            </div>
            <h3 className="pl-5 text-3xl font-bold">TypeScript</h3>
          </div>
        </div>
        <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 relative">
          <div className="flex items-center justify-center">
            <div className="absolute top-0 right-0 p-2 text-white text-xs bg-[#2b34a8] rounded-bl-md">
              89%
            </div>
            <div className="relative">
              <Image
                src={mySql}
                alt=""
                className="h-24 w-24 object-contain"
                decoding="async"
                loading="lazy"
              />
            </div>
            <h3 className="pl-5 text-3xl font-bold">My SQL</h3>
          </div>
        </div>
        <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 relative">
          <div className="flex items-center justify-center">
            <div className="absolute top-0 right-0 p-2 text-white text-xs bg-[#2b34a8] rounded-bl-md">
              98%
            </div>
            <div className="relative">
              <Image
                src={beautiSoup}
                alt=""
                className="h-24 w-24 object-contain"
                decoding="async"
                loading="lazy"
              />
            </div>
            <h3 className="pl-5 text-3xl font-bold">BS</h3>
          </div>
        </div>
        <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 relative">
          <div className="flex items-center justify-center">
            <div className="absolute top-0 right-0 p-2 text-white text-xs bg-[#2b34a8] rounded-bl-md">
              98%
            </div>
            <div className="relative">
              <Image
                src={scrapy}
                alt=""
                className="h-24 w-24 object-contain"
                decoding="async"
                loading="lazy"
              />
            </div>
            <h3 className="pl-5 text-3xl font-bold">Scrapy</h3>
          </div>
        </div>
        <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 relative">
          <div className="flex items-center justify-center">
            <div className="absolute top-0 right-0 p-2 text-white text-xs bg-[#2b34a8] rounded-bl-md">
              85%
            </div>
            <div className="relative">
              <Image
                src={django}
                alt=""
                className="h-24 w-24 object-contain"
                decoding="async"
                loading="lazy"
              />
            </div>
            <h3 className="pl-5 text-3xl font-bold">Django</h3>
          </div>
        </div>
        <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 relative">
          <div className="flex items-center justify-center">
            <div className="absolute top-0 right-0 p-2 text-white text-xs bg-[#2b34a8] rounded-bl-md">
              97%
            </div>
            <div className="relative">
              <Image
                src={selenium}
                alt="Selenium"
                className="h-24 w-24 object-contain"
                decoding="async"
                loading="lazy"
              />
            </div>
            <h3 className="pl-5 text-3xl font-bold">Selenium</h3>
          </div>
        </div>
        <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 relative">
          <div className="flex items-center justify-center">
            <div className="absolute top-0 right-0 p-2 text-white text-xs bg-[#2b34a8] rounded-bl-md">
              99%
            </div>
            <div className="relative">
              <Image
                src={python_image}
                alt="Python"
                className="h-24 w-24 object-contain"
                decoding="async"
                loading="lazy"
              />
            </div>
            <h3 className="pl-5 text-3xl font-bold">Python</h3>
          </div>
        </div>
        <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 relative">
          <div className="flex items-center justify-center">
            <div className="absolute top-0 right-0 p-2 text-white text-xs bg-[#2b34a8] rounded-bl-md">
              99%
            </div>
            <div className="relative">
              <Image
                src={office}
                alt=""
                className="h-24 w-24 object-contain"
                decoding="async"
                loading="lazy"
              />
            </div>
            <h3 className="pl-5 text-3xl font-bold">Ms Office</h3>
          </div>
        </div>
        <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 relative">
          <div className="flex items-center justify-center">
            <div className="absolute top-0 right-0 p-2 text-white text-xs bg-[#2b34a8] rounded-bl-md">
              79%
            </div>
            <div className="relative">
              <Image
                src={adobe_illustrator}
                alt=""
                className="h-24 w-24 object-contain"
                decoding="async"
                loading="lazy"
              />
            </div>
            <h3 className="pl-5 text-3xl font-bold">Illustrator</h3>
          </div>
        </div>
        <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 relative">
          <div className="flex items-center justify-center">
            <div className="absolute top-0 right-0 p-2 text-white text-xs bg-[#2b34a8] rounded-bl-md">
              62%
            </div>
            <div className="relative">
              <Image
                src={next}
                alt=""
                className="h-24 w-24 object-contain"
                decoding="async"
                loading="lazy"
              />
            </div>
            <h3 className="pl-5 text-3xl font-bold">Nextjs</h3>
          </div>
        </div>
        <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 relative">
          <div className="flex items-center justify-center">
            <div className="absolute top-0 right-0 p-2 text-white text-xs bg-[#2b34a8] rounded-bl-md">
              79%
            </div>
            <div className="relative">
              <Image
                src={canva}
                alt=""
                className="h-24 w-24 object-contain"
                decoding="async"
                loading="lazy"
              />
            </div>
            <h3 className="pl-5 text-3xl font-bold">Canva</h3>
          </div>
        </div>
        <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 relative">
          <div className="flex items-center justify-center">
            <div className="absolute top-0 right-0 p-2 text-white text-xs bg-[#2b34a8] rounded-bl-md">
              68%
            </div>
            <div className="relative">
              <Image
                src={photoshop}
                alt=""
                className="h-24 w-24 object-contain"
                decoding="async"
                loading="lazy"
              />
            </div>
            <h3 className="pl-5 text-3xl font-bold">Photoshop</h3>
          </div>
        </div>
        <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 relative">
          <div className="flex items-center justify-center">
            <div className="absolute top-0 right-0 p-2 text-white text-xs bg-[#2b34a8] rounded-bl-md">
              48%
            </div>
            <div className="relative">
              <Image
                src={premiere}
                alt=""
                className="h-24 w-24 object-contain"
                decoding="async"
                loading="lazy"
              />
            </div>
            <h3 className="pl-5 text-3xl font-bold">Premiere Pro</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
