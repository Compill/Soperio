
import { Accordion, AccordionItem, Container } from "@soperio/ui";
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
    <Container dflex center size="xxl" justifyContent="center" py="48" w="30%">
      <Accordion w="350px" expandIcon={<ExpandSvg/>} variant="bordered" >
        <AccordionItem label="test1">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum assumenda odit ad quidem possimus praesentium esse minima voluptate nesciunt omnis. Eligendi assumenda vitae deleniti fuga veritatis eum modi eveniet ipsum.</p>

        </AccordionItem >
        <AccordionItem label="test2" >
          <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum assumenda odit ad quidem possimus praesentium esse minima voluptate nesciunt omnis. Eligendi assumenda vitae deleniti fuga veritatis eum modi eveniet ipsum.</p>

        </AccordionItem >
        <AccordionItem label="test3" >
          <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum assumenda odit ad quidem possimus praesentium esse minima voluptate nesciunt omnis. Eligendi assumenda vitae deleniti fuga veritatis eum modi eveniet ipsum.</p>

        </AccordionItem >
      </Accordion>
    </Container>
  );
}