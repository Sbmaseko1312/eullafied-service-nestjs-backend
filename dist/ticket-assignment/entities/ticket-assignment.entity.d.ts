import { Ticket } from 'src/ticket/entities/ticket.entity';
import { User } from 'src/user/entities/user.entity';
export declare class TicketAssignment {
    assignment_id: string;
    ticket: Ticket;
    assigned_to: User;
    assigned_at: Date;
    unassigned_at: Date;
    updated_at: Date;
    assignment_reason: string;
}
