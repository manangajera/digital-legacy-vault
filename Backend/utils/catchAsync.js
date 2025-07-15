// utils/catchAsync.js
export default function catchAsync(fn) {
  return function (req, res, next) {
    fn(req, res, next).catch(next);
  };
}