import { useEffect, useState } from "react";

import { hiwDivs } from "../Utils";

export default function Plan() {
  const [selectedOptions, setSelectedOption] = useState({
    drinkingType: "_____",
    coffeeType: "_____",
    gram: "_____",
    grind: "_____",
    deliver: "_____",
  });

  const [cost, setCost] = useState(0);

  const orderContent = (
    <div>
      "I drink my coffee{" "}
      {selectedOptions.drinkingType === "Capsule" ? "using" : "as"} &nbsp;
      <span className="dark-cyan">{selectedOptions.drinkingType}</span>, with a
      &nbsp;
      <span className="dark-cyan">{selectedOptions.coffeeType}</span> &nbsp;
      type of <br></br> bean.&nbsp;
      <span className="dark-cyan">{selectedOptions.gram}</span>
      &nbsp; ground ala &nbsp;
      <span className="dark-cyan">{selectedOptions.grind}</span>, sent to me
      <br></br>&nbsp;
      <span className="dark-cyan">{selectedOptions.deliver}</span>."
    </div>
  );

  const optionDB = {
    drinkingType: {
      question: "How do you drink your coffee?",
      option1: {
        caption: "Capsule",
        text: "Compatible with Nespresso systems and similar brewers",
      },
      option2: {
        caption: "Filter",
        text: "For pour over or drip methods like Aeropress, Chemex, and V60",
      },
      option3: {
        caption: "Espresso",
        text: "Dense and finely ground beans for an intense, flavorful experience",
      },
    },
    coffeeType: {
      question: "What type of coffee?",
      option1: {
        caption: "Single Origin",
        text: "Distinct, high quality coffee from a specific family-owned farm",
      },
      option2: {
        caption: "Decaf",
        text: "Just like regular coffee, except the caffeine has been removed",
      },
      option3: {
        caption: "Blended",
        text: "Combination of two or three dark roasted beans of organic coffees",
      },
    },
    gram: {
      question: "How much would you like?",
      option1: {
        caption: "250g",
        text: "Perfect for the solo drinker. Yields about 12 delicious cups.",
      },
      option2: {
        caption: "500g",
        text: "Perfect option for a couple. Yields about 40 delectable cups.",
      },
      option3: {
        caption: "1000g",
        text: "Perfect for offices and events. Yields about 90 delightful cups.",
      },
    },
    grind: {
      question: "Want us to grind them?",
      option1: {
        caption: "Wholebean",
        text: "Best choice if you cherish the full sensory experience",
      },
      option2: {
        caption: "Filter",
        text: "For drip or pour-over coffee methods such as V60 or Aeropress",
      },
      option3: {
        caption: "Cafetiére",
        text: "Course ground beans specially suited for french press coffee",
      },
    },
    deliver: {
      question: "How often should we deliver?",
      option1: {
        caption: "Every week",
        text: (
          <span>
            <span>
              {selectedOptions.gram === "250g"
                ? "$7.20"
                : selectedOptions.gram === "500g"
                ? "$13.00"
                : selectedOptions.gram === "1000g"
                ? "$22.00"
                : "$0.00"}
            </span>{" "}
            per shipment. Includes free first-class shipping.
          </span>
        ),
      },
      option2: {
        caption: "Every 2 weeks",
        text: (
          <span>
            <span>
              {selectedOptions.gram === "250g"
                ? "$9.60"
                : selectedOptions.gram === "500g"
                ? "$17.50"
                : selectedOptions.gram === "1000g"
                ? "$32.00"
                : "$0.00"}
            </span>{" "}
            per shipment. Includes free priority shipping.
          </span>
        ),
      },
      option3: {
        caption: "Every month",
        text: (
          <span>
            <span>
              {selectedOptions.gram === "250g"
                ? "$12.00"
                : selectedOptions.gram === "500g"
                ? "$22.00"
                : selectedOptions.gram === "1000g"
                ? "$42.00"
                : "$0.00"}
            </span>{" "}
            per shipment. Includes free priority shipping.
          </span>
        ),
      },
    },
  };

  function runPlan() {
    if (document.readyState === "complete") {
      useEffect(() => {
        updateSelectedOption();
        updateActiveOption();
        updateActiveLink();
        fixAccordionButtonWidth();
      }, []);
      dependDrinkingType();
      calculateCost();
    }
  }

  function updateSelectedOption() {
    let options = document.querySelectorAll(".bigSelectionOption");
    options.forEach((option) => {
      option.addEventListener("click", () => {
        let text: string = option.firstChild?.textContent as string;

        if (
          options[0] == option ||
          options[1] == option ||
          options[2] == option
        ) {
          setSelectedOption((previousState) => {
            return { ...previousState, drinkingType: text };
          });
        } else if (
          options[3] == option ||
          options[4] == option ||
          options[5] == option
        ) {
          setSelectedOption((previousState) => {
            return { ...previousState, coffeeType: text };
          });
        } else if (
          options[6] == option ||
          options[7] == option ||
          options[8] == option
        ) {
          setSelectedOption((previousState) => {
            return { ...previousState, gram: text };
          });
        } else if (
          options[9] == option ||
          options[10] == option ||
          options[11] == option
        ) {
          setSelectedOption((previousState) => {
            return { ...previousState, grind: text };
          });
        } else if (
          options[12] == option ||
          options[13] == option ||
          options[14] == option
        ) {
          setSelectedOption((previousState) => {
            return { ...previousState, deliver: text };
          });
        }
      });
    });
  }

  function updateActiveOption() {
    let options = document.querySelectorAll(".bigSelectionOption");
    options.forEach((option) => {
      option.addEventListener("click", () => {
        if (
          option == options[0] ||
          option == options[1] ||
          option == options[2]
        ) {
          options[0].classList.remove("active");
          options[1].classList.remove("active");
          options[2].classList.remove("active");
          option.classList.add("active");
        } else if (
          option == options[3] ||
          option == options[4] ||
          option == options[5]
        ) {
          options[3].classList.remove("active");
          options[4].classList.remove("active");
          options[5].classList.remove("active");
          option.classList.add("active");
        } else if (
          option == options[6] ||
          option == options[7] ||
          option == options[8]
        ) {
          options[6].classList.remove("active");
          options[7].classList.remove("active");
          options[8].classList.remove("active");
          option.classList.add("active");
        } else if (
          option == options[9] ||
          option == options[10] ||
          option == options[11]
        ) {
          options[9].classList.remove("active");
          options[10].classList.remove("active");
          options[11].classList.remove("active");
          option.classList.add("active");
        } else if (
          option == options[12] ||
          option == options[13] ||
          option == options[14]
        ) {
          options[12].classList.remove("active");
          options[13].classList.remove("active");
          options[14].classList.remove("active");
          option.classList.add("active");
        }
      });
    });
  }

  function updateActiveLink() {
    let links = document.querySelectorAll(".navigate-item");
    links.forEach((link) => {
      link.addEventListener("click", () => {
        // remove all active link classes
        links.forEach((link) => {
          link.classList.remove("active");
        });
        link.classList.add("active");
      });
    });
  }

  function clickAccordionButton(
    accordionButtonOrder: number,
    collapseID: string
  ) {
    let buttonOrder: number = accordionButtonOrder - 1;
    let collapseBody: HTMLElement = document.getElementById(
      collapseID
    ) as HTMLElement;

    if (collapseBody.classList.contains("show") === false) {
      let button: HTMLElement = document.querySelectorAll(".accordion-button")[
        buttonOrder
      ] as HTMLElement;
      button.click();
    }
  }

  function fixAccordionButtonWidth() {
    let body: HTMLElement = document.querySelector(
      ".accordion-body"
    ) as HTMLElement;

    let width: number = body.offsetWidth;

    let buttons: NodeListOf<HTMLElement> =
      document.querySelectorAll(".accordion-button");
    buttons.forEach((button) => {
      button.style.width = width.toString() + "px";
    });
  }

  function toggleCheckout() {
    let orderResultDiv: HTMLElement = document.querySelector(
      ".orderResultDiv"
    ) as HTMLElement;

    orderResultDiv.classList.toggle("visible");
  }

  function dependDrinkingType() {
    useEffect(() => {
      let button: HTMLButtonElement =
        document.querySelector("#fourthItem button")!;
      let collapseFour: HTMLElement = document.querySelector("#collapseFour")!;
      console.log("drinkingType: " + selectedOptions.drinkingType);
      if (selectedOptions.drinkingType === "Capsule") {
        button.classList.add("disabled");
        button.disabled = true;
        collapseFour.classList.add("d-none");
        setSelectedOption((prevValues) => {
          return { ...prevValues, grind: "" };
        });
      } else {
        button.classList.remove("disabled");
        button.disabled = false;
        collapseFour.classList.remove("d-none", "show");
        if (selectedOptions.grind == "") {
          setSelectedOption((prevValues) => {
            return { ...prevValues, grind: "_____" };
          });
        }
      }
    }, [selectedOptions.drinkingType]);
  }

  function calculateCost() {
    useEffect(() => {
      if (selectedOptions.deliver === "Every week") {
        console.log("every week!");
        setCost(
          selectedOptions.gram == "250g"
            ? 28.8
            : selectedOptions.gram == "500g"
            ? 52.0
            : selectedOptions.gram == "1000g"
            ? 88.0
            : 0
        );
      } else if (selectedOptions.deliver === "Every 2 weeks") {
        setCost(
          selectedOptions.gram == "250g"
            ? 19.2
            : selectedOptions.gram == "500g"
            ? 35.0
            : selectedOptions.gram == "1000g"
            ? 64.0
            : 0
        );
      } else if (selectedOptions.deliver === "Every month") {
        setCost(
          selectedOptions.gram == "250g"
            ? 12.0
            : selectedOptions.gram == "500g"
            ? 22.0
            : selectedOptions.gram == "1000g"
            ? 42.0
            : 0
        );
      }
    }, [selectedOptions.deliver]);
  }

  runPlan();

  return (
    <div id="plan">
      <section className="plan background mb-120 mb-md-144 mb-xl-168">
        <div className="px-24 px-md-60 px-xl-85 pt-100 pb-135 py-md-128 py-xl-135">
          <div className="d-flex flex-column gap-24 gap-xl-32 text-center text-md-start content">
            <div className="fraunces fs-40 fs-md-48 fs-xl-72 light-cream">
              Create a plan
            </div>
            <p className="barlow fs-15 fs-xl-16 light-cream opacity08">
              Build a subscription plan that best fits your needs. We offer an
              assortment of the best artisan coffees from around the globe
              delivered fresh to your door.
            </p>
          </div>
        </div>
      </section>
      <section className="howitworks dark-grey-bg rounded-3 px-24 px-lg-65 px-xl-85 px-4xl-150 py-80 mb-120 mb-md-144 mb-xl-168">
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
                  className="fraunces fs-28 fs-lg-32 text-white"
                  style={{ lineHeight: "114%" }}
                >
                  {item.caption}
                  <br className="" />
                  {item.captionpart2}
                </div>
                <p className="barlow text-white fs-15 fs-lg-16">{item.text}</p>
              </div>
            );
          })}
        </div>
      </section>
      <section className="accordionSection mb-120 mb-md-144 mb-xl-168">
        <div className="d-flex flex-column flex-xl-row justify-content-xl-center align-items-xl-start gap-xl-120">
          {/* accordion items navigation */}
          <div
            className="navigate d-none d-xl-block pt-24"
            style={{ position: "sticky", top: "15px" }}
          >
            <div className="d-flex flex-column gap-24">
              <a
                className="d-flex gap-28 navigate-item active fraunces fs-24"
                href="#firstItem"
                onClick={() => {
                  clickAccordionButton(1, "collapseOne");
                }}
              >
                <div>01</div>
                <div>Preferences</div>
              </a>
              {/* line */}
              <div
                className="navigate-line grey-bg"
                style={{
                  height: 1,
                  width: "100%",
                }}
              ></div>
              <a
                href="#secondItem"
                className="d-flex gap-28 navigate-item fraunces fs-24"
                onClick={() => {
                  clickAccordionButton(2, "collapseTwo");
                }}
              >
                <div>02</div>
                <div>Bean Type</div>
              </a>
              {/* line */}
              <div
                className="navigate-line grey-bg"
                style={{
                  height: 1,
                  width: "100%",
                }}
              ></div>
              <a
                href="#thirdItem"
                className="d-flex gap-28 navigate-item fraunces fs-24"
                onClick={() => {
                  clickAccordionButton(3, "collapseThree");
                }}
              >
                <div>03</div>
                <div>Quantity</div>
              </a>
              {/* line */}
              <div
                className="navigate-line grey-bg"
                style={{
                  height: 1,
                  width: "100%",
                }}
              ></div>
              <a
                href="#fourthItem"
                className="d-flex gap-28 navigate-item fraunces fs-24"
                onClick={() => {
                  clickAccordionButton(4, "collapseFour");
                }}
              >
                <div>04</div>
                <div>Grind Option</div>
              </a>
              {/* line */}
              <div
                className="navigate-line grey-bg"
                style={{
                  height: 1,
                  width: "100%",
                }}
              ></div>
              <a
                href="#fifthItem"
                className="d-flex gap-28 navigate-item fraunces fs-24"
                onClick={() => {
                  clickAccordionButton(5, "collapseFive");
                }}
              >
                <div>05</div>
                <div>Deliveries</div>
              </a>
            </div>
          </div>
          {/* accordion */}
          <div
            className="accordion d-flex flex-column gap-110 gap-md-100"
            id="accordion"
          >
            {/* items */}
            <div
              className="accordion-item d-flex flex-column gap-32 gap-md-40"
              id="firstItem"
            >
              <h2 className="accordion-header">
                <button
                  className="accordion-button py-24"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  <div
                    className="fraunces fs-24 question"
                    style={{ lineHeight: "116%" }}
                  >
                    {optionDB.drinkingType.question}
                  </div>
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
              >
                <div className="accordion-body">
                  <div className="d-flex flex-column flex-md-row gap-16 gap-md-10 gap-xl-24">
                    <div className="bigSelectionOption">
                      <div
                        className="fraunces dark-grey-blue fs-24"
                        style={{ lineHeight: "1.33" }}
                      >
                        {optionDB.drinkingType.option1.caption}
                      </div>
                      <p
                        className="barlow dark-grey-blue fs-16"
                        style={{ lineHeight: "162.5%" }}
                      >
                        {optionDB.drinkingType.option1.text}
                      </p>
                    </div>
                    <div className="bigSelectionOption">
                      <div
                        className="fraunces dark-grey-blue fs-24"
                        style={{ lineHeight: "1.33" }}
                      >
                        {optionDB.drinkingType.option2.caption}
                      </div>
                      <p
                        className="barlow dark-grey-blue fs-16"
                        style={{ lineHeight: "162.5%" }}
                      >
                        {optionDB.drinkingType.option2.text}
                      </p>
                    </div>
                    <div className="bigSelectionOption">
                      <div
                        className="fraunces dark-grey-blue fs-24"
                        style={{ lineHeight: "1.33" }}
                      >
                        {optionDB.drinkingType.option3.caption}
                      </div>
                      <p
                        className="barlow dark-grey-blue fs-16"
                        style={{ lineHeight: "162.5%" }}
                      >
                        {optionDB.drinkingType.option3.text}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="accordion-item d-flex flex-column gap-32 gap-md-40"
              id="secondItem"
            >
              <h2 className="accordion-header">
                <button
                  className="accordion-button py-24 collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  <div
                    className="fraunces fs-24 question"
                    style={{ lineHeight: "116%" }}
                  >
                    {optionDB.coffeeType.question}
                  </div>
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse">
                <div className="accordion-body">
                  <div className="d-flex flex-column flex-md-row gap-16 gap-md-10 gap-xl-24">
                    <div className="bigSelectionOption">
                      <div
                        className="fraunces dark-grey-blue fs-24"
                        style={{ lineHeight: "1.33" }}
                      >
                        {optionDB.coffeeType.option1.caption}
                      </div>
                      <p
                        className="barlow dark-grey-blue fs-16"
                        style={{ lineHeight: "162.5%" }}
                      >
                        {optionDB.coffeeType.option1.text}
                      </p>
                    </div>
                    <div className="bigSelectionOption">
                      <div
                        className="fraunces dark-grey-blue fs-24"
                        style={{ lineHeight: "1.33" }}
                      >
                        {optionDB.coffeeType.option2.caption}
                      </div>
                      <p
                        className="barlow dark-grey-blue fs-16"
                        style={{ lineHeight: "162.5%" }}
                      >
                        {optionDB.coffeeType.option2.text}
                      </p>
                    </div>
                    <div className="bigSelectionOption">
                      <div
                        className="fraunces dark-grey-blue fs-24"
                        style={{ lineHeight: "1.33" }}
                      >
                        {optionDB.coffeeType.option3.caption}
                      </div>
                      <p
                        className="barlow dark-grey-blue fs-16"
                        style={{ lineHeight: "162.5%" }}
                      >
                        {optionDB.coffeeType.option3.text}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="accordion-item d-flex flex-column gap-32 gap-md-40"
              id="thirdItem"
            >
              <h2 className="accordion-header">
                <button
                  className="accordion-button py-24 collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  <div
                    className="fraunces fs-24 question"
                    style={{ lineHeight: "116%" }}
                  >
                    {optionDB.gram.question}
                  </div>
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse">
                <div className="accordion-body">
                  <div className="d-flex flex-column flex-md-row gap-16 gap-md-10 gap-xl-24">
                    <div className="bigSelectionOption">
                      <div
                        className="fraunces dark-grey-blue fs-24"
                        style={{ lineHeight: "1.33" }}
                      >
                        {optionDB.gram.option1.caption}
                      </div>
                      <p
                        className="barlow dark-grey-blue fs-16"
                        style={{ lineHeight: "162.5%" }}
                      >
                        {optionDB.gram.option1.text}
                      </p>
                    </div>
                    <div className="bigSelectionOption">
                      <div
                        className="fraunces dark-grey-blue fs-24"
                        style={{ lineHeight: "1.33" }}
                      >
                        {optionDB.gram.option2.caption}
                      </div>
                      <p
                        className="barlow dark-grey-blue fs-16"
                        style={{ lineHeight: "162.5%" }}
                      >
                        {optionDB.gram.option2.text}
                      </p>
                    </div>
                    <div className="bigSelectionOption">
                      <div
                        className="fraunces dark-grey-blue fs-24"
                        style={{ lineHeight: "1.33" }}
                      >
                        {optionDB.gram.option3.caption}
                      </div>
                      <p
                        className="barlow dark-grey-blue fs-16"
                        style={{ lineHeight: "162.5%" }}
                      >
                        {optionDB.gram.option3.text}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="accordion-item d-flex flex-column gap-32 gap-md-40"
              id="fourthItem"
            >
              <h2 className="accordion-header">
                <button
                  className="accordion-button py-24 collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  <div
                    className="fraunces fs-24 question"
                    style={{ lineHeight: "116%" }}
                  >
                    {optionDB.grind.question}
                  </div>
                </button>
              </h2>
              <div id="collapseFour" className="accordion-collapse collapse">
                <div className="accordion-body">
                  <div className="d-flex flex-column flex-md-row gap-16 gap-md-10 gap-xl-24">
                    <div className="bigSelectionOption">
                      <div
                        className="fraunces dark-grey-blue fs-24"
                        style={{ lineHeight: "1.33" }}
                      >
                        {optionDB.grind.option1.caption}
                      </div>
                      <p
                        className="barlow dark-grey-blue fs-16"
                        style={{ lineHeight: "162.5%" }}
                      >
                        {optionDB.grind.option1.text}
                      </p>
                    </div>
                    <div className="bigSelectionOption">
                      <div
                        className="fraunces dark-grey-blue fs-24"
                        style={{ lineHeight: "1.33" }}
                      >
                        {optionDB.grind.option2.caption}
                      </div>
                      <p
                        className="barlow dark-grey-blue fs-16"
                        style={{ lineHeight: "162.5%" }}
                      >
                        {optionDB.grind.option2.text}
                      </p>
                    </div>
                    <div className="bigSelectionOption">
                      <div
                        className="fraunces dark-grey-blue fs-24"
                        style={{ lineHeight: "1.33" }}
                      >
                        {optionDB.grind.option3.caption}
                      </div>
                      <p
                        className="barlow dark-grey-blue fs-16"
                        style={{ lineHeight: "162.5%" }}
                      >
                        {optionDB.grind.option3.text}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="accordion-item d-flex flex-column gap-32 gap-md-40"
              id="fifthItem"
            >
              <h2 className="accordion-header">
                <button
                  className="accordion-button py-24 collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseFive"
                >
                  <div
                    className="fraunces fs-24 question"
                    style={{ lineHeight: "116%" }}
                  >
                    {optionDB.deliver.question}
                  </div>
                </button>
              </h2>
              <div id="collapseFive" className="accordion-collapse collapse">
                <div className="accordion-body">
                  <div className="d-flex flex-column flex-md-row gap-16 gap-md-10 gap-xl-24">
                    <div className="bigSelectionOption">
                      <div
                        className="fraunces dark-grey-blue fs-24"
                        style={{ lineHeight: "1.33" }}
                      >
                        {optionDB.deliver.option1.caption}
                      </div>
                      <p
                        className="barlow dark-grey-blue fs-16"
                        style={{ lineHeight: "162.5%" }}
                      >
                        {optionDB.deliver.option1.text}
                      </p>
                    </div>
                    <div className="bigSelectionOption">
                      <div
                        className="fraunces dark-grey-blue fs-24"
                        style={{ lineHeight: "1.33" }}
                      >
                        {optionDB.deliver.option2.caption}
                      </div>
                      <p
                        className="barlow dark-grey-blue fs-16"
                        style={{ lineHeight: "162.5%" }}
                      >
                        {optionDB.deliver.option2.text}
                      </p>
                    </div>
                    <div className="bigSelectionOption">
                      <div
                        className="fraunces dark-grey-blue fs-24"
                        style={{ lineHeight: "1.33" }}
                      >
                        {optionDB.deliver.option3.caption}
                      </div>
                      <p
                        className="barlow dark-grey-blue fs-16"
                        style={{ lineHeight: "162.5%" }}
                      >
                        {optionDB.deliver.option3.text}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* order summary */}
            <div className="summary d-flex flex-column gap-48 align-items-center align-items-xl-end mt-100">
              <div className="dark-grey-bg px-36 py-24 rounded-2">
                <div className="barlow mb-8 text-white">ORDER SUMMARY</div>
                <div className="fraunces text-white fs-24 lh-base">
                  {orderContent}
                </div>
              </div>
              <div className="w-100 text-center text-xl-end">
                <button
                  className="mainButton checkoutButton"
                  onClick={toggleCheckout}
                >
                  Create my plan!
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* order result */}
      <div className="orderResultDiv d-flex justify-content-center align-items-center z-2 p-16 p-md-32">
        <div className="rounded-2 overflow-auto">
          <div className="dark-grey-blue-bg p-40 fraunces fs-28 fs-xl-40 z-3 position-relative text-white lh-1">
            Order Summary
          </div>
          <div className="p-40 p-md-60 bg-white">
            <div className="fraunces grey fs-24 lh-base">{orderContent}</div>
            <p className="fs-15 fs-md-16 dark-grey-blue barlow mb-16">
              Is this correct? You can proceed to checkout or go back to plan
              selection if something is off.{" "}
              <br className="d-none d-lg-block"></br> Subscription discount
              codes can also be redeemed at the checkout.
            </p>
            <button
              className="mainButton fraunces w-100 text-center checkoutButton d-md-none"
              onClick={toggleCheckout}
            >
              Checkout - ${cost} / mo
            </button>
            <div className="d-none d-md-flex justify-content-center align-items-center gap-16 fraunces">
              <span className="fs-32 dark-grey-blue">${cost} / mo</span>
              <button
                className="mainButton px-60 checkoutButton"
                onClick={toggleCheckout}
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
