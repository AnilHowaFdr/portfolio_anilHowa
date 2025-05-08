import PortfolioTools from "./PortfolioTools";

const PortfolioItemsTwo = () => {
  return (
    <section className="py-20 dark:bg-gray-950">
      <div className="container px-4 lg:px-8 cursor-pointer">
        <h2 className="Heading pb-3 border-b-4 border-secondary dark:border-white border-dashed w-fit m-auto text-center ">
          Projects
        </h2>
        <p className="w-auto lg:w-[800px] pt-14 text-center m-auto font-primary font-medium leading-8 text-lg text-balance dark:text-white text-secondary">
          Some of my Projects are showcased below for your review. You can rely
          on me!!!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-20 ">
          <PortfolioTools
            title="E-commerce Website"
            src="/portfolio1.png"
            src1="https://e-commerce-website-farny-with-react.vercel.app/"
            src2="https://github.com/AnilHowaFdr/E-Commerce-Website-Farny-with-React-.git"
          />
          <PortfolioTools
            title="Flower Store"
            src="/flowerP.png"
            src1="flower-store-m8j0yr5s2-anil-howas-projects.vercel.app"
            src2="https://github.com/AnilHowaFdr/E-Commerce-Website-Farny-with-React-.git"
          />
          <PortfolioTools
            title="Chatting Application"
            src="/chattingApp.png"
            src1="chatting-app-2-0.vercel.app"
            src2="https://github.com/AnilHowaFdr/E-Commerce-Website-Farny-with-React-.git"
          />
        </div>
      </div>
    </section>
  );
};

export default PortfolioItemsTwo;
