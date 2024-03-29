import { useState } from 'react';
import Comment from './Comment';
import CommentForm from './CommentForm';

const CommentSection = () => {
    const [comments, setComments] = useState([]);
    const [replyTo, setReplyTo] = useState(null);

    const handlePostComment = (newComment) => {
        if (newComment.trim() === '') return;
        const comment = {
            id: Date.now(),
            text: newComment,
            replies: [],
            starred: false,
            timestamp: new Date(),
        };
        if (replyTo !== null) {
            const updatedComments = [...comments];
            updatedComments[replyTo].replies.push(comment);
            setComments(updatedComments);
        } else {
            setComments([...comments, comment]);
        }
        setReplyTo(null);
    };

    const handleDeleteComment = (commentId, parentIndex) => {
        const updatedComments = [...comments];
        if (parentIndex === null) {
            const commentIndex = updatedComments.findIndex(comment => comment.id === commentId);
            updatedComments.splice(commentIndex, 1); // Corrected
        } else {
            updatedComments[parentIndex].replies = updatedComments[parentIndex].replies.filter(reply => reply.id !== commentId);
        }
        setComments(updatedComments);
    };

    const handleReplyToComment = (index) => {
        setReplyTo(index);
    };

    const handleStarComment = (commentId, parentIndex) => {
        const updatedComments = [...comments];
        if (parentIndex === null) {
            const commentIndex = updatedComments.findIndex(comment => comment.id === commentId);
            updatedComments[commentIndex].starred = !updatedComments[commentIndex].starred;
        } else {
            const replyIndex = updatedComments[parentIndex].replies.findIndex(reply => reply.id === commentId);
            updatedComments[parentIndex].replies[replyIndex].starred = !updatedComments[parentIndex].replies[replyIndex].starred;
        }
        setComments(updatedComments);
    };


    return (
        <div>
            <CommentForm handlePostComment={handlePostComment} replyTo={replyTo !== null ? comments[replyTo].author : null} />
            <ul>
                {comments.map((comment, index) => (
                    <Comment
                        key={comment.id}
                        comment={comment}
                        index={index}
                        handleDeleteComment={handleDeleteComment}
                        handleStarComment={handleStarComment}
                        handleReplyToComment={handleReplyToComment}
                    />
                ))}
            </ul>
        </div>
    );
};

export default CommentSection;




