import linkedin_image from "@/public/linkedin.png";
import Image from "next/image";
import twitter_image from "@/public/twitter.png";
import Link from "next/link";
import github_image from "@/public/github.png";
import whatsapp_image from "@/public/whatsapp.png";
import profile_pic from "@/public/logo.png";

export default function About() {
  const linkedinUrl = "https://www.linkedin.com/in/creative-programmer";
  const githubUrl = "https://www.github.com/ahmedmujtaba1";
  const twitterUrl = "https://twitter.com/Ahmed_Mujtaba69";
  const whatsappUrl =
    "https://api.whatsapp.com/send/?phone=923312269636&text&type=phone_number&app_absent=0";

  return (
    <div id="about" className="w-fill md:h-screen p-2 items-center">
      <p className="text-xl tracking-widest uppercase text-[#2b34a8] pt-2 pl-3 pb-6">About</p>
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <h1 className="text-4xl font-bold mb-4 ">About Me</h1>
          <p>
            <span className="font-bold custom-class text-3xl">❝</span>
            My name is Ahmed Mujtaba Mohsin, and I m excited to share my success
            story with you. When I was just 12 years old, I enrolled in two
            courses - RPA and Hardware - at a local institute in my area that
            provides free courses exclusively for Dhoraji Memon students.
            Despite my young age, I was determined to make the most of my summer
            vacation and learn as much as I could about these topics. When I
            arrived for my first class, my teachers were surprised to see
            someone so young in their class. Although I only had a basic
            understanding of Python that I had learned in school, I was eager to
            learn more. My instructor, Sir Salman, was impressed by my
            enthusiasm and dedication to learning. Over the next four months, I
            worked hard to absorb as much information as possible and apply it
            to my coursework. My classmates, who were university and college
            students, also encouraged and motivated me throughout the program.
            When the course ended, I was thrilled to learn that Sir Salman was
            interested in having some of his students work under him. I was one
            of the few selected for this opportunity, and it was a tremendous
            honour to be recognized for my hard work and dedication. Today, I am
            proud to say that I have continued to learn and grow in my career. I
            am grateful for the opportunities that have come my way and for the
            support of my family, teachers, and classmates who have helped me
            along the way. I have become a Python Developer, Web Developer, and
            Backend Developer. I have also taken the initiative to learn more
            advanced technologies, such as Metaverse, AR, VR, and Blockchain,
            and I am currently working on improving my skills as a Frontend
            Developer. I have gained proficiency in various computer languages
            like Python, HTML, CSS, JavaScript, TypeScript, and Django. My
            portfolio can be found on{" "}
            <Link
              href={"https://www.gitub.com/ahmedmujtaba1"}
              target="_blank"
              className="underline text-cyan-500 hover:no-underline"
            >
              Github Profile
            </Link>
            , and I am currently freelancing, and collecting clients from
            platforms like Fiverr and Facebook. I have completed more than 55
            projects in Python and have also started teaching students who are
            older than me and belong to different countries such as England,
            Bangladesh, and the USA. I am grateful for the opportunities that
            have come my way, and I am determined to keep learning and growing
            in my career. I am now working with Sir Zia Khan. I believe that
            anyone, regardless of their age, can achieve success if they are
            willing to work hard and stay dedicated to their goals.
            <span className="font-bold custom-class text-3xl">❞</span>
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <Link href={linkedinUrl} target="_blank" rel="noopener noreferrer">
              <div className="w-14 h-14 mb-4 rounded-full shadow-lg shadow-gray-400 cursor-pointer hover:scale-110 ease-in duration-300 flex items-center justify-center">
                <div className="flex h-10 w-10 place-content-center">
                  <Image src={linkedin_image} alt="LinkedIn Logo" />
                </div>
              </div>
            </Link>
            <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
              <div className="w-14 h-14 mb-4 rounded-full shadow-lg shadow-gray-400 cursor-pointer hover:scale-110 ease-in duration-300 flex items-center justify-center">
                <div className="flex h-10 w-10 place-content-center">
                  <Image src={github_image} alt="Github Logo" />
                </div>
              </div>
            </Link>
            <Link href={twitterUrl} target="_blank" rel="noopener noreferrer">
              <div className="w-14 h-14 mb-4 rounded-full shadow-lg shadow-gray-400 cursor-pointer hover:scale-110 ease-in duration-300 flex items-center justify-center">
                <div className="flex h-10 w-10 place-content-center">
                  <Image src={twitter_image} alt="Twitter Logo" />
                </div>
              </div>
            </Link>
            <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <div className="w-14 h-14 mb-4 rounded-full shadow-lg shadow-gray-400 cursor-pointer hover:scale-110 ease-in duration-300 flex items-center justify-center">
                <div className="flex h-10 w-10 place-content-center">
                  <Image src={whatsapp_image} alt="Whatsapp Logo" />
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={profile_pic} alt={"Profile Picture"} width={1300} />
        </div>
      </div>
    </div>
  );
}
