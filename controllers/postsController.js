import Post from '../modules/postModules.js';
import User from '../modules/userModules.js';
const createPosts = async (req, res) => {
  try {
    const { postedBy, text, img } = req.body;
    console.log(`postedBy: ${postedBy}, text: ${text}`);

    // check postedBy and text exist or not
    if (!postedBy || !text)
      return res.status(400).json({
        error: 'Postedby and text fields are required ',
      });

    // check user exist or not
    const user = await User.findById(postedBy);
    if (!user)
      return res.status(404).json({
        error: 'User not found',
      });

    console.log('userId', user._id);
    // Check if the user._id in mongoDB is equal to the req->user._id of the user posted
    if (user._id.toString() !== req.user._id.toString()) {
      return res.status(401).json({
        error: 'Unauthorized to create post',
      });
    }

    // check length post
    const maxLength = 500;
    if (text.length > maxLength) {
      return res.status(400).json({
        error: `Text must be less than ${maxLength} characters`,
      });
    }
    const newPost = new Post({
      postedBy,
      text,
      img,
    });
    await newPost.save();
    res.status(200).json(newPost);
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.log('Error in createdPosts: ', err.message);
  }
};

const getPosts = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({
        error: 'Post not found',
      });
    }
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
    console.log('Error in getPosts: ', err.message);
  }
};

const deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id); // find post = params.id

    // if there are not posts return 404
    if (!post) {
      res.status(404).json({
        error: 'Post not found',
      });
    }

    // if the id the person posting the post is not equal to the id of the user posting the post return Unauthorized
    if (post.postedBy.toString() !== req.user._id.toString()) {
      res.status(401).json({
        error: 'Unauthorized to delete post',
      });
    }

    await Post.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: 'Post deleted successfully',
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getUserPost = async () => {};
export { createPosts, getPosts, deletePost, getUserPost };
