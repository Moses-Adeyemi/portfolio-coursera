import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack
      w="100%"
      maxW="md"
      bg="white"
      boxShadow="md"
      rounded="md"
      overflow="hidden"
      align="stretch"
    >
      <Image src={imageSrc} alt={title} />

      <VStack align="stretch" spacing={2} p={4}>
        <Heading as="h3" size="md" color="black">
          {title}
        </Heading>

        <Text color="gray.500">{description}</Text>

        <HStack justify="flex-end">
          <Text color="black">Learn More</Text>

          <FontAwesomeIcon icon={faArrowRight} />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
