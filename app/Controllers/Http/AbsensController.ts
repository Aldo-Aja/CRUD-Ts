import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Absen from "App/Models/Absen";

export default class AbsensController {
  public async index({ view }: HttpContextContract) {
    const absen = await Absen.query().where({ dihapus: 0 });

    return view.render("absen.index", { absen: absen });
  }

  public async create({}: HttpContextContract) {}

  public async store({ request, response }: HttpContextContract) {
    const { nis, nama, kelas, noAbsen, alpha, izin, sakit } = request.all();

    await Absen.create({
      nis,
      nama,
      kelas,
      noAbsen,
      alpha,
      izin,
      sakit,
      dihapus: 0,
    });
    return response.redirect("/absen");
  }

  public async show({ view, params }: HttpContextContract) {
    const id = params.id;
    const absen = await Absen.query()
      .where({ dihapus: 0 })
      .andWhere({ id })
      .firstOrFail();

    return view.render("absen.show", { absen });
  }

  public async update({
    request,
    response,
    params,
    session,
  }: HttpContextContract) {
    const { nis, nama, kelas, noAbsen, alpha, izin, sakit } = request.all();
    const id = params.id;

    await Absen.query().where({ id }).update({
      nis,
      nama,
      kelas,
      noAbsen,
      alpha,
      izin,
      sakit,
      dihapus: 0,
    });
    session.flash({ notifivation: "Data Berhasil DiUpdate!" });

    return response.redirect(`/absen/${id}`);
  }

  public async delete({ response, params, session }: HttpContextContract) {
    const id = params.id;

    await Absen.query().where({ id }).update({
      dihapus: 1,
    });
    session.flash({ notifivation: "Data Berhasil DiUpdate!" });

    return response.redirect(`/absen`);
  }
}
