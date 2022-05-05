import { Button, Modal } from "@soperio/ui";
import React from "react";

/**
 *
 *
 */
export default function Page({ ...props }) {
  const [showModal, setShowModal] = React.useState(false);


  return (
    <div>
      <Button variant="default" block mx="auto" my="5" shadow onClick={() => setShowModal(true)} >Open Modal</Button>
      <Modal show={showModal} onClose={() => setShowModal(false)} location="10" >
        <Modal.Header minH="70px" dflex alignItems="center">
          <span fontSize="lg" fontWeight="600">Basic Modal</span>
        </Modal.Header>
        <Modal.Body>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled..
        </Modal.Body>

        <Modal.Footer minH="70px" dflex placeContent="end" alignItems="center">
          <Button variant="borderless" theme="neutral" me="3" onClick={() => setShowModal(false)}>Close</Button>
          <Button variant="borderless" onClick={() => console.log("save")}>Save</Button>
        </Modal.Footer>
      </Modal>


    </div>
  );
}
