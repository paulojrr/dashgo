import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Paulo Almeida</Text>
          <Text color="gray.300" fontSize="small">
            pauloalmeida.jrr@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Paulo Almeida"
        src="https://github.com/paulojrr.png"
      />
    </Flex>
  );
}
