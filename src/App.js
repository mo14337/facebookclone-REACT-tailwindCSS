import FacebookLogo from "./assets/facebook.svg"

function App() {
  return (

    <>

      <div className="container flex  justify-center items-center w-full h-screen bg-gray-100  ">
        <div className="left mx-14 w-1/3">
          <img className="w-80" src={FacebookLogo} alt="mcbc" />
          <p className=" text-2xl mx-8">Facebook helps you connect and share with the people in your life.</p>
        </div>


        <div className="flex flex-col items-center">
        <div className="right flex flex-col space-y-3 bg-white rounded-lg  p-8">
          <input type="email" className=" w-[360px] py-[14px] px-[16px] border-[1px] rounded-md" placeholder="Email address or phone number"></input>
          <input type="password" className=" w-[360px] py-[14px] px-[16px] border-[1px] rounded-md" placeholder="Password"></input>
          <button type="submit" className="  bg-[#1877F2] text-[20px] text-white font-bold py-[16px] rounded-md">Log In</button>
          <span className=" text-center text-blue-600">Forgotten Password?</span>
          <hr />
         
          <button type="button"  className="w-[192.6px] mx-auto font-bold text-[17px] bg-[#42B72A] rounded-lg text-white  py-3 ">Create New Account</button>
          

        </div>

        <p className="mt-2"><span className=" font-bold">Create a page</span> for me</p>
        </div>

      </div>


    </>

  );
}

export default App;
