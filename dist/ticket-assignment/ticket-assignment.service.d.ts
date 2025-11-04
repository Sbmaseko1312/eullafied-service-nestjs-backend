import { Repository } from 'typeorm';
import { TicketAssignment } from './entities/ticket-assignment.entity';
import { User } from 'src/user/entities/user.entity';
import { Ticket } from 'src/ticket/entities/ticket.entity';
import { CreateTicketAssignmentDto } from './dto/create-ticket-assignment.dto';
import { UpdateTicketAssignmentDto } from './dto/update-ticket-assignment.dto';
export declare class TicketAssignmentService {
    private readonly assignmentRepository;
    private readonly ticketRepository;
    private readonly userRepository;
    constructor(assignmentRepository: Repository<TicketAssignment>, ticketRepository: Repository<Ticket>, userRepository: Repository<User>);
    create(createDto: CreateTicketAssignmentDto): Promise<TicketAssignment>;
    findAll(): Promise<TicketAssignment[]>;
    findOne(id: string): Promise<TicketAssignment>;
    update(id: string, updateDto: UpdateTicketAssignmentDto): Promise<TicketAssignment>;
    remove(id: string): Promise<TicketAssignment>;
    findByUserId(user_id: string): Promise<TicketAssignment[]>;
    unassignTicket(assignment_id: string, message: string): Promise<TicketAssignment>;
}
