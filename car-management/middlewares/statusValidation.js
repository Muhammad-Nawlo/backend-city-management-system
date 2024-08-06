import {body} from 'express-validator';

export const carStatusValidation = [

    body('status').custom(value => [
        'Available', 'Unavailable', 'In Maintain', 'Rented'
    ].includes(value)),

];

export const rentalStatusValidation = [
    body('status').custom(value => [
        'Pending', 'Rent', 'Canceled', 'New', 'Done'
    ].includes(value)),

];