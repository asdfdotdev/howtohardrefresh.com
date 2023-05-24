import React from "react";
import styled from 'styled-components';

const LogoStyles = styled.div`
  width: auto;
  height: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 1.35rem;
  white-space: nowrap;
  color: var(--color-white);
  transition: all 0.4s ease;

  span {
    transition: all 0.4s ease;
    color: var(--color-red);
  }

  svg {
    width: 30px;
    height: 30px;
    margin-right: 10px;

    path {
      transition: all 0.4s ease;
      fill: var(--color-white);
    }
  }

  &:hover {
    svg {
      transform: rotate(-180deg);
      transition: all 0.8s ease;
    }

    span {
      color: var(--color-blue);
    }
  }
`;


export default function Logo() {
  return (
    <LogoStyles>
      <svg width="60px" height="60px" viewBox="0 0 60 60" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <path d="M27.1046842,29.9717147 C27.1046842,28.9987752 19.3393248,22.4578911 19.3393248,22.4578911 C19.3393248,22.4578911 23.2795774,14.710562 30.322779,9.34812946 L30.3081362,9.33379141 C30.3081362,9.33379141 36.5326704,4.14273273 44.6321526,4.36531397 C44.6321526,4.36531397 27.4947159,-9.63204154 9.29833636,12.5025016 C9.29833636,12.5025016 2.19656343,3.51322384 1.31067217,4.42198342 C0.426777659,5.32937747 -0.635493155,34.0635225 0.479358733,35.204422 C1.59088271,36.3507836 27.1046842,30.9439714 27.1046842,29.9717147 L27.1046842,29.9717147 Z M34.8978401,16.9273743 L52.6430518,16.9273743 C52.6430518,16.9273743 51.5674433,11.8743325 47.5450534,7.20670391 C38.704044,7.2975513 32.8670221,12.269381 32.8610354,12.2735104 C33.7344268,13.5336738 34.5738937,15.1283207 34.8978401,16.9273743 L34.8978401,16.9273743 Z M25.1014262,43.2402235 L7.35694823,43.2402235 C7.35694823,43.2402235 8.43259287,48.2912005 12.455118,52.9608939 C21.2950943,52.8672935 27.1329777,47.8982168 27.1389646,47.8920226 C26.2648786,46.633924 25.4260487,45.0372123 25.1014262,43.2402235 Z M59.521238,24.7941594 C58.4097325,23.6533087 32.8950243,29.0598897 32.8950243,30.0327875 C32.8950243,31.0015889 40.6615857,37.5380969 40.6615857,37.5380969 C40.6615857,37.5380969 36.720733,45.2885082 29.6776486,50.6507113 L29.6916256,50.6650488 C29.6916256,50.6650488 23.4671949,55.8592991 15.3678474,55.6346792 C15.3678474,55.6346792 32.504999,69.6307532 50.7010759,47.5005706 C50.7010759,47.5005706 57.8040619,56.4833192 58.6899384,55.5773294 C59.5738182,54.6706569 60.6347402,25.9329619 59.521238,24.7941594 Z" id="Shape" fill="#FFFFFF" fillRule="nonzero"></path>
        </g>
      </svg>
      <div>
        How <span>to</span> Hard Refresh
      </div>
    </LogoStyles>
  );
}