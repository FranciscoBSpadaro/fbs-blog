import React from "react"
import Profile from "../Profile"
import SocialLinks from "../SocialLinks"
import MenuLinks from "../MenuLinks"
import { Link } from "gatsby"
import catsGIF from "../Sidebar/cats.gif"
import fbsdevPNG from "../Sidebar/fbsdev.png"
import devGIF from "../Sidebar/dev.gif"

import * as S from "./styled"

const Sidebar = () => (
  <S.SidebarWrapper>
    <Profile />
    <SocialLinks />
    <MenuLinks />
    <Link href="https://fbsdev.netlify.app/">
    <img src={fbsdevPNG} alt="FBS-DEV" ></img>
		</Link>
    <img src={catsGIF} width="400" height="200" alt="Funcionarios" ></img> 
    <img src={devGIF} alt="dev" ></img>

  </S.SidebarWrapper>
)

export default Sidebar