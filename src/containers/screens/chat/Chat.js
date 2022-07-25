import React, { useState, useCallback, useEffect } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import { SafeAreaView, Text, View } from 'react-native';

export default function Chat() {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        setMessages([
            {
                _id: 1,
                text: 'Hello developer',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: 'https://placeimg.com/140/140/any',
                }
            },
        ])
    }, [])

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    }, []);

    // const renderBubble = (props)=> {
    //     return (
    //       <Bubble
    //         {...props}
    //         wrapperStyle={{
    //           right: {
    //             backgroundColor: 'red',
    //             position :'absolute',
    //             bottom : 0
    //           }
    //         }}
    //       />
    //     );
    //   };

    return (
        <SafeAreaView style={{flex:1}}>
        <GiftedChat
            // renderUsernameOnMessage
            alwaysShowSend={true}
            messages={messages}
            showAvatarForEveryMessage={true}
            onSend={messages => onSend(messages)}
            // messageIdGenerator={Utils.UUID}
            user={{
                // _id: this.state.sender,
                // name: this.state.sender,
                // avatar: this.state.senderProfileImage,
            }}
            // renderBubble={this.renderBubble}
            // renderInputToolbar={this.renderInputToolbar}
            // renderSend={this.renderSend}
            scrollToBottom
            infiniteScroll
        />
        </SafeAreaView>
    );
}