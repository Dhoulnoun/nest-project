import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class AuditMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Logging DELETE Request IP', req.ip);
    console.log('Logging DELETE Request Path', req.path);
    console.log('Logging DELETE Request Headers', req.headers);
    console.log('Logging DELETE Request params', req.params);
    next();
  }
}
