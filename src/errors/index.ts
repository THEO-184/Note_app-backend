import CustomError from "./default-error";
import UnAuthenticated from "./unAuthenticated";
import UnAuthorized from "./unAuthorized";
import BadRequest from "./badRequest";
import NotFound from "./notFound";

const error = {
	CustomError,
	UnAuthenticated,
	UnAuthorized,
	BadRequest,
	NotFound,
};

export default error;
