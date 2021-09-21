import { Entity, Column, OneToMany, JoinColumn, PrimaryColumn } from "typeorm";

import { v4 as uuidV4 } from "uuid";

import Image from "./Image";

@Entity("orphanages")
export default class Orphanage {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  latitude: number;

  @Column()
  longitude: number;

  @Column()
  about: string;

  @Column()
  instructions: string;

  @Column()
  opening_hours: string;

  @Column()
  open_on_weekends: boolean;

  @OneToMany(() => Image, (image) => image.orphanage, {
    cascade: ["insert", "update"],
  })
  @JoinColumn({ name: "orphanage_id" })
  images: Image[];

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}
