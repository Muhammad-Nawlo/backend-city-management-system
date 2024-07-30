import { populate } from "dotenv";
import NotFoundError from "../errors/notFoundError.js";
import Item from "../models/Item.js";
import Order from "../models/Order.js";
import searchHandler from "../helpers/searchHandler.js";

class ItemRepository {
    async create(itemDTO) {
        const newItem = new Item({
            name: itemDTO.name,
            price: itemDTO.price,
            category: itemDTO.category,
            description: itemDTO.description,
            image: itemDTO.image,
        });
        const item = await newItem.save();
        return item;
    }

    async update(itemDTO) {
        const item = await Item.findById(itemDTO.id)
        if (!item) {
            throw new NotFoundError();
        }
        item.name = itemDTO.name;
        item.price = itemDTO.price;
        item.category = itemDTO.category;
        item.description = itemDTO.description;
        if (itemDTO.image !== 'DONT_UPDATE') {
            item.image = itemDTO.image;
        }
        await item.save();
        return item;
    }

    async delete(itemDTO) {
        const item = await Item.findByIdAndDelete(itemDTO.id);
        if (!item) {
            throw new NotFoundError();
        }
        return item;
    }

    async getById(itemDTO) {
        const item = await Item.findById(itemDTO.id);
        if (!item) {
            throw new NotFoundError();
        }
        return item;
    }

    async all(req) {
        const options = {
            page: req.query.page || 1,
            limit: req.query.items || 10,
            populate: 'category'
        };
        const searchOptions = searchHandler(req)
        const items = await Item.find(searchOptions).paginate(options);
        return items;
    }

}

export default ItemRepository;
