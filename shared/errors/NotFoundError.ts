import RPIError from "./RPIError";

class NotFoundError extends RPIError {
  constructor(serviceName: string) {
    super(`${serviceName} not found`, 404, `${serviceName.toUpperCase()}_NOT_FOUND`);
  }
}

export default NotFoundError;
