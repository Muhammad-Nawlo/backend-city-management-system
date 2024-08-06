import OrderRepository from "../repositories/orderRepository.js";

const orderRepository = new OrderRepository();

export class OrderService {
    async create(orderDTO) {
        const newOrder = await orderRepository.create(orderDTO);
        return newOrder;
    }

    async update(orderDTO) {
        const orders = await orderRepository.update(orderDTO);

        return orders;
    }

    async delete(orderDTO) {
        const orders = await orderRepository.delete(orderDTO);

        return orders;
    }

    async get(orderDTO) {
        const user = await orderRepository.getById(orderDTO);
        return user;
    }


    async all(req) {
        const orders = await orderRepository.all(req);
        return orders;
    }

    async orderUser(userId, req) {
        const orders = await orderRepository.orderUser(userId, req);
        return orders;
    }
    async changeStatus(orderDTO) {
        const orders = await orderRepository.changeStatus(orderDTO);
        return orders;
    }


}

export default OrderService;