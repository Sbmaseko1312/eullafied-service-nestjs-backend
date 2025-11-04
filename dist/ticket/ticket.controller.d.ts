import { TicketService } from './ticket.service';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { Ticket } from './entities/ticket.entity';
export declare class TicketController {
    private readonly ticketService;
    constructor(ticketService: TicketService);
    create(createTicketDto: CreateTicketDto): Promise<Ticket>;
    findAll(): Promise<Ticket[]>;
    findOne(id: string): Promise<Ticket>;
    putUpdate(id: string, updateTicketDto: UpdateTicketDto): Promise<Ticket>;
    remove(id: string): Promise<Ticket>;
    findByRequester(requester_id: string): Promise<Ticket[]>;
    findByDepartment(department_id: string): Promise<Ticket[]>;
    findByDepartmentAndStatus(department_id: string, status_id: string): Promise<Ticket[]>;
    findByStatus(status_id: string): Promise<Ticket[]>;
    countAll(): Promise<number>;
    countByStatus(status_id: string): Promise<number>;
    countByDepartmentAndStatus(department_id: string, status_name: string): Promise<number>;
}
