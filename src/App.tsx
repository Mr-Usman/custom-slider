import "./styles.css";
import { Slider } from "./Slider";

const images = [
  [
    {
      src: "https://via.placeholder.com/200x200?text=Image+1",
      alt: "Image 1",
      caption: "Dein Traumauto heute schon entdecken. - ANZEIGE - Ford",
    },
    {
      src: "https://via.placeholder.com/200x200?text=Image+2",
      alt: "Image 2",
      caption:
        "Nie mehr zu viel für deinen Einkauf bezahlen. - ANZEIGE - Kaufland",
    },
    {
      src: "https://via.placeholder.com/200x200?text=Image+3",
      alt: "Image 3",
      caption: "Nie mehr zu viel für deinen Einkauf bezahlen. - ANZEIGE -",
    },
  ],
  [
    {
      src: "https://via.placeholder.com/200x200?text=Image+4",
      alt: "Image 4",
      caption: "Dein Traumauto heute schon entdecken. - ANZEIGE - Ford",
    },
    {
      src: "https://via.placeholder.com/200x200?text=Image+5",
      alt: "Image 5",
      caption:
        "Nie mehr zu viel für deinen Einkauf bezahlen. - ANZEIGE - Kaufland",
    },
    {
      src: "https://via.placeholder.com/200x200?text=Image+6",
      alt: "Image 6",
      caption: "Nie mehr zu viel für deinen Einkauf bezahlen. - ANZEIGE -",
    },
  ],
  [
    {
      src: "https://via.placeholder.com/200x200?text=Image+7",
      alt: "Image 7",
      caption: "Dein Traumauto heute schon entdecken. - ANZEIGE - Ford",
    },
    {
      src: "https://via.placeholder.com/200x200?text=Image+8",
      alt: "Image 8",
      caption:
        "Nie mehr zu viel für deinen Einkauf bezahlen. - ANZEIGE - Kaufland",
    },
    {
      src: "https://via.placeholder.com/200x200?text=Image+9",
      alt: "Image 9",
      caption: "Nie mehr zu viel für deinen Einkauf bezahlen. - ANZEIGE -",
    },
  ],
];

export default function App() {
  return (
    <div className="App">
      <Slider images={images} />
    </div>
  );
}
