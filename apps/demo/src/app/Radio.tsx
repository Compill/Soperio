import { Checkbox, Container, Input, Radio } from "@soperio/ui";
import React from "react";


type Side = "left" | "right" | "top" | "bottom";

/**
 *
 *
 */
export default function Page({ ...props })
{
  const [checked, setChecked] = React.useState(true);
  const [radioChecked, setRadioChecked] = React.useState(true);

  function handleClick(e: any)
  {
    // console.log("click", e)
  }

  function handleChange(e: any)
  {
    setChecked(!checked);
  }

  function handleRadioChange(e: any)
  {
    setRadioChecked(!radioChecked);
  }

  return (
    <Container center size="xxl" gap="20" justifyContent="center" py="20">
      <div mb="10">
      <Checkbox size="sm" shape="circle" label="Accept the terms and conditions" checked={checked} onClick={handleClick} onChange={handleChange} />
      <Checkbox size="md" shape="circle" label="Accept the terms and conditions" checked={checked} onClick={handleClick} onChange={handleChange} />
      <Checkbox size="lg" shape="circle" label="Accept the terms and conditions" checked={checked} onClick={handleClick} onChange={handleChange} />
      <Checkbox size="xl" shape="circle" label="Accept the terms and conditions" checked={checked} onClick={handleClick} onChange={handleChange} />
      <Checkbox size="x2" shape="circle" label="Accept the terms and conditions" checked={checked} onClick={handleClick} onChange={handleChange} />
      </div>

      <div mb="10" dflex flexCol spaceY="20">
        <Radio name="aa" label="Answer A" value="a" my="2" dotSize="sm" disabled onChange={handleRadioChange} />
        <Radio name="aa" label="Answer B" value="b" my="2" dotSize="md" disabled />
        <Radio name="aa" label="Answer C" value="c" my="2" dotSize="lg" disabled />
      </div>

      <div mb="10" dflex flexCol spaceY="20">
        <Radio name="aa" label="Answer A" value="a" my="2" dotSize="sm" disabled checked={radioChecked} onChange={handleRadioChange} />
        <Radio name="aa" label="Answer B" value="b" my="2" dotSize="md" disabled checked={radioChecked} />
        <Radio name="aa" label="Answer C" value="c" my="2" dotSize="lg" disabled checked={radioChecked} />
      </div>

      <div mb="10" dflex flexCol spaceY="20">
        <Radio name="aa" variant="outline" label="Answer A" value="a" my="2" dotSize="sm" onChange={handleRadioChange} />
        <Radio name="aa" variant="outline" label="Answer B" value="b" my="2" dotSize="md" />
        <Radio name="aa" variant="outline" label="Answer C" value="c" my="2" dotSize="lg" />
      </div>

      <div mb="10" dflex flexCol spaceY="20">
        <Radio name="aa" variant="outline" label="Answer A" value="a" my="2" dotSize="sm" disabled checked={radioChecked} onChange={handleRadioChange} />
        <Radio name="aa" variant="outline" label="Answer B" value="b" my="2" dotSize="md" disabled checked={radioChecked} />
        <Radio name="aa" variant="outline" label="Answer C" value="c" my="2" dotSize="lg" disabled checked={radioChecked} />
      </div>
    </Container>
  );
}
