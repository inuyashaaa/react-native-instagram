import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Platform,
    StatusBar,
    Image,
} from 'react-native';
import {
    Icon,
    Container,
    Content,
    Header,
    Left,
    Right,
    Body,
    Button,
} from 'native-base';
import EntypoIcon from 'react-native-vector-icons/Entypo';

class ProfileTab extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name="person" style={{ color: tintColor }} />
        ),
    };

    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
        };
    }

    segmentClicked = (index) => {
        this.setState({
            activeIndex: index,
        });
    }

    rendeSesion = () => {

    }

    render() {
        const { activeIndex } = this.state;
        return (
            <Container style={{ flex: 1, backgroundColor: 'white' }}>
                <Header style={[styles.androidHeader]}>
                    <Left>
                        <Icon
                            name="md-person-add"
                            style={{ paddingLeft: 10 }}
                        />
                    </Left>
                    <Body style={[styles.androidHeaderTitle]}>
                        <Text>Huy asdasdaManh</Text>
                    </Body>
                    <Right>
                        <EntypoIcon
                            name="back-in-time"
                            style={{ paddingRight: 10, fontSize: 32 }}
                        />
                    </Right>
                </Header>

                <Content>
                    <View style={{ paddingTop: 10 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flex: 1, alignItems: 'center' }}>
                                <Image
                                    source={require('../../assets/me.png')}
                                    style={{
                                        width: 75,
                                        height: 75,
                                        borderRadius: 37.5,
                                    }}
                                />
                            </View>

                            <View style={{ flex: 3 }}>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-around',
                                    }}
                                >
                                    <View style={{ alignItems: 'center' }}>
                                        <Text>20</Text>
                                        <Text
                                            style={{
                                                fontSize: 10,
                                                color: 'grey',
                                            }}
                                        >
                                            posts
                                        </Text>
                                    </View>
                                    <View style={{ alignItems: 'center' }}>
                                        <Text>200</Text>
                                        <Text
                                            style={{
                                                fontSize: 10,
                                                color: 'grey',
                                            }}
                                        >
                                            follower
                                        </Text>
                                    </View>
                                    <View style={{ alignItems: 'center' }}>
                                        <Text>300</Text>
                                        <Text
                                            style={{
                                                fontSize: 10,
                                                color: 'grey',
                                            }}
                                        >
                                            following
                                        </Text>
                                    </View>
                                </View>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        paddingTop: 10,
                                    }}
                                >
                                    <Button
                                        bordered
                                        dark
                                        style={{
                                            flex: 3,
                                            marginLeft: 10,
                                            justifyContent: 'center',
                                            height: 30,
                                        }}
                                    >
                                        <Text>Edit Profile</Text>
                                    </Button>
                                    <Button
                                        bordered
                                        dark
                                        style={{
                                            flex: 1,
                                            height: 30,
                                            marginRight: 10,
                                            marginLeft: 5,
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <Icon name="settings" />
                                    </Button>
                                </View>
                            </View>
                        </View>

                        <View
                            style={{
                                paddingHorizontal: 10,
                                paddingVertical: 5,
                            }}
                        >
                            <Text style={{ fontWeight: 'bold' }}>Huy Manh</Text>
                            <Text>Lork | Ha Noi | Viet Nam</Text>
                            <Text>Huy Manh</Text>
                        </View>
                    </View>

                    <View>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-around',
                                borderTopWidth: 1,
                                borderTopColor: '#eae5e5',
                            }}
                        >
                            <Button
                                transparent
                                onPress={() => this.segmentClicked(1)}
                                active={activeIndex === 1}
                            >
                                <Icon
                                    name="ios-apps-outline"
                                    style={[activeIndex === 1 ? {} : { color: 'gray' },
                                    ]}
                                />
                            </Button>

                            <Button
                                transparent
                                onPress={() => this.segmentClicked(2)}
                                active={activeIndex === 2}
                            >
                                <Icon
                                    name="ios-list-outline"
                                    style={[activeIndex === 2 ? {} : { color: 'gray' },
                                    ]}
                                />
                            </Button>
                            <Button
                                transparent
                                onPress={() => this.segmentClicked(3)}
                                active={activeIndex === 3}
                            >
                                <Icon
                                    name="ios-people-outline"
                                    style={[activeIndex === 3 ? {} : { color: 'gray' },
                                    ]}
                                />
                            </Button>
                            <Button
                                transparent
                                onPress={() => this.segmentClicked(4)}
                                active={activeIndex === 4}
                            >
                                <Icon
                                    name="ios-bookmark-outline"
                                    style={[activeIndex === 4 ? {} : { color: 'gray' },
                                    ]}
                                />
                            </Button>
                        </View>
                    </View>
                </Content>
            </Container>
        );
    }
}
export default ProfileTab;

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
