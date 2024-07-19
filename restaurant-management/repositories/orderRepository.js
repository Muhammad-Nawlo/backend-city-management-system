import NotFoundError from "../errors/notFoundError.js";
import Order from "../models/Order.js";
import Restaurant from "../models/Restaurant.js";

class OrderRepository {
    async create(orderDTO) {
        const newOrder = new Order({
            items: orderDTO.items,
            user: orderDTO.user,
            status: orderDTO.status,
        });
        const order = await newOrder.save();
        return order;
    }

    async update(orderDTO) {
        const order = await Order.findById(orderDTO.id)
        if (!order) {
            throw new NotFoundError();
        }
        order.items = orderDTO.items;
        order.user = orderDTO.user;

        await order.save();
        return order;
    }

    async delete(orderDTO) {
        const order = await Order.findByIdAndDelete(orderDTO.id);
        if (!order) {
            throw new NotFoundError();
        }
        return order;
    }

    async getById(orderDTO) {
        const order = await Order.findById(orderDTO.id);
        if (!order) {
            throw new NotFoundError();
        }
        return order;
    }

    async all() {
        const orders = await Order.find().limit(10).exec();
        return orders;
    }

}

export default OrderRepository;
