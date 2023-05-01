import MenuSectionHeading from "./MenuSectionHeading";
import { faBowlFood } from "@fortawesome/free-solid-svg-icons";

interface Meal {
   id: number;
   name: string;
   description: string;
   imgURL: string;
}

const Meals = () => {
   const meals: Meal[] = [
      {
         id: 0,
         name: "Burgers",
         description: "The best burgers in town",
         imgURL:
            "https://images.unsplash.com/photo-1606131731446-5568d87113aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
      },
      {
         id: 1,
         name: "Ice Cream",
         description: "The worst ice-cream around",
         imgURL:
            "https://images.unsplash.com/photo-1576506295286-5cda18df43e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      },
      {
         id: 2,
         name: "Pizza",
         description: "This 'Za be gettin down",
         imgURL:
            "https://images.unsplash.com/photo-1590947132387-155cc02f3212?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      },
      {
         id: 3,
         name: "BBQ",
         description: "BBQ ain't need no rhyme",
         imgURL:
            "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      },
   ];

   return (
      <section>
         <MenuSectionHeading icon={faBowlFood} title="Get it delivered!" />

         <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {meals.map((meal) => (
               <li
                  key={meal.id}
                  className="shadow-lg relative rounded-xl overflow-hidden cursor-pointer group hover:translate-y-[-5px] transition-all duration-300"
               >
                  <img
                     className="h-40 sm:h-52 w-full object-cover"
                     src={meal.imgURL}
                     alt={`${meal.name}`}
                  />

                  <div className="absolute right-[1rem] bottom-[1rem] text-end z-10 group-hover:translate-y-[-5px] transition-all duration-300">
                     <p className="text-3xl">{meal.name}</p>
                     <p className="text-sky-400">{meal.description}</p>
                  </div>

                  <div className="bg-gradient-to-t from-black to-transparent absolute inset-0 opacity-80"></div>
               </li>
            ))}
         </ul>
      </section>
   );
};

export default Meals;
