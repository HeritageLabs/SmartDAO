/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import CustomButton from "../common/button";
import TextInput from "../common/input/TextInput";
import {
  collection,
  limit,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { auth, db, sendMessage } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useToastify } from "../../hooks/useToastify";

interface IShowComment {
  showComment: boolean;
  messages: any;
  setMessages: (arg0: any) => void;
  proposalId: string;
}

const CommentBox = ({
  showComment,
  proposalId,
  messages,
  setMessages,
}: IShowComment) => {
  const [message, setMessage] = useState<string>("");
  const [user] = useAuthState(auth);
  const [comments, setComments] = useState([]);
  const containerRef: any = useRef();
  const { alertToast } = useToastify();

  useEffect(() => {
    const q = query(
      collection(db, "proposals", proposalId, "messages"),
      orderBy("createdAt"),
      limit(50)
    );
    onSnapshot(q, (QuerySnapshot) => {
      let messages_: any = [];
      QuerySnapshot.forEach((doc) => {
        messages_.push({ ...doc.data(), id: doc.id });
      });
      setComments(messages_);
    });
  }, []);

  useEffect(() => {
    setMessages(comments);
  }, [comments]);

  return (
    <>
      <p className="absolute right-[210px] -mt-12">{comments.length}</p>
      <div
        className={`bg-white border-x border-b border-quaternary px-5 py-3 mx-[30px] shadow-card hover:shadow-normal trans z-0 ${
          showComment ? "block" : "hidden"
        }`}
        ref={containerRef}
      >
        {user && (
          <>
            {comments.map((msg: any) => (
              <div
                className={`max-w-[250px] text-sm py-2.5 px-4 rounded-t-2xl rounded-l-2xl my-4 ${
                  msg?.uid !== user.uid
                    ? "bg-primary text-white mr-auto"
                    : "ml-auto bg-quaternary text-white"
                }`}
              >
                <p className="text-[10px] text-lightGrey">
                  {msg?.uid === user.uid ? "You" : msg.displayName}
                </p>
                <p>{msg.text}</p>
              </div>
            ))}
          </>
        )}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            sendMessage(message, setMessage, proposalId, user, alertToast);
          }}
        >
          <div className="w-full mt-9 relative">
            <TextInput
              pr="pr-[175px]"
              placeholder="Start typing..."
              onChange={({ target }) => setMessage(target.value)}
              value={message}
            />
            <div className="absolute top-3 right-1">
              <CustomButton
                width="h-[38px] w-[150px]"
                bg="bg-quaternary"
                disabled={!message}
              >
                Send
              </CustomButton>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default CommentBox;
