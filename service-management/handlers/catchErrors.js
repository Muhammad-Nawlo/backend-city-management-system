const catchErrors = (fn) => {
    return (req, res, next) => {
        const response = fn(req, res, next);
        if (response instanceof Promise) {
            return response.catch(next)
        }
        return response;
    }
}


export default catchErrors