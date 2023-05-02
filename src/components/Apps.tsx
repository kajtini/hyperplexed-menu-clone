import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faCloudSun,
   faCalculator,
   faPiggyBank,
   faPlane,
   faGamepad,
   faVideo,
   faSuitcase,
} from "@fortawesome/free-solid-svg-icons";
import MenuSectionHeading from "./MenuSectionHeading";

interface AppService {
   id: number;
   service: string;
   name: string;
   icon: IconDefinition;
   imgURL: string;
}

const Apps = () => {
   const apps: AppService[] = [
      {
         id: 0,
         name: "Cloudly",
         service: "Weather",
         imgURL:
            "https://images.unsplash.com/photo-1429552077091-836152271555?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=770&q=80",
         icon: faCloudSun,
      },
      {
         id: 1,
         name: "Mathy",
         service: "Calc",
         imgURL:
            "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
         icon: faCalculator,
      },
      {
         id: 2,
         name: "Cashy",
         service: "Bank",
         imgURL:
            "https://images.unsplash.com/photo-1579621970795-87facc2f976d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
         icon: faPiggyBank,
      },
      {
         id: 3,
         name: "Fly-er-io-ly",
         service: "Travel",
         imgURL:
            "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1748&q=80",
         icon: faPlane,
      },
      {
         id: 4,
         name: "Gamey",
         service: "Games",
         imgURL:
            "https://images.unsplash.com/photo-1576005634133-f755bf15d9c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1546&q=80",
         icon: faGamepad,
      },
      {
         id: 5,
         name: "Chatty",
         service: "Video Chat",
         imgURL:
            "https://images.unsplash.com/photo-1599415738227-ff7b04bec5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2064&q=80",
         icon: faVideo,
      },
   ];

   return (
      <div>
         <MenuSectionHeading icon={faSuitcase} title="What's Appening?" />

         <ul className="grid sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-5">
            {apps.map((app) => (
               <li
                  key={app.id}
                  className="rounded-lg overflow-hidden relative cursor-pointer shadow-lg group hover:translate-y-[-5px] transition-all duration-300"
               >
                  <img
                     className="h-40 w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                     src={app.imgURL}
                     alt={`${app.name}`}
                  />

                  <div
                     className="absolute top-[1rem] left-[1rem] z-10
                  "
                  >
                     <p className="text-sky-400 uppercase text-sm">
                        {app.service}
                     </p>
                     <p className="text-2xl">{app.name}</p>
                  </div>

                  <FontAwesomeIcon
                     icon={app.icon}
                     className="absolute bottom-[1rem] left-[1rem] z-10"
                     size="2x"
                  />

                  <div className="bg-gradient-to-b from-black to-transparent absolute inset-0 opacity-80"></div>
               </li>
            ))}
         </ul>
      </div>
   );
};

export default Apps;
