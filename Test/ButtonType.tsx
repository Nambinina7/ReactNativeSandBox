import React from 'react';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
} from 'react-native';
import Separator from './Separator';

const ButtonType = () => (
  <SafeAreaView style={styles.container}>
    <View>
      <Text style={styles.title}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae expedita hic vel, aspernatur quo id cumque perspiciatis, dignissimos magni reprehenderit possimus distinctio, fugiat ex consequuntur cum fugit porro inventore doloribus?
      </Text>
      <Button
        title="Press me"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
    </View>
    <Separator />
    <View>
      <Text style={styles.title}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi nobis qui nihil aliquam ipsum esse deleniti libero accusamus ipsa magnam?
      </Text>
      <Button
        title="Press me"
        color="#f194ff"
        onPress={() => Alert.alert('Button with adjusted color pressed')}
      />
    </View>
    <Separator />
    <View>
      <Text style={styles.title}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, non.
      </Text>
      <Button
        title="Press me"
        disabled
        onPress={() => Alert.alert('Cannot press this one')}
      />
    </View>
    <Separator />
    <View>
      <Text style={styles.title}>
        Lorem ipsum dolor sit amet.
      </Text>
      <View style={styles.fixToText}>
        <Button
          title="Left button"
          onPress={() => Alert.alert('Left button pressed')}
        />
        <Button
          title="Right button"
          onPress={() => Alert.alert('Right button pressed')}
        />
      </View>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default ButtonType;