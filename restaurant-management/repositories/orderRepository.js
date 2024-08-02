import NotFoundError from "../errors/notFoundError.js";
import Order from "../models/Order.js";
import searchHandler from "../helpers/searchHandler.js";

class OrderRepository {
    async create(orderDTO) {
        const newOrder = new Order({
            items: orderDTO.items,
            user: orderDTO.user,
            status: orderDTO.status,
            note: orderDTO.note,
        });
        const order = await newOrder.save();
        return order;
    }

    async update(orderDTO) {
        const order = await Order.findById(orderDTO.id)
        if (!order) {
            throw new NotFoundError();
        }
        order.status = orderDTO.status;

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

    async all(req) {
        const options = {
            page: req.query.page || 1,
            limit: req.query.items || 10,
            populate: 'items.item'
        };
        const searchOptions = searchHandler(req);
        const orders = await Order.find(searchOptions).paginate(options);
        return orders;
    }

}

export default OrderRepository;
