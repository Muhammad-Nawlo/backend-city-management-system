import OrderDTO from "../dto/OrderDTO.js";
import ResponseHelper from "../helpers/responseHelper.js";
import OrderService from "../services/OrderService.js";
import Item from "../models/Item.js";

const orderService = new OrderService();

class OrderController {
    async all(req, res, next) {
        const orders = await orderService.all();
        return ResponseHelper.success(res, orders);
    }

    async create(req, res, next) {
        const {
            items,
            user
        } = req.body;

        const orderDTO = new OrderDTO(items, user);
        const newOrder = await orderService.create(orderDTO);
        if (!newOrder) {
            return next(res);
        }
        return ResponseHelper.created(res, newOrder);
    }

    async update(req, res, next) {
        const {id} = req.params;
        const {
            items,
            user,
        } = req.body;
        const orderDTO = new OrderDTO(
                items,
                user,
                '',
                id
            )
        ;
        const order = await orderService.update(orderDTO);
        return ResponseHelper.success(res, order);
    }

    async delete(req, res, next) {
        const orderDTO = new OrderDTO();
        orderDTO.id = req.params.id
        const order = await orderService.delete(orderDTO);

        return ResponseHelper.success(res, order);
    }

    async get(req, res, next) {
        const orderDTO = new OrderDTO();
        orderDTO.id = req.params.id
        const order = await orderService.get(orderDTO);

        return ResponseHelper.success(res, order);
    }
}

export default OrderController;