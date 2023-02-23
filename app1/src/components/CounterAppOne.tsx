import { Text, Button, Flex } from "@chakra-ui/react";
import { useEmitter } from "core/_types";
import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AppContext } from "../AppOne";

const Counter = () => {
  const { app2Click, app2Count } = useContext(AppContext);

  const remoteCount = useEmitter(app2Count);

  const [count, setCount] = useState(0);

  const location = useLocation();

  return (
    <Flex color="#000" gap="1rem" direction="column">
      <Text>
        Add by one each click <strong>APP-1</strong>
      </Text>
      <Text>Your click count : {count} </Text>
      <Text>Remote click count: {remoteCount}</Text>
      <Button onClick={() => setCount(count + 1)}>Click me</Button>
      <Button onClick={() => app2Click.emit()}>
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
