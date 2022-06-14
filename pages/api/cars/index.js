import cars from '../../../cars.json';

export default function handler(req, res) {
  return res.status(200).json(cars);
}
