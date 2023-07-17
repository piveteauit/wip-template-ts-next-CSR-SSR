class RPIError extends Error {

  private _status: number;
  private _code: string;

  get status() {
    return this._status;
  }

  get code() {
    return this._code;
  }

  constructor(message: string, status: number = 500, code: string = "UNKNOWN") { //, {status, code}: {status?: number; code?: string}) {
    super(message);
    this._status = status;
    this._code = code;
  }

  get() {
    return this;
  }
}

export default RPIError;
