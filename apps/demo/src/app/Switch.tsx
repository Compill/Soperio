import { Container, Switch } from "@soperio/ui";
import React from "react";


export default function Page({ ...props })
{const [checked, setChecked] = React.useState(true);

  function handleClick(e: any) {
    console.log("click");
    // console.log("click", e)
  }

  function handleChange(e: any) {
    
    setChecked(!checked);
    console.log("change", e);
  }
  console.log("checked",checked);
  return (
    <Container center size="xxl" dflex gap="20" justifyContent="center" py="20">
     <Switch checked={checked} onClick={handleClick} onChange={handleChange} />
    </Container>
  );
}

