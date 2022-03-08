import { Badge, Button, Card, Container } from "@soperio/ui";

/**
 *
 *
 */
export default function Page({ ...props })
{
  return (
    <Container center size="xxl" gap="20" justifyContent="center" p="20" spaceY="10" >

      <Card w="50%">
        <Card.Header minH="70px" dflex alignItems="center">
          <span fontSize="lg" fontWeight="600">Basic Card</span>
        </Card.Header>

        <Card.Body>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.
        </Card.Body>

        <Card.Footer  minH="70px" dflex placeContent="end" alignItems="center">
          <Button variant="borderless" theme="neutral" me="3">Cancel</Button>
          <Button variant="borderless">Save</Button>
        </Card.Footer>
      </Card>

      <Card w="50%" shadow>
        <Card.Header showBorder minH="70px" dflex alignItems="center">
          <span fontSize="lg" fontWeight="600">Basic Card</span>
        </Card.Header>

        <Card.Body>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.
        </Card.Body>

        <Card.Footer showBorder minH="70px" dflex placeContent="end" alignItems="center">
          <Button variant="borderless" theme="neutral" me="3">Cancel</Button>
          <Button variant="borderless">Save</Button>
        </Card.Footer>
      </Card>

      <Card w="50%" shadow>
        <Card.Header showBorder borderWidth="padded" minH="70px" dflex alignItems="center">
          <span fontSize="lg" fontWeight="600">Basic Card</span>
        </Card.Header>

        <Card.Body>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.
        </Card.Body>

        <Card.Footer showBorder borderWidth="padded" minH="70px" dflex placeContent="end" alignItems="center">
          <Button variant="borderless" theme="neutral" me="3">Cancel</Button>
          <Button variant="borderless">Save</Button>
        </Card.Footer>
      </Card>

      <Card w="50%" shadow>
        <Card.Header minH="70px" dflex alignItems="center">
          <span fontSize="lg" fontWeight="600">Basic Card</span>
        </Card.Header>

        <Card.Body>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.
        </Card.Body>

        <Card.Footer minH="70px" dflex placeContent="end" alignItems="center">
          <Button variant="borderless" theme="neutral" me="3">Cancel</Button>
          <Button variant="borderless">Save</Button>
        </Card.Footer>
      </Card>

      <Card w="50%" variant="bordered" bgColor="root.bg-color-1">
        <Card.Header minH="70px" dflex alignItems="center">
          <span fontSize="lg" fontWeight="600">Basic Card</span>
        </Card.Header>

        <Card.Body>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.
        </Card.Body>

        <Card.Footer minH="70px" dflex placeContent="end" alignItems="center">
          <Button variant="borderless" theme="neutral" me="3">Cancel</Button>
          <Button variant="borderless">Save</Button>
        </Card.Footer>
      </Card>

    </Container>
  );
}