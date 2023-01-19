import React, { useEffect} from "react";
import { StreamChat } from 'stream-chat';
import { Chat, Channel, ChannelHeader, MessageInput, MessageList, Thread, Window } from 'stream-chat-react';
import Cookies from 'universal-cookie';


const client = StreamChat.getInstance('gjg3knsyf28h');

export default function ChatSortie() {
    useEffect(() => {
        const connectUser = async () => {
            await client.connectUser(
                {
                    id: 'Chapijeff',
                    name: 'chapi',
                },
                client.devToken("Chapijeff")
            );
        };
        connectUser();

        return () => client.disconnectUser();
    }, []);
}