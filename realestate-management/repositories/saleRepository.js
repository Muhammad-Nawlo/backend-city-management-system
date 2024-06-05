import Sale from "../models/Sale.js";

import NotFoundError from "../errors/notFoundError.js";

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

    async all() {
        const sales = await Sale.find().limit(10).exec();
        return sales;
    }
}

export default SaleRepository;
