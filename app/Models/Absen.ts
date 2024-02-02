import { DateTime } from "luxon";
import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";

export default class Absen extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public nis: number;

  @column()
  public nama: string;

  @column()
  public kelas: string;

  @column()
  public noAbsen: number;

  @column()
  public alpha: number;

  @column()
  public izin: number;

  @column()
  public sakit: number;

  @column()
  public dihapus: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
