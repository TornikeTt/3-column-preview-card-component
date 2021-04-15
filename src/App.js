import './App.css';
import Columns from "./Columns";


function App() {
  const equipment = [   
    {
      background__color: "hsl(31, 77%, 52%)",
      car: "Images/sedans.png",
      Header_text: "Sedans",
      text: "Choose a sedan for its affordability and excellent fuel economy.Ideal for cruising in the city or on your next road trip.",
    },

    {
      background__color: "hsl(184, 100%, 22%)",
      car: "Images/suvs.png",
      Header_text: "SUVS",
      text: "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.",
    },
    
    {
      background__color: "hsl(179, 100%, 13%)",
      car: "Images/luxury.png",
      Header_text: "Luxury",
      text: "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.",
    }
  ]

  return (
    <div className="App">
          <Columns  equipment={equipment}/>
    </div>
  );
}

export default App;
