"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTicketCategoryDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_ticket_category_dto_1 = require("./create-ticket-category.dto");
class UpdateTicketCategoryDto extends (0, swagger_1.PartialType)(create_ticket_category_dto_1.CreateTicketCategoryDto) {
}
exports.UpdateTicketCategoryDto = UpdateTicketCategoryDto;
//# sourceMappingURL=update-ticket-category.dto.js.map