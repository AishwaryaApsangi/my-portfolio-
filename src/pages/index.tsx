import Container from "@/components/Container";
import { useEffect, useRef, Suspense, useState } from "react";
import styles from "@/styles/Home.module.css";
import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  ChevronLeft,
  Code2,
  Frame,
  SearchCheck,
  Eye,
  MonitorSmartphone,
} from "lucide-react";
import { TriangleDownIcon } from "@radix-ui/react-icons";
import Spline from "@splinetool/react-spline";
import Link from "next/link";
import { cn, scrollTo } from "@/lib/utils";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import VanillaTilt from "vanilla-tilt";
import { motion } from "framer-motion";

const aboutStats = [
  { label: "Years of experience", value: "3+" },
  { label: "Technologies mastered", value: "10+" },
  { label: "Companies worked with", value: "6+" },
];

const projects = [
  {
    title: "GraphQL API Development and Testing",
    description: "GraphQL API Development and Testing",
    image: "/assets/ae3aef_745d066a7ba34d70b4e4a042e0e07922~mv2.webp",
    href: "https://aishwaryaapsangi25.wixsite.com/aishwaryaapsangipo-1/true-romance",
  },
  {
    title: "AI/ML-Based Google Vision API Image Analyzer",
    description: "AI/ML-Based Google Vision API Image Analyzer",
    image: "/assets/proj2.png",
    href: "https://aishwaryaapsangi25.wixsite.com/aishwaryaapsangipo-1/room-with-a-view",
  },
  {
    title: "Data Visualization and Statistical Analysis of Gender Diversity in Tech",
    description: "Data Visualization and Statistical Analysis of Gender Diversity in Tech",
    image: "/assets/Screenshot 2024-09-05 121612.png",
    href: "https://aishwaryaapsangi25.wixsite.com/aishwaryaapsangipo-1/power-suit",
  },
  {
    title: "Data filtering VBA-Based GUI Integration Tool",
    description: "Data filtering VBA-Based GUI Integration Tool",
    image: "/assets/ae3aef_04c3c8bae0474b338543428d63b00be0~mv2.webp",
    href: "https://aishwaryaapsangi25.wixsite.com/aishwaryaapsangipo-1/citrus-season",
  },
  {
    title: "GPS Tracker",
    description: "GPS Tracker",
    image: "/assets/proj3.png",
    href: "https://github.com/AishwaryaApsangi/gps-tracker",
  },
];

const services = [
  {
    service: "Computer Programming Tutor at CIS Sandbox Bentley University",
    description:
      "Provide in-depth explanations of programming principles, debug students&apos; code, and offer practical examples to enhance their problem-solving skills.",
    icon: Code2,
  },
  {
    service: "BentleyxDeloitte Technology Consulting Externship Program",
    description:
      "Collaborated with Deloitte professionals to co-author a white paper with a team of 6 students selected on Generative AI in the entertainment industry",
    icon: Frame,
  },
  {
    service: "Indie music and coffee lover",
    description:
      "I love spending my free time listening to indie music from artists like Beabadoobee, Steve Lacy, and The Smiths, and enjoying a good book, and exploring new cafes!",
    icon: SearchCheck,
  },
  {
    service: "Technology Chair, NSLS - National Society of Leadership and Success",
    description:
      "Led technology initiatives and digital strategies to support the organization&apos;s member engagement",
    icon: MonitorSmartphone,
  },
  {
    service: "Bentley Women&apos;s Leadership Program",
    description:
      "Leadership development workshops/mentoring sessions focused on empowering women on-campus.",
    icon: Eye,
  },
  {
    service: "Fall &apos;23 Apparel Chair for Alpha Psi Omega",
    description:
      "Managed apparel design, including budgeting and coordinating orders for the International Theatre Fraternity.",
    icon: Eye,
  },
];

