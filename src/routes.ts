import express from 'express';
import controller from './controller.js';

const router = express.Router();

router.route('').get(controller.dummy);
router.route('/getData').get(controller.getData);
router.route('/add').post(controller.addData);
router.route('/updateAge').put(controller.updateAge);
router.route('/deleteUser').delete(controller.deleteUser);

export default router;
