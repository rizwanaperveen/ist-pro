import Link from "next/link";
import React from "react";
import { FaGlasses } from "react-icons/fa";

export default function Home() {
  return(
      <main>
      <div className="z-10 w-full items-center justify-between font-mono text-sm">
      <header className="text-gray-200 bg-gray-900 body-font w-screen fixed">
  <div className="container flex flex-wrap p-5 flex-col md:flex-row items-center">
    <div className="bg-orange-500 rounded-full last:h-10 w-68 p-2 flex"> 
      <div className="text-2xl"> GLASSESS WORLD</div>
      <FaGlasses  /></div>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link href="/order" className="ml-5 text-xl hover:text-black hover:bg-orange-200">Order</Link>
      <Link href="/contact" className="ml-5 text-xl hover:text-black hover:bg-orange-200">Contact</Link>
      <Link href="/deliverto" className="ml-7 text-xl hover:text-black hover:bg-orange-200">Deliver to</Link>
      <div className="text-xl inline-flex  hover:text-black hover:bg-orange-200 ml-7 mt-3">Cart
      <img className="text-xl rounded-3xl h-8 w-20"  src="https://www.loudmouth-media.com/media/1652/e-commerce-large-01.png" alt="cart" />
      </div></nav>
    <button className="inline-flex items-center bg-orange-500 font-black border-0 py-1 px-3 focus:outline-none hover:bg-emerald-500 rounded-full text-base mt-4 md:mt-0 ml-4">Sign In
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
</header>
</div>
   {/*hero section*/}  
   <section className="text-gray-600 body-font">
  <div className="container flex flex-col px-6 py-28 justify-center items-center">
    {/*img tag*/}
  {/*<img src="https://www.eyeglasses.pk/media/wysiwyg/Get-Stylish-_-Trendy-Eyeglasses.jpg" alt="hero" />*/}
    <img className="w-full h-96 mb-10 object-cover object-center rounded" alt="hero" src="https://media.istockphoto.com/id/1456164914/photo/group-of-glasses-in-white-background.jpg?s=2048x2048&w=is&k=20&c=Am2x6NVzndLoAxCi8D5ctNVLPL5mbmdmgVTf6uNf6Ws="/>
    
    {/*Feature*/}
{/*<div>
  <img className="h-60 w-screen" src="https://www.eyeglasses.pk/media/wysiwyg/Shop-Glasses-Starting-From-976.gif" alt="main" />
</div>*/}
<div className="w-full md:w-2/3 flex flex-col mb-2 mt-4 p-5 items-center text-center">
<div className="h-96 w-full flex"><img src="https://www.eyeglasses.pk/media/wysiwyg/Shop-Glasses-Starting-From-976.gif" alt="main" /></div>    
      <div className="flex w-full justify-center items-end">
        <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
          <label htmlFor="hero-field" className="text-xl text-gray-800">Placeholder</label>
          <input type="text" id="hero-field" name="hero-field" className="w-full bg-gray-100 mt-3 bg-opacity-50 rounded focus:ring-2 focus:ring-yellow-200 focus:bg-transparent border border-gray-300 focus:border-yellow-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
        <button className="inline-flex text-white bg-slate-700 py-2 px-6 focus:outline-none hover:bg-black hover: border-red-500 border-4 rounded text-lg items-center ml-4">Button</button>
      </div>
      <p className="text-xl mt-5 text-black mb-4 w-full">Luxe, lightweight, and made with the perfect blend of cashmere.</p>
      <div className="flex">
        <button className="bg-black text-white inline-flex mt-5 py-3 px-5 hover: border-red-500 border-4 hover:bg-slate-800 rounded-lg focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 512 512">
            <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
          </svg>
          <span className="ml-4 flex items-start flex-col leading-none">
            <span>GET IT ON</span>
            <span className="title-font font-medium">Google Play</span>
          </span>
        </button>
        <button className="bg-black text-white inline-flex mt-5 py-3 px-5 hover: border-red-500 border-4 hover:bg-slate-800 rounded-lg items-center ml-4 focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 305 305">
            <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"></path>
            <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"></path>
          </svg>
          <span className="ml-4 flex items-start flex-col leading-none">
            <span>Download on the</span>
            <span className="title-font font-medium">App Store</span>
          </span>
        </button>
      </div>
    </div>
  </div>
</section>
{/*content*/}

<section className="text-gray-600 body-font">

<div className="container px-5 py-10">

    <div className="flex flex-wrap w-full mb-10 ">

      <div className="w-full mb-6">

        <h1 className="text-3xl text-center font-bold text-black">Top Selling Products</h1>
      
      </div>

      <p className="h-20 w-full text-center text-black p-8 text-xl font-serif">The most excellent online eyeglasses and eyeglass frames are offered at Easy Sight, your one-stop online store. We offer a wide range of high-quality items because we know how important it is for you to access stylish and affordable eyewear. We provide options for everyone, whether you need prescription or non-prescription sunglasses. Finding the ideal set of eyeglasses frames that fit your style, personality, and budget is simple with the help of our easy-to-use website. We have everything you want, glasses from timelessly elegant designs to the newest techniques.</p>

    </div>

    </div>
    <div className="flex flex-wrap p-4 mt-2">
      <div className="xl:w-1/4 md:w-1/2 p-4 ">
        <div className="bg-gray-100 p-6 rounded-lg hover:border-4 border-gray-600">
          <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://easysight.pk/wp-content/webp-express/webp-images/uploads/2020/03/Delicato-FSG-g.black_-723x377.png.webp" alt="content"/>
          <h2 className="tracking-widest text-yellow-500 text-xl font-serif font-bold">Delicato FSG</h2>
          <h3 className="text-lg text-gray-900 font-medium title-font mb-4">₨ 2,000</h3>
          <p className="leading-relaxed text-base">Frame Size:  58□16-138 <br/>
            Color:   Golden <br/>
            Material: Metal</p>
        </div>
        </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg hover:border-4 border-gray-600">
          <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://easysight.pk/wp-content/webp-express/webp-images/uploads/2020/06/Delight-PSG-red-723x377.png.webp" alt="content"/>
          <h2 className="tracking-widest text-yellow-500 text-xl font-serif font-bold">Delight PSG+ </h2>
          <h3 className="text-lg text-gray-900 font-medium title-font mb-4">₨ 2,000</h3>
          <p className="leading-relaxed text-base">Frame Size:  60□23-135 <br/>
          Color:  Red, Black and light Blue <br/>
          Material: Metal</p>
        </div>
      </div>
      
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg hover:border-4 border-gray-600">
          <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://easysight.pk/wp-content/webp-express/webp-images/uploads/2020/04/Nifty-pink-723x377.png.webp" alt="content"/>
          <h2 className="tracking-widest text-yellow-500 text-xl font-serif font-bold">Nifty FSG </h2>
          <h3 className="text-lg text-gray-900 font-medium title-font mb-4">₨ 2,000</h3>
          <p className="leading-relaxed text-base">Frame Size:  50□18-135 <br/>
          Color: Pink and Brown <br/>
          Material: Metal</p>
        </div>
      </div>
      
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg hover:border-4 border-gray-600">
          <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://easysight.pk/wp-content/webp-express/webp-images/uploads/2020/02/Casa-P-1002-723x364.jpg.webp" alt="content"/>
          <h3 className="tracking-widest text-yellow-500 text-xl font-serif font-bold">Casa P-1002</h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">₨ 1,200</h2>
          <p className="leading-relaxed text-base">Frame Size:  53□17-139 <br/>
          Color: Grey <br/>
          Material: Plastic</p>
        </div>
      </div>
     </div>
      <div className="flex flex-wrap p-4 mt-2">

      <div className="xl:w-1/4 md:w-1/2 p-4">      
        <div className="bg-gray-100 p-6 rounded-lg hover:border-4 border-gray-600">
          <img className="h-40 rounded w-full object-cover object-center mb-6" alt="hero" src="https://ainak.pk/image/tom-ford-tf0845-3.webp"/>
          <h2 className="tracking-widest text-yellow-500 text-xl font-serif font-bold">Tom Ford TF0845</h2>
          <h3 className="text-lg text-gray-900 font-medium title-font mb-4">₨ 8,500</h3>
          <p className="leading-relaxed text-base">Size : large ( 53 □21 -145 ) <br/>
          Color:  Transparent <br/>
          Material: Metal</p>
        </div>
        </div>
      
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg hover:border-4 border-gray-600">
          <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://plus.unsplash.com/premium_photo-1683543124406-ff29013727f2?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="content"/>
          <h2 className="tracking-widest text-yellow-500 text-xl font-serif font-bold">Transparent Glassess</h2>
          <h3 className="text-lg text-gray-900 font-medium title-font mb-4">₨ 2,000</h3>
          <p className="leading-relaxed text-base">Frame Size:  60□23-135 <br/>
          Color: Black, light Blue & White <br/>
          Material: Metal</p>
        </div>
      </div>
      
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg hover:border-4 border-gray-600">
          <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="content"/>
          <h2 className="tracking-widest text-yellow-500 text-xl font-serif font-bold">Sun Glasess </h2>
          <h3 className="text-lg text-gray-900 font-medium title-font mb-4">₨ 2,000</h3>
          <p className="leading-relaxed text-base">Frame Size:  50□18-135 <br/>
           Color: Black <br/>
           Material: Metal</p>
        </div>
      </div>
      
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg hover:border-4 border-gray-600">
          <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://www.instyleeyes.com/cdn/shop/products/R490SH_Tortoise_Diagonal_FINAL_1600x.jpg?v=1607541562" alt="content"/>
          <h3 className="tracking-widest text-yellow-500 text-xl font-serif font-bold">Gardenia Glasses</h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">₨ 2,500</h2>
          <p className="leading-relaxed text-base">Frame Size:  53□17-139 <br/>
         Color: Grey <br/>
          Material: Plastic</p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg hover:border-4 border-gray-600">
          <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://easysight.pk/wp-content/webp-express/webp-images/uploads/2022/12/Aster-green-front-723x377.jpg.webp" alt="content"/>
          <h3 className="tracking-widest text-yellow-500 text-xl font-serif font-bold">Aster Glassess</h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">₨ 2,499</h2>
          <p className="leading-relaxed text-base">Frame Size:  57 □16-142<br/>
Colour:  Green<br/>
Material: Metal</p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg hover:border-4 border-gray-600">
          <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://easysight.pk/wp-content/webp-express/webp-images/uploads/2022/12/Zoe-white-front-723x377.jpg.webp" alt="content"/>
          <h3 className="tracking-widest text-yellow-500 text-xl font-serif font-bold">Zoe Glasses</h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">₨ 1,699</h2>
          <p className="leading-relaxed text-base">Frame Size:  48 □20-139<br/>
Colour:  White <br/>
Material: Plastic</p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg hover:border-4 border-gray-600">
          <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://easysight.pk/wp-content/webp-express/webp-images/uploads/2023/08/03-Discord-723x377.png.webp" alt="content"/>
          <h3 className="tracking-widest text-yellow-500 text-xl font-serif font-bold">Discord Glasses</h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">₨ 2,500</h2>
          <p className="leading-relaxed text-base">Frame Size 52□17-140 <br/>
Colour: Maroon <br/>
Material: Plastic </p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg hover:border-4 border-gray-600">
          <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://easysight.pk/wp-content/webp-express/webp-images/uploads/2020/06/Treu-723x377.jpg.webp" alt="content"/>
          <h3 className="tracking-widest text-yellow-500 text-xl font-serif font-bold">Treu P-1290</h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">₨ 2,500</h2>
          <p className="leading-relaxed text-base">Frame Size: 48□21□139<br/>
Color:  Light Grey<br/>  
Material: Plastic</p>
        </div>
      </div>
    </div>
</section>

{/*footer*/}

<footer className="text-gray-600 body-font">
  <div className="container px-5 py-20 ml-4 flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        
        <span className="text-2xl bg-orange-600 text-white w-52 rounded text-center ml-5">GLASSESS WORLD</span>
      </a>
      <p className="mt-2 text-sm text-gray-700 ml-5">Air plant banjo lyft occupy retro adaptogen indego</p>
    </div>
    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">First Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Second Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Third Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">First Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Second Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Third Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">First Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Second Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Third Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">First Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Second Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Third Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
          </li>
        </nav>
      </div>
    </div>
  </div>
  <div className="bg-gray-100">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-gray-500 text-sm text-center sm:text-left">© 2020 Tailblocks —
        <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@knyttneve</a>
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <a className="text-gray-500">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a className="ml-3 text-gray-500">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a className="ml-3 text-gray-500">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a className="ml-3 text-gray-500">
          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
      </span>
    </div>
  </div>
</footer>
  </main>
  );
}
