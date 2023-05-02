import { faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Reminder = () => {
   // TODO: Probably change name to reminder (like hyperplexed) or sth

   return (
      <div className="flex items-center gap-1">
         <FontAwesomeIcon icon={faBell} />
         <p className="text-slate-300 text-lg">
            Extra cool people meeting <span className="text-sky-400">10am</span>
         </p>
      </div>
   );
};

export default Reminder;
