import "./ChatMessage.css";

function ChatMessage() {
  return (
    <p className="chat-message">
      <div className="chat-sender">Yahel</div>
      <div className="chat-message-content">
        Hello!!! This is where a message
        <div className="chat-message-timestamp">{new Date().toUTCString()}</div>
      </div>
    </p>
  );
}

export default ChatMessage;
