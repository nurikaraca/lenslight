import express from "express";
import * as pageContoller from "../controllers/pageController.js"
const router = express.Router()

router.route('/').get( pageContoller.getIndexPage)
router.route('/about').get(pageContoller.getAboutPage)
router.route('/register').get(pageContoller.getRegisterPage)
router.route('/login').get(pageContoller.getLoginPage)
router.route('/logout').get(pageContoller.getLogout)

export default router