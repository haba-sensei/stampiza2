import { error_400, success, success_201 } from '@shared/global/messages';
import { CustomResponse } from '@shared/interfaces/ICustomResponse';
import { Response } from 'express';

export function customResponse(res: Response, customRes: CustomResponse) {
    const response: CustomResponse = customRes;
    const status = customRes.status == success ? success_201 : error_400;
    return res.status(status).json(response);
}
