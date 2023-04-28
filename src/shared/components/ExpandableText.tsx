import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
  maxLength?: number;
}

export const ExpandableText = ({ children, maxLength = 300 }: Props) => {
  const [expanded, setExpanded] = useState(false);

  if (children.length <= maxLength) return <Text>{children}</Text>;

  const summary = expanded
    ? children
    : children.substring(0, maxLength) + "...";

  return (
    <>
      <Text>
        {summary}
        <Button
          size="xs"
          colorScheme="teal"
          bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
          color="white"
          variant="solid"
          mx={1}
          onClick={() => setExpanded((prev) => !prev)}
        >
          {expanded ? "Show Less" : "Read More"}
        </Button>
      </Text>
    </>
  );
};

export default ExpandableText;
