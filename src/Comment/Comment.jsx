import React from 'react';
import Reply from './Reply';
import { Button, Card, CardContent, IconButton, Typography, makeStyles } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import StarIcon from '@material-ui/icons/Star';
import ReplyIcon from '@material-ui/icons/Reply';
import StarBorderIcon from '@material-ui/icons/StarBorder';

const useStyles = makeStyles((theme) => ({
    card: {
        maxWidth: 400,
        marginBottom: theme.spacing(1),
        backgroundColor: '#DDDDDD',
    },
    button: {
        padding: theme.spacing(0.5),
        minWidth: 'unset',
    },
    typography: {
        fontSize: '0.9rem',
    },
}));

const Comment = ({ comment, index, handleDeleteComment, handleStarComment, handleReplyToComment }) => {
    const currentTime = new Date();
    const timeDifference = (currentTime - comment.timestamp) / 1000;

    const classes = useStyles();

    const formatTimeElapsed = (seconds) => {
        if (seconds < 60) {
            return `Posted ${Math.floor(seconds)} seconds ago`;
        } else {
            return `Posted on ${comment.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
        }
    };

    return (
        <Card variant="outlined" className={classes.card}>
            <CardContent>
                <Typography variant="body1" className={classes.typography}>{comment.text} </Typography>
                <Typography variant="body2" color="textSecondary" className={classes.typography}>{formatTimeElapsed(timeDifference)}</Typography>
                <Button
                    variant="text"
                    color="default"
                    startIcon={<DeleteIcon />}
                    onClick={() => handleDeleteComment(comment.id, null)}
                    className={classes.button}
                >
                    Delete
                </Button>
                <Button
                    variant="text"
                    color="default"
                    startIcon={comment.starred ? <StarIcon /> : <StarBorderIcon />}
                    onClick={() => handleStarComment(comment.id, null)}
                    className={classes.button}
                >
                    {comment.starred ? 'Unstar' : 'Star'}
                </Button>
                <Button
                    variant="text"
                    color="default"
                    startIcon={<ReplyIcon />}
                    onClick={() => handleReplyToComment(index)}
                    className={classes.button}
                >
                    Reply
                </Button>
            </CardContent>
            {comment.replies.length > 0 && (
                <CardContent>
                    <Typography variant="h6">Replies</Typography>
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
                </CardContent>
            )}
        </Card>
    );
};

export default Comment;


