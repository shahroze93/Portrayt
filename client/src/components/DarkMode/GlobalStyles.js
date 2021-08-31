import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    transition: all 0.50s linear;
  }

  .nav, .footer, .categoryBanner {
    background: ${({ theme }) => theme.navbar};
  }

  .navOption, .userLink {
    color: ${({ theme }) => theme.text};
  }

  .detailCreator, div.commSectionHeader, .commentsHeader, .currentUserTag,  .detailName, .detailDesc, .commentContainer  {
  color: ${({ theme }) => theme.text};
  }

  .categoryHeader, h1.segmentHeader, h3.segmentHeader {
    color: ${({ theme }) => theme.text};
  }

  .cardName {
    color: ${({ theme }) => theme.cardName};
  }

  .cardCategory {
    color: ${({ theme }) => theme.fontblack};
  }

  .cardContainer, .newPostContainer, .userPostDiv, .postContainer, ul.links {
    background: ${({ theme }) => theme.cardbackground};
    color: ${({ theme }) => theme.text};
    border-color: ${({ theme }) => theme.toggleBorder};
    transition: all 0.50s linear;
  }

  div.bg-white {
    background: ${({ theme }) => theme.cardbackground};
  }

  p.text-gray-600 {
    color: ${({ theme }) => theme.text};
  }

  div.bg-primary-green {
    background: ${({ theme }) => theme.cardbackground};
  }

  `;
