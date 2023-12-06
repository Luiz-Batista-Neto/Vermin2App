import 'react-native-gesture-handler';
import React from 'react';
import Routes from './src/routes';
import Herois from './src/telas/Herois';
import { firebaseConfig } from './src/config/firebase-config';
import {  initializeAuth, getReactNativePersistence } from '@firebase/auth/react-native';
import { initializeApp } from 'firebase/app';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {

    const app = initializeApp(firebaseConfig)
    initializeAuth(app, { persistence:  getReactNativePersistence(AsyncStorage)})

    return (
        <Routes/>
    );
}