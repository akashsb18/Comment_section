import { useState } from 'react';
import { TextField, Button, Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    formContainer: {
        maxWidth: 400,
        padding: theme.spacing(2),
        borderRadius: theme.spacing(1),
        backgroundColor: '#f5f5f5',
    },
}));

const CommentForm = ({ handlePostComment }) => {
    const classes = useStyles();
    const [newComment, setNewComment] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        handlePostComment(newComment);
        setNewComment('');
    };

    return (
        <Grid container justify="center">
            <Grid item xs={12} sm={8} md={6} className={classes.formContainer}>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                multiline
                                rows={4}
                                variant="outlined"
                                value={newComment}
                                onChange={(e) => setNewComment(e.target.value)}
                                label="Write a comment..."
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                fullWidth
                            >
                                Post Comment
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Grid>
        </Grid>
    );
};

export default CommentForm;
