import { ChatBox, Sidebar } from 'components';
import { Container } from './style';

const Chat = () => {
  return (
    <Container>
      <Sidebar />
      <ChatBox />
    </Container>
  );
};

export default Chat;
