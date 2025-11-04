"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketStatusService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const ticket_status_entity_1 = require("./entities/ticket-status.entity");
let TicketStatusService = class TicketStatusService {
    ticketStatusRepository;
    constructor(ticketStatusRepository) {
        this.ticketStatusRepository = ticketStatusRepository;
    }
    async create(createTicketStatusDto) {
        const ticketStatus = this.ticketStatusRepository.create(createTicketStatusDto);
        return this.ticketStatusRepository.save(ticketStatus);
    }
    async findAll() {
        return this.ticketStatusRepository.find();
    }
    async findOne(id) {
        const ticketStatus = await this.ticketStatusRepository.findOne({ where: { status_id: id } });
        if (!ticketStatus) {
            throw new common_1.NotFoundException(`TicketStatus with ID ${id} not found`);
        }
        return ticketStatus;
    }
    async update(id, updateTicketStatusDto) {
        const ticketStatus = await this.findOne(id);
        Object.assign(ticket_status_entity_1.TicketStatus, updateTicketStatusDto);
        return this.ticketStatusRepository.save(ticketStatus);
    }
    async remove(id) {
        const ticketStatus = await this.findOne(id);
        await this.ticketStatusRepository.remove(ticketStatus);
        return ticketStatus;
    }
    async findByStatusName(statusName) {
        const ticketStatus = await this.ticketStatusRepository.findOne({
            where: { status_name: statusName }
        });
        if (!ticketStatus) {
            throw new common_1.NotFoundException(`Status with name '${statusName}' not found`);
        }
        return ticketStatus;
    }
};
exports.TicketStatusService = TicketStatusService;
exports.TicketStatusService = TicketStatusService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(ticket_status_entity_1.TicketStatus)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TicketStatusService);
//# sourceMappingURL=ticket-status.service.js.map