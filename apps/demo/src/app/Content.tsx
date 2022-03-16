import { Button } from "@soperio/ui";
import React from "react";
import Badge from "./Badge";
import ButtonPage from "./Button";
import Card from "./Card";
import Checkbox from "./Checkbox";
import Form from "./Formik";
import Input from "./Input";
import Radio from "./Radio";
import Select from "./Select";
import Spinner from "./Spinner";
import TextAlign from "./TextAlign";
import TextArea from "./TextArea";

export function Content()
{
  const [state, setState] = React.useState(1);
  

  return (
    <>
      {/* <Test bgColor="red" borderB="2" pt="16" /> */}
      <div dflex flexRow px="16" py="8" bgColor="root.bg-color-2" spaceX="3">
        <Button onClick={() => setState(1)}>Button</Button>
        <Button onClick={() => setState(2)}>Checkbox</Button>
        <Button onClick={() => setState(3)}>Form</Button>
        <Button onClick={() => setState(4)}>Radio</Button>
        <Button onClick={() => setState(5)}>Badge</Button>
        <Button onClick={() => setState(6)}>Card</Button>
        <Button onClick={() => setState(7)}>Select</Button>
        <Button onClick={() => setState(8)}>TextArea</Button>
        <Button onClick={() => setState(9)}>Spinner</Button>
        <Button onClick={() => setState(10)}>Text</Button>
        <Button onClick={() => setState(11)}>Test</Button>
      </div>
      <div h="full" bgColor="root.bg-color-3">
        {state === 1 && <ButtonPage />}
        {state === 2 && <Checkbox />}
        {state === 3 && <Input />}
        {state === 4 && <Radio />}
        {state === 5 && <Badge />}
        {state === 6 && <Card />}
        {state === 7 && <Select />}
        {state === 8 && <TextArea />}
        {state === 9 && <Spinner />}
        {state === 10 && <TextAlign />}
        {state === 10 && <Form />}
      </div>
    </>
  );
}
