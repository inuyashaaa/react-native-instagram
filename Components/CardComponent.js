import React, { Component } from 'react';
import {
  Text, Image,
} from 'react-native';
import {
  Card,
  CardItem,
  Thumbnail,
  Body,
  Left,
  Button,
  Icon,
} from 'native-base';

const images = {
  1: require('../assets/feed_images/1.jpg'),
  2: require('../assets/feed_images/2.jpg'),
  3: require('../assets/feed_images/3.png'),
};
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
            source={images[this.props.imageSource]}
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
        <CardItem style={{ height: 20 }}>
          <Text>{ this.props.likes }</Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text>
              <Text style={{ fontWeight: '900' }}>Huy Manh </Text>
                If you use this site regularly and would like to help keep the site on the Internet,
                please consider donating a small sum to help pay for the hosting and bandwidth bill.
            </Text>
          </Body>
        </CardItem>
      </Card>
    );
  }
}
export default CardComponent;
