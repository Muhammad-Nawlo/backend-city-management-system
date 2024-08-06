import {body} from 'express-validator';


export const statusValidation = [
    body('status').custom(value => [
        'Pending', 'Confirmed', 'Completed', 'Cancelled',
    ].includes(value)),

];