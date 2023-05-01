import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface MenuSectionHeadingProps {
   icon: IconDefinition;
   title: string;
}

const MenuSectionHeading = ({ title, icon }: MenuSectionHeadingProps) => {
   return (
      <div>
         <div className="flex items-center gap-2 mb-5">
            <FontAwesomeIcon icon={icon} />
            <span className="text-2xl">{title}</span>
         </div>
      </div>
   );
};

export default MenuSectionHeading;
