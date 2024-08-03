import AdDTO from "../dto/AdDTO.js";
import AdService from "../services/AdService.js";
import ResponseHelper from "../helpers/responseHelper.js";
import UploadFile from "../helpers/uploadFile.js";

const adService = new AdService();

class AdController {
    async all(req, res, next) {
        const ads = await adService.all(req);
        return ResponseHelper.success(res, ads);
    }

    async create(req, res, next) {
        const imagePath = await UploadFile(req);
        const {status, withAuth, link} = req.body;
        const adDTO = new AdDTO(imagePath, status, withAuth, link);
        const newService = await adService.create(adDTO);
        if (!newService) {
            return next(res);
        }
        return ResponseHelper.created(res, newService);
    }

    async update(req, res, next) {
        const {id} = req.params;
        const imagePath = await UploadFile(req, true)
        const {status, withAuth, link} = req.body;
        const adDTO = new AdDTO(imagePath, status, withAuth, link, id);
        const ad = await adService.update(adDTO);
        return ResponseHelper.success(res, ad);
    }

    async delete(req, res, next) {
        const adDTO = new AdDTO();
        adDTO.id = req.params.id
        const ad = await adService.delete(adDTO);

        return ResponseHelper.success(res, ad);
    }

    async get(req, res, next) {
        const adDTO = new AdDTO();
        adDTO.id = req.params.id
        const ad = await adService.get(adDTO);
        return ResponseHelper.success(res, ad);
    }
}

export default AdController;