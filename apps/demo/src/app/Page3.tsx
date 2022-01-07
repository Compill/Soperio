import { Checkbox, Container, Input } from "@soperio/ui";
import { useDarkMode } from "@soperio/core";


type Side = "left" | "right" | "top" | "bottom";

/**
 *
 *
 */
export default function Page({ ...props })
{
  const darkMode = useDarkMode();

  return (
    <Container center breakpoint="xxl" gap="20" bgColor={ darkMode ? "root.bg-color-4" : "white" } px="10" justifyContent="center" py="20">

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
      <div>
        <Input block size="x2" variant="default" mb="5" length={50} placeholder="Hello" />
        <Input block size="x2" variant="solid" mb="5" length={50} placeholder="Hello" />
        <Input block size="x2" variant="underline" mb="5" length={50} placeholder="Hello" />
      </div>
    </Container>
  );
}
