import { Request, Response } from 'express';

/**
 * @description Sample function to just say hello to the user!
 * @param req Express Request
 * @param res Express Response
 */
export function SayHello(req: Request, res: Response): Response {
  return res.status(200).json({
    status: 200,
    message: 'Hey you!'
  });
}