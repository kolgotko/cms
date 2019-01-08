import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("cms_pages")
export default class Page {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    title: string;

    @Column()
    text: string;

    @Column()
    visible: boolean

}
