interface NavigationDestination {
   id: number;
   title: string;
}

const Navigation = () => {
   const navDestinations: NavigationDestination[] = [
      {
         id: 0,
         title: "Food",
      },
      {
         id: 1,
         title: "Apps",
      },
      { id: 2, title: "Movies" },
   ];

   return (
      <nav>
         <ul className="flex items-center gap-3 flex-wrap">
            {navDestinations.map((navDestination) => (
               <li className="py-2 px-6 backdrop-blur-sm bg-slate-200 bg-opacity-10 rounded-full border-white border border-opacity-10 shadow-md cursor-pointer hover:bg-opacity-25 hover:border-opacity-25">
                  <p>{navDestination.title}</p>
               </li>
            ))}
         </ul>
      </nav>
   );
};

export default Navigation;
