import NotFoundError from "../errors/notFoundError.js";
import Category from "../models/Category.js";

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

    async all() {
        const categories = await Category.find().limit(10).exec();
        return categories;
    }

}

export default CategoryRepository;