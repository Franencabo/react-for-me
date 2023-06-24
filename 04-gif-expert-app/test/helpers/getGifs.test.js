import { getGifs } from "../../src/helpers/getGif";

describe("Pruebas en getGifs", () => {
  test("debe de retornar un arreglo de gifs", async () => {
    const gifs = await getGifs("One Punch");
    console.log(gifs);

    // asi me aseguro de que no venga un arreglo vacio
    expect(gifs.length).toBeGreaterThan(0);

    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    });
  });
});
