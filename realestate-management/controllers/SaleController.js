import SaleDTO from "../dto/SaleDTO.js";
import ResponseHelper from "../helpers/responseHelper.js";
import SaleService from "../services/SaleService.js";

const saleService = new SaleService();

class SaleController {
    async all(req, res, next) {
        const sales = await saleService.all(req);
        return ResponseHelper.success(res, sales);
    }

    async create(req, res, next) {
        const {propertyId, buyerId, date, price} = req.body;
        const saleDTO = new SaleDTO(propertyId, buyerId, req.user?._id, date, price);
        const newSale = await saleService.create(saleDTO);
        if (!newSale) {
            return next(res);
        }
        return ResponseHelper.created(res, newSale);
    }

    async update(req, res, next) {
        const {id} = req.params;
        const {propertyId, buyerId, agentId, date, price} = req.body;
        const saleDTO = new SaleDTO(propertyId, buyerId, req.user?._id, date, price, id);
        const sale = await saleService.update(saleDTO);
        return ResponseHelper.success(res, sale);
    }

    async delete(req, res, next) {
        const saleDTO = new SaleDTO();
        saleDTO.id = req.params.id
        const sale = await saleService.delete(saleDTO);

        return ResponseHelper.success(res, sale);
    }

    async get(req, res, next) {
        const saleDTO = new SaleDTO();
        saleDTO.id = req.params.id
        const sale = await saleService.get(saleDTO);

        return ResponseHelper.success(res, sale);
    }
}

export default SaleController;