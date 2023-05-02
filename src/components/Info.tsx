import Time from "./Time";
import Weather from "./Weather";

const Info = () => {
   return (
      <div className="flex items-end gap-5">
         <Time />
         <Weather />
      </div>
   );
};

export default Info;
