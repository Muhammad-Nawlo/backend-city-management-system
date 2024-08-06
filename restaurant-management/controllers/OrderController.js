import OrderDTO from "../dto/OrderDTO.js";
import ResponseHelper from "../helpers/responseHelper.js";
import OrderService from "../services/OrderService.js";

const orderService = new OrderService();

class OrderController {
    async all(req, res, next) {
        const orders = await orderService.all(req);
        return ResponseHelper.success(res, orders);
    }

    async create(req, res, next) {
        const {
            items,
            user,
            note
        } = req.body;

        const orderDTO = new OrderDTO(items, user, note);
        const newOrder = await orderService.create(orderDTO);
        if (!newOrder) {
            return next(res);
        }
        return ResponseHelper.created(res, newOrder);
    }

    async update(req, res, next) {
        const {id} = req.params;
        const {
            status,
        } = req.body;
        const orderDTO = new OrderDTO(
            [],
            null,
            null,
            status,
            id
        );
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

    async orderUser(req, res, next) {
        const userId = req.user._id;
        const orderUser = await orderService.orderUser(userId, req);
        return ResponseHelper.success(res, orderUser);
    }

    async changeStatus(req, res, next) {
        const {status} = req.body;
        const orderDTO = new OrderDTO();
        orderDTO.id = req.params.id;
        orderDTO.status = status
        const order = await orderService.changeStatus(orderDTO);
        return ResponseHelper.success(res, order);
    }
}

export default OrderController;