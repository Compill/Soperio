import { Container, Stack, Switch } from "@soperio/ui";
import React from "react";


export default function Page({ ...props }) {
  const [checked, setChecked] = React.useState(true);

  function handleClick(e: any) {
    console.log("click");
    // console.log("click", e)
  }

  function handleChange(e: any) {

    setChecked(!checked);
    console.log("change", e);
  }
  console.log("checked", checked);
  return (
    <Container center size="xxl" dflex gap="20" justifyContent="center" py="20">
      <Stack flexDirection="row" gap='24px'>
      <Switch checked={checked} onClick={handleClick} onChange={handleChange} ></Switch>
      <Switch checked={checked} onClick={handleClick} onChange={handleChange} size="sm" ></Switch>
      <Switch checked={checked} theme={"success"} onClick={handleClick} onChange={handleChange} size="md"  ></Switch>
      <Switch variant="inverse" checked={checked} onClick={handleClick} onChange={handleChange} ></Switch>
      <Switch variant="inverse" checked={checked} onClick={handleClick} onChange={handleChange} corners="square" ></Switch>
      </Stack>
      <Stack flexDirection="column"  gap='24px'>
      <Switch checked={checked} onClick={handleClick} onChange={handleChange} ></Switch>
      <Switch checked={checked} onClick={handleClick} onChange={handleChange} size="sm" ></Switch>
      <Switch checked={checked} theme={"success"} onClick={handleClick} onChange={handleChange} size="md" disabled  ></Switch>
      <Switch variant="inverse" checked={checked} onClick={handleClick} onChange={handleChange} corners="pill"  ></Switch>
      <Switch variant="inverse" checked={checked} onClick={handleClick} onChange={handleChange} corners="square" ></Switch>
      </Stack>
    </Container>
  );
}

