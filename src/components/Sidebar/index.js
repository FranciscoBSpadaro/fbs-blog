import React from "react"
import Profile from "../Profile"
import SocialLinks from "../SocialLinks"
import MenuLinks from "../MenuLinks"
import { Link } from "gatsby"
import catsGIF from "../Sidebar/cats.gif"
import fbsdevPNG from "../Sidebar/fbsdev.png"


import * as S from "./styled"

const Sidebar = () => (
  <S.SidebarWrapper>
    <Profile />
    <SocialLinks />
    <MenuLinks />
    <Link href="https://fbsdev.netlify.app/">
    <img src={fbsdevPNG} width="175" height="105" alt="FBS-DEV" ></img>
		</Link>
</S.SidebarWrapper>
)

export default Sidebar