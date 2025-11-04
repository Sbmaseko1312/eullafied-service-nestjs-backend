import { CreateTicketPriorityDto } from 'src/ticket-priority/dto/create-ticket-priority.dto';
import { UpdateTicketPriorityDto } from 'src/ticket-priority/dto/update-ticket-priority.dto';
import { TicketPriority } from 'src/ticket-priority/entities/ticket-priority.entity';
import { Repository } from 'typeorm';
export declare class TicketPriorityService {
    private readonly ticketPriorityRepository;
    constructor(ticketPriorityRepository: Repository<TicketPriority>);
    create(createTicketPriorityDto: CreateTicketPriorityDto): Promise<TicketPriority>;
    findAll(): Promise<TicketPriority[]>;
    findOne(id: string): Promise<TicketPriority>;
    update(id: string, updateTicketPriorityDto: UpdateTicketPriorityDto): Promise<TicketPriority>;
    remove(id: string): Promise<TicketPriority>;
}
