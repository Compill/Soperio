
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
    <Container dflex center flexCol size="x2" justifyContent="center" py="48" w="30%" my="-0">

      <div bgColor="sky-500" shadow="x2" w="16" h="16"></div>

      <div dflex flexCol w="min">

        <span
          trait="typo.display3"
          textColor="sky-500"
          fontWeight="800"
          textShadow="sm"
          textShadowBlur="sm"
        >
          GRADIENT TEXT
        </span>

        <span
          trait="typo.display3"
          bgGradient
          bgGradientFrom="sky-500"
          bgGradientTo="pink-500"
          bgClip="text"
          style={{ WebkitTextFillColor: "transparent" }}
          fontWeight="800"
        >
          GRADIENT TEXT
        </span>

        <span
          trait="typo.display3"
          bgGradient
          bgGradientDir="to bottom"
          bgGradientFrom="sky-500"
          bgGradientTo="pink-500"
          bgClip="text"
          style={{ WebkitTextFillColor: "transparent" }}
          fontWeight="800"
        >
          GRADIENT TEXT
        </span>

        <span
          trait="typo.display3"
          bgGradient="radial"
          bgGradientFrom="sky-500"
          bgGradientTo="pink-500"
          bgClip="text"
          style={{ WebkitTextFillColor: "transparent" }}
          fontWeight="800"
        >
          GRADIENT TEXT
        </span>
      </div>


      <div
        mb="16"
        trait="typo.display4"
        bgGradientFrom="pink-500" bgGradient bgGradientVia="yellow-500" bgGradientTo="sky-500"
        bgClip="text" bgGradientDir=""
        textAlign="center"
        style={{ WebkitTextFillColor: "transparent" }}>
        Text test example gradient background
      </div>

      <div mb="16" h="16" bgColor="pink-500" rounded outline="1" outlineColor="sky-500" outlineOffset="2" outlineOpacity="59" py="2" textAlign="center">
        <span textColor="white" shadow="x2" trait="typo.display4" style={{ textShadow: "1px 1px 1px #000" }}>Text test example</span>
      </div>
      <div mb="16" h="16" bgColor="pink-500" rounded ring="8" ringColor="sky-500" ringOffset="4" ringOffsetColor="yellow-500" />
      <div mb="16" h="16" bgColor="pink-500" rounded shadow />

      <div mb="16" h="16" bgGradient bgGradientDir="to top right" bgGradientFrom="pink-500" bgGradientVia="yellow-500" bgGradientTo="sky-500" />
      <div mb="16" h="16" bgGradient="radial" bgGradientFrom="pink-500" bgGradientVia="yellow-500" bgGradientTo="sky-500" />
      <div mb="16" h="16" bgGradient="conic" bgGradientFrom="pink-500" bgGradientVia="yellow-500" bgGradientTo="sky-500" />
      <div h="16" w="96" bgColor="sky-500" hover_bgColor="pink-500" transition="colors" duration="5000ms" />
      <div>
        <div as="span" bgColor="red-500">{"Hello, am a <div> or a <a> ?"}</div>
      </div>
      <div></div>
      <div group p="10" bgColor="pink-500" hover_bgColor="sky-500" textColor="white" hover_textColor="black" mx="">
        <p textColor="blue-500" groupHover_textColor="white" lg_groupHover_textColor="yellow">Subtitle</p>
        <p>Text</p>
      </div>
    </Container>
  );
}
