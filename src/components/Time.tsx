import { useEffect, useState } from "react";

const Time = () => {
   const [now, setNow] = useState(new Date());

   const currentTime = now.toLocaleTimeString("pl-PL", {
      hour: "2-digit",
      minute: "2-digit",
   });

   useEffect(() => {
      const intervalId = setInterval(() => {
         setNow(new Date());
      }, 60000);

      return () => clearInterval(intervalId);
   }, []);

   console.log(`${now.getHours()}:${now.getMinutes()}`);

   return <p className="text-8xl">{currentTime}</p>;
};

export default Time;
