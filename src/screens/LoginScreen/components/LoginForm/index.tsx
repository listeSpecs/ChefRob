import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-community/async-storage";
import { Button, Center, Icon, Input, Link, Stack, Text } from "native-base";

interface Props {
  clearStep: Function;
}

//Temporário
const signIn = async () => {
  setStore(true);
};

const LoginForm = ({ clearStep }: Props) => {
  return (
    <Stack space={6} width="70%" mx="auto">
      <Input
        variant="outline"
        borderColor="secondary.100"
        placeholder="E-mail"
        InputLeftElement={
          <Icon
            as={<MaterialIcons name="person" />}
            size={5}
            ml="2"
            color="primary.100"
          />
        }
      />
      <Input
        variant="outline"
        placeholder="Senha"
        borderColor="secondary.100"
        InputLeftElement={
          <Icon
            as={<MaterialCommunityIcons name="key" />}
            size={5}
            ml="2"
            color="primary.100"
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
      <Center>
        <Link onPress={() => clearStep()}>
          <Text color="primary.100">
            Voltar para o login
          </Text>
        </Link>
      </Center>
    </Stack>
  );
};

export default LoginForm;
