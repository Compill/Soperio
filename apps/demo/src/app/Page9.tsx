/** @jsx jsx */

import { jsx } from "@soperio/core";
import { Container, Spinner } from "@soperio/ui";


/**
 *
 *
 */
export default function Page({ ...props })
{

    return (
      <Container center breakpoint="xxl" gap="20" justifyContent="center" py="20">
                <div mb="10">
                    <Spinner size="sm" mr="5" />
                    <Spinner size="md" mr="5" />
                    <Spinner size="lg" mr="5" />
                    <Spinner size="xl" mr="5" />
                    <Spinner size="x2" mr="5" />
                </div>
            </Container>
    );
}
