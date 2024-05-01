
type msgProps ={
	message: string
}

const ChatBubble = ({message}:msgProps) => {
	return <div>ChatBubble {message}</div>;
};
export default ChatBubble;