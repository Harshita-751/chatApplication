import { ChatEngine } from 'react-chat-engine';
import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () => {
 if(!localStorage.getItem('username')) return <LoginForm/>

    return (
        <ChatEngine
        height="100vh" //for full pg display
        projectID="109de42c-d019-48d8-ac1f-43c1480b0fc3"
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')} 
        renderChatFeed={(chatAppProps)=> <ChatFeed {...chatAppProps}/>}
        />
    )
}
export default App;