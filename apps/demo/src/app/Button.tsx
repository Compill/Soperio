import { defaultColorTheme, useDarkMode } from "@soperio/core";
import { ColorTheme } from "@soperio/theming";
import { Button, Container, ExtendButtonConfig, Sidebar } from "@soperio/ui";
import React from 'react';

type Side = "start" | "end" | "top" | "bottom";

const buttonConfig: ExtendButtonConfig = {
  mode: "extends",
  config: (theme: ColorTheme, darkMode: boolean) => ({
    variants: {
      variant: {
        default: {
          bgColor: "#ff0000",
          textColor: "white"
        },
        outline: {
          bgColor: "#ff00ff",
          textColor: "white"
        }
      }
    },
  })
};

const blackTheme: ColorTheme = {
  ...defaultColorTheme,
  default: "#333333",
  defaultActive: "#333333",
};

const lightTheme: ColorTheme = {
  ...defaultColorTheme,
  default: "#e0e0e0",
  defaultActive: "#e0e0e0",
};

/**
 *
 *
 */
export default function Page({ ...props })
{
  const [showDialog, setShowDialog] = React.useState(false);
  const [side, setSide] = React.useState("start");
  const darkMode = useDarkMode();

  function openDialog(side: Side)
  {
    setSide(side);
    setShowDialog(true);
  }

  return (
    <Container center size="xxl" dflex gap="20" justifyContent="center" py="20">

      <div flexRow>
        <Button config={buttonConfig} variant="default" block mx="auto" my="5" shadow onClick={() => openDialog("start")} z="1001">Open Left</Button>
        <Button config={buttonConfig} variant="light" block mx="auto" my="5">Light button</Button>
        <Button config={buttonConfig} variant="link" block mx="auto" my="5">Link button</Button>
        <Button config={buttonConfig} variant="outline" block mx="auto" my="5">Outline button</Button>
        <Button config={buttonConfig} variant="borderless" block mx="auto" my="5">Borderless</Button>
      </div>

      <div flexRow>
        <Button /*config={buttonConfig}*/ theme={blackTheme} variant="default" block mx="auto" my="5" shadow onClick={() => openDialog("start")} z="1001">Open Left</Button>
        <Button theme={blackTheme} variant="light" block mx="auto" my="5">Light button</Button>
        <Button theme={blackTheme} variant="link" block mx="auto" my="5">Link button</Button>
        <Button theme={blackTheme} variant="outline" block mx="auto" my="5">Outline button</Button>
        <Button theme={blackTheme} variant="borderless" block mx="auto" my="5">Borderless</Button>
      </div>

      <div flexRow>
        <Button theme={"success"} variant="default" block mx="auto" my="5" textTransform="uppercase" onClick={() => openDialog("end")} >Open Right</Button>
        <Button theme={"success"} variant="light" block mx="auto" my="5" textTransform="uppercase">Light button</Button>
        <Button theme={"success"} variant="link" block mx="auto" my="5" textTransform="uppercase">Link button</Button>
        <Button theme={"success"} variant="outline" block mx="auto" my="5" textTransform="uppercase">Outline button</Button>
        <Button theme={"success"} variant="borderless" block mx="auto" my="5" textTransform="uppercase">Borderless</Button>
      </div>

      <div flexRow>
        <Button theme={"pink"} variant="default" block mx="auto" my="5" textTransform="uppercase" onClick={() => openDialog("top")} >Open Top</Button>
        <Button theme={"pink"} variant="light" block mx="auto" my="5" textTransform="uppercase">Light button</Button>
        <Button theme={"pink"} variant="link" block mx="auto" my="5" textTransform="uppercase">Link button</Button>
        <Button theme={"pink"} variant="outline" block mx="auto" my="5" textTransform="uppercase">Outline button</Button>
        <Button theme={"pink"} variant="borderless" block mx="auto" my="5" textTransform="uppercase">Borderless</Button>
      </div>

      <div flexRow>
        <Button theme={"neutral"} variant="default" block mx="auto" my="5" textTransform="uppercase" onClick={() => openDialog("bottom")} >Open Bottom</Button>
        <Button theme={"neutral"} variant="light" block mx="auto" my="5" textTransform="uppercase">Light button</Button>
        <Button theme={"neutral"} variant="link" block mx="auto" my="5" textTransform="uppercase">Link button</Button>
        <Button theme={"neutral"} variant="outline" block mx="auto" my="5" textTransform="uppercase">Outline button</Button>
        <Button theme={"neutral"} variant="borderless" block mx="auto" my="5" textTransform="uppercase">Borderless</Button>
      </div>

      {/* <div flexRow>
                    <Button variant="default" corners="square" block mx="auto" my="5">Default button</Button>
                    <Button variant="light" corners="square" block mx="auto" my="5">Light button</Button>
                    <Button variant="link" corners="square" block mx="auto" my="5">Link button</Button>
                    <Button variant="outline" corners="square" block mx="auto" my="5">Outline button</Button>
                    <Button variant="borderless" corners="square" block mx="auto" my="5">Borderless</Button>
                </div> */}

      <div flexRow>
        <Button variant="default" corners="square" block mx="auto" my="5" selected>Default button</Button>
        <Button variant="light" corners="square" block mx="auto" my="5" selected>Light button</Button>
        <Button variant="link" corners="square" block mx="auto" my="5" selected>Link button</Button>
        <Button variant="outline" corners="square" block mx="auto" my="5" selected>Outline button</Button>
        <Button variant="borderless" corners="square" block mx="auto" my="5" selected>Borderless</Button>
      </div>

      <div flexRow>
        <Button variant="default" theme="default" block mx="auto" my="5" disabled>Default button</Button>
        <Button variant="light" theme="default" block mx="auto" my="5" selected disabled>Light button</Button>
        <Button variant="link" theme="default" block mx="auto" my="5" selected disabled>Link button</Button>
        <Button variant="outline" theme="default" block mx="auto" my="5" disabled>Outline button</Button>
        <Button variant="borderless" theme="default" block mx="auto" my="5" disabled>Borderless</Button>
      </div>

      {/* <div flexRow>
                    <Button variant="default" size="sm" block mx="auto" my="5">Default button</Button>
                    <Button variant="default" size="md" block mx="auto" my="5">Default button</Button>
                    <Button variant="default" size="lg" block mx="auto" my="5">Default button</Button>
                    <Button variant="default" size="xl" block mx="auto" my="5">Default button</Button>
                    <Button variant="default" size="x2" block mx="auto" my="5">Default button</Button>
                    <Button variant="default" size="x2" block mx="auto" my="5">Default button</Button>
                </div> */}
      <Sidebar show={showDialog} side={side as Side} onClose={() => setShowDialog(false)}>
        <div p="8">Hello</div>
      </Sidebar>
    </Container>
  );
}
