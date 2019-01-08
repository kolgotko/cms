import { EntityRepository, Repository } from "typeorm";
import Page from "../entities/Page";

@EntityRepository()
export default class PageRepository extends Repository<Page> {

}
