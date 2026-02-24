// import { useGlobalState } from "../../../../contexts/GlobalStateContext";

// const MenuItem = ({title}:{title:string}) => {

//     const { isMenuOpen, toggleMenu } = useGlobalState()

//     return (<div className='flex items-center'>
//         <a aria-label={title} className={"transition ease-in-out duration-300 text-center hover:text-violet-400 "} onClick={isMenuOpen? toggleMenu : undefined} href={"/#"+title}>{title}</a>
//         </div>
//     );
// }

// export default MenuItem;

import { useGlobalState } from "../../../../contexts/GlobalStateContext";

type MenuItemProps = {
  title: string;
  href?: string;
};

const MenuItem = ({ title, href }: MenuItemProps) => {
  const { isMenuOpen, toggleMenu } = useGlobalState();

  const isExternal = href?.startsWith("http");

  return (
    <div className="flex items-center">
      <a
        aria-label={title}
        href={href ?? `/#${title}`}
        onClick={isMenuOpen ? toggleMenu : undefined}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className="transition ease-in-out duration-300 text-center hover:text-violet-400"
      >
        {title}
      </a>
    </div>
  );
};

export default MenuItem;
