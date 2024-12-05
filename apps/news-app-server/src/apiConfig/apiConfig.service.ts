import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ApiConfigServiceBase } from "./base/apiConfig.service.base";

@Injectable()
export class ApiConfigService extends ApiConfigServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
