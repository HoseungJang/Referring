import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Link {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 500 })
  link: string;
}
