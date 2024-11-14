import React, { useEffect, useState } from 'react';
import { db } from './firebase'; // Import your Firebase configuration
import { ref, onValue } from 'firebase/database';

const Message = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        // Create a reference to the 'messages' node in the database
        const messagesRef = ref(db, 'message');
        
        // Listen for changes in the 'messages' node
        onValue(messagesRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                // Convert the data object to an array for easier display
                const loadedMessages = Object.keys(data).map((key) => ({
                    id: key,
                    ...data[key],
                }));
                setMessages(loadedMessages);
            } else {
                setMessages([]);
            }
        });
    }, []);
console.log(messages)
    return (
        <div>
            <h2>Messages</h2>
            {messages.length > 0 ? (
                <ul>
                    {messages.map((message) => (
                        <li key={message.id}>
                            <h4>{message.name}</h4>
                            <p>{message.email}</p>
                            <p>{message.subject}</p>
                            <p>{message.message}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No messages found.</p>
            )}
        </div>
    );
};

export default Message;
