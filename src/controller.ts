import { Request, Response } from 'express';
import { Students } from './model.js';

const dummy = async (req: Request, res: Response): Promise<void> => {
  console.log(req.url);
  res.send('Hello Worlddddd!');
};

const getData = async (req: Request, res: Response): Promise<void> => {
  const result = await Students.find();
  res.json({ error: false, data: result });
};

const addData = async (req: Request, res: Response): Promise<void> => {
  let data = new Students({ ...req.body });
  console.log('data', data);
  data
    .save()
    .then((data) =>
      res.json({ error: false, message: 'Data saved successfully' })
    )
    .catch((err) => res.json({ error: true, message: err }));
};

const updateAge = async (req: Request, res: Response): Promise<void> => {
  let { userId, age } = req.body;
  Students.updateOne({ _id: userId }, { $set: { age: age } })
    .then((data) =>
      res.json({ error: false, message: 'Age updated successfully' })
    )
    .catch((err) =>
      res.json({ error: true, message: 'Unable to update the data' })
    );
};

const deleteUser = async (req: Request, res: Response): Promise<void> => {
  let { userId } = req.body;
  Students.deleteOne({ _id: userId })
    .then((data) =>
      res.json({ error: false, message: 'User deleted successfully' })
    )
    .catch((err) =>
      res.json({ error: true, message: 'Unable to delete the user' })
    );
};

export default { dummy, getData, addData, updateAge, deleteUser };
