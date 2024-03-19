import imgCommitment from "../assets/about/mobile/image-commitment.jpg";
import imgCommitmentTablet from "../assets/about/tablet/image-commitment.jpg";
import imgCommitmentDesktop from "../assets/about/desktop/image-commitment.jpg";
import quality from "../assets/about/mobile/image-quality.jpg";
import qualityTablet from "../assets/about/tablet/image-quality.jpg";
import qualityDesktop from "../assets/about/desktop/image-quality.jpg";

import uk from "../assets/about/desktop/illustration-uk.svg";
import canada from "../assets/about/desktop/illustration-canada.svg";
import australia from "../assets/about/desktop/illustration-australia.svg";

import { setResponsiveImg } from "../Utils";

export default function About() {
  const quarters = [
    {
      src: uk,
      country: "United Kingdom",
      info: {
        street: "68 Asfordby Rd",
        city: "Alcaston",
        state: "SY6 1YA",
        phone: "+44 1241 918425",
      },
    },
    {
      src: canada,
      country: "Canada",
      info: {
        street: "1528 Eglinton Avenue",
        city: "Toronto",
        state: "Ontario M4P 1A6",
        phone: "+1 416 485 2997",
      },
    },
    {
      src: australia,
      country: "Australia",
      info: {
        street: "36 Swanston Street",
        city: "Kewell",
        state: "Victoria",
        phone: "+61 4 9928 3629",
      },
    },
  ];

  return (
    <div id="about">
      <section className="aboutus mb-120 mb-md-144 mb-xl-168">
        <div className="d-flex flex-column px-24 px-md-60 px-xl-85 pt-110 pb-85 py-md-120 py-xl-140 py-3xl-160 py-4xl-180 backgroundAboutus text-center text-md-start borderRadius10">
          <div className="d-flex flex-column gap-24 aboutus-content">
            <div className="fraunces light-cream fs-28 fs-xl-40 fs-md-32">
              About Us
            </div>
            <p
              className="barlow light-cream fs-15 fs-xl-16"
              style={{ opacity: "0.8" }}
            >
              Coffeeroasters began its journey of exotic discovery in 1999,
              highlighting stories of coffee from around the world. We have
              since been dedicated to bring the perfect cup - from bean to brew
              - in every shipment.
            </p>
          </div>
        </div>
      </section>
      <section className="ourcommitment mb-120 mb-md-144 mb-xl-250">
        <div className="d-flex flex-column flex-md-row justify-content-md-center align-items-md-center gap-48 gap-md-70 gap-xl-125">
          {/* image div */}
          <div className="ourcommitment-imgdiv text-center">
            <img
              src={setResponsiveImg(
                imgCommitment,
                imgCommitmentTablet,
                imgCommitmentDesktop,
                576,
                1024
              )}
              alt="imgCommitment"
              className="imgCommitment rounded-3"
            />
          </div>
          {/* content */}
          <div className="d-flex flex-column gap-30 text-center ourcommitment-content">
            <div
              className="fraunces dark-grey-blue fs-32 fs-xl-40"
              style={{ lineHeight: 1.5 }}
            >
              Our commitment
            </div>
            <p className="barlow fs-15 dark-grey-blue" style={{ opacity: 0.8 }}>
              We’re built on a simple mission and a commitment to doing good
              along the way. We want to make it easy for you to discover and
              brew the world’s best coffee at home. It all starts at the source.
              To locate the specific lots we want to purchase, we travel nearly
              60 days a year trying to understand the challenges and
              opportunities in each of these places. We collaborate with
              exceptional coffee growers and empower a global community of
              farmers through with well above fair-trade benchmarks. We also
              offer training, support farm community initiatives, and invest in
              coffee plant science. Curating only the finest blends, we roast
              each lot to highlight tasting profiles distinctive to their native
              growing region.
            </p>
          </div>
        </div>
      </section>
      <section className="quality mb-120 mb-md-144 mb-xl-168">
        <div className="d-flex flex-column flex-xl-row align-items-xl-start pb-60 pt-xl-88 pb-xl-175 px-xl-85 qualityContainer">
          {/* imgdiv */}
          <div className="imgdiv order-xl-last">
            <div className="px-24 px-md-60 p-xl-0">
              <img
                src={setResponsiveImg(
                  quality,
                  qualityTablet,
                  qualityDesktop,
                  576,
                  1200
                )}
                alt="quality"
                className="img-cover rounded-3"
              />
            </div>
            <div className="halfBackground z-n1 rounded-top-3 d-xl-none"></div>
          </div>
          {/* content */}
          <div className="content rounded-bottom-3 pt-64 pb-60 px-24 px-md-74 p-xl-0 dark-grey-bg text-center text-xl-start d-flex flex-column gap-24">
            <div className="fraunces light-cream fs-28 fs-md-32 fs-xl-40 quality-caption">
              Uncompromising quality
            </div>
            <p className="barlow light-cream opacity08 fs-15 fs-lg-16">
              Although we work with growers who pay close attention to all
              stages of harvest and processing, we employ, on our end, a
              rigorous quality control program to avoid over-roasting or baking
              the coffee dry. Every bag of coffee is tagged with a roast date
              and batch number. Our goal is to roast consistent, user-friendly
              coffee, so that brewing is easy and enjoyable.
            </p>
          </div>
        </div>
      </section>
      <section className="headquarters px-lg-85 mb-120 mb-md-144 mb-xl-168">
        <div className="fraunces fs-24 grey text-center text-md-start mb-72">
          Our headquarters
        </div>
        {/* quarter container */}
        <div className="d-flex flex-column flex-md-row gap-48 gap-lg-108 gap-3xl-120">
          {/* quarter */}
          {quarters.map((item) => {
            return (
              <div
                className="d-flex flex-column gap-48 quarter text-center text-md-start"
                key={item.country}
              >
                <div>
                  <img src={item.src} />
                </div>
                <div className="d-flex flex-column gap-24">
                  <div
                    className="dark-grey-blue fraunces fs-28 fs-lg-32"
                    style={{ lineHeight: "1.28" }}
                  >
                    {item.country}
                  </div>
                  <p style={{ lineHeight: "1.6" }}>
                    {item.info.street}
                    <br />
                    {item.info.city}
                    <br />
                    {item.info.state}
                    <br />
                    {item.info.phone}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
