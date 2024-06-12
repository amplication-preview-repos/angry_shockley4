import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RequestLogServiceBase } from "./base/requestLog.service.base";

@Injectable()
export class RequestLogService extends RequestLogServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
