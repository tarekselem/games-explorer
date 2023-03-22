import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

export const SkeletonCard = () => {
  return (
    <Card>
      <Skeleton height={200} borderRadius={10} overflow="hidden" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};
