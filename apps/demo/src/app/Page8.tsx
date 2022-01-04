/** @jsx jsx */

import { Checkbox, Container, TextArea } from "@soperio/ui";
import { jsx } from "@soperio/react";

type Side = "left" | "right" | "top" | "bottom";

/**
 *
 *
 */
export default function Page({ ...props })
{

    return (
      <Container center breakpoint="xxl" gap="20" justifyContent="center" py="20">
                <div mb="10">
                    <TextArea block size="sm" variant="default" mb="5" rows={3} placeholder="Hello" />
                    <TextArea block size="sm" variant="solid" mb="5" rows={3} placeholder="Hello" />
                    <TextArea block size="sm" variant="underline" mb="5" rows={3} placeholder="Hello" />
                </div>

                <div mb="10">
                    <TextArea block variant="default" mb="5" rows={3} placeholder="Hello" />
                    <TextArea block variant="solid" mb="5" rows={3} placeholder="Hello" />
                    <TextArea block variant="underline" mb="5" rows={3} placeholder="Hello" />
                </div>

                <div mb="10">
                    <TextArea block size="lg" variant="default" mb="5" rows={3} placeholder="Hello" />
                    <TextArea block size="lg" variant="solid" mb="5" rows={3} placeholder="Hello" />
                    <TextArea block size="lg" variant="underline" mb="5" rows={3} placeholder="Hello" />
                </div>
                <div mb="10">
                    <TextArea block size="xl" variant="default" mb="5" rows={3} placeholder="Hello" />
                    <TextArea block size="xl" variant="solid" mb="5" rows={3} placeholder="Hello" />
                    <TextArea block size="xl" variant="underline" mb="5" rows={3} placeholder="Hello" />
                </div>
                <div mb="10">
                    <TextArea block size="x2" variant="default" mb="5" rows={3} placeholder="Hello" />
                    <TextArea block size="x2" variant="solid" mb="5" rows={3} placeholder="Hello" />
                    <TextArea block size="x2" variant="underline" mb="5" rows={3} placeholder="Hello" />
                </div>
            </Container>
    );
}
