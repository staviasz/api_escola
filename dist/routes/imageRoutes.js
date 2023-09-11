"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);

var _ImageController = require('../controller/ImageController'); var _ImageController2 = _interopRequireDefault(_ImageController);
var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const router = new (0, _express.Router)();
const storage = _multer2.default.memoryStorage();
const upload = _multer2.default.call(void 0, { storage });

router.post('/', _loginRequired2.default, upload.single('image'), _ImageController2.default.store);

exports. default = router;
