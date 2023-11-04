import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-community/async-storage";
import { Button, Center, Icon, Input, Link, Stack, Text } from "native-base";

interface Props {
  clearStep: Function;
}

//Temporário
const signIn = async () => {
  setStore(true);
}

const LoginForm = ({ clearStep }: Props) => {
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
      <Input
        variant="outline"
        placeholder="Senha"
        InputLeftElement={
          <Icon
            as={<MaterialCommunityIcons name="key" />}
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
          onPress={() => signIn()}
        >
          Logar
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

export default LoginForm;
