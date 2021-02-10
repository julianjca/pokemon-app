import React from "react";

import Heading from "../Heading";
import { Spacing } from "../Shared";
import Button from "../Button";

const SuccessModal = ({ onClick }) => {
  return (
    <div>
      <Heading size="xl">Oh no!</Heading>
      <Heading
        as="h3"
        size="md"
        style={{
          fontWeight: 500,
          marginTop: "10px",
        }}
      >
        You have failed to catch this pokemon.
      </Heading>
      <Spacing margin="20px 0 0">
        <Button onClick={onClick} fullWidth>
          Try Again!
        </Button>
      </Spacing>
    </div>
  );
};

export default SuccessModal;
