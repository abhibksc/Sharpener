import Header from "./Components/Header Component/Header";
import Body from "./Components/Body Component/Body";
import { useEffect } from "react";



function App() {

  useEffect(() => {
    const centeredDivs = document.getElementsByClassName('shoeBlue');
    const centeredDivss = document.getElementsByClassName('SellerForm');
    console.log(centeredDivss);


    for (let i = 0; i < centeredDivs.length; i++) {
      
      const centeredDiv = centeredDivs[i];
      const centeredDivsss = centeredDivss[i];

      setTimeout(() => {
        centeredDiv.style.opacity = '1';
        centeredDiv.style.transition = 'opacity 1s ease-in-out, transform 1s ease-in-out'; // Transition for opacity and transform
        centeredDiv.style.transform = 'translate(0%, 30%)';

        centeredDivsss.style.opacity = '1';
        centeredDivsss.style.transition = 'opacity 1s ease-in-out, transform 1s ease-in-out'; // Transition for opacity and transform
        centeredDivsss.style.transform = 'translate(0%, 30%)';

        
      }, 0);

    }
  }, []); 


  return (
    
    <div className="bg-slate-900 flex flex-col">

        <Header />
        <Body />
        <footer className="text-center bg-white  p-5">
          @copyright
        </footer>

    </div>
  );
}

export default App;















