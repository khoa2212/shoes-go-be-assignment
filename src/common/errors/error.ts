import {
  BadRequestException,
  ForbiddenException,
  InternalServerErrorException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';

export class BadRequestError extends BadRequestException {
  constructor(message?: string, code = 'BAD_REQUEST') {
    super({ code, message });
  }
}

export class NotFoundError extends NotFoundException {
  constructor(message?: string, code = 'NOT_FOUND') {
    super({ code, message });
  }
}

export class UnauthorizedError extends UnauthorizedException {
  constructor(message?: string, code = 'UNAUTHORIZED') {
    super({ code, message });
  }
}

export class ForbiddenError extends ForbiddenException {
  constructor(message?: string, code = 'FORBIDDEN') {
    super({ code, message });
  }
}
export class InternalServerError extends InternalServerErrorException {
  constructor(message?: string, code = 'INTERNAL_SERVER_ERROR') {
    super({ code, message });
  }
}
