/** @jsx jsx */

import { Checkbox, Container, Input } from "@soperio/ui";
import { jsx } from "@soperio/core";


type Side = "left" | "right" | "top" | "bottom";

/**
 *
 *
 */
export default function Page({ ...props })
{

    return (
        <Container center h="screen" bgColor="root.bg-color-3">
            <Container center breakpoint="xl" h="screen" bgColor="root.bg-color-1"  p="20">
                <div mb="10">
                    <Input block size="sm" variant="default" mb="5" length={50} placeholder="Hello" />
                    <Input block size="sm" variant="solid" mb="5" length={50} placeholder="Hello" />
                    <Input block size="sm" variant="underline" mb="5" length={50} placeholder="Hello" />
                </div>

                <div mb="10">
                    <Input block variant="default" mb="5" length={50} placeholder="Hello" />
                    <Input block variant="solid" mb="5" length={50} placeholder="Hello" />
                    <Input block variant="underline" mb="5" length={50} placeholder="Hello" />
                </div>

                <div mb="10">
                    <Input block size="lg" variant="default" mb="5" length={50} placeholder="Hello" />
                    <Input block size="lg" variant="solid" mb="5" length={50} placeholder="Hello" />
                    <Input block size="lg" variant="underline" mb="5" length={50} placeholder="Hello" />
                </div>
                <div mb="10">
                    <Input block size="xl" variant="default" mb="5" length={50} placeholder="Hello" />
                    <Input block size="xl" variant="solid" mb="5" length={50} placeholder="Hello" />
                    <Input block size="xl" variant="underline" mb="5" length={50} placeholder="Hello" />
                </div>
                <div mb="10">
                    <Input block size="x2" variant="default" mb="5" length={50} placeholder="Hello" />
                    <Input block size="x2" variant="solid" mb="5" length={50} placeholder="Hello" />
                    <Input block size="x2" variant="underline" mb="5" length={50} placeholder="Hello" />
                </div>
            </Container>
        </Container>
    );
}
