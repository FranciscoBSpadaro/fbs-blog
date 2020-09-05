import React from "react"
import Profile from "../Profile"
import SocialLinks from "../SocialLinks"
import MenuLinks from "../MenuLinks"
import { Link } from "gatsby"
import fbsdevPNG from "../Sidebar/fbsdev.png"


import * as S from "./styled"

const Sidebar = () => (
  <S.SidebarWrapper>
    <Profile />
    <SocialLinks />
    <MenuLinks />
</S.SidebarWrapper>
)

export default Sidebar