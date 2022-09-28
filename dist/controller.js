var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Students } from './model.js';
const dummy = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.url);
    res.send('Hello Worlddddd!');
});
const getData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Students.find();
    res.json({ error: false, data: result });
});
const addData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let data = new Students(Object.assign({}, req.body));
    console.log('data', data);
    data
        .save()
        .then((data) => res.json({ error: false, message: 'Data saved successfully' }))
        .catch((err) => res.json({ error: true, message: err }));
});
const updateAge = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { userId, age } = req.body;
    Students.updateOne({ _id: userId }, { $set: { age: age } })
        .then((data) => res.json({ error: false, message: 'Age updated successfully' }))
        .catch((err) => res.json({ error: true, message: 'Unable to update the data' }));
});
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { userId } = req.body;
    Students.deleteOne({ _id: userId })
        .then((data) => res.json({ error: false, message: 'User deleted successfully' }))
        .catch((err) => res.json({ error: true, message: 'Unable to delete the user' }));
});
export default { dummy, getData, addData, updateAge, deleteUser };
//# sourceMappingURL=controller.js.map