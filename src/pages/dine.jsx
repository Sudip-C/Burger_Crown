
import { Carousel } from 'react-responsive-carousel';
import b1 from '../assets/banner1.jpeg';
import b2 from '../assets/banner2.jpeg';
import b3 from '../assets/banner3.jpeg';
import b4 from '../assets/banner4.jpeg';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { menuData } from '../constants/menus';
import '../styles/Home.css'
import recom1 from '../assets/recom1.jpeg';
import recom2 from '../assets/recom2.jpeg';
import final from '../assets/final.jpg';
const Home = () => {
    return (
        <div className="home w-[100%]">
        <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false} showStatus={false} interval={3000}>
            <div>
                <img src={b2} alt="banner1" />
            </div>
            <div>
                <img src={b1} alt="banner1" />
            </div>
            <div>
                <img src={b3} alt="banner1" />
            </div>
            <div>
                <img src={b4} alt="banner1" />
            </div>
        </Carousel>
        <div className=' menu-section flex flex-col p-[30px] '>
        <h1 className='text-[25px] ml-[30px] text-black'>OUR MENU</h1>
        <div className='menus flex justify-start gap-10 p-2 overflow-x-scroll hide-scrollbar mx-[30px] mt-[10px]'>
            
           { menuData?.map((el)=>{
            return (
                <div key={el.id} className='flex-shrink-0 cursor-pointer flex flex-col items-center  justify-between w-[150px] h-[180px] ' >
                    <img src={el.img_url} alt={el.title} className='w-[100%] h-auto p-4 bg-white rounded-2xl  ' />
                    <h3 className='text-center text-[15px] font-bold text-black'>{el.title}</h3>
                </div>
            )
           })}
        </div>
        </div>
        <div className='bg-[#F8F6F3] p-6'>
            <h1 className='text-black text-[25px] ml-[30px]'>BC RECOMMENDED</h1>
            <div className='flex justify-start gap-5 items-center mx-[30px] mt-[10px]'>
            <img src={recom1} alt="recomendation1" className='w-[30%]' />
            <img src={recom2} alt="recomendation2" className='w-[30%]' />
            </div>
           <div></div>
        </div>
        <div className='explore-menu flex flex-col justify-center w-[100%] items-center bg-[#F8F6F3] '>
            <div className='bg-[#6F3C2F] text-white p-4 flex justify-center items-center rounded-4xl w-[400px] h-[50px] text-[20px] font-bold cursor-pointer my-4'>
            EXPLORE FULL MENU
            </div>
            <div className='w-[100%]  flex justify-center items-center mt-8 mb-6'>
                <img src={final} alt="" className='w-[92%] rounded-xl' />
            </div>
        </div>
        </div>
    );
    }
export default Home;