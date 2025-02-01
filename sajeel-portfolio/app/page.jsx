import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

//Components
import Social from "@/components/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24 ">
          {/*Text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software & Devops Engineer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br />
              <span className="text-accent">Sajeel Ahsan</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white">
              I excel at deploying websites using several technologies and
              proficient in varios programming Lanuages and Technologies
            </p>
            {/*Resume and social media. */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2 text-white"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-black hover: text-primary hover: transition-all duration-500 text-white"
                />
              </div>
            </div>
          </div>
          <div>
            <Photo className="order-1 xl:order-none mb-8 xl:md-0" />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
