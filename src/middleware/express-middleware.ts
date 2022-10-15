import { NextFunction, Request, Response } from "express";

const expressErrorMiddleware = (
	err: any,
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const customErr = {
		statusCode: err.statusCode || 500,
		msg: err.message || "INTERNAL SERVER ERROR",
	};

	if (err.name === "ValidationError") {
		customErr.msg = Object.values(err.errors)
			.map((item: any) => item.message)
			.join(",");
		customErr.statusCode = 400;
	}
	if (err.name === "UnauthorizedError") {
		customErr.msg = `${err.name} : ${err.message}`;
		customErr.statusCode = 401;
	}
	if (err.code && err.code === 11000) {
		customErr.msg = `Choose another value for ${Object.keys(
			err.keyValue
		)} field(s)`;
		customErr.statusCode = 400;
	}

	if (err.name === "CastError") {
		customErr.msg = `No item found with id : ${err.value}`;
	}

	return res.status(customErr.statusCode).send({ msg: customErr.msg });
};

export default expressErrorMiddleware;
