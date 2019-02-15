export default {
  'POST /api/query': (req, res) => {
    setTimeout(() => {
      res.send({num:5});
    }, 2000);
  },
}

