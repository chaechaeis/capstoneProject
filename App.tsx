import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainPage from './src/components/Home/Main/MainPage';
import SeekerMainPage from './src/components/Home/Main/SeekerMainPage'; // SeekerMainPage 컴포넌트 불러오기
import SetterMainPage from './src/components/Home/Main/SetterMainPage'; // SeekerMainPage 컴포넌트 불러오기
import MyPageHome from './src/components/Home/MyPage/MyPageHome'; // MyPageHomeerMainPage 컴포넌트 불러오기
import MyPageTabView from './src/components/Home/MyPage/MyPageTabView';
import PortfolioPage from './src/components/Home/MyPage/PortfolioPage';
import Review from './src/components/Home/MyPage/Review';
import InitialLogin from './src/components/Auth/InitialLogin';
import SeekerLogin from './src/components/Auth/Seeker/SeekerLogin';
import SetterLogin from './src/components/Auth/Setter/SetterLogin';
import WeatherProvider from './src/contexts/WeatherProvider'; // 새로 추가한 WeatherProvider
import WeatherPage from "./src/components/Weather/WeatherPage"; // WeatherPage를 추가
import RequestPage from './src/components/Home/Request/RequestPage';


import { Colors } from 'react-native/Libraries/NewAppScreen';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
     <WeatherProvider>
      <SafeAreaView style={[styles.container, backgroundStyle]}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <Stack.Navigator>
          <Stack.Screen name="MainPage" component={MainPage} />
          <Stack.Screen name="SeekerMainPage" component={SeekerMainPage} />
          <Stack.Screen name="SetterMainPage" component={SetterMainPage} />
          <Stack.Screen name="MyPageHome" component={MyPageHome} />
          <Stack.Screen name="MyPageTabView" component={MyPageTabView} />
          <Stack.Screen name="PortfolioPage" component={PortfolioPage} />
          <Stack.Screen name="Review" component={Review} />
          <Stack.Screen name="InitialLogin" component={InitialLogin} />
          <Stack.Screen name="SetterLogin" component={SetterLogin} />
          <Stack.Screen name="SeekerLogin" component={SeekerLogin} />
          <Stack.Screen name="WeatherPage" component={WeatherPage} />
          <Stack.Screen name="RequestPage" component={RequestPage} />

          {/* 추가적인 스크린 설정 가능 */}
        </Stack.Navigator>
      </SafeAreaView>
     </WeatherProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
