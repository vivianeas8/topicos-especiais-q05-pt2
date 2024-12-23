import {
  SafeAreaView,
  Linking,
  Text,
  View,
  StyleSheet,
  Image,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

const CustomSidebarMenu = (props) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FEF3B4' }}>
      <View style={styles.sideUserArea}>
        <Image
          source={require('../../assets/icon_profile.png')}
          style={styles.sideProfileIcon}
        />
        <Text style={styles.sideUserName}>Viviane Andrade</Text>
        <Text style={styles.sideUserEmail}>viviane@ifs.com.br</Text>
      </View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label="Visite-nos"
          activeTintColor="#730000"
          inactiveTintColor="#730000"
          onPress={() => Linking.openURL('https://www.google.com')}
        />
        <View style={styles.customItem}>
          <Text
            style={{ color: '#730000' }}
            onPress={() => {
              Linking.openURL('https://www.google.com');
            }}>
            Avalie-nos
          </Text>
          <Image
            source={require('../../assets/icon_star.png')}
            style={styles.iconStyle}
          />
        </View>
      </DrawerContentScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sideUserArea: {
    marginTop: 15,
    marginLeft: 10,
    marginBottom: 10,
    alignItems: 'center',
    borderBottomColor: '#AD6200',
    borderBottomWidth: 1,
  },
  sideProfileIcon: {
    resizeMode: 'center',
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    alignSelf: 'center',
    tintColor: '#AD6200',
  },
  sideUserName: {
    marginTop: 5,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#730000',
  },
  sideUserEmail: {
    fontSize: 14,
    marginBottom: 10,
    color: '#730000',
  },
  iconStyle: {
    width: 20,
    height: 20,
    marginHorizontal: 5,
    tintColor: '#AD6200',
  },
  customItem: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default CustomSidebarMenu;
