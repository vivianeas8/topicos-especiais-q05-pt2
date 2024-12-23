import { Button, View, Text, StyleSheet } from 'react-native';
import CustomImage from '../components/CustomImage';

const Separator = () => <View style={styles.separator} />;

const FirstPage = ({ navigation }) => {
  return (
    <View style={{ flex: 1, padding: 16, backgroundColor: '#FFC300' }}>
      <View
        styles={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontSize: 25,
            textAlign: 'center',
            marginBottom: 16,
          }}>
          Esta é a tela inicial e da opção 'Primeira Tela'.
        </Text>
        <Button
          color="E37D00"
          onPress={() => navigation.navigate('SecondPage')}
          title='Ir para a "Segunda Tela"'
        />
        <Separator />
        <Button
          color="E37D00"
          onPress={() => navigation.navigate('ThirdPage')}
          title='Ir para a "Terceira Tela"'
        />
      </View>
      <Separator />
      <Text style={{ fontSize: 18, textAlign: 'center', color: '#730000' }}>
        React Navigation Drawer Customizado
      </Text>
      <Separator />
      <CustomImage
        fromWeb={false}
        image={require('../../assets/coldplay-albums.jpg')}
        width={213}
        height={213}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default FirstPage;
