import React from 'react';
import {Alert} from 'react-native';
import Loading from "./Loading/Loading";
import Weather from './Weather';
import * as Location from "expo-location";
import axios from 'axios';

const API_kEY = "8632e5536f11659ed3e1295ae69cdd4b"; 
export default class extends React.Component {

    /* jshint ignore: start */
    state = {
      isLoading: true,
      temp: 0,
    };

    getWeather = async(latitude, longitude) => {
      const {data:{main:{temp}, weather}} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_kEY}&units=metric`);
      this.setState({isLoading: false, condition: weather[0].main, temp: temp});
    }

    getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const {coords:{latitude, longitude}} = await Location.getCurrentPositionAsync();
      // send to API and get weather
      this.getWeather(latitude, longitude);
    } catch(err) {
      Alert.alert("can't find you", "so sad");
    }
  }
  
  componentDidMount(){
    this.getLocation();
  }

  render(){
    const { isLoading, temp, condition} = this.state;
    return isLoading ? <Loading /> : <Weather temp={Math.floor(temp)} condition={condition} /> ;
  }
  
  /* jshint ignore: end */
} 