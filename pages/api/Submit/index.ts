
import type { NextApiRequest, NextApiResponse } from 'next'
import dbConnection from '../../../utils/dbConnection'
import messages from '../../../models/messages';


dbConnection();

type Data = {
  data: Object;
  success: boolean;
}



export default async function  handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
  ) {

    const { method } = req;

    switch(method){
      case 'POST' : {
        try {
          const msg = await messages.create(req.body); 
          
          res.status(201).json({success: true, data: msg})
        } catch (error) {
          res.status(400).json({success: false, data: {}})
        }
      }
      break;
      case 'GET' : {
        try {
          const msg = await messages.find({}); 
          
          res.status(201).json({success: true, data: msg})
        } catch (error) {
          res.status(400).json({success: false, data: {}})
        }
      }
      break;
    }
}
