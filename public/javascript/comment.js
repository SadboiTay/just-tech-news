async function commentFormHandler(event) {
    event.preventDefault();

    const comment_text = document.querySelector('textarea[name="comment-body"]').value.trim();

    const post_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    router.post('/', (req, res) => {
        // check the session
        if (req.session) {
            Comment.create({
                comment_text: req.body.comment_text,
                post_id: req.body.post_id,
                // use the id from the session
                user_id: req.session.user_id
            })
                .then(dbCommentData => res.json(dbCommentData))
                .catch(err => {
                    console.log(err);
                    res.status(400).json(err);
                });
        }
    });
}

document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);