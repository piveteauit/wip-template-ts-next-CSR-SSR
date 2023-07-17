import RPIError from "./RPIError";

class InvalidParamsError extends RPIError {
  constructor(serviceName: string) {
    super(`${serviceName} not found`);
  }
}

export default InvalidParamsError;
