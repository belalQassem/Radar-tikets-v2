import styled from "styled-components";

// export const LoadingStyled = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   height: 100vh;
//   .loading-spinner {
//     width: 60px;
//     height: 60px;
//     border: 5px solid #f3f3f3;
//     border-radius: 50%;
//     border-top-color: #053742;
//     animation: spin 2s linear infinite;
//   }
//   .loading-message {
//     font-size: 3rem;
//     color: #053742;
//     text-align: center;
//     margin-top: 1rem;
//   }
//   @keyframes spin {
//     0% {
//       transform: rotate(0deg);
//     }
//     100% {
//       transform: rotate(360deg);
//     }
//   }
// `;
export const LoaderContainer = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`
export const StyledSpan = styled.span`
display: inline-flex;
width: 20px;
height: 33.3px;
background-color: #084F5F;
opacity: 0.5;
border-radius: 10px;
animation: scale-up 1000ms var(--d) linear infinite;
&.loader-bar:nth-child(even){
  height: 83.52px;
}
&.loader-bar:nth-child(3){
  height: 133.2px;
}
@keyframes scale-up {
  25% {
    opacity: 1;
    scale: 1 1.5;
  }
  50% {
    scale: 1;
  }
}
`