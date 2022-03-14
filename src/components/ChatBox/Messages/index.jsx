import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { GetMessagesService } from 'services';
import { getMessages, handleFetchMessage } from 'store/slices/messages';
import { Container } from './style';

const Messages = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMessages = async () => {
      const { messages } = await GetMessagesService(() =>
        dispatch(handleFetchMessage())
      );

      console.log(messages);
      dispatch(getMessages(messages));
    };

    fetchMessages();
  }, [dispatch]);

  return <Container>Messages</Container>;
};

export default Messages;
