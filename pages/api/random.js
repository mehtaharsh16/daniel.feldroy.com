export default function handler(req, res) {
  let value = Math.floor(Math.random() * 10); 
  res.status(200).json({ value })
}
