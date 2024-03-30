import React from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './Card.style';

const Card = ({description, onChangeText}) => {
  const [text, setText] = React.useState('');

  const handleTextChange = newText => {
    setText(newText);
    onChangeText(newText);
  };
  return (
    <View style={styles.container}>
      <View style={styles.card_container}>
        <TextInput
          style={styles.text_input}
          onChangeText={handleTextChange}
          value={text}
        />
      </View>
      <View style={styles.card_container}>
        <Text style={styles.text_description}>{description}</Text>
      </View>
    </View>
  );
};

export default Card;
