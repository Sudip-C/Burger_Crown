import { useEffect, useRef, useState } from "react";
import { menuData } from "../constants/menus";
import ProductCrad from "../components/product-card";

const ProductList = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const scrollRef = useRef(null);
  const handleClick = (category) => {
    setActiveCategory(category === activeCategory ? null : category);
  };

  const checkScrollPosition = () => {
    const el = scrollRef.current;
    if (!el) return;

    setIsAtStart(el.scrollLeft === 0);
    setIsAtEnd(el.scrollLeft + el.offsetWidth >= el.scrollWidth - 1); // Add small margin to account for rounding
  };


  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = 200; // Adjust scroll amount as needed
      current.scrollBy({
        left: direction === "next" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

   useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    checkScrollPosition(); // Check initially

    el.addEventListener('scroll', checkScrollPosition);
    return () => el.removeEventListener('scroll', checkScrollPosition);
  }, []);


  return (
    <section className="product-page bg-[#F8F6F3] h-[87vh] px-18 py-10">
      <div>
        <div className="acordian flex items-center justify-center    ">
          <button
            disabled={isAtStart}
            onClick={() => scroll("prev")}
            className={`previous bg-white p-5 border-black rounded-bl-xl rounded-tl-xl shadow-md ${isAtStart?"cursor-not-allowed ":'cursor-pointer text-orange-400'}`}
          >
            {"<"}
          </button>
          <div
            ref={scrollRef}
            className="flex justify-start gap-10 p-2 overflow-x-scroll hide-scrollbar mx-[30px] mt-[10px] border-b-1 border-gray-300"
          >
            {menuData?.map((el) => {
              return (
                <div
                  key={el.id}
                  onClick={() => handleClick(el.title)}
                  className={`flex-shrink-0 cursor-pointer flex flex-col items-center  justify-center w-[150px] h-[160px] ${
                    activeCategory === el.title
                      ? "underline decoration-5 decoration-orange-500 underline-offset-11"
                      : "no-underline"
                  } `}
                >
                  <img
                    src={el.img_url}
                    alt={el.title}
                    className="w-[100%] h-auto p-2 rounded-2xl  "
                  />
                  <h3 className="text-center text-[15px] font-bold text-black">
                    {el.title}
                  </h3>
                </div>
              );
            })}
          </div>
          <button
            onClick={() => scroll("next")}
            className={`next bg-white p-5 border-black rounded-br-xl rounded-tr-xl shadow-md ${isAtEnd?"cursor-not-allowed":"cursor-pointer text-orange-400"}`}
          >
            {">"}
          </button>
        </div>
      </div>
      <div className="ml-[4.6em] w-[50%] ">
        <h1 className="uppercase text-2xl text-black mt-[5em] ">Value Meals</h1>
        <div className="ml-[10px] border-2 border-black mt-4 grid grid-cols-2 gap-3">
            <ProductCrad/>
            <ProductCrad/>
        </div>
      </div>
    </section>
  );
};

export default ProductList;
