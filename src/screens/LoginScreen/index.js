import React from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import styles from './style';

const LoginScreen = ({navigation}) => {
  const navigateToSignUp = () => {
    navigation.navigate('SignUpScreen');
  };
  const navigateToRecover = () => {
    navigation.navigate('RecoverScreen');
  };
  const navigateToHome = () => {
    navigation.navigate('HomeScreen');
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.one}>
        <View style={styles.heading}>
          <Text style={styles.headingText}>Holla</Text>
        </View>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholderTextColor={'#7b7a7b'}
            placeholder="Email"
          />
          <TextInput
            style={styles.input}
            placeholderTextColor={'#7b7a7b'}
            placeholder="Password"
            secureTextEntry={true}
          />
        </View>
        <View style={styles.recoverWrap}>
          <View style={styles.forgot}>
            <Text style={styles.forgotText}>Forgot Password? </Text>
            <TouchableOpacity onPress={navigateToRecover}>
              <Text style={styles.forgotLink}> Recover here</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity onPress={navigateToHome}>
          <View style={styles.loginBtn}>
            <Text style={styles.loginBtnText}>LOGIN</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.two}>
        <View style={styles.footerWrap}>
          <View style={styles.footer}>
            <Text style={styles.footerText}>Don't have an account? </Text>
            <TouchableOpacity onPress={navigateToSignUp}>
              <Text style={styles.footerSignText}> SignUp here</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;
