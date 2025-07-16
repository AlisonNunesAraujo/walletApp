import { View, Text } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import { styles } from './style';
export default function VerifiquedRede() {
 return (
   <View style={styles.container}>
    <Text style={styles.text}>Sem internet!</Text>
    <Feather name="wifi-off" size={15} color={"#fff"} />
   </View>
  );
}