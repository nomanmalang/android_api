import { Response } from 'express';

interface IResponseObject {
	data?: object;
	message?: string
}

abstract class BaseController {

    response(res: Response, data: any, statusCode: number, message: string) {
        let responseObject: IResponseObject = {};
        responseObject.data = data || '';
        responseObject.message = message || '';
        res.status(statusCode).json(responseObject)
    }
}

export default BaseController;