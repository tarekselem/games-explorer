import { Badge } from "@chakra-ui/layout";

interface Props {
  score: number;
}

export const CriticScore = ({ score }: Props) => {
  const color = score > 75 ? "green" : score > 60 ? "yellow" : "";
  return (
    <Badge colorScheme={color} fontSize="14" paddingX={2} borderRadius={4}>
      {score}
    </Badge>
  );
};
