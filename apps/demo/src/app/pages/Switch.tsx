import { Container, Stack, Switch } from "@soperio/ui";
import React from "react";


export default function Page({ ...props })
{
  const [checked, setChecked] = React.useState(true);

  function handleClick(e: any)
  {
    // console.log("click", e)
  }

  const handleChange = React.useCallback((e: any) =>
  {

    setChecked(!checked);
  }, [checked, setChecked])

  return (
    <Container center size="x2" dflex gap="20" justifyContent="center" py="20">
      <Stack lg_direction="row" gap='24px'>
        <Switch checked={checked} onClick={handleClick} onChange={handleChange} ></Switch>
        <Switch checked={checked} onClick={handleClick} onChange={handleChange} size="sm" ></Switch>
        <Switch checked={checked} theme={"success"} onClick={handleClick} onChange={handleChange} size="md"  ></Switch>
        <Switch variant="inverse" checked={checked} onClick={handleClick} onChange={handleChange} ></Switch>
        <Switch variant="inverse" checked={checked} onClick={handleClick} onChange={handleChange} corners="square" ></Switch>
      </Stack>
      {/* <Stack direction="column" gap='24px'>
        <Switch checked={checked} onClick={handleClick} onChange={handleChange} ></Switch>
        <Switch checked={checked} onClick={handleClick} onChange={handleChange} size="sm" ></Switch>
        <Switch checked={checked} theme={"success"} onClick={handleClick} onChange={handleChange} size="md" disabled  ></Switch>
        <Switch variant="inverse" checked={checked} onClick={handleClick} onChange={handleChange} corners="pill"  ></Switch>
        <Switch variant="inverse" checked={checked} onClick={handleClick} onChange={handleChange} corners="square" ></Switch>
      </Stack> */}
    </Container>
  );
}
