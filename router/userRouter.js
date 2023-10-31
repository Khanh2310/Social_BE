import express from 'express';
const router = express();

router.get('/signup', (req, res) => {
  res.send('Signed up successfully');
});
export default router;
