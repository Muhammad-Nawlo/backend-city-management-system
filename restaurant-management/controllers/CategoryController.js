import CategoryDTO from "../dto/CategoryDTO.js";
import ResponseHelper from "../helpers/responseHelper.js";
import CategoryService from "../services/CategoryService.js";
import UploadFile from "../helpers/uploadFile.js";

const categoryService = new CategoryService();

class CategoryController {
    async all(req, res, next) {
        const categories = await categoryService.all(req);
        return ResponseHelper.success(res, categories);
    }

    async create(req, res, next) {
        const imagePath = await UploadFile(req);
        const {
            name, description, restaurant
        } = req.body;
        const categoryDTO = new CategoryDTO(name, description, restaurant, imagePath);
        const newCategory = await categoryService.create(categoryDTO);
        if (!newCategory) {
            return next(res);
        }
        return ResponseHelper.created(res, newCategory);
    }

    async update(req, res, next) {
        const {id} = req.params;
        const imagePath = await UploadFile(req, true)

        const {name, description, restaurant} = req.body;
        const categoryDTO = new CategoryDTO(name, description, restaurant, imagePath, id);
        const category = await categoryService.update(categoryDTO);
        return ResponseHelper.success(res, category);
    }

    async delete(req, res, next) {
        const categoryDTO = new CategoryDTO();
        categoryDTO.id = req.params.id
        const category = await categoryService.delete(categoryDTO);
        return ResponseHelper.success(res, category);
    }

    async get(req, res, next) {
        const categoryDTO = new CategoryDTO();
        categoryDTO.id = req.params.id
        const category = await categoryService.get(categoryDTO);
        return ResponseHelper.success(res, category);
    }


}

export default CategoryController;