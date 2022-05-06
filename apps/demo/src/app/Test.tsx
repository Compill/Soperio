
import { Accordion, AccordionContent, AccordionItem, Container } from "@soperio/ui";
import React from "react";

/**
 *
 *
 */
export default function Test({ ...props }) {


  return (
    <Container dflex center size="xxl" justifyContent="center" py="48" w="30%">
      <Accordion w="350px" >
        <AccordionItem i="1" label="test1">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum assumenda odit ad quidem possimus praesentium esse minima voluptate nesciunt omnis. Eligendi assumenda vitae deleniti fuga veritatis eum modi eveniet ipsum.</p>

        </AccordionItem >
        <AccordionItem i="2" label="test2">
          Accordion2

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum assumenda odit ad quidem possimus praesentium esse minima voluptate nesciunt omnis. Eligendi assumenda vitae deleniti fuga veritatis eum modi eveniet ipsum.</p>

        </AccordionItem >
      </Accordion>
    </Container>
  );
}