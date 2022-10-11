import React, { useEffect, useState, useContext } from "react";
import { Container, Wrapper } from "./Style";
import { RiSendPlaneFill } from "react-icons/ri";
import { ref, onValue, set, getDatabase, child, get } from "firebase/database";
import { Context } from "../Context";

//import uuid v4
import { v4 as uuid } from "uuid";

const Messaging = ({ isInstructor }) => {
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);

  const { db, useAuth, app } = useContext(Context);

  const unique_id = uuid();
  const small_id = unique_id.slice(0, 8);

  const data = getDatabase(app);

  const currentUser = useAuth();

  useEffect(() => {
    getMessages();
  }, []);

  //   Retrieve message from database
  const getMessages = async () => {
    let mess = [];

    const dbRef = ref(getDatabase());
    get(child(dbRef, `messages`))
      .then((snapshot) => {
        snapshot.forEach((child) => {
          const key = child.key;
          if (snapshot.exists()) {
            const data = child.val();
            mess.push({
              key: key,
              user_id: data.user_id,
              instructor_id: data.instructor_id,
              message: data.message,
            });
            //   setMessages();
            setMessages(mess);
            console.log(mess);
          } else {
            console.log("No data available");
          }
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  //   Send message to database
  const writeMessage = (e) => {
    e.preventDefault();
    const reference = ref(data, "messages/" + (messages.length + 1));

    set(reference, {
      user_id: currentUser.uid,
      instructor_id: isInstructor.id,
      message: text,
    });

    setText("");

    scroll();

    // Post message in messenger
    getMessages();
  };

  const scroll = () => {
    window.scrollTo({
      top: 900,
      behavior: "smooth",
    });
  };

  return (
    <Container>
      <div className="message-container">
        <div className="contain">
          <div className="user">
            <img src={isInstructor.image} alt="" width={50} height={50} />
            <div className="dets">
              <h3>{isInstructor.name}</h3>
              <p>Chat with {isInstructor.name}</p>
            </div>
          </div>
        </div>
        <div className="texting">
          <div className="messages">
            {messages &&
              messages.map((m) => (
                <div className="message">
                  {m.user_id === currentUser.uid &&
                    m.instructor_id === isInstructor.id && (
                      <div className="text">
                        <small>You</small>
                        <p>{m.message}</p>
                      </div>
                    )}
                  {/* {m.user_id === currentUser.id} */}
                </div>
              ))}
          </div>
        </div>
        <form className="input" onSubmit={writeMessage}>
          <input
            type="text"
            placeholder="Start typing...."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button>
            <RiSendPlaneFill />
          </button>
        </form>
      </div>
    </Container>
  );
};

export default Messaging;
