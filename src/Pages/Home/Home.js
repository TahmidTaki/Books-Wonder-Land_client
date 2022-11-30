import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useState } from "react";
import CategoryCard from "../../components/CategoryCard";
import "./Home.css";

const Home = () => {
  const [advertisedItems, setAdvertisedItems] = useState([]);
  const { isLoading, data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/categories");
      const data = await res.json();
      return data;
    },
  });

  useEffect(() => {
    axios.get("http://localhost:5000/advertisedbook").then((data) => {
      setAdvertisedItems(data.data);
      // console.log(data);
    });
  }, []);
  return (
    <div>
      <div className="banner py-8">
        <section className="text-gray-100">
          <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row">
            <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
              <img
                src="https://i.ibb.co/T1fSvwP/99349-girl-with-books.gif"
                alt=""
                className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
              />
            </div>
            <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
              <h1 className="text-5xl font-bold leading-none sm:text-6xl">
                Books <span className="text-lime-400">Wonder</span>Land
              </h1>
              <p className="mt-6 mb-8 text-lg sm:mb-12">
                Since 2019, we have offered affordable used books. Find books for sale that are in
                good condition from international vendors. You can find excellent books to read,
                save money, support independent booksellers, and practise sustainability by shopping
                for secondhand goods. On Book WonderLand, you may find lots of inexpensive paperback
                books as well as books on autobiographies, memoirs, poetry, children's picture books
                etc.{" "}
              </p>
            </div>
          </div>
        </section>
      </div>
      {/* steps */}
      <div className="py-12 steps-section">
        <h3>Easy steps to follow</h3>
        <ul className="steps steps-vertical lg:steps-horizontal">
          <li className="step step-primary">Register as buyer/seller</li>
          <li className="step step-primary">Choose Book/Upload Book for Resale</li>
          <li className="step step-primary">Pay Via Card/Get Payment</li>
          <li className="step">Receive Product/Deliver Product</li>
        </ul>
      </div>
      {/* categories of books */}
      <div className="py-24 categories-section">
        <h3 className="text-4xl font-semibold mb-8">Choose Book Categories Below</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories?.map((category) => (
            <CategoryCard key={category._id} category={category}></CategoryCard>
          ))}
          <br />
        </div>
      </div>

      {/* <h3>{advertisedItems.length}</h3> */}

      {/* 50%off banner */}
      <div className="p-6 py-12 bg-lime-500 text-gray-900">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <h2 className="text-center text-6xl tracking-tighter font-bold">
              Up to <br className="sm:hidden" />
              50% Off
            </h2>
            {/* 50% off banner */}
            <div className="space-x-2 text-center py-2 lg:py-0">
              <span>Plus free shipping! Use code:</span>
              <span className="font-bold text-lg">MYBOOKS</span>
            </div>
          </div>
        </div>
      </div>

      {/* advertisement section */}
      {advertisedItems?.length > 0 && (
        <div className="mt-8">
          <h3 className="text-3xl font-bold mb-8">Advertised items</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center">
            {advertisedItems?.map((ad) => (
              <div key={ad._id} className="card bg-base-100 shadow-xl">
                <figure>
                  <img src={ad?.image} alt="books" className="w-96 h-96" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    {ad?.name}
                    <div className="badge badge-secondary">{ad.condition}</div>
                  </h2>
                  <p>Location: {ad.location}</p>
                  <p>Usage Duration: {ad.usageDuration} Years</p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline">$ {ad.resalePrice}</div>
                    <div className="badge badge-outline">{ad.purchaseYear}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 4 Reasons to buy book online starts*/}
      <section className="py-6 sm:py-12  reasons-section text-gray-100">
        <div className="container p-6 mx-auto space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold">4 Reasons To Buy Used Book Online</h2>
          </div>
          <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
            <article className="flex flex-col bg-gray-900 rounded-lg">
              <p>
                <img
                  alt=""
                  className="object-cover w-full h-52  bg-gray-500"
                  src="https://i.ibb.co/Gx3Wk7g/1download.webp"
                />
              </p>
              <div className="flex flex-col flex-1 p-6">
                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Cheap Prices</h3>
                <p
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs tracking-wider uppercase hover:underline  text-lime-400"
                >
                  Used books offer tremendous value for money to avid readers on a budget. With
                  prices starting at RM 1 plus shipping, AbeBooks customers never run out of reading
                  material.
                </p>
              </div>
            </article>
            <article className="flex flex-col  bg-gray-900 rounded-lg">
              <p>
                <img
                  alt=""
                  className="object-cover w-full h-52  bg-gray-500"
                  src="https://i.ibb.co/p0zMzFn/2download.webp"
                />
              </p>
              <div className="flex flex-col flex-1 p-6">
                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Sustainability</h3>
                <p
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs tracking-wider uppercase hover:underline  text-lime-400"
                >
                  Buying used books is one of the oldest forms of recycling. A book should have many
                  owners during its lifetime. Be sustainable by building a collection of pre-owned
                  books.
                </p>
              </div>
            </article>
            <article className="flex flex-col  bg-gray-900 rounded-lg">
              <p>
                <img
                  alt=""
                  className="object-cover w-full h-52  bg-gray-500"
                  src="https://i.ibb.co/FgtKcMg/3download.webp"
                />
              </p>
              <div className="flex flex-col flex-1 p-6">
                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                  Independent used booksellers
                </h3>
                <p
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs tracking-wider uppercase hover:underline  text-lime-400"
                >
                  Andrea & Jordan Minter own Russell Books, one of Canada's biggest used bookstores.
                  They began selling on our site in 2021. We're proud to support the seller
                  community.
                </p>
              </div>
            </article>
            <article className="flex flex-col  bg-gray-900 rounded-lg">
              <p>
                <img
                  alt=""
                  className="object-cover w-full h-52  bg-gray-500"
                  src="https://i.ibb.co/XVdmDXx/4download.webp"
                />
              </p>
              <div className="flex flex-col flex-1 p-6">
                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                  Unbeatable selection
                </h3>
                <p
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs tracking-wider uppercase hover:underline  text-lime-400"
                >
                  We offer a lot of used books for sale in dozens of languages. Plus, our selection
                  includes books on every genre and topic you can imagine.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
      {/* 4 Reasons to buy book online ends*/}
      <footer className="footer footer-center p-10 footer-bg text-primary-content">
        <div>
          <svg
            width="50"
            height="50"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            className="inline-block fill-current"
          >
            <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
          </svg>
          <p className="font-bold">
            Books WonderLand Ltd. <br />
            Providing reliable book resale since 2019
          </p>
          <p>Copyright © 2019 - All right reserved</p>
        </div>
        <div>
          <div className="grid grid-flow-row gap-4">
            <h3>This website was developed by Tahmid Taki Rahman</h3>
            <p>Developer Contact: rahman.tr53@gmail.com</p>
            <p>
              Linkedin:{" "}
              <a href="https://www.linkedin.com/in/tahmid-taki/" className="link link-primary">
                Tahmid Taki
              </a>{" "}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
