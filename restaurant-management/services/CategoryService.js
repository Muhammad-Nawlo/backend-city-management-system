import CategoryRepository from "../repositories/categoryRepository.js";

const categoryRepository = new CategoryRepository();

export class CategoryService {
    async create(categoryDTO) {
        const newCategory = await categoryRepository.create(categoryDTO);
        return newCategory;
    }

    async update(categoryDTO) {
        const categories = await categoryRepository.update(categoryDTO);

        return categories;
    }

    async delete(categoryDTO) {
        const categories = await categoryRepository.delete(categoryDTO);

        return categories;
    }

    async get(categoryDTO) {
        const user = await categoryRepository.getById(categoryDTO);
        return user;
    }


    async all() {
        const categories = await categoryRepository.all();
        return categories;
    }


}

export default CategoryService;