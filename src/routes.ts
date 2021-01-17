import {Router} from 'express'
import multer from 'multer'
import uploadConfig from './config/upload'
import productController from './controllers/ProductsController'
const routes = Router()

const upload = multer(uploadConfig)

routes.get('/product', productController.index)
routes.post('/product', upload.single('image'), productController.create)
routes.get('/product/:id', productController.show)

export default routes