import { Request, Response } from "express";
import connection from "../database/connection";
import * as Yup from 'yup'



export default {
  async index(request: Request, response: Response) {

    const {category} = request.query

    if (category) {
      const products = await connection('products')
        .whereRaw('LOWER(category) like ?',[`%${category}%`])
        .orderBy('created_at', 'desc')
        .select('*')
      const seralizeProducts = products.map(product => {
        return {
          ...product,
          image_url: `https://barshop.herokuapp.com/uploads/${product.image}`
          // image_url: `https://localhost:3333/uploads/${product.image}`
        }
      })
      return response.json(seralizeProducts)
    }
    else{

      const products = await connection('products')
        .orderBy('created_at','desc')
        .select('*')
      const seralizeProducts = products.map(product => {
        return {
          ...product,
          image_url: `https://barshop.herokuapp.com/uploads/${product.image}`
          // image_url: `https://localhost:3333/uploads/${product.image}`
        }
      })
      return response.json(seralizeProducts)
    }
  },
  async create(resquest: Request, response: Response) {
    const {
      name,
      price,
      description,
      whatsapp,
      address,
      number,
      category

    } = resquest.body

    const trx = await connection.transaction()

    const product = {
      image: resquest.file.filename,
      name,
      price,
      description,
      whatsapp,
      address,
      number,
      category
    }

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      image: Yup.string().required(),
      price: Yup.string().required(),
      description: Yup.string().required(),
      whatsapp: Yup.string().required(),
      address: Yup.string().required(),
      number: Yup.string().required(),
      category: Yup.string().required()
    })

    if (!(await schema.isValid(product))) {
      return response.status(400).json({ error: 'Erro na inserçao dos dados' })
    }



    await trx('products').insert(product)

    const status = await trx.commit()

    if (!status) {
      return response.status(400).json({ error: 'Error na Requisição' })
    }
    return response.status(201).json({ status: 'Sucesso na criação' })
  },

  async show(request: Request, response: Response) {

    const { id } = request.params

    const product = await connection('products')
      .where('id', String(id))
      .first()
      .select('*')

    const seralizeProduct = {
      ...product,
      image_url: `https://barshop.herokuapp.com/uploads/${product.image}`,
      // image_url: `https://localhost:3333/uploads/${product.image}`
    };

    return response.json(seralizeProduct)

  }


}