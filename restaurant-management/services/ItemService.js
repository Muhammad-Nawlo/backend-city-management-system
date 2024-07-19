import ItemRepository from "../repositories/itemRepository.js";

const itemRepository = new ItemRepository();

export class ItemService {
    async create(ItemDTO) {
        const newItem = await itemRepository.create(ItemDTO);
        return newItem;
    }

    async update(ItemDTO) {
        const Items = await itemRepository.update(ItemDTO);

        return Items;
    }

    async delete(ItemDTO) {
        const Items = await itemRepository.delete(ItemDTO);

        return Items;
    }

    async get(ItemDTO) {
        const user = await itemRepository.getById(ItemDTO);
        return user;
    }


    async all() {
        const Items = await itemRepository.all();
        return Items;
    }


}

export default ItemService;