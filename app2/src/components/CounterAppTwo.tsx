import { Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Counter = (props: {
  count: number;
  setCount: (count: number) => void;
}) => {
  const location = useLocation();
  const { count, setCount } = props;

  return (
    <Flex color="#000" gap="1rem" direction="column">
      <Text>
        Renders <strong>count</strong> state and sets it on click.
      </Text>
      <Text>Your click count : {count} </Text>
      <Button onClick={() => setCount(count + 1)}>Click me</Button>
      {location.pathname !== "/" && (
        <Button as={Link} to="/">
          Back to container
        </Button>
      )}
    </Flex>
  );
};

export default Counter;