export default function Home() {
  const refScrollContainer = useRef(null);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState<number>(0);
  const [count, setCount] = useState<number>(0);

  // handle scroll
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    async function getLocomotive() {
      const Locomotive = (await import("locomotive-scroll")).default;
      new Locomotive({
        el: refScrollContainer.current ?? new HTMLElement(),
        smooth: true,
      });
    }

    function handleScroll() {
      let current = "";
      setIsScrolled(window.scrollY > 0);

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 250) {
          current = section.getAttribute("id") ?? "";
        }
      });

      navLinks.forEach((li) => {
        li.classList.remove("nav-active");

        if (li.getAttribute("href") === `#${current}`) {
          li.classList.add("nav-active");
          console.log(li.getAttribute("href"));
        }
      });
    }

    void getLocomotive();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!carouselApi) return;

    setCount(carouselApi.scrollSnapList().length);
    setCurrent(carouselApi.selectedScrollSnap() + 1);

    carouselApi.on("select", () => {
      setCurrent(carouselApi.selectedScrollSnap() + 1);
    });
  }, [carouselApi]);

  // card hover effect
  useEffect(() => {
    const tilt: HTMLElement[] = Array.from(document.querySelectorAll("#tilt"));
    VanillaTilt.init(tilt, {
      speed: 300,
      glare: true,
      "max-glare": 0.1,
      gyroscope: true,
      perspective: 900,
      scale: 0.9,
    });
  }, []);

  return (
    <Container>
      <div ref={refScrollContainer}>
        <Gradient />

        {/* Intro */}
        <section
          id="home"
          data-scroll-section
          className="mt-40 flex w-full flex-col items-center xl:mt-0 xl:min-h-screen xl:flex-row xl:justify-between"
        >
          <div className={styles.intro}>
            <div
              data-scroll
              data-scroll-direction="horizontal"
              data-scroll-speed=".09"
              className="flex flex-row items-center space-x-1.5"
            >
              <span className={styles.pill}>next.js</span>
              <span className={styles.pill}>tailwindcss</span>
              <span className={styles.pill}>typescript</span>
            </div>
            <div>
              <h1
                data-scroll
                data-scroll-enable-touch-speed
                data-scroll-speed=".06"
                data-scroll-direction="horizontal"
              >
                <span className="text-6xl tracking-tighter text-foreground 2xl:text-8xl">
                  Hello, I&apos;m
                  <br />
                </span>
                <span className="clash-grotesk text-gradient text-6xl 2xl:text-8xl">
                  Aishwarya Apsangi.
                </span>
              </h1>
              <p
                data-scroll
                data-scroll-enable-touch-speed
                data-scroll-speed=".06"
                className="mt-1 max-w-lg tracking-tight text-muted-foreground 2xl:text-xl"
              >
                A Software Developer, Leadership Enthusiast, Diversity Advocate, and Data Analyst.
              </p>
            </div>
            <span
              data-scroll
              data-scroll-enable-touch-speed
              data-scroll-speed=".06"
              className="flex flex-row items-center space-x-1.5 pt-6"
            >
              <Link href="mailto:aapsangi@falcon.bentley.edu" passHref>
                <Button>
                  Get in touch <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
              <Button
                variant="outline"
                onClick={() => scrollTo(document.querySelector("#about"))}
              >
                Learn more
              </Button>
            </span>

            <div
              className={cn(
                styles.scroll,
                isScrolled && styles["scroll--hidden"],
              )}
            >
              Scroll to discover{" "}
              <TriangleDownIcon className="mt-1 animate-bounce" />
            </div>
          </div>
          <div
            data-scroll
            data-scroll-speed="-.01"
            id={styles["canvas-container"]}
            className="mt-14 h-full w-full xl:mt-0"
          >
            <Suspense fallback={<span>Loading...</span>}>
              <Spline scene="/assets/scene.splinecode" />
            </Suspense>
          </div>
        </section>

        {/* About */}
        <section id="about" data-scroll-section>
          <div
            data-scroll
            data-scroll-speed=".4"
            data-scroll-position="top"
            className="my-14 flex max-w-6xl flex-col justify-start space-y-10"
          >
            <h2 className="py-16  pb-2 text-3xl font-light leading-normal tracking-tighter text-foreground xl:text-[40px]">
              I&apos;m a versatile developer with expertise in{" "}
              <Link
                href="https://create.t3.gg/"
                target="_blank"
                className="underline"
              >
                Python, Java, and JavaScript
              </Link>{" "}
              leveraging frameworks such as Flask, GraphQL, and Next.js. Since 2021, 
              I&apos;ve contributed to various projects ranging from AI/ML model development 
              to interactive dashboards for data visualization. My experience includes working with organizations 
              like Deloitte, MITRE, and NetAtlantic, where I&apos;ve played a key role in 
              developing robust web applications, optimizing data communication, and driving technology adoption, all while
              efficiently collaborating with cross-functional teams.
            </h2>
            <div className="grid grid-cols-2 gap-8 xl:grid-cols-3">
              {aboutStats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center text-center xl:items-start xl:text-start"
                >
                  <span className="clash-grotesk text-gradient text-4xl font-semibold tracking-tight xl:text-6xl">
                    {stat.value}
                  </span>
                  <span className="tracking-tight text-muted-foreground xl:text-lg">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" data-scroll-section>
          {/* Gradient */}
          <div className="relative isolate -z-10">
            <div
              className="absolute inset-x-0 -top-40 transform-gpu overflow-hidden blur-[100px] sm:-top-80 lg:-top-60"
              aria-hidden="true"
            >
              <div
                className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary via-primary to-secondary opacity-10 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              />
            </div>
          </div>
          <div data-scroll data-scroll-speed=".4" className="my-64">
            <span className="text-gradient clash-grotesk text-sm font-semibold tracking-tighter">
              ✨ Projects
            </span>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight xl:text-6xl">
              Streamlined digital experiences.
            </h2>
            <p className="mt-1.5 text-base tracking-tight text-muted-foreground xl:text-lg">
              I&apos;ve worked on a variety of projects, from small websites to
              large-scale web applications. Here are some of my favorites:
            </p>

            {/* Carousel */}
            <div className="mt-14 relative">
              <Carousel setApi={setCarouselApi} className="w-full">
                <CarouselContent>
                  {projects.map((project) => (
                    <CarouselItem key={project.title} className="md:basis-1/2">
                      <Card id="tilt">
                        <CardHeader className="p-0">
                          <Link href={project.href} target="_blank" passHref>
                            {project.image.endsWith(".webm") ? (
                              <video
                                src={project.image}
                                autoPlay
                                loop
                                muted
                                className="aspect-video h-full w-full rounded-t-md bg-primary object-cover"
                              />
                            ) : (
                              <Image
                                src={project.image}
                                alt={project.title}
                                width={600}
                                height={300}
                                quality={100}
                                className="aspect-video h-full w-full rounded-t-md bg-primary object-cover"
                              />
                            )}
                          </Link>
                        </CardHeader>
                        <CardContent className="absolute bottom-0 w-full bg-background/50 backdrop-blur">
                          <CardTitle className="border-t border-white/5 p-4 text-base font-normal tracking-tighter">
                            {project.description}
                          </CardTitle>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>

                {/* Left Navigation Button */}
                <button
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/30 p-2 rounded-full hover:bg-white/50"
                  onClick={() => carouselApi?.scrollPrev()} 
                >
                  <ChevronLeft className="h-5 w-5 text-primary" />
                </button>

                {/* Right Navigation Button */}
                <button
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/30 p-2 rounded-full hover:bg-white/50"
                  onClick={() => carouselApi?.scrollNext()}
                >
                  <ChevronRight className="h-5 w-5 text-primary" />
                </button>
              </Carousel>
              <div className="py-2 text-center text-sm text-muted-foreground">
                <span className="font-semibold">
                  {current} / {count}
                </span>{" "}
                projects
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" data-scroll-section>
          <div
            data-scroll
            data-scroll-speed=".4"
            data-scroll-position="top"
            className="my-24 flex flex-col justify-start space-y-10"
          >
            <div className="w-full my-6">
              {/* Start Services Section */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 1,
                  staggerChildren: 0.5,
                }}
                viewport={{ once: true }}
                className="grid w-full items-start gap-4 md:grid-cols-2 xl:grid-cols-3"
              >
                {/* Image Section */}
                <div className="flex flex-col py-6 xl:p-6">
                  <h2 className="text-4xl font-medium tracking-tight">
                    Get to Know Me Better
                    <br />
                    <span className="text-gradient clash-grotesk tracking-normal">
                      Campus Involvements & Interests
                    </span>
                  </h2>
                  <p className="mt-2 tracking-tighter text-secondary-foreground">
                    From supporting my peers in tech to exploring my love for indie music, reading, and coffee, 
                    here&apos;s what I&apos;m all about.
                  </p>
                  {/* Image Here */}
                  <div className="my-6">
                    <Image
                      src="/assets/image.png"
                      alt="Description of the image"
                      width={500}
                      height={400}
                      className="rounded-md shadow-md"
                    />
                  </div>
                </div>

                {/* Services Items */}
                {services.map((service) => (
                  <div
                    key={service.service}
                    className="flex flex-col h-full items-start rounded-md bg-white/5 p-14 shadow-md backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:bg-white/10 hover:shadow-md"
                  >
                    <service.icon className="my-6 text-primary" size={20} />
                    <span className="text-lg tracking-tight text-foreground">
                      {service.service}
                    </span>
                    <span className="mt-2 tracking-tighter text-muted-foreground">
                      {service.description}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" data-scroll-section className="my-64">
          <div
            data-scroll
            data-scroll-speed=".4"
            data-scroll-position="top"
            className="flex flex-col items-center justify-center rounded-lg bg-gradient-to-br from-primary/[6.5%] to-white/5 px-8 py-16 text-center xl:py-24"
          >
            {/* Social Media Links */}
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
              {/* GitHub Link */}
              <a href="https://github.com/AishwaryaApsangi" target="_blank" title="Link to Github Profile" style={{ margin: '0 10px' }}>
                <Image src="/assets/github.svg" alt="Github" width={32} height={32} />
              </a>
              {/* LinkedIn Link */}
              <a href="https://www.linkedin.com/in/aishwaryaapsangi/" target="_blank" title="Link to Linkedin Profile" style={{ margin: '0 10px' }}>
                <Image src="/assets/linkedin.svg" alt="Linkedin" width={32} height={32} />
              </a>
            </div>

            <h2 className="text-4xl font-medium tracking-tighter xl:text-6xl">
              Get&apos; in{" "}
              <span className="text-gradient clash-grotesk">Touch.</span>
            </h2>
            <p className="mt-1.5 text-base tracking-tight text-muted-foreground xl:text-lg">
              I&apos;m currently available for full-time roles, as a senior at Bentley University, open to
              discussing new projects.
            </p>
            <Link href="mailto:aapsangi@falcon.bentley.edu" passHref>
              <Button className="mt-6">My email</Button>
            </Link>
          </div>
        </section>
      </div>
    </Container>
  );
}

function Gradient() {
  return (
    <>
      {/* Upper gradient */}
      <div className="absolute -top-40 right-0 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <svg
          className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".1"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7980fe" />
              <stop offset={1} stopColor="#f0fff7" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Lower gradient */}
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <svg
          className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
        >
          <path
            fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
            fillOpacity=".1"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9A70FF" />
              <stop offset={1} stopColor="#838aff" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </>
  );
}


