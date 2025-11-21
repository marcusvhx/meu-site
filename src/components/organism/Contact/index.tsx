import Container from "../../atoms/Container";
import Section from "../../templates/Section";
import { Theme } from "../../../Theme";
import Icon from "../../atoms/Icon";
import whatsapp from "/src/assets/icons/whatsapp.svg";
import corner from "/src/assets/icons/contact-corner.svg";
import type { FormEvent } from "react";
import Title from "../../atoms/Title";
import Form from "../../atoms/Form";
import Label from "../../atoms/Label";
import Input from "../../atoms/Input";
import TextArea from "../../atoms/TextArea";
import Submit from "../../atoms/Submit";

export default function Contact({}: {}) {
  const submit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const name = document.getElementById("IName") as HTMLInputElement;
    const subject = document.getElementById("ISubject") as HTMLInputElement;
    window.open(
      `https://wa.me/+5581984483883?text=${encodeURIComponent(
        `Olá Marcus, meu nome é ${name.value}.\n ${subject.value}`
      )}`,
      "_blank"
    );
  };

  return (
    <Section gap="2rem" id="contact" content="center">
      <Icon
        style={{ position: "absolute", top: 0, right: 0 }}
        color={Theme.emerald}
        size="max(30rem, 20dvw)"
        src={corner}
      />
      <Icon
        style={{ position: "absolute", bottom: 0, left: 0, rotate: "180deg" }}
        color={Theme.emerald}
        size="max(30rem, 20dvw)"
        src={corner}
      />
      <Title>Vamos conversar?</Title>
      <Form>
        <Container w="100%" direction="column" items="start" gap="0.5rem">
          <Label htmlFor="IName">Nome</Label>
          <Input id="IName" h="3rem" type="text" placeholder="Seu Nome" />
        </Container>

        <Container w="100%" direction="column" items="start" gap="0.5rem">
          <Label htmlFor="ISubject">Me conte como eu posso te ajudar</Label>
          <TextArea
            id="ISubject"
            placeholder="Ex.: Eu preciso de uma forma de receber os pedidos dos meus clientes mais barata que o ifood"
          />
        </Container>
        <Submit type="submit" onClick={(e) => submit(e)}>
          <Icon color="#fff" size="2rem" src={whatsapp} />
          Enviar mensagem pelo whatsapp
        </Submit>
      </Form>
    </Section>
  );
}
