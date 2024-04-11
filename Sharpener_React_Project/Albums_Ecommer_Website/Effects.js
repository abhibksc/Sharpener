import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Effects = ()=>{


  useEffect(()=>{
    AOS.init({
      offset : 100,
      duration : 800,
      easing: "ease-in-sine",
      delay:100,
    })
    AOS.refresh();
  },[]);


    // useEffect(() => {
    //     const centeredDivs = document.getElementsByClassName('shoeBlue');
    //     const centeredDivss = document.getElementsByClassName('SellerForm');
    
    
    //     for (let i = 0; i < centeredDivs.length; i++) {
          
    //       const centeredDiv = centeredDivs[i];
    //       const centeredDivsss = centeredDivss[i];
    
    //       setTimeout(() => {
    //         centeredDiv.style.opacity = '1';
    //         centeredDiv.style.transition = ' ease-in-out, transform 1s ease-in-out'; // Transition for opacity and transform
    //         centeredDiv.style.transform = 'translate(0% ,0%)';
    
          
    
            
    //       }, 0);
    
    //     }
    //   }, []); 
}

export default Effects;