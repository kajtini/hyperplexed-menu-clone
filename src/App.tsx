import Menu from "./components/Menu";

function App() {
   return (
      <div className="min-h-screen flex flex-col items-center justify-center font-primary bg-mountain-primary bg-cover text-white">
         <div className="max-w-[1600px] px-4 w-full flex-grow flex flex-col justify-center z-10 pt-64 pb-20 gap-14">
            <Menu />
         </div>

         <div className="fixed inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
      </div>
   );
}

export default App;
