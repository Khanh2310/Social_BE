export const signupUser = async (req, res) => {
  const { name, email, username, password } = req.body;
  try {
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.log('Error in signupUSer: ', err.message);
  }
};
