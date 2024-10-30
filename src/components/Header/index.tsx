import React from "react";
import { HeaderContainer, Searchbar} from "@/ui/styles/Components/Header/styles";
import Image from "next/image";
import img from "@/ui/assets/images/Logo.svg"

export function Header() {
  return <HeaderContainer>
            <Image alt="" src={img}/>
            <Searchbar><input type="text" placeholder="" name="search"/></Searchbar> 
          {/* <Imagemball alt="" src={img}/> */}

         </HeaderContainer>
}
