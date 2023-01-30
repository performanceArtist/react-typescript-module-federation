import { Button, Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { clickService } from "../service/clickService";

const Counter = () => {
  const [count, setCount] = useState(clickService.count.get());

  useEffect(() => clickService.count.on((count) => setCount(count)), []);

  useEffect(
    () =>
      clickService.click.on(() => {
        clickService.count.emit(count + 1);
      }),
    [count]
  );

  const location = useLocation();

  return (
    <Flex color="#000" gap="1rem" direction="column">
      <Text>
        Add by one each click <strong>APP-2</strong>
      </Text>
      <Text>Your click count : {count} </Text>
      <Button onClick={() => clickService.count.emit(count + 1)}>
        Click me
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
