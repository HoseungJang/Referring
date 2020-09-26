import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Link {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 500, nullable: true })
  img: string;

  @Column({ type: "varchar", length: 500, nullable: false })
  name: string;

  @Column({ type: "varchar", length: 500, nullable: false })
  link: string;
}
