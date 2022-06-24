import { Checkbox, Container } from "@soperio/ui";
import React from "react";

type Side = "left" | "right" | "top" | "bottom";

/**
 *
 *
 */
export default function Page({ ...props })
{
  const [checked, setChecked] = React.useState(false)

  return (
    <Container center size="x2" dflex gap="20" justifyContent="center" py="20">
      <Checkbox label="Hello" size="sm" checked={checked} onChange={() => setChecked(!checked)}/>
      <Checkbox label="Hello" size="md" checked={checked} variant="outline" onChange={() => setChecked(!checked)} />
      <Checkbox size="lg"   label="Hello" checked={checked} onChange={() => setChecked(!checked)}/>
      <Checkbox size="xl" label="Hello" checked={checked} variant="outline" onChange={() => setChecked(!checked)} />
      <Checkbox size="x2" label="Hello" checked={checked} variant="outline" onChange={() => setChecked(!checked)} />
    </Container>
  );
}
