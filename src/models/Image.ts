import {
  Entity,
  Column,
  ManyToOne,
  JoinColumn,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

import Orphanage from "./Orphanage";

@Entity("images")
export default class Images {
  @PrimaryColumn()
  id: string;

  @Column()
  path: string;

  @ManyToOne(() => Orphanage, (orphanage) => orphanage.images)
  @JoinColumn({ name: "orphanage_id" })
  orphanage: Orphanage;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}
