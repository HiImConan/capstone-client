export class InternalServerError extends Error {
  constructor(message = "서버와의 통신에 오류가 생겼습니다.") {
    super(message);
    this.name = "InternalServerError";
  }
}
