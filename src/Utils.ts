
export function setResponsiveImg(
    mobileImg: string,
    tabletImg: string,
    desktopImg: string,
    mobileWidth: number,
    tabletWidth: number
  ) {
    // get window width
    let width: number = window.innerWidth;
    
    // determine img based on window width
    let result: string =
      width < mobileWidth
        ? mobileImg
        : width < tabletWidth
        ? tabletImg
        : desktopImg;

    return result;
  }



 export const hiwDivs = [
    {
      number: "01",
      caption: "Pick your ",
      captionpart2: "coffee",
      text: "Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.",
    },
    {
      number: "02",
      caption: "Choose the ",
      captionpart2: "frequency",
      text: "Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.",
    },
    {
      number: "03",
      caption: "Receive and ",
      captionpart2: "enjoy!",
      text: `We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning 
      world-class coffees curated to provide a distinct tasting experience.`,
    },
  ];