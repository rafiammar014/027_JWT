const express = require('express');
const router = express.Router();

const komikController = require('./controllers/komikControllers');
const userController = require('./controllers/useControllers');
const authMiddleware = require('./middleware/authMiddleware');

router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);

router.get('/komik', komikController.getAllKomik);
router.get('/komik/:id', komikController.getKomikById);

router.post('/komik', authMiddleware, komikController.createKomik);
router.put('/komik/:id', authMiddleware, komikController.updateKomik);
router.delete('/komik/:id', authMiddleware, komikController.deleteKomik);

module.exports = router;