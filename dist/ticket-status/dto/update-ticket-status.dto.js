"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTicketStatusDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_ticket_status_dto_1 = require("./create-ticket-status.dto");
class UpdateTicketStatusDto extends (0, swagger_1.PartialType)(create_ticket_status_dto_1.CreateTicketStatusDto) {
}
exports.UpdateTicketStatusDto = UpdateTicketStatusDto;
//# sourceMappingURL=update-ticket-status.dto.js.map