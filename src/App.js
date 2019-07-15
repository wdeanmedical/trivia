import React from 'react'
import { Provider } from 'react-redux'
import AppNavigator from './routes/AppNavigator'
import configureStore from './state/create_store'
import SafeAreaView from './app_styles'

const store = configureStore()

const App = () => (
  <Provider store={store}>
    <SafeAreaView>
      <AppNavigator />
    </SafeAreaView>
  </Provider>
)

export default App
