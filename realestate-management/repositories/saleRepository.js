import Sale from "../models/Sale.js";

import NotFoundError from "../errors/notFoundError.js";
import { populate } from "dotenv";

class SaleRepository {
    async create(saleDTO) {
        const newSale = new Sale({
            propertyId: saleDTO.propertyId,
            buyerId: saleDTO.buyerId,
            agentId: saleDTO.agentId,
            date: saleDTO.date,
            price: saleDTO.price
        });
        const sale = await newSale.save();
        return sale;
    }

    async update(saleDTO) {
        const sale = await Sale.findByIdAndUpdate(saleDTO.id, {
            propertyId: saleDTO.propertyId,
            buyerId: saleDTO.buyerId,
            agentId: saleDTO.agentId,
            date: saleDTO.date,
            price: saleDTO.price
        }, {
            new: true
        }
        );
        if (!sale) {
            throw new NotFoundError();
        }
        return sale;
    }

    async delete(saleDTO) {
        const sale = await Sale.findByIdAndDelete(saleDTO.id);
        if (!sale) {
            throw new NotFoundError();
        }
        return sale;
    }

    async getById(saleDTO) {
        const sale = await Sale.findById(saleDTO.id);
        if (!sale) {
            throw new NotFoundError();
        }
        return sale;
    }

    async all(req) {
        const options = {
            page: req.query.page || 1,
            limit: req.query.items || 10,
            populate:'agentId'
        };
        const sales = await Sale.find().paginate(options);
        return sales;
    }
}

export default SaleRepository;
