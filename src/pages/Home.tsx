import espresso from "../assets/home/desktop/image-gran-espresso.png";
import planalto from "../assets/home/desktop/image-planalto.png";
import picollo from "../assets/home/desktop/image-piccollo.png";
import danche from "../assets/home/desktop/image-danche.png";

import bean from "../assets/home/desktop/icon-coffee-bean.svg";
import gift from "../assets/home/desktop/icon-gift.svg";
import truck from "../assets/home/desktop/icon-truck.svg";

import { hiwDivs } from "../Utils";

export default function Home() {
  const items = [
    {
      imgSrc: bean,
      caption: "Best Quality",
      description: `Discover an endless variety of the world’s best artisan coffee
    from each of our roasters.`,
      class: {
        classImg: "text-center ms-md-20 ms-lg-0 mt-lg-30",
      },
    },
    {
      imgSrc: gift,
      caption: "Exclusive benefits",
      description: `Special offers and swag when you subscribe, including 30% off your first shipment.`,
      class: {
        classImg: "text-center ms-md-20 ms-lg-0 mt-lg-30",
      },
    },
    {
      imgSrc: truck,
      caption: "Free shipping",
      description: `We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.`,
      class: {
        classImg: "text-center ms-md-20 ms-lg-0 mt-lg-40 mt-xl-50",
      },
    },
  ];

  const collections = [
    {
      imgSrc: espresso,
      caption: "Gran Espresso",
      description: `Light and flavorful blend with cocoa and black pepper for an
      intense experience`,
    },
    {
      imgSrc: planalto,
      caption: "Planalto",
      description: `Brazilian dark roast with rich and velvety body, and hints of fruits and nuts`,
    },
    {
      imgSrc: picollo,
      caption: "Piccollo",
      description: `Mild and smooth blend featuring notes of toasted almond and dried cherry `,
    },
    {
      imgSrc: danche,
      caption: "Danche",
      description: `Ethiopian hand-harvested blend densely packed with vibrant fruit notes`,
    },
  ];

  return (
    <div id="home">
      <section className="createCoffee mb-120 mb-md-74 mb-xl-50">
        <div className="backgroundCoffee py-100 py-xl-120 py-3xl-150 py-4xl-200 px-24 px-md-60 px-xl-85">
          <div className="content">
            <h2 className="fraunces fs-40 fs-md-48 largeSize text-center text-md-start light-cream mb-24 coffeeCaption">
              Great coffee made simple.
            </h2>
            <p
              className="barlow fs-lg-16 text-center text-md-start light-cream mb-40"
              style={{ opacity: "0.8" }}
            >
              Start your mornings with the world’s best coffees. Try our
              expertly curated artisan coffees from our best roasters delivered
              directly to your door, at your schedule.
            </p>
            <div className="text-center text-md-start">
              <button className="mainButton">Create your plan</button>
            </div>
          </div>
        </div>
      </section>
      <section className="ourcollection marginbottom">
        <div
          className="collectionCaption fraunces mb-13 mb-md-0 fs-40 text-center z-n1 position-relative"
          id="collectionCaption"
        >
          our collection
          <div className="linearBackground"></div>
        </div>
        {/* collectionBox container */}
        <div className="d-flex flex-column flex-xl-row gap-48 gap-xl-30 align-items-xl-start justify-content-xl-center">
          {collections.map((item) => {
            return (
              // collectionBox
              <div
                className="d-flex flex-column flex-md-row flex-xl-column gap-md-36 align-items-md-center justify-content-md-center"
                key={item.caption}
              >
                <div className="d-flex justify-content-center mb-24 mb-md-0">
                  <img src={item.imgSrc} className="collectionImage" />
                </div>
                <div className="collectionBox-content text-center text-md-start text-lg-center">
                  <div
                    className="fraunces fs-24 dark-grey-blue mb-16 mb-lg-24"
                    style={{ lineHeight: "133%" }}
                  >
                    {item.caption}
                  </div>
                  <p className="barlow">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section className="whychooseus marginbottom">
        {/* why choose us? */}
        <div
          className="px-24 px-md-75 px-xl-370 pt-64 pt-md-56 pb-28 d-flex flex-column gap-24 whychoousBackground"
          style={{ borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }}
        >
          <div className="fraunces fs-28 fs-md-32 fs-xl-40 text-center light-cream">
            Why choose us?
          </div>
          <p
            className="barlow text-center fs-15 light-cream"
            style={{ opacity: "0.8" }}
          >
            A large part of our role is choosing which particular coffees will
            be featured in our range. This means working closely with the best
            coffee growers to give you a more impactful experience on every
            level.
          </p>
        </div>
        <div className="px-24 px-md-60 py-36 position-relative">
          <div className="whyContainer dark-grey-bg z-n1"></div>
          <div className="d-flex flex-column flex-lg-row gap-24 gap-xl-30 justify-content-lg-center">
            {items.map((item) => {
              return (
                <div
                  className="d-flex flex-column flex-md-row flex-lg-column align-items-md-center gap-56 pt-70 pb-50 py-md-40 px-30 px-md-50 px-lg-40 px-xl-48 dark-cyan-bg whyBox"
                  style={{ borderRadius: "8px" }}
                  key={item.caption}
                >
                  <div className={item.class.classImg}>
                    <img src={item.imgSrc} className="whyImage" />
                  </div>
                  <div className="d-flex flex-column gap-24">
                    <div className="fraunces light-cream text-center text-md-start text-lg-center fs-24">
                      {item.caption}
                    </div>
                    <p className="barlow fs-15 light-cream text-center text-md-start text-lg-center">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="howitworks px-lg-65 px-xl-85 px-4xl-150 marginbottom">
        <div className="fraunces text-center text-md-start fs-24 grey mb-80 mb-md-40">
          How it works
        </div>
        <div className="d-none d-md-flex mb-48 align-items-center">
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
        </div>
        {/* hiwDivs container */}
        <div className="d-flex flex-column flex-md-row gap-56 gap-md-30 gap-lg-40 gap-xl-95 mb-80 mb-md-45 mb-lg-60">
          {hiwDivs.map((item) => {
            return (
              <div
                className="d-flex flex-column gap-24 text-center text-md-start hiwDiv"
                key={item.number}
              >
                <div className="fraunces fsNumber pale-orange">
                  {item.number}
                </div>
                <div
                  className="fraunces fs-28 fs-lg-32 dark-grey-blue"
                  style={{ lineHeight: "114%" }}
                >
                  {item.caption}
                  <br className="" />
                  {item.captionpart2}
                </div>
                <p className="barlow dark-grey-blue fs-15 fs-lg-16">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
        <div className="text-center text-md-start">
          <button className="mainButton">Create your plan</button>
        </div>
      </section>
    </div>
  );
}
