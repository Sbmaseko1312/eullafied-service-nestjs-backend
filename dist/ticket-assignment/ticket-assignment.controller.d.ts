import { TicketAssignmentService } from './ticket-assignment.service';
import { CreateTicketAssignmentDto } from './dto/create-ticket-assignment.dto';
import { UpdateTicketAssignmentDto } from './dto/update-ticket-assignment.dto';
import { TicketAssignment } from './entities/ticket-assignment.entity';
export declare class TicketAssignmentController {
    private readonly assignmentService;
    constructor(assignmentService: TicketAssignmentService);
    create(createDto: CreateTicketAssignmentDto): Promise<TicketAssignment>;
    findAll(): Promise<TicketAssignment[]>;
    findOne(id: string): Promise<TicketAssignment>;
    update(id: string, updateDto: UpdateTicketAssignmentDto): Promise<TicketAssignment>;
    remove(id: string): Promise<TicketAssignment>;
    findByUser(user_id: string): Promise<TicketAssignment[]>;
    unassignTicket(assignment_id: string, message: string): Promise<TicketAssignment>;
}
