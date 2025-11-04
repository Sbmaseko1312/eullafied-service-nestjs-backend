import { Repository } from 'typeorm';
import { CreateTicketStatusDto } from './dto/create-ticket-status.dto';
import { UpdateTicketStatusDto } from './dto/update-ticket-status.dto';
import { TicketStatus } from './entities/ticket-status.entity';
export declare class TicketStatusService {
    private readonly ticketStatusRepository;
    constructor(ticketStatusRepository: Repository<TicketStatus>);
    create(createTicketStatusDto: CreateTicketStatusDto): Promise<TicketStatus>;
    findAll(): Promise<TicketStatus[]>;
    findOne(id: string): Promise<TicketStatus>;
    update(id: string, updateTicketStatusDto: UpdateTicketStatusDto): Promise<TicketStatus>;
    remove(id: string): Promise<TicketStatus>;
    findByStatusName(statusName: string): Promise<TicketStatus>;
}
