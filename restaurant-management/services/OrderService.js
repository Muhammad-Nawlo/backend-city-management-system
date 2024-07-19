import OrderRepository from "../repositories/orderRepository.js";

const orderRepository = new OrderRepository();

export class OrderService {
    async create(categoryDTO) {
        const newOrder = await orderRepository.create(categoryDTO);
        return newOrder;
    }

    async update(categoryDTO) {
        const orders = await orderRepository.update(categoryDTO);

        return orders;
    }

    async delete(categoryDTO) {
        const orders = await orderRepository.delete(categoryDTO);

        return orders;
    }

    async get(categoryDTO) {
        const user = await orderRepository.getById(categoryDTO);
        return user;
    }


    async all() {
        const orders = await orderRepository.all();
        return orders;
    }


}

export default OrderService;