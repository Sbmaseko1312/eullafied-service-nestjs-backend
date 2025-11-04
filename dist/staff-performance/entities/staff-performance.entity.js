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
Object.defineProperty(exports, "__esModule", { value: true });
exports.StaffPerformanceCounter = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../../user/entities/user.entity");
let StaffPerformanceCounter = class StaffPerformanceCounter {
    id;
    user_id;
    metric_date;
    tickets_resolved;
    avg_resolution_seconds;
    created_at;
    updated_at;
    user;
    get avg_resolution_minutes() {
        return this.avg_resolution_seconds
            ? Math.round(this.avg_resolution_seconds / 60)
            : null;
    }
    get avg_resolution_hours() {
        return this.avg_resolution_seconds
            ? Math.round((this.avg_resolution_seconds / 3600) * 100) / 100
            : null;
    }
};
exports.StaffPerformanceCounter = StaffPerformanceCounter;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], StaffPerformanceCounter.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('uuid'),
    __metadata("design:type", String)
], StaffPerformanceCounter.prototype, "user_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", Date)
], StaffPerformanceCounter.prototype, "metric_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', unsigned: true, default: 0 }),
    __metadata("design:type", Number)
], StaffPerformanceCounter.prototype, "tickets_resolved", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', unsigned: true, nullable: true }),
    __metadata("design:type", Object)
], StaffPerformanceCounter.prototype, "avg_resolution_seconds", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], StaffPerformanceCounter.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], StaffPerformanceCounter.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.staff_performance_counters, {
        nullable: false,
        onDelete: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", user_entity_1.User)
], StaffPerformanceCounter.prototype, "user", void 0);
exports.StaffPerformanceCounter = StaffPerformanceCounter = __decorate([
    (0, typeorm_1.Entity)({ name: 'staff_performance_counters' }),
    (0, typeorm_1.Index)(['user_id', 'metric_date'], { unique: true })
], StaffPerformanceCounter);
//# sourceMappingURL=staff-performance.entity.js.map