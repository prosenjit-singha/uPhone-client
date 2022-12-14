import styled from "styled-components";
// import { device } from "../../utils/breakpoints";

export const Header = styled.header`
  padding-inline: calc((100vw - 1366px) / 2);
  background-image: var(--paper-5);
  position: fixed;
  top: 0;
  z-index: 200;
  width: 100%;
`;

export const Wrapper = styled.section`
  margin-inline: auto;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  align-items: center;
  padding-block: 0.5rem;
  padding-inline: var(--gip);
  min-height: 50.72px;
`;

export const AuthButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;
