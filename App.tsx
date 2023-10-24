import React, {useEffect} from 'react';
import {Button, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

type StackParams = {
  Screen1: undefined;
  Screen2: undefined;
};

type Screen1Props = {
  navigation: NativeStackNavigationProp<StackParams, 'Screen1'>;
};

function Screen1({navigation}: Screen1Props) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Screen1</Text>
      <Button
        title="to 2"
        onPress={() => {
          navigation.navigate('Screen2');
        }}
      />
    </View>
  );
}

function CustomHeaderTitle() {
  return <View />;
}

type Screen2Props = {
  navigation: NativeStackNavigationProp<StackParams, 'Screen2'>;
};

function Screen2({navigation}: Screen2Props) {
  useEffect(() => {
    navigation.setOptions({
      headerTitle: CustomHeaderTitle,
    });
  }, [navigation]);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Screen2</Text>
      <Button
        title="back"
        onPress={() => {
          navigation.goBack();
        }}
      />
      <Button
        title="add headerBackVisible"
        onPress={() => {
          navigation.setOptions({
            headerBackVisible: true,
          });
        }}
      />
      <Button
        title="remove headerBackVisible"
        onPress={() => {
          navigation.setOptions({
            headerBackVisible: undefined,
          });
        }}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator<StackParams>();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Screen1" component={Screen1} />
        <Stack.Screen name="Screen2" component={Screen2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
