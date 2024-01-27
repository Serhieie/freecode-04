import styled from "@emotion/styled";

export const AppWrapper = styled.div`
  position: relative;
  min-height: 100dvh;
  width: 100%;
  overflow: hidden;

  .calc-grid {
    background-color: black;
    width: 21rem;
    display: grid;
    grid-template-columns: repeat(32, 0.57rem);
    grid-template-rows: minmax(7rem, auto) repeat(40, 0.59rem);
    justify-content: center;
    margin: 0 auto;
    margin-top: 4rem;
    padding: 20px;
    gap: 1px;

    border-radius: 10px;
    box-shadow: 12px 10px 40px rgba(10, 9, 7, 0.8);
    user-select: none;
    z-index: 3;
  }

  .glass-block-main {
    position: absolute;
    transform: rotate(50.5deg);
    left: 0;
    width: 200%;
    height: 20%;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    z-index: 1;
    flex-shrink: 0;
  }

  .glass-block-main2 {
    position: absolute;
    transform: rotate(139deg);
    top: 0;
    width: 95%;
    height: 400%;
    background-color: rgba(255, 255, 255, 0.022);
    border-radius: 10px;
    z-index: 1;
    flex-shrink: 0;
    pointer-events: none;
  }

  @media (min-width: 500px) {
    .calc-grid {
      margin-top: 4rem;
      width: 24rem;
      gap: 2px;
      grid-template-columns: repeat(32, 0.6rem);
      grid-template-rows: minmax(7rem, auto) repeat(40, 0.6rem);
    }
  }
`;
