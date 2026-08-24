import jwt from 'jsonwebtoken';

export function protect(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'Please log in to continue.' });
  try { req.user = jwt.verify(token, process.env.JWT_SECRET || 'development-secret'); next(); }
  catch { res.status(401).json({ message: 'Your session has expired.' }); }
}
export function adminOnly(req, res, next) { if (req.user?.role !== 'Admin') return res.status(403).json({ message: 'Administrator access required.' }); next(); }
