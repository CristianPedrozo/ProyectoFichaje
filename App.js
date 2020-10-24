import React from 'react';
import { StyleSheet, Button, View, Text, Alert } from 'react-native';

import Employee from "./pages/employee";

const App = () => (
    <Employee/>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
});

export default App;
