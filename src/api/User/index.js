import { Router } from 'express'

import {
  userRegistration,
  userLogin,
  viewProfile,
  updateProfile,
  viewFiles,
  downloadFiles,
  viewKey,
  getUsers,
  sendAgentFiles,
  viewAgentFiles,
  downloadAgentFiles,
  updatePassword,
  forgotPassword
} from './controller'

const router = new Router()

router.post('/registration', userRegistration)

router.get('/userlogin', userLogin)

router.get('/viewprofile', viewProfile)

router.put('/updateprofile/:id', updateProfile)

router.get('/viewfiles', viewFiles)

router.get('/downloadFiles/:id', downloadFiles)

router.get('/viewkey', viewKey)

router.get('/getusers', getUsers)

router.post('/sendagentfiles', sendAgentFiles)

router.get('/viewagentfiles', viewAgentFiles)

router.get('/downloadAgentFiles/:id', downloadAgentFiles)

router.put('/updatepassword/:id',updatePassword)

router.get('/forgotpassword', forgotPassword)

export default router
