
const auth = (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`Welcome ${name}`);
  } else {
    return res.status(401).send("Please give credentials");
  }
}

module.exports = {auth}