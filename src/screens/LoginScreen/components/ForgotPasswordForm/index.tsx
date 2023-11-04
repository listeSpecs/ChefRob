import { MaterialIcons } from "@expo/vector-icons";
import { Button, Center, Icon, Input, Link, Stack, Text } from "native-base";

interface Props {
  clearStep: Function;
}

const ForgotPasswordForm = ({ clearStep }: Props) => {
  return (
    <Stack space={6} width="70%" mx="auto">
      <Input
        variant="outline"
        placeholder="E-mail"
        InputLeftElement={
          <Icon
            as={<MaterialIcons name="person" />}
            size={5}
            ml="2"
            color="muted.400"
          />
        }
      />

      <Center>
        <Button
          bgColor="primary.100"
          size="lg"
          borderRadius={10}
          width="100%"
          onPress={() => console.log("oi")}
        >
          Recuperar
        </Button>
      </Center>
      <Link onPress={() => clearStep()}>
        <Text color="primary.100" bold>
          &#60; Voltar
        </Text>
      </Link>
    </Stack>
  );
};

export default ForgotPasswordForm;
