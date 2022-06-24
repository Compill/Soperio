import React from "react";


const AccordionPage = React.lazy(() => import("../pages/Accordion"));
const AvatarPage = React.lazy(() => import("../pages/Avatar"));
const BadgePage = React.lazy(() => import("../pages/Badge"));
const ButtonPage = React.lazy(() => import("../pages/Button"));
const CardPage = React.lazy(() => import("../pages/Card"));
const CheckboxPage = React.lazy(() => import("../pages/Checkbox"));
const DividerPage = React.lazy(() => import("../pages/Divider"));
const InputPage = React.lazy(() => import("../pages/Input"));
const ListPage = React.lazy(() => import("../pages/List"));
const ModalPage = React.lazy(() => import("../pages/Modal"));
const RadioPage = React.lazy(() => import("../pages/Radio"));
const SelectPage = React.lazy(() => import("../pages/Select"));
const ScrollablePage = React.lazy(() => import("../pages/Scrollable"));
const SpinnerPage = React.lazy(() => import("../pages/Spinner"));
const SurfacePage = React.lazy(() => import("../pages/Surface"));
const SwitchPage = React.lazy(() => import("../pages/Switch"));
const TextAlignPage = React.lazy(() => import("../pages/TextAlign"));
const TextAreaPage = React.lazy(() => import("../pages/TextArea"));
const TestPage = React.lazy(() => import("../pages/Test"));


export const menu = {
  "Accordion": () => <AccordionPage />,
  "Avatar": () => <AvatarPage />,
  "Badge": () => <BadgePage />,
  "Button": () => <ButtonPage />,
  "Card": () => <CardPage />,
  "Checkbox": () => <CheckboxPage />,
  "Divider": () => <DividerPage />,
  "Input": () => <InputPage />,
  "List": () => <ListPage />,
  "Modal": () => <ModalPage />,
  "Radio": () => <RadioPage />,
  "Select": () => <SelectPage />,
  "Scrollable": () => <ScrollablePage />,
  "Spinner": () => <SpinnerPage />,
  "Surface": () => <SurfacePage />,
  "Switch": () => <SwitchPage />,
  "TextAlign": () => <TextAlignPage />,
  "TextArea": () => <TextAreaPage />,
  "Test": () => <TestPage />,
}
