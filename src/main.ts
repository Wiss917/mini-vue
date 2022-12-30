import { setupCounter } from "./hooks/useCounter";
import { useMediaQuery } from "./hooks/useMediaQuery";

const counter = document.querySelector<HTMLButtonElement>("#counter");

setupCounter(counter!);
useMediaQuery("(min-width: 542px)", (e) => {
  counter!.style.opacity = e.matches ? "1" : "0";
});
