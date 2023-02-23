import { Button, Flex, Text } from "@chakra-ui/react";
import { useEmitter } from "core/_types";
import React, { useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { clickServiceContext } from "../service/clickService";

const Counter = () => {
  const clickService = useContext(clickServiceContext);

  const count = useEmitter(clickService.count);

  useEffect(
    () =>
      clickService.click.on(() => {
        clickService.count.modify((count) => count + 1);
      }),
    [clickService]
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
