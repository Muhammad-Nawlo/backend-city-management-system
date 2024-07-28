import SaleRepository from "../repositories/SaleRepository.js";

const saleRepository = new SaleRepository();

export class SaleService {
    async create(saleDTO) {
        const newSale = await saleRepository.create(saleDTO);
        return newSale;
    }

    async update(saleDTO) {
        const sale = await saleRepository.update(saleDTO);
        return sale;
    }

    async delete(saleDTO) {
        const sale = await saleRepository.delete(saleDTO);
        return sale;
    }

    async get(saleDTO) {
        const sale = await saleRepository.getById(saleDTO);
        return sale;
    }


    async all(req) {
        const sales = await saleRepository.all(req);
        return sales;
    }


    async getById(saleDTO) {
        const sale = await saleRepository.getById(saleDTO);
        return sale;
    }
}

export default SaleService;