import { collection, getDocs } from 'firebase/firestore';
import { FireStoreDB } from 'services/firebase';

const GetMessagesService = async (setLoading) => {
  try {
    setLoading();
    const messageDocs = await getDocs(collection(FireStoreDB, 'messages'));
    let auxMess = [];
    messageDocs.forEach((message) => {
      auxMess.push(message.data());
    });

    return {
      messages: auxMess,
      success: true,
    };
  } catch (GetMessagesError) {
    console.error({ GetMessagesError });
    setLoading();
    return {
      success: false,
    };
  } finally {
    setLoading();
  }
};

export default GetMessagesService;
