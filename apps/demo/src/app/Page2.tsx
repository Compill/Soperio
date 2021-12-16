/** @jsx jsx */

import { Checkbox, Container } from "@soperio/ui";
import { jsx } from "@soperio/core";


type Side = "left" | "right" | "top" | "bottom";

/**
 *
 *
 */
export default function Page({ ...props })
{

  return (
    <Container center breakpoint="xxl" dflex gap="20" justifyContent="center" py="20">
      <Checkbox label="Hello" />
    </Container>
  );
}
