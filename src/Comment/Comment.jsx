import Reply from './Reply';
import { Button, IconButton, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import StarIcon from '@material-ui/icons/Star';
import ReplyIcon from '@material-ui/icons/Reply';

const Comment = ({ comment, index, handleDeleteComment, handleStarComment, handleReplyToComment }) => {
    const currentTime = new Date();
    const timeDifference = (currentTime - comment.timestamp) / 1000; // Time difference in seconds

    // Function to format the time elapsed
    const formatTimeElapsed = (seconds) => {
        if (seconds < 60) {
            return `Posted ${Math.floor(seconds)} seconds ago`;
        } else {
            return `Posted on ${comment.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
        }
    };
    return (
        <li key={comment.id}>
            <div>
                <Typography variant="body1">{comment.text} </Typography>
                <Typography style={{ marginLeft: '50px' }} variant="body2" color="textSecondary">{formatTimeElapsed(timeDifference)}</Typography>
                <Button style={{ marginLeft: '50px' }}
                    variant="text"
                    color="default"
                    startIcon={<DeleteIcon />} onClick={() => handleDeleteComment(comment.id, null)}>Delete</Button>
                <Button
                    variant="text"
                    color="default"
                    startIcon={<StarIcon />} onClick={() => handleStarComment(comment.id, null)}>Star</Button>
                <Button
                    variant="text"
                    color="default"
                    startIcon={<ReplyIcon />} onClick={() => handleReplyToComment(index)}>Reply</Button>
            </div>
            <ul>
                {comment.replies.map((reply, replyIndex) => (
                    <Reply
                        key={reply.id}
                        reply={reply}
                        parentIndex={index}
                        replyIndex={replyIndex}
                        handleDeleteComment={handleDeleteComment}
                        handleStarComment={handleStarComment}
                    />
                ))}
            </ul>
        </li>
    );
};

export default Comment;

