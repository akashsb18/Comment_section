import React from 'react';
import { Card, CardContent, Typography, Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';

const Reply = ({ reply, parentIndex, handleDeleteComment, handleStarComment }) => {
    const currentTime = new Date();
    const timeDifference = (currentTime - reply.timestamp) / 1000;

    const formatTimeElapsed = (seconds) => {
        if (seconds < 60) {
            return `Posted ${Math.floor(seconds)} seconds ago`;
        } else {
            return `Posted on ${reply.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
        }
    };

    return (
        <Card variant="outlined">
            <CardContent>
                <Typography variant="body1">{reply.text}</Typography>
                <Typography variant="body2" color="textSecondary">{formatTimeElapsed(timeDifference)}</Typography>
                <Button
                    variant="text"
                    color="default"
                    startIcon={<DeleteIcon />}
                    onClick={() => handleDeleteComment(reply.id, parentIndex)}
                >
                    Delete
                </Button>
                <Button
                    variant="text"
                    color="default"
                    startIcon={reply.starred ? <StarIcon /> : <StarBorderIcon />}
                    onClick={() => handleStarComment(reply.id, parentIndex)}
                >
                    {reply.starred ? 'Unstar' : 'Star'}
                </Button>
            </CardContent>
        </Card>
    );
};

export default Reply;

