import Apps from "./Apps";
import Info from "./Info";
import Meals from "./Meals";
import Movies from "./Movies";
import Notification from "./Notification";

const Menu = () => {
   return (
      <div className="flex flex-col gap-14 ">
         <div className="flex flex-col gap-1">
            <Info />
            <Notification />
         </div>

         <Meals />
         <Apps />
         <Movies />
      </div>
   );
};

export default Menu;
