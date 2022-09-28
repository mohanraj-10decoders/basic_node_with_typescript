import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const studentsSchema = new Schema({
    name: {
        firstName: {
            type: String,
            required: true,
        },
        lastName: String,
    },
    age: {
        type: Number,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
});
export const Students = mongoose.model('Students', studentsSchema);
export default Students;
//# sourceMappingURL=model.js.map