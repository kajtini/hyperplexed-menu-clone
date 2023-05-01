import { faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Info = () => {
   // TODO: Split this component into weather and time

   return (
      <div className="flex items-end gap-5">
         <p className="text-8xl ">1:19</p>

         <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faSun} className="text-yellow-400" />
            <div>
               <p className="text-2xl">
                  36
                  <sup>
                     <span className="text-sm"> &deg;C</span>
                  </sup>
               </p>
            </div>
         </div>
      </div>
   );
};

export default Info;
