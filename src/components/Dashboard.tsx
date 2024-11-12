interface SizeProps {
  size?: string;
}
import {
  BrickWall,
  Cannabis,
  ChevronDown,
  ChevronUp,
  CircleDot,
  CircleUser,
  Dock,
  Grip,
  HelpCircle,
  HomeIcon,
  ImageIcon,
  Keyboard,
  LayoutDashboard,
  MoonIcon,
  Pointer,
  Search,
  Settings,
  SlidersHorizontal,
  SquareMenu,
  SunIcon,
  Zap,
} from "lucide-react";

const users = [
  {
    name: "Iga Swatek",
    content: "wants a tennis date",
    time: 2,
    image: "red.webp",
  },
  {
    name: "Khadijah Wilson",
    content: "invited you for a chat",
    time: 9,
    image: "hijab.webp",
  },
  {
    name: "Bryan Ika",
    content: "new message",
    time: 2,
    image: "gee.webp",
  },
  {
    name: "Tolu Ajibola",
    content: "edited profile",
    time: 2,
    image: "braids.webp",
  },
  {
    name: "Chucks ifadola",
    content: "shrine time",
    time: 2,
    image: "ibile.jpeg",
  },
];

import Image from "next/image";
import React from "react";
const Dashboard = ({ size = "" }: SizeProps) => {
  return (
    <div className="w-full mt-8  relative border-x border-white/10">
      <div className=" size-full absolute -translate-x-2 md:-translate-x-16 lg:-translate-x-32 z-10 -top-16 hidden lg:block animate-pulse">
        <Image
          src={"/ring.svg"}
          alt="bubble"
          height={200}
          width={200}
          className="size-1/5 rounded-xl"
        />
      </div>
      <div className=" size-full absolute top-[85%] translate-x-[80%] md:translate-x-[85%] z-10 hidden lg:block animate-pulse">
        <Image
          src={"/score.svg"}
          alt="bubble"
          height={200}
          width={200}
          className="size-1/4 rounded-xl"
        />
      </div>
      <div className="absolute size-60 border border-white/10 -left-[120px] -top-[120px] z-[0] rotate-[45deg] "></div>
      <div className="absolute size-60 border border-white/10 -right-[120px] -top-[120px] z-[0] rotate-[45deg] "></div>
      <div className="absolute h-0.5 w-96 border border-white/10 -left-[215px] -top-0 z-[0] "></div>
      <div className="absolute h-0.5 w-96 border border-white/10 -right-[215px] -top-0 z-[0] "></div>
      <div className="bg-[radial-gradient(circle_farthest-side,#00000020_80%,black_120%)] rounded-2xl">
        <div className=" [mask-image:radial-gradient(circle_farthest-side_at_top,white_70%,transparent_150%)] rounded-2xl backdrop-blur-lg z-10">
          <div className="mt-8 grid grid-cols-10 rounded mx-auto w-full ">
            <div className="col-span-1 md:col-span-2 lg:p-4  border-r border-white/10 overflow-hidden">
              <div className="grid md:gap-12 space-y-12">
                <div className="md:flex md:gap-2 p-2 items-center  mx-auto lg:mx-0 mt-2 lg:mt-0">
                  <LayoutDashboard />
                  <h2 className="font-bold text-lg">
                    <span className="hidden md:block">underGod</span>
                    <span className="hidden lg:hidden text-base">uG</span>
                  </h2>
                </div>
                <ul className="space-y-4 text-sm lg:text-base pb-20 border-b border-b-white/10 overflow-hidden px-1.5">
                  <li className="lg:bg-blue-500/30 p-1 lg:p-2 flex items-center gap-4 justify-center md:justify-start lg:border-l border-l-blue-500 cursor-pointer">
                    <Grip size={18} />{" "}
                    <span className="hidden md:block">All Components</span>
                  </li>
                  <li className=" p-1 lg:p-2 flex items-center gap-4 justify-center md:justify-start">
                    <Pointer size={18} />
                    <span className="hidden md:block">Buttons</span>
                  </li>
                  <li className=" p-1 lg:p-2 flex items-center gap-4 justify-center md:justify-start">
                    <SquareMenu size={18} />
                    <span className="hidden md:block">Menu</span>
                  </li>
                  <li className=" p-1 lg:p-2 flex items-center gap-4 justify-center md:justify-start">
                    <Dock size={18} />
                    <span className="hidden md:block">Cards</span>
                  </li>
                  <li className=" p-1 lg:p-2 flex items-center gap-4 justify-center md:justify-start">
                    <CircleDot size={18} />
                    <span className="hidden md:block">Icons</span>
                  </li>
                  <li className=" p-1 lg:p-2 flex items-center gap-4 justify-center md:justify-start">
                    <BrickWall size={18} />
                    <span className="hidden md:block">Pattern</span>
                  </li>
                  <li className=" p-1 lg:p-2 flex items-center gap-4 justify-center md:justify-start">
                    <ImageIcon size={18} />
                    <span className="hidden md:block">Backgrounds</span>
                  </li>
                </ul>
                <ul className=" space-y-4 text-sm lg:text-base -mt-10 px-1.5">
                  <li className=" p-1 lg:p-2 flex items-center gap-4 justify-center md:justify-start">
                    <Keyboard size={18} />
                    <span className="hidden md:block">Keyboard Shortcuts</span>
                  </li>
                  <li className=" p-1 lg:p-2 flex items-center gap-4 justify-center md:justify-start">
                    <Settings size={18} />
                    <span className="hidden md:block">Settings</span>
                  </li>
                  <li className=" p-1 lg:p-2 flex items-center gap-4 justify-center md:justify-start">
                    <HelpCircle size={18} />
                    <span className="hidden md:block">Help Center</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-span-9 md:col-span-8 p-4 space-y-4">
              <div className="flex justify-between border-b border-white/10 pb-6">
                <div className="w-52 md:w-72 rounded-full border border-white/10 flex justify-between items-center px-2">
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Search"
                    className="outline-none bg-transparent p-0.5 md:p-1 lg:p-2 flex-1"
                  />
                  <Search />
                </div>
                <div className="">
                  <div className="size-8 md:size-10 lg:size-12 rounded-full bg-red-400">
                    <Image
                      src={"/usersAvatar/nigga.jpeg"}
                      height={42}
                      width={42}
                      alt="nigga"
                      className="size-full object-cover rounded-full"
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center md:justify-between mt-4">
                <div className="border border-white/10 rounded-full flex gap-4 p-0.5">
                  <h4 className="px-4 bg-blue-50/30 rounded-full">Glass</h4>
                  <h4 className="px-4 ">Outline</h4>
                  <h4 className="px-4 ">Flat</h4>
                </div>
                <div className="hidden md:flex gap-4 items-center">
                  <div className="border border-white/10 rounded-full flex p-1 px-4 gap-2">
                    <h4>Corner Radius: 10 </h4>
                    <ChevronDown />
                  </div>
                  <div className="flex rounded-full p-1 px-4 gap-2 border border-white/10">
                    <h4 className="">Sort by</h4>
                    <ChevronDown />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3  gap-4 overflow-y-scroll h-[65vh] md:h-[70vh]">
                <div className="hidden 2xl:block">
                  <div className="grid gap-4">
                    <div className=" border border-white/10 rounded-xl p-2 py-4">
                      <div className="grid grid-cols-2 ">
                        <div className="space-y-2">
                          <h4 className="text-sm font-semibold">CA $950</h4>
                          <p className="text-white/75 text-sm">
                            Roundtrip per pessenger
                          </p>
                          <div className="flex items-center gap-2">
                            <Cannabis className="text-red-400" />
                            <cite className="text-sm">Air Canada</cite>
                          </div>
                        </div>
                        <div className="space-y-2 border-l border-dashed pl-2 border-white/10">
                          <h4 className="text-sm font-semibold">
                            1:15PM - 4:50AM
                          </h4>
                          <p className="text-white/75 text-sm">
                            Montreal (YUL) - Toyko (NRT) <br /> 13:35 Nonstop
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="border border-white/10 p-0.5 rounded-xl">
                      <div className="grid grid-cols-2 rounded-xl p-2 py-4  gap-4">
                        <div className="space-y-4">
                          <Zap
                            size={40}
                            className="border rounded border-white/10"
                          />
                          <h4 className="border-b border-white/10 pb-4">
                            Reminders
                          </h4>
                          <p className="text-sm text-white/75">
                            Today: Update icons for design system
                          </p>
                        </div>
                        <div className="space-y-2">
                          <ul
                            className="bg-green-10o0
                            text-sm space-y-3 text-white/75"
                          >
                            <li className="">
                              <span className="bg-blue-500/20 px-2 rounded-full">
                                1
                              </span>{" "}
                              Update Icons
                            </li>
                            <li className="">
                              <span className="bg-blue-500/20 px-2 rounded-full">
                                2
                              </span>{" "}
                              Pricings sections
                            </li>
                            <li className="">
                              <span className="bg-blue-500/20 px-2 rounded-full">
                                3
                              </span>{" "}
                              Card component
                            </li>
                            <li className="">
                              <span className="bg-blue-500/20 px-2 rounded-full">
                                4
                              </span>{" "}
                              App Templates
                            </li>
                            <li className="">
                              <span className="bg-blue-500/20 px-2 rounded-full">
                                5
                              </span>{" "}
                              Patterns
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="border border-white/10 rounded-xl grid grid-cols-5 px-2 py-4">
                      <div className="col-span-1 grid items-start">
                        <div className="border border-white/10 w-fit rounded-full ">
                          <ChevronUp /> <hr className="bg-red-400" />
                          <ChevronDown />
                        </div>
                        <p className="text-white/75 ml-1">24</p>
                      </div>
                      <div className="col-span-4">
                        <h4 className="font-semibold">
                          Should I take the iOS 17 course before?
                        </h4>
                        <p className="text-white/75 text-sm mt-4">
                          I'm confused as to which course I should start with
                          first. I know some HTML and CSS but this would be my
                          first iOS app.
                        </p>
                        <div className="border-t border-white/10 mt-4 pt-4 flex items-center gap-2">
                          <div className="size-10 rounded-full bg-gray-100"></div>
                          <div className="">
                            <h4 className="">Pierre Smith</h4>
                            <p className="text-sm text-white/75">
                              New to iOS development
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hidden  md:grid gap-4 overflow-scroll ">
                  <div className="border p-4 border-white/10 rounded-xl grid gap-2">
                    <div className=" size-full">
                      <Image
                        src={"/bubble.png"}
                        alt="bubble"
                        height={200}
                        width={200}
                        className="size-full rounded-xl"
                      />
                    </div>
                    <div className="mt-2">
                      <button className="bg-blue-500/70 p-2 rounded-xl">
                        UI/UX DESIGN
                      </button>
                      <h4 className="text-base font-semibold my-4">
                        Designing a travel App
                      </h4>
                      <p className="text-white">
                        Embark on a creative journey as you learn how to design
                        a captivating travel app from concept to user-centric
                        experience
                      </p>
                      <div className="w-full h-2 rounded-full bg-white/10 my-2">
                        <div className="h-full bg-blue-500/70 w-2/3 rounded-l-xl"></div>
                      </div>
                      <div className="  mt-2 pt-4 flex items-center gap-2">
                        <div className="size-10 rounded-full bg-gray-100">
                          <Image
                            src={"/usersavatar/nigga.jpeg"}
                            alt="bubble"
                            height={200}
                            width={200}
                            className="size-full rounded-full object-contain"
                          />
                        </div>
                        <div className="">
                          <h4 className="">Kunle Adekunle</h4>
                          <p className="text-sm text-white/75">
                            Software Developer
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border p-4 border-white/10 rounded-xl">
                    <h4 className="text-base font-semibold p-2 text-center mb-4">
                      Monthly Completion
                    </h4>
                    <div className="grid  grid-cols-5">
                      <div className="space-y-2 flex flex-col items-center">
                        <div className="h-60 w-4 rounded-full bg-white/10 flex items-end">
                          <div className="h-1/2 w-full bg-violet-500 rounded-b-full"></div>
                        </div>
                        <h4>Lat</h4>
                      </div>
                      <div className="space-y-2 flex flex-col items-center">
                        <div className="h-60 w-4 rounded-full bg-white/10 flex items-end">
                          <div className="h-1/2 w-full bg-green-500 rounded-b-full"></div>
                        </div>
                        <h4>Lat</h4>
                      </div>
                      <div className="space-y-2 flex flex-col items-center">
                        <div className="h-60 w-4 rounded-full bg-white/10 flex items-end">
                          <div className="h-1/3 w-full bg-yellow-500 rounded-b-full"></div>
                        </div>
                        <h4>Lat</h4>
                      </div>
                      <div className="space-y-2 flex flex-col items-center">
                        <div className="h-60 w-4 rounded-full bg-white/10 flex items-end">
                          <div className="h-4/5 w-full bg-violet-500 rounded-b-full"></div>
                        </div>
                        <h4>Lat</h4>
                      </div>
                      <div className="space-y-2 flex flex-col items-center">
                        <div className="h-60 w-4 rounded-full bg-white/10 flex items-end">
                          <div className="h-2/3 w-full bg-red-500 rounded-b-full"></div>
                        </div>
                        <h4>Lat</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="border border-white/10 rounded-xl p-4 ">
                    <div className="flex gap-2 border border-white/10 rounded-xl w-fit">
                      <MoonIcon className="p-1" size={28} />
                      <SunIcon
                        size={28}
                        className="border-l border-white/10 p-1 rounded-xl"
                      />
                    </div>
                    <div
                      className="mt-4
                      "
                    >
                      <h4>AltSchool</h4>
                      <h6 className="text-white/75">
                        Tech Learning Instuition
                      </h6>
                      <p className="border-y  border-y-white/10 my-2 py-2 text-white/75">
                        At AltSchool, we are dedicated to empowering students
                        with the technical skills essential for today’s
                        fast-paced, tech-driven world. Our courses are designed
                        to provide hands-on experience in fields such as
                        software development, data science, cybersecurity,
                        digital marketing, and engineering.
                      </p>
                      <div className="flex items-center text-white/75 gap-2">
                        <div className="size-8 rounded-full border border-white/10 inline-flex items-center justify-center">
                          W
                        </div>
                        <cite className="text-sm not-italic">
                          Yusuf Olatunji, CEO of AltSchool
                        </cite>
                      </div>
                    </div>
                  </div>
                  <div className="border border-white/10 rounded-xl p-4">
                    <div className="flex justify-between items-center">
                      <h4 className="">Notifications</h4>
                      <div className="flex gap-2">
                        <HomeIcon size={20} />
                        <SlidersHorizontal size={20} />
                        <CircleUser size={20} />
                      </div>
                    </div>
                    <div className="mt-4 space-y-2">
                      {users.map((user, index) => (
                        <React.Fragment key={index}>
                          <div className="border border-white/10 rounded-xl flex gap-2 items-center justify-between p-2">
                            <div className="flex gap-2 items-center">
                              <div className="size-10 rounded-full bg-gray-300">
                                <Image
                                  src={`/usersAvatar/${user.image}`}
                                  height={42}
                                  width={42}
                                  alt="nigga"
                                  className="size-full object-cover rounded-full"
                                />
                              </div>
                              <div className="">
                                <h4>{user.name}</h4>
                                <p className="text-sm text-white/75">
                                  {user.content}
                                </p>
                              </div>
                            </div>
                            <small className="text-white/75">
                              {user.time}m ago
                            </small>
                          </div>
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
