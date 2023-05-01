import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faRocket,
   faHatWizard,
   faBroomBall,
   faGun,
   faFilm,
} from "@fortawesome/free-solid-svg-icons";
import MenuSectionHeading from "./MenuSectionHeading";

interface Movie {
   id: number;
   title: string;
   description: string;
   imgURL: string;
   icon: IconDefinition;
   gradientColor: string;
}

const Movies = () => {
   const movies: Movie[] = [
      {
         id: 0,
         title: "Protectors of the Milky Way",
         description:
            "A tale of some people watching over a large portion of space.",
         imgURL:
            "https://images.unsplash.com/photo-1596727147705-61a532a659bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
         icon: faRocket,
         gradientColor: "#60a5fa",
      },
      {
         id: 1,
         title: "Hole People",
         description: "Some people leave their holes to disrupt some things.",
         imgURL:
            "https://images.unsplash.com/photo-1535666669445-e8c15cd2e7d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
         icon: faHatWizard,
         gradientColor: "#c084fc",
      },
      {
         id: 2,
         title: "Pot of Hair",
         description:
            "A boy with a dent in his head tries to stop a bad guy. And by bad guy I mean bad at winning.",
         imgURL:
            "https://images.unsplash.com/photo-1632266484284-a11d9e3a460a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=778&q=80",
         icon: faBroomBall,
         gradientColor: "#fb7185",
      },
      {
         id: 3,
         title: "Area Fights",
         description:
            "A long drawn out story of some people fighting over some space. Cuz there isn't enought of it.",
         imgURL:
            "https://images.unsplash.com/photo-1533613220915-609f661a6fe1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
         icon: faGun,
         gradientColor: "#4ade80",
      },
   ];

   return (
      <div>
         <MenuSectionHeading icon={faFilm} title="Popcorn time!" />

         <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {movies.map((movie) => (
               <li
                  key={movie.id}
                  className="rounded-lg overflow-hidden shadow-lg relative cursor-pointer group hover:translate-y-[-5px] transition-all duration-300"
               >
                  <img
                     className="h-96 sm:h-full w-full object-cover group-hover:scale-105 transition-all duration-300"
                     src={movie.imgURL}
                     alt={`${movie.title}`}
                  />

                  <div className="absolute top-0 left-0 p-8 z-20">
                     <p className="text-4xl mb-2">{movie.title}</p>
                     <p className="text-slate-400">{movie.description}</p>
                  </div>

                  <FontAwesomeIcon
                     icon={movie.icon}
                     className="absolute bottom-0 right-0 p-8 z-20  transition-all duration-300 text-7xl group-hover:text-8xl"
                  />

                  <div
                     style={{
                        backgroundImage: `linear-gradient(to top, ${movie.gradientColor}, transparent 50%)`,
                     }}
                     className="absolute inset-0 z-10 opacity-50"
                  ></div>

                  <div className="absolute inset-0 bg-black opacity-30"></div>
               </li>
            ))}
         </ul>
      </div>
   );
};

export default Movies;
