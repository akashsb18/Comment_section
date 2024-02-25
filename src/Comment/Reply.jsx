import DeleteIcon from '@material-ui/icons/Delete';
import StarIcon from '@material-ui/icons/Star';
import ReplyIcon from '@material-ui/icons/Reply';
import { Button, IconButton, Typography } from '@material-ui/core';

const Reply = ({ reply, parentIndex, replyIndex, handleDeleteComment, handleStarComment }) => {
    return (
        <li key={reply.id}>
            <div>
                <Typography variant="body1">{reply.text} </Typography>
                <Typography style={{ marginLeft: '50px' }} variant="body2" color="textSecondary">Posted on {reply.timestamp.toLocaleString()}</Typography>
                {/* <p>{reply.text}</p>
                <p>{reply.timestamp.toLocaleString()}</p> */}
                <Button style={{ marginLeft: '50px' }}
                    variant="text"
                    color="default"
                    startIcon={<DeleteIcon />} onClick={() => handleDeleteComment(reply.id, parentIndex)}>Delete</Button>
                <Button
                    variant="text"
                    color="default"
                    startIcon={<StarIcon />} onClick={() => handleStarComment(reply.id, parentIndex)}>Star</Button>
            </div>
        </li>
    );
};

export default Reply;
