import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Platform,
  StatusBar,
} from 'react-native';
import {
  Icon,
  Container,
  Content,
  Thumbnail,
  Header,
  Left,
  Right,
  Body,
} from 'native-base';
import CardComponent from '../CardComponent';

class HomeTab extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-home" style={{ color: tintColor }} />
    ),
  };

  render() {
    return (
      <Container style={styles.container}>
        <Header style={[styles.androidHeader]}>
          <Left>
            <Icon name="ios-camera-outline" style={{ paddingLeft: 10 }} />
          </Left>
          <Body style={[styles.androidHeaderTitle]}>
            <Text>Instagram</Text>
          </Body>
          <Right>
            <Icon
              name="ios-send-outline"
              style={{ paddingRight: 10, fontSize: 32 }}
            />
          </Right>
        </Header>

        <Content>
          <View style={{ height: 100 }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: 7,
              }}
            >
              <Text style={{ fontWeight: 'bold' }}>Stories</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Icon name="md-play" style={{ fontSize: 14 }} />
                <Text style={{ fontWeight: 'bold' }}> Watch All</Text>
              </View>
            </View>
            <View style={{ flex: 3 }}>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                  alignItems: 'center',
                  paddingStart: 5,
                  paddingEnd: 5,
                }}
              >
                <Thumbnail
                  style={{
                    marginHorizontal: 5,
                    borderColor: 'pink',
                    borderWidth: 2,
                  }}
                  source={require('../../assets/StoriesHeaderThumbnails/1.jpg')}
                />
                <Thumbnail
                  style={{
                    marginHorizontal: 5,
                    borderColor: 'pink',
                    borderWidth: 2,
                  }}
                  source={require('../../assets/StoriesHeaderThumbnails/2.jpg')}
                />
                <Thumbnail
                  style={{
                    marginHorizontal: 5,
                    borderColor: 'pink',
                    borderWidth: 2,
                  }}
                  source={require('../../assets/StoriesHeaderThumbnails/3.jpg')}
                />
                <Thumbnail
                  style={{
                    marginHorizontal: 5,
                    borderColor: 'pink',
                    borderWidth: 2,
                  }}
                  source={require('../../assets/StoriesHeaderThumbnails/4.jpg')}
                />
                <Thumbnail
                  style={{
                    marginHorizontal: 5,
                    borderColor: 'pink',
                    borderWidth: 2,
                  }}
                  source={require('../../assets/StoriesHeaderThumbnails/5.jpg')}
                />
                <Thumbnail
                  style={{
                    marginHorizontal: 5,
                    borderColor: 'pink',
                    borderWidth: 2,
                  }}
                  source={require('../../assets/StoriesHeaderThumbnails/6.jpg')}
                />
                <Thumbnail
                  style={{
                    marginHorizontal: 5,
                    borderColor: 'pink',
                    borderWidth: 2,
                  }}
                  source={require('../../assets/StoriesHeaderThumbnails/7.jpg')}
                />
              </ScrollView>
            </View>
          </View>
          <CardComponent imageSource="1" likes="101 likes" />
          <CardComponent imageSource="2" likes="202 likes" />
          <CardComponent imageSource="3" likes="303 likes" />
        </Content>
      </Container>
    );
  }
}
export default HomeTab;

const styles = StyleSheet.create({
  androidHeader: {
    ...Platform.select({
      android: {
        marginTop: StatusBar.currentHeight,
        backgroundColor: 'white',
      },
    }),
  },
  androidHeaderTitle: {
    ...Platform.select({
      android: {
        alignItems: 'flex-end',
      },
    }),
  },
});
