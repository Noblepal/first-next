import {
  Button,
  Flex,
  Heading,
  Input,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Home() {
  const { toggleColorMode } = useColorMode();
  const formBg = useColorModeValue("gray.50", "gray.700");
  return (
    <>
      <Flex h={"100vh"} align={"center"} justify={"center"}>
        <Flex direction={"column"} bg={formBg} p={12} rounded={6}>
          <Heading mb={6}>Log In</Heading>
          <Input
            placeholder={"Email"}
            variant={"filled"}
            mb={3}
            type={"email"}
          />
          <Input
            placeholder={"Password"}
            variant={"filled"}
            mb={6}
            type={"password"}
          />
          <Button mb={6} colorScheme={"teal"}>
            Log in
          </Button>
          <Button onClick={toggleColorMode}>Toggle Theme</Button>
        </Flex>
      </Flex>
    </>
  );
}
