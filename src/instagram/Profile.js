import React from "react";
import styled from "styled-components";
import ProfileTop from "../instagram/ProfileTop";
import ProfileMiddle from "../instagram/ProfileMiddle";
import ProfileBottom from "../instagram/ProfileBottom";

const StyledWrapper = styled.div`
  padding: 8px 16px;
`;

const Wrapper = () => {
  return (
    <StyledWrapper>
      <ProfileTop />
      <ProfileMiddle />
      <ProfileBottom />
    </StyledWrapper>
  );
};

export default Wrapper;