import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import b3 from "../assets/banner3.jpeg";
import b5 from "../assets/banner5.jpeg";
import { menuData2 } from "../constants/menus";
import "../styles/Home.css";
const Delivery = () => {
  return (
    <section>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        interval={3000}
      >
        <div>
          <img src={b3} alt="banner1" />
        </div>
        <div>
          <img src={b5} alt="banner1" />
        </div>
      </Carousel>
      <div className=" menu-section flex flex-col p-[30px] ">
        <h1 className="text-[25px] ml-[30px] text-black">OUR MENU</h1>
        <div className="menus flex justify-start gap-10 p-2 overflow-x-scroll hide-scrollbar mx-[30px] mt-[10px]">
          {menuData2?.map((el) => {
            return (
              <div
                key={el.id}
                className="flex-shrink-0 cursor-pointer flex flex-col items-center  justify-between w-[150px] h-[180px] "
              >
                <img
                  src={el.img_url}
                  alt={el.title}
                  className="w-[100%] h-auto p-4 bg-white rounded-2xl  "
                />
                <h3 className="text-center text-[15px] font-bold text-black">
                  {el.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
      
    </section>
  );
};

export default Delivery;
