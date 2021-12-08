/** @jsx jsx */

import { Checkbox, Container } from "@soperio/ui";
import { jsx } from "@soperio/core";


type Side = "left" | "right" | "top" | "bottom"

/**
 *
 *
 */
export default function Page({ ...props })
{

    return (
        <Container center h="screen" bgColor="root.bg-color-3">
            <Container center breakpoint="xl" h="screen" bgColor="root.bg-color-2" dflex gap="20" justifyContent="center" pt="20">

                <Checkbox label="Hello" />
            </Container>
        </Container>
    );
}
