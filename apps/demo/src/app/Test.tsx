
import { Accordion, AccordionItem, Button, Container, Stack } from "@soperio/ui";
import React from "react";

function ExpandSvg() {
  return <svg w="24px" h="24px" viewBox="0 0 24 24">
    <path fill="currentColor" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
  </svg>
}

function CollapseSvg() {
  return <svg w="24px" h="24px" viewBox="0 0 24 24">
    <path fill="currentColor" d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" />
  </svg>
}
export default function Test({ ...props }) {


  return (
    <Container dflex center size="x2" justifyContent="center" py="48" w="30%" >
      <Button w="full" type="button" as="a" size="x2">Test As anchor</Button>
      <Stack w="full"></Stack>
      <a bgColor="black">hola</a>
    </Container>
  );
}
