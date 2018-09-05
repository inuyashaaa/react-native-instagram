import React, { Component } from 'react';
import {
  View, Text, StyleSheet, Image,
} from 'react-native';
import {
  Card,
  CardItem,
  Thumbnail,
  Body,
  Left,
  Right,
  Button,
  Icon,
} from 'native-base';

class CardComponent extends Component {
  render() {
    return (
      <Card>
        <CardItem>
          <Left>
            <Thumbnail source={require('../assets/me.png')} />
            <Body>
              <Text>Huy Manh</Text>
              <Text note>Jan 10, 2018</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image
            source={require('../assets/feed_images/1.jpg')}
            style={{
              height: 200,
              width: null,
              flex: 1,
            }}
          />
        </CardItem>
        <CardItem style={{ height: 45 }}>
          <Left>
            <Button transparent>
              <Icon
                name="ios-heart-outline"
                style={{
                  color: 'black',
                }}
              />
            </Button>
            <Button transparent>
              <Icon
                name="ios-chatbubbles-outline"
                style={{
                  color: 'black',
                }}
              />
            </Button>
            <Button transparent>
              <Icon
                name="ios-send-outline"
                style={{
                  color: 'black',
                }}
              />
            </Button>
          </Left>
        </CardItem>
      </Card>
    );
  }
}
export default CardComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
