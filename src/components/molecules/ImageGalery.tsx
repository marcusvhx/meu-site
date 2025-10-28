import styled from "styled-components";
import Arrow from "../atoms/Arrow";
import Wrapper from "../atoms/Wrapper";
import Container from "../atoms/Container";

const ImageSlot = styled.div`
  width: 80%;
  max-height: 80dvh;
  overflow: hidden;
  display: flex;
  gap: 1rem;
`;

const Image = styled.img`
  width: 100%;
  object-fit: contain;
`;

const MobileBox = styled(Container)`
  display: none;
  @media screen and (max-width: 51.2rem) {
    display: flex;
  }
`;

export default function ImageGalery({
  show,
  imgs,
  closeWrapper,
}: {
  show: boolean;
  imgs: string[];
  closeWrapper: (e?: any) => void;
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

      <MobileBox direction="row" gap="2rem">
        <Arrow onClick={() => scrollImages(false)} side="l" />
        <Arrow onClick={() => scrollImages(true)} side="r" />
      </MobileBox>
    </Wrapper>
  );
}
