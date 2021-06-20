import { Request, Response } from 'express';
import BaseController from '../classes/BaseController';
import dataService from '../../services/data.service';

class Controller extends BaseController {

    /*
    ***
        Get Data API
    ***
    */

    async getAllData(req: Request, res: Response) {
        try {
            const dataResponse = await dataService.getData();
            super.response(res, dataResponse, 200, "Data Successfully Fetched");
        }
        catch(err) {
            console.log('ERROR in getAll', err);
            super.response(res, '', err.code, err.message);
        }
    }
    
    async getPieChartData(req: Request, res: Response) {
        try {
            const dataResponse = await dataService.getPieConstantData();
            super.response(res, dataResponse, 200, "Data Successfully Fetched");
        }
        catch(err) {
            console.log('ERROR in getAll', err);
            super.response(res, '', err.code, err.message);
        }
    }

}

export default new Controller();