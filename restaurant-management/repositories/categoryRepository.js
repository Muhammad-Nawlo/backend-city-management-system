import { populate } from "dotenv";
import NotFoundError from "../errors/notFoundError.js";
import Category from "../models/Category.js";
import searchHandler from "../helpers/searchHandler.js";

class CategoryRepository {
    async create(categoryDTO) {
        const newCategory = new Category({
            name: categoryDTO.name,
            description: categoryDTO.description,
            image: categoryDTO.image,
            restaurant: categoryDTO.restaurant,
        });
        const category = await newCategory.save();
        return category;
    }

    async update(categoryDTO) {
        const category = await Category.findById(categoryDTO.id)
        if (!category) {
            throw new NotFoundError();
        }
        category.name = categoryDTO.name;
        category.description = categoryDTO.description;
        category.restaurant = categoryDTO.restaurant;
        if (categoryDTO.image !== 'DONT_UPDATE') {
            category.image = categoryDTO.image;
        }
        await category.save();
        return category;
    }

    async delete(categoryDTO) {
        const category = await Category.findByIdAndDelete(categoryDTO.id);
        if (!category) {
            throw new NotFoundError();
        }
        return category;
    }

    async getById(categoryDTO) {
        const category = await Category.findById(categoryDTO.id);
        if (!category) {
            throw new NotFoundError();
        }
        return category;
    }

    async all(req) {
        const options = {
            page: req.query.page || 1,
            limit: req.query.items || 10,
            populate: 'restaurant'
        };
        const searchOptions = searchHandler(req);
        const categories = await Category.find(searchOptions).paginate(options);
        return categories;
    }

}

export default CategoryRepository;
