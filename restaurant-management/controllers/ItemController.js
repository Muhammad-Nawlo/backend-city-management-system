import ItemDTO from "../dto/ItemDTO.js";
import ResponseHelper from "../helpers/responseHelper.js";
import ItemService from "../services/ItemService.js";
import UploadFile from "../helpers/uploadFile.js";

const itemService = new ItemService();

class ItemController {
    async all(req, res, next) {
        const items = await itemService.all();
        return ResponseHelper.success(res, items);
    }

    async create(req, res, next) {
        const imagePath = await UploadFile(req);
        const {
            name,
            price,
            category,
            description,
        } = req.body;
        const itemDTO = new ItemDTO(name, price, category, description, imagePath);
        const newItem = await itemService.create(itemDTO);
        if (!newItem) {
            return next(res);
        }
        return ResponseHelper.created(res, newItem);
    }

    async update(req, res, next) {
        const {id} = req.params;
        const imagePath = await UploadFile(req, true)

        const {
            name,
            price,
            category,
            description,
        } = req.body;
        const itemDTO = new ItemDTO(name, price, category, description, imagePath, id);
        const item = await itemService.update(itemDTO);
        return ResponseHelper.success(res, item);
    }

    async delete(req, res, next) {
        const itemDTO = new ItemDTO();
        itemDTO.id = req.params.id
        const item = await itemService.delete(itemDTO);
        return ResponseHelper.success(res, item);
    }

    async get(req, res, next) {
        const itemDTO = new ItemDTO();
        itemDTO.id = req.params.id
        const item = await itemService.get(itemDTO);
        return ResponseHelper.success(res, item);
    }

}

export default ItemController;