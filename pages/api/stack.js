const stack = {
  node: 100,
  react: 0,
  spring: 40,
};

export default function handler(req, res) {
  res.status(200).json(stack);
}
