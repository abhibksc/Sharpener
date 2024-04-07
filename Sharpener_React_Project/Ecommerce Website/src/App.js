import Header from "./Components/Header Component/Header";
import Body from "./Components/Body Component/Body";
import Effects from "../Effects";



function App() {

  Effects();

  


  return (

    <div class="bg-gradient-to-r from-primary to-secondary flex flex-col h-full w-full  mx-auto  ">
    {/* <div class=" flex flex-col   mx-auto border max-w-screen"> */}


      {/* <div className="border border-red-400 m-2 bg-yellow-100 max-w-md ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ab tenetur voluptate reiciendis qui, ducimus laborum nihil quod quae aliquam!
      </div> */}

     






















      <div class="">
        <Header />

        <Body />
        <footer className="text-center bg-white  p-5 ">
          @copyright
        </footer>

      </div>


    </div>
  );
}

export default App;















