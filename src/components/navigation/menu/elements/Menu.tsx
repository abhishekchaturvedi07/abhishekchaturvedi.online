import Link from "next/link";
import ContactBtn from "./ContactBtn";
import MenuItem from "./MenuItem";

// const MenuItem = ({ title, href }) => {
//   return (
//     <Link
//       href={href}
//       className="
//         px-4 py-2 my-2
//         text-slate-300
//         hover:text-cyan-300
//         transition-colors duration-300
//         rounded-md
//       "
//     >
//       {title}
//     </Link>
//   );
// };

// const Menu = () => {
//   return (
//     <>
//       <MenuItem title={"About"} />
//       <MenuItem title={"Services"} />
//       <Link
//         href="http://www.abhishekchaturvedi.site/materials"
//         target="_blank"
//         style={{
//           textDecoration: "none",
//           padding: "0.5rem 1rem",
//           margin: "0.5rem 0",
//           color: "#ffffff",
//           borderRadius: "0.375rem",
//         }}
//         className="text-slate-300 hover:text-cyan-300 transition-colors duration-300"
//       >
//         <span>Interview Ready</span>
//       </Link>

//       <ContactBtn title={"Contact Me"} />
//     </>
//   );
// };

const Menu = () => {
  return (
    <>
      <MenuItem title="About" />
      <MenuItem title="Services" />

      <MenuItem
        title="Interview Ready"
        href="http://www.abhishekchaturvedi.site/materials"
      />

      <ContactBtn title="Contact Me" />
    </>
  );
};

export default Menu;
