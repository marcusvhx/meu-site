import styled from "styled-components";
import Arrow from "../atoms/Arrow";
import Wrapper from "../atoms/Wrapper";
import type { MouseEvent } from "react";

export type iMouseClickEvent= MouseEvent;

const ImageSlot = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
  gap: 1rem;
  background-color: #0005;

  overflow: hidden;

  @media screen and (max-width: 768px) {
    overflow-x: scroll;
    scroll-snap-type: x mandatory;

    &::-webkit-scrollbar {
      display: none;
    }
  }
  `;

const Image = styled.img`
  min-width: 100%;
  object-fit: contain;
  scroll-snap-align: center;
`;


export default function ImageGalery({
  show,
  imgs,
  closeWrapper,
}: {
  show: boolean;
  imgs: string[];
  closeWrapper: (e: iMouseClickEvent) => void;
}) {
  const scrollImages = (toRight: boolean) => {
    const slots = document.querySelector(".slots");
    if (!slots) return;

    const clientWidth = Math.ceil(slots.clientWidth) + 10; // gap 1 rem
    const scrollWidth = Math.ceil(slots.scrollWidth);
    const scrollLeft = slots.scrollLeft;

    if (toRight && scrollLeft + clientWidth >= scrollWidth) {
      slots.scrollBy({ left: scrollWidth * -1, behavior: "smooth" });
    } else if (!toRight && scrollLeft == 0) {
      slots.scrollBy({ left: scrollWidth, behavior: "smooth" });
    } else if (toRight) {
      slots.scrollBy({ left: clientWidth, behavior: "smooth" }); // +1 para a direita
    } else if (!toRight) {
      slots.scrollBy({ left: clientWidth * -1, behavior: "smooth" }); // +1 para a esquerda
    }
  };
  return (
    <Wrapper className="wrapper" onClick={(e) => closeWrapper(e)} show={show}>
      <Arrow className="desktop" onClick={() => scrollImages(false)} side="l" />
      <ImageSlot className="slots">
        {imgs.map((img, idx) => (
          <Image src={img} key={img + idx} />
        ))}
      </ImageSlot>
      <Arrow className="desktop" onClick={() => scrollImages(true)} side="r" />
    </Wrapper>
  );
}
