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

const SignUpScreen = ({navigation}) => {
  const navigateToSignIn = () => {
    navigation.navigate('LoginScreen');
  };
  return (
    <ScrollView style={styles.container}>
      <View>
        <View style={styles.one}>
          <View style={styles.heading}>
            <Text style={styles.headingText}>Haseen</Text>
          </View>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholderTextColor={'#7b7a7b'}
              placeholder="Full Name"
            />
            <TextInput
              style={styles.input}
              placeholderTextColor={'#7b7a7b'}
              placeholder="Email"
            />
            <TextInput
              style={styles.input}
              placeholderTextColor={'#7b7a7b'}
              placeholder="Mobile Number"
            />
            <TextInput
              style={styles.input}
              placeholderTextColor={'#7b7a7b'}
              placeholder="Password"
            />
            <TextInput
              style={styles.input}
              placeholderTextColor={'#7b7a7b'}
              placeholder="Confirm Password"
            />
          </View>

          <TouchableOpacity>
            <View style={styles.loginBtn}>
              <Text style={styles.loginBtnText}>SIGN UP</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.two}>
          <View style={styles.footerWrap}>
            <View style={styles.footer}>
              <Text style={styles.footerText}>Don't have an account? </Text>
              <TouchableOpacity onPress={navigateToSignIn}>
                <Text style={styles.footerSignText}> SignIn here</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUpScreen;
