import * as React from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  Button,
  ScrollView,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import CreditCardDisplay from 'react-native-credit-card-display';

export default function App() {
  const [card2Flipped, setCard2Flipped] = React.useState(true);

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <StatusBar barStyle="dark-content" />
      <ScrollView
        contentContainerStyle={{ alignContent: 'center' }}
        style={{
          width: Dimensions.get('screen').width,
        }}
      >
        <View style={styles.cardContainer}>
          <CreditCardDisplay
            number={4242}
            cvc={123}
            expiration="06/21"
            brand={'mastercard'}
          />
        </View>
        <View style={styles.cardContainer}>
          <CreditCardDisplay
            number={'4242'}
            cvc={123}
            expiration="06/21"
            height={126}
            width={200}
            fontSize={12}
            friction={10}
            flipped={card2Flipped}
            brand={'mastercard'}
          />
          <Button onPress={() => setCard2Flipped(!card2Flipped)} title="Flip" />
        </View>
        <View style={styles.cardContainer}>
          <CreditCardDisplay
            number={4242}
            cvc={123}
            expiration="06/21"
            brand={'mastercard'}
          />
        </View>
        <View style={styles.cardContainer}>
          <CreditCardDisplay
            number={'4242'}
            cvc={123}
            expiration="06/21"
            brand={'visa'}
          />
        </View>
        <View style={styles.cardContainer}>
          <CreditCardDisplay
            number={4242}
            cvc={123}
            expiration="06/21"
            brand={'visa'}
          />
        </View>
        <View style={styles.cardContainer}>
          <CreditCardDisplay
            number={4242}
            cvc={123}
            expiration="06/21"
            brand={'visa'}
          />
        </View>
        <View style={styles.cardContainer}>
          <CreditCardDisplay
            number={4242}
            cvc={123}
            expiration="06/21"
            brand={'visa'}
          />
        </View>
        <View style={styles.cardContainer}>
          <CreditCardDisplay
            number={4242}
            cvc={123}
            expiration="06/21"
            brand={'visa'}
          />
        </View>
        <View style={styles.cardContainer}>
          <CreditCardDisplay
            number={4242}
            cvc={123}
            expiration="06/21"
            brand={'visa'}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContainer: {
    marginVertical: 25,
    alignItems: 'center',
  },
});
