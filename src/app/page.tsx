import Button from "@/components/Button";
import Dashboard from "@/components/Dashboard";
import Hexagon from "@/components/Hexagon";
import { TriangleDownIcon } from "@radix-ui/react-icons";
import { url } from "inspector";
import {
  ChevronRight,
  HexagonIcon,
  PentagonIcon,
  PlayIcon,
  TriangleIcon,
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen text-white mb-40 w-screen overflow-hidden">
      <div className="">
        <div className="mx-4 2xl:mx-40 relative">
          <div className="absolute -z-10 inset-0 bg-[radial-gradient(circle_farthest-corner,#3388ff30,#3388ff)] [mask-image:radial-gradient(circle_farthest-side,black,transparent)]"></div>
          <div className="absolute -z-40 h-2/3 w-0.5 bg-white/10 rotate-[45deg] right-[278px] -top-96"></div>
          <div className="absolute -z-40 h-2/3 w-0.5 bg-white/10 -rotate-[45deg] left-[278px] -top-96"></div>
          <div className="bg-red-4000 md:mx-10 lg:mx-20 pt-32 border border-white/10 -mb-[34px]">
            <div className="flex flex-col justify-start items-center max-w-lg mx-auto w-full px-4 md:px-0">
              <div className="">
                {" "}
                <Button>
                  <span>
                    New Components <ChevronRight className="inline" />
                  </span>
                </Button>
              </div>
              <h1 className="my-8 text-4xl md:text-6xl text-center font-semibold -z-20">
                Crafting Stunning User Interfaces
              </h1>
              <p className="text-center tracking-wide text-base md:text-lg mb-8 -z-20">
                This UI kit is a perfect blend of modern design and practical
                usability, making it and ideal choice for a wide range of
                projects including web applications, mobile apps, and dashboard
                interfaces
              </p>
              <div className="mb-12">
                {" "}
                <Button>
                  <span>
                    START FREE TRIAL <ChevronRight className="inline" />
                  </span>
                </Button>
              </div>
            </div>
          </div>

          <div className="md:px-10 lg:px-20">
            <Dashboard />
          </div>
        </div>
      </div>
      <div className="min-h-96 mt-20 pt-[80px] pb-20 relative">
        <h1 className="text-center text-4xl lg:text-6xl px-12 lg:px-0 max-w-lg lg:max-w-2xl  mx-auto font-semibold z-50  text-white [mask-image:linear-gradient(to_bottom,transparent,black,white_80%,transparent)] py-2">
          Used by top companies across the globe
        </h1>
        <div className="w-fit mx-auto rounded-full px-12 flex justify-center relative [mask-image:linear-gradient(to_bottom,transparent,red_50%,black_10%,transparent)]">
          <div
            className="absolute size-full animate-spin-slow -z-10"
            style={{
              backgroundImage: `url("/earth.svg")`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_farthest-side,#3388ff30,#3388ff_20%)] -z-50 [mask-image:radial-gradient(circle_farthest-side,black,transparent)]"></div>
          <div className="flex flex-col justify-center gap-21">
            <Hexagon className="">
              <Image
                src={"/visa.png"}
                height={150}
                width={150}
                alt="visa"
                className="size-3/4 object-contain"
              />
            </Hexagon>
            <Hexagon className="">
              <Image
                src={"/x.png"}
                height={100}
                width={100}
                alt="x"
                className="size-1/4 object-contain"
              />
            </Hexagon>
          </div>
          <div className="flex flex-col justify-center gap-21 z-50">
            <Hexagon className="">
              <Image
                src={"/uber.png"}
                height={120}
                width={120}
                alt="uber"
                className="size-2/4 object-contain"
              />
            </Hexagon>
            <Hexagon className="">
              <Image
                src={"/apple.png"}
                height={100}
                width={100}
                alt="apple"
                className="size-2/4 object-contain"
              />
            </Hexagon>
            <Hexagon>
              <Image
                src={"/square.png"}
                height={150}
                width={150}
                alt="square"
                className="size-3/4 object-contain"
              />
            </Hexagon>
          </div>
          <div className="flex flex-col justify-center gap-21">
            <Hexagon className="">
              <Image
                src={"/google.png"}
                height={150}
                width={150}
                alt="google"
                className="size-3/4 object-contain"
              />
            </Hexagon>
            <Hexagon className="">
              <Image
                src={"/vercel.png"}
                height={150}
                width={150}
                alt="vercel"
                className="size-3/4 object-contain"
              />
            </Hexagon>
          </div>
        </div>

        {/* <div className="star-clip mx-auto my-4 flex items-center justify-center">
          star
        </div> */}
      </div>
      <div className="grid lg:grid-cols-2 bg-[radial-gradient(circle_farthest-corner,#3388ff30,#3388ff)] px-0 lg:pl-12 pt-20 [mask-image:radial-gradient(circle_farthest-side,black_70%,transparent)] md:[mask-image:linear-gradient(to_top,transparent_5%,white_10%,white_50%,white_98%,transparent)]">
        <div className="space-y-8 2xl:pl-20 mb-12 px-4">
          <h1 className="text-3xl md:text-5xl lg:text6xl font-semibold text-white/70 max-w-sm md:max-w-none mx-auto text-center md:text-left md:mx-0">
            Craft captivating websites with a canvas you already know
          </h1>
          <div className="">
            <h3 className="text-xl text-white/90 mb-2 font-semibold">
              Components
            </h3>
            <p className="text-white/75 text-lg">
              A collection of versatile components that can be tailored to fit
              the specific needs of your project, ensuring both aesthetic appeal
              and functionality.
            </p>
          </div>
          <div className="">
            <h3 className="text-xl text-white/90 mb-2 font-semibold">
              Glass, Flats, Outline
            </h3>
            <p className="text-white/75 text-lg">
              Choose from these diverse design styles to cater to different
              aesthetic preferences and project requirements.
            </p>
          </div>
          <div className="">
            <h3 className="text-xl text-white/90 mb-2 font-semibold">
              Template & Sections
            </h3>
            <p className="text-white/75 text-lg">
              Streamline your design process with ready-to-use templates and
              sections, adaptable to various web projects.
            </p>
          </div>
          <div className="">
            {" "}
            <Button>
              <span className="">
                START FREE TRIAL <ChevronRight className="inline" />
              </span>
            </Button>
          </div>
        </div>
        <div className="size-full">
          <Image
            src={"/flight.svg"}
            height={600}
            width={600}
            alt="flight"
            className="size-full md:object-fit"
          />
        </div>
      </div>
      <div id="last" className="mt-60">
        <div className="mb-10 text-white/70  ">
          <h4 className="text-4xl md:text6xl  font-bold text-center">
            3 hours of video
          </h4>
          <h2 className="text-xl md:text-3xl lg:text-6xl max-w-md lg:max-w-2xl mx-auto text-center mt-4 md:mt-8 px-4 md:px-0">
            Quick and beautiful web design: Streamlining your creative process
          </h2>
        </div>
        <div className=" bg-[radial-gradient(rgb(59_130_246/0.5),#ffffff50,rgb(59_130_246/0.5))] [mask-image:radial-gradient(circle_farthest-side,black_80%,transparent)] md:[mask-image:linear-gradient(to_top,transparent_5%,white_10%,white_50%,white_98%,transparent)] lg:pb-28">
          <div className="max-w-screen-xl mx-auto grid md:grid-rows-2  px-4 md:px-10 lg:px-20 py-8 gap-4">
            <div className="grid md:grid-cols-3 gap-y-4 md:gap-4">
              <div className="md:col-span-1 bg-white/20  backdrop-blur-2xl rounded-3xl p-4 xl:p-6  flex flex-col justify-between gap-20">
                {/* <div className="rounded-3xl bg-blue-300/10 h-32 relative border border-white/30">
                <div className="absolute h-8 w-full top-0 left-1/2 bg-gray-400/50 rounded-t-3xl -translate-x-1/2"></div>
                <h4 className="mt-8 text-center w-fit mx-auto bg-gray-800 p-1 px-4 rounded-b-2xl text-white/70">
                  PAYMENT
                </h4>
              </div> */}
                <Image
                  src={"/phone.svg"}
                  height={120}
                  width={120}
                  alt="play"
                  className="size-full md:-mt-10"
                />

                <div className="space-y-4">
                  <h2 className="text-xl">Modular Design System</h2>
                  <p className="text-white/70">
                    Explore the art of building scalable, cohesive design
                    systems that streamline UI development and enhance team
                    collaboration.
                  </p>
                  <button className="border border-white/20 p-1 rounded text-white/80">
                    Templates <ChevronRight className="inline" />
                  </button>
                </div>
              </div>
              <div className="md:col-span-2 bg-white/20 backdrop-blur-2xl rounded-3xl p-4 xl:p-6 space-y-10">
                <div className="rounded-3xl bg-blue-300/10 h-52 relative overflow-hidden flex items-center justify-center border border-white/30">
                  <div className="size-48 md:size-96 bg-blue-900/10 rounded-full flex justify-center items-center">
                    <div className="size-40 md:size-72 bg-blue-900/20 rounded-full p-4 flex justify-center items-center">
                      <div className="size-32 md:size-64 bg-blue-900/30 rounded-full flex justify-center items-center">
                        <div className="size-28 md:size-48 bg-blue-900/30 rounded-full overflow-hidden relative ">
                          <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 size-52 rounded-full [background:conic-gradient(from_0deg,white,#60a5fa30_30%)] flex items-center justify-center">
                            {/* <Image
                            src={"/usersAvatar/braids.webp"}
                            height={150}
                            width={150}
                            alt="image"
                            className=" object-contain size-[150px] rounded-full z-40t "
                          /> */}
                            <img
                              src="ava1.png"
                              alt=""
                              className=" object-contain size-[11em] rounded-full bg-gray-600 text-blue-400"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="space-y-4">
                    <h2 className="text-xl">Modular Design System</h2>
                    <p className="text-white/70">
                      Explore the art of building scalable, cohesive design
                      systems that streamline UI development and enhance team
                      collaboration.
                    </p>
                    <div className="pt-8">
                      <button className="border border-white/20 p-1 rounded text-white/70">
                        Templates <ChevronRight className="inline" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-3 min-h-[25vh] gap-4 rounded-xl">
              {/* <div className="absolute size-full bg-red-400/20 [mask-image:radial-gradient(ellipse_farthest-side_at_center,white_15%,transparent)]"></div> */}
              <div className="md:col-span-2 bg-white/10 backdrop-blur-3xl  rounded-xl p-4 xl:p-6 flex flex-col justify-between">
                <div className="space-y-4">
                  <h2 className="text-xl">Modular Design System</h2>
                  <p className="text-white/90 text-lg">
                    Explore the art of building scalable, cohesive design
                    systems that streamline UI development and enhance team
                    collaboration.
                  </p>
                  <div className="">
                    <button className="border border-white/20 p-1 rounded text-white/70 ">
                      Documentation <ChevronRight className="inline" />
                    </button>
                  </div>
                </div>
                <div className=" mt-4 border rounded-xl border-white/30 w-full flex justify-around min-h-44 items-center">
                  <div className="">
                    <Image
                      src={"/play.svg"}
                      height={120}
                      width={120}
                      alt="play"
                      className="size-3/4 md:size-full mx-auto"
                    />
                  </div>
                  <div className="w-52 h-32 border border-white/30 border-b-transparent  rounded-t-[28px] translate-y-[24px] flex justify-center items-end">
                    <div className="w-32 md:w-48 h-[7.5em] border border-b-transparent rounded-t-[28px] border-white/50 flex justify-center bg-white/30">
                      <div className="w-16 h-4 border rounded-full mt-2 border-white/40"></div>
                    </div>
                  </div>
                  <div className="text-green-400">
                    <Image
                      src={"/hex.svg"}
                      height={120}
                      width={120}
                      alt="play"
                      className="size-3/4 md:size-full mx-auto"
                    />
                  </div>
                </div>
              </div>
              <div className="md:col-span-1 bg-white/20 backdrop-blur  rounded-xl p-4 xl:p-6 flex flex-col">
                <div className="space-y-4">
                  <h2 className="text-xl">Strategies in Components Designs</h2>
                  <p className="text-white/90 text-lg">
                    Explore the art of building scalable, cohesive design
                    systems that streamline UI development and enhance templates
                    collaboration.
                  </p>
                  <div className="">
                    <button className="border border-white/20 p-1 rounded text-white/70 ">
                      Start Course <ChevronRight className="inline" />
                    </button>
                  </div>
                </div>
                <Image
                  src={"/video.svg"}
                  height={120}
                  width={120}
                  alt="play"
                  className="size-full mt-24"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
