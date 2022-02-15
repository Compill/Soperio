import { Badge, Container } from "@soperio/ui";

/**
 *
 *
 */
export default function Page({ ...props })
{
  return (
    <Container center breakpoint="xxl" gap="20" justifyContent="center" py="20">

      <div mb="10">
        <Badge size="xs" mx="2" my="2">Badge</Badge>
        <Badge size="sm" mx="2" my="2">Badge</Badge>
        <Badge size="md" mx="2" my="2">Badge</Badge>
        <Badge size="lg" mx="2" my="2">Badge</Badge>
        <Badge size="xl" mx="2" my="2">Badge</Badge>
        <Badge size="x2" mx="2" my="2">Badge</Badge>
      </div>

      <div mb="10">
        <Badge shape="pill" textTransform="uppercase" size="xs" mx="2" my="2">Badge</Badge>
        <Badge shape="pill" textTransform="uppercase" size="sm" mx="2" my="2">Badge</Badge>
        <Badge shape="pill" textTransform="uppercase" size="md" mx="2" my="2">Badge</Badge>
        <Badge shape="pill" textTransform="uppercase" size="lg" mx="2" my="2">Badge</Badge>
        <Badge shape="pill" textTransform="uppercase" size="xl" mx="2" my="2">Badge</Badge>
        <Badge shape="pill" textTransform="uppercase" size="x2" mx="2" my="2">Badge</Badge>
      </div>

      <div mb="10">
        <Badge theme="pink" size="xs" mx="2" my="2">Badge</Badge>
        <Badge theme="pink" size="sm" mx="2" my="2">Badge</Badge>
        <Badge theme="pink" size="md" mx="2" my="2">Badge</Badge>
        <Badge theme="pink" size="lg" mx="2" my="2">Badge</Badge>
        <Badge theme="pink" size="xl" mx="2" my="2">Badge</Badge>
        <Badge theme="pink" size="x2" mx="2" my="2">Badge</Badge>
      </div>

      <div mb="10">
        <Badge variant="outline" size="xs" mx="2" my="2">Badge</Badge>
        <Badge variant="outline" size="sm" mx="2" my="2">Badge</Badge>
        <Badge variant="outline" size="md" mx="2" my="2">Badge</Badge>
        <Badge variant="outline" size="lg" mx="2" my="2">Badge</Badge>
        <Badge variant="outline" size="xl" mx="2" my="2">Badge</Badge>
        <Badge variant="outline" size="x2" mx="2" my="2">Badge</Badge>
      </div>

      <div mb="10">
        <Badge variant="light" size="xs" mx="2" my="2">Badge</Badge>
        <Badge variant="light" size="sm" mx="2" my="2">Badge</Badge>
        <Badge variant="light" size="md" mx="2" my="2">Badge</Badge>
        <Badge variant="light" size="lg" mx="2" my="2">Badge</Badge>
        <Badge variant="light" size="xl" mx="2" my="2">Badge</Badge>
        <Badge variant="light" size="x2" mx="2" my="2">Badge</Badge>
      </div>

      <div mb="10">
        <Badge theme="pink" variant="light" size="xs" mx="2" my="2">Badge</Badge>
        <Badge theme="pink" variant="light" size="sm" mx="2" my="2">Badge</Badge>
        <Badge theme="pink" variant="light" size="md" mx="2" my="2">Badge</Badge>
        <Badge theme="pink" variant="light" size="lg" mx="2" my="2">Badge</Badge>
        <Badge theme="pink" variant="light" size="xl" mx="2" my="2">Badge</Badge>
        <Badge theme="pink" variant="light" size="x2" mx="2" my="2">Badge</Badge>
      </div>

      <div mb="10">
        <Badge variant="light-outline" size="xs" mx="2" my="2">Badge</Badge>
        <Badge variant="light-outline" size="sm" mx="2" my="2">Badge</Badge>
        <Badge variant="light-outline" size="md" mx="2" my="2">Badge</Badge>
        <Badge variant="light-outline" size="lg" mx="2" my="2">Badge</Badge>
        <Badge variant="light-outline" size="xl" mx="2" my="2">Badge</Badge>
        <Badge variant="light-outline" size="x2" mx="2" my="2">Badge</Badge>
      </div>
    </Container>
  );
}
