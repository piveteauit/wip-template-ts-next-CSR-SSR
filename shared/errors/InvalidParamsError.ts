import RPIError from "./RPIError";

class InvalidParamsError extends RPIError {
  constructor(serviceName: string) {
    super(`${serviceName} not found`);
    this.code = `${serviceName.toUpperCase()}_NOT_FOUND`;
    this.status = 400;
  }
}

export default InvalidParamsError;
