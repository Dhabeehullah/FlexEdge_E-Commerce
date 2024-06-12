import React from "react";
import {Navbar, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, Link,} from "@nextui-org/react";


export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    {
      name:"HOME",
      link:"/"
    },
    {
      name:"EQUIPMENTS",
      link:"FlexEdge/gymaccessories",
    },
    {
      name:"SUPPLEMENTS",
      link:"FlexEdge/supplements",
    },
    {
      name:"CONTACT",
      link:"FlexEdge/contact",
    },
    
  ];

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="h-full max-w-16 border-none lg:hidden"
    >
      <NavbarContent className=" " >
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>
      <NavbarMenu className="flex flex-col justify-center font-bold items-center gap-10">
        {menuItems.map((item, index) => (
    
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <Link
              to={item.link}
              className="w-full text-black text-base sm:text-lg"
              
              size="sm"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
      
    </Navbar>
  );
}
