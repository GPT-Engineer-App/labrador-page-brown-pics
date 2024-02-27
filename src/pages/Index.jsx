import React from "react";
import { Box, Container, Heading, Text, VStack, Image, SimpleGrid } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl">
      <VStack spacing={8} py={10}>
        <Heading as="h1" size="2xl" textAlign="center" bg="green.500" color="white">
          All About Labrador Dogs
        </Heading>
        <Text fontSize="xl" textAlign="justify">
          Labradors are one of the most popular dog breeds in the world, and for good reason. They are known for their friendly and outgoing nature, as well as their loyalty and versatility. Originally bred for retrieving game in water, Labradors have a unique love for swimming. Their dense, water-resistant coats and strong build make them excellent swimmers. They are also highly intelligent and trainable, which makes them perfect for roles such as guide dogs, search-and-rescue dogs, and therapy dogs.
        </Text>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          <Box>
            <Image src="https://images.unsplash.com/photo-1487000863648-80cd0e0b3e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxicm93biUyMGxhYnJhZG9yJTIwZG9nfGVufDB8fHx8MTcwODk5NTU2NXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Brown Labrador Dog" borderRadius="md" />
          </Box>
          <Box>
            <Image src="https://images.unsplash.com/photo-1526520112421-5054395689a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHxicm93biUyMGxhYnJhZG9yJTIwZG9nfGVufDB8fHx8MTcwODk5NTU2NXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Brown Labrador Dog" borderRadius="md" />
          </Box>
          <Box>
            <Image src="https://images.unsplash.com/photo-1607475403769-fc20e25a696a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwzfHxicm93biUyMGxhYnJhZG9yJTIwZG9nfGVufDB8fHx8MTcwODk5NTU2NXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Brown Labrador Dog" borderRadius="md" />
          </Box>
        </SimpleGrid>
        <Text fontSize="xl" textAlign="justify">
          Brown Labradors, also known as Chocolate Labradors, have a beautiful, rich coat color that ranges from medium to dark brown. While they are less common than their black or yellow counterparts, Brown Labradors share the same friendly and affectionate personality traits. They are great family pets and are especially good with children. Their playful and gentle nature makes them a beloved member of any household.
        </Text>
      </VStack>
    </Container>
  );
};

export default Index;
