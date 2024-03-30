import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row', // Bileşenleri yatay olarak sırala
    alignItems: 'center', // Bileşenleri dikeyde hizala
    margin: 10,
  },
  card_container: {
    flex: 0.37,
  },
  text_description: {
    color: '#000',
    fontSize: 20,
    width: 175,
  },
  text_input: {
    borderWidth: 1,
    borderRadius: 10,
    width: 125,
  },
});
