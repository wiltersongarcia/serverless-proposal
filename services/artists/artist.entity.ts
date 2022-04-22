import { Entity, Generated, Column, PrimaryColumn } from "typeorm"

@Entity()
export class Artist {
  @PrimaryColumn()
  @Generated("uuid")
  id: string

  @Column()
  name: string
}