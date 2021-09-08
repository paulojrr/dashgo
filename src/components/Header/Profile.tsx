import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Paulo Almeida</Text>
        <Text color="gray.300" fontSize="small">
          pauloalmeida.jrr@gmail.com
        </Text>
      </Box>

      <Avatar
        size="md"
        name="Paulo Almeida"
        src="https://github.com/paulojrr.png"
      />
    </Flex>
  );
}
