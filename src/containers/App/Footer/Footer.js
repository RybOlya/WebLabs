import React from "react";
import { Wrapper, VerticalLine, LogoWrapper, StyledText} from "./Footer.styled";

import { IconsWrapper, IconBase } from "../../../components/Icon/Icon.styled";
import Icon, {
    TwitterOutlined,
    InstagramOutlined,
    LinkedinOutlined,
    YoutubeOutlined,
    HomeOutlined
  } from "@ant-design/icons";

const Footer = () => {
  return (
    <Wrapper>
      <LogoWrapper>
        <IconBase component={HomeOutlined} />
        <h1>dwello</h1>
      </LogoWrapper>
      <p>Everything you need to know about the housing market, explained by our experts.</p>
      <VerticalLine />
      <IconsWrapper>
          <IconBase component={YoutubeOutlined} color='#6a3e19'/>
          <IconBase component={TwitterOutlined} color='#6a3e19' />
          <IconBase component={LinkedinOutlined} color='#6a3e19'/>
          <IconBase component={InstagramOutlined} color='#6a3e19'/>
      </IconsWrapper>
      <VerticalLine />
      <StyledText>© 2022 dwello Limited. All rights reserved.</StyledText>
    </Wrapper>
  );
};

export default Footer;
