
import { Accordion, AccordionItem, Button, Container, Stack } from "@soperio/ui";
import { ThemeTraits } from "libs/theming/src/lib/Core/Traits";
import React from "react";

function ExpandSvg()
{
  return <svg w="24px" h="24px" viewBox="0 0 24 24">
    <path fill="currentColor" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
  </svg>
}

function CollapseSvg()
{
  return <svg w="24px" h="24px" viewBox="0 0 24 24">
    <path fill="currentColor" d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" />
  </svg>
}

export default function Test({ ...props })
{
  return (
    <Container dflex center flexCol size="x2" justifyContent="center" py="48" w="30%">
      <div mb="16" h="16" bgColor="pink-500" rounded outline="1" outlineColor="sky-500" outlineOffset="2" outlineOpacity="59"/>
      <div mb="16" h="16" bgColor="pink-500" rounded ring="8" ringColor="sky-500" ringOffset="4" ringOffsetColor="yellow-500" />
      <div mb="16" h="16" bgColor="pink-500" rounded shadow />

      <div mb="16" h="16" bgGradient bgGradientDir="to top right" bgGradientFrom="pink-500" bgGradientVia="yellow-500" bgGradientTo="sky-500"/>
      <div mb="16" h="16" bgGradient="radial" bgGradientFrom="pink-500" bgGradientVia="yellow-500" bgGradientTo="sky-500"/>
      <div mb="16" h="16" bgGradient="conic" bgGradientFrom="pink-500" bgGradientVia="yellow-500" bgGradientTo="sky-500"/>
      <div h="16" bgColor="sky-500" hover_bgColor="pink-500" transition="colors" duration="5000ms" />
      <div>
      <div as="a">{"Hello, am a <div> or a <a> ?"}</div>
      </div>
      <div group p="10" bgColor="pink-500" hover_bgColor="sky-500" textColor="white" hover_textColor="black">
        <p textColor="blue-500" groupHover_textColor="white" lg_groupHover_textColor="yellow">Subtitle</p>
        <p>Text</p>
      </div>
    </Container>
  );
}
