/** @jsx jsx */

import { Badge, Button, Card, Container } from "@soperio/ui";
import { jsx } from "@soperio/core";


/**
 *
 *
 */
export default function Page({ ...props })
{
  return (
    <Container center breakpoint="xxl" gap="20" justifyContent="center" py="20">

      <Card w="50%" mb="10" shadow>
        <Card.Header showBorder minH="70px" dflex alignItems="center">
          <span fontSize="lg" fontWeight="600">Basic Card</span>
        </Card.Header>

        <Card.Body>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.
        </Card.Body>

        <Card.Footer showBorder minH="70px" dflex placeContent="end" alignItems="center">
          <Button variant="borderless" theme="neutral" mr="3">Cancel</Button>
          <Button variant="borderless">Save</Button>
        </Card.Footer>
      </Card>

      <Card w="50%" mb="10" shadow>
        <Card.Header showBorder borderWidth="padded" minH="70px" dflex alignItems="center">
          <span fontSize="lg" fontWeight="600">Basic Card</span>
        </Card.Header>

        <Card.Body>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.
        </Card.Body>

        <Card.Footer showBorder borderWidth="padded" minH="70px" dflex placeContent="end" alignItems="center">
          <Button variant="borderless" theme="neutral" mr="3">Cancel</Button>
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
          <Button variant="borderless" theme="neutral" mr="3">Cancel</Button>
          <Button variant="borderless">Save</Button>
        </Card.Footer>
      </Card>

    </Container>
  );
}
