import Apps from "./Apps";
import Info from "./Info";
import Meals from "./Meals";
import Movies from "./Movies";
import Navigation from "./Navigation";
import Reminder from "./Reminder";

const Menu = () => {
   return (
      <div className="flex flex-col gap-14">
         <div>
            <div className="flex flex-col gap-1 mb-5">
               <Info />
               <Reminder />
            </div>
            <Navigation />
         </div>

         <Meals />
         <Apps />
         <Movies />
      </div>
   );
};

export default Menu;
