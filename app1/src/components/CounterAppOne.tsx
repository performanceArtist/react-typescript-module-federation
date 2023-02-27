import { Text, Button, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export type CounterProps = { remoteCount: number; onClick: () => void };

const Counter = (props: CounterProps) => {
  const { remoteCount, onClick } = props;

  const location = useLocation();

  return (
    <Flex color="#000" gap="1rem" direction="column">
      <Text>
        Renders <strong>count</strong> state and sends <strong>click</strong>{" "}
        event passed by a remote.
      </Text>
      <Text>Remote click count: {remoteCount}</Text>
      <Button onClick={() => onClick()}>
        Click me to send 'click' event to the remote
      </Button>
      {location.pathname !== "/" && (
        <Button as={Link} to="/">
          Back to container
        </Button>
      )}
    </Flex>
  );
};

export default Counter;
