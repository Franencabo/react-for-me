import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";


describe('Pruebas en 09-promesas', (done) => { 
    test('getHeroesByIdAsync debe de retornar un heroe', () => {
        const id = 1;
        getHeroeByIdAsync( id )
        .then( hero => {
            expect(hero).toEqual({
                id: 1,
                name: 'Batman',
                owner: 'DC'
            })
            done();
        })
    })

    test('getHeroesByIdAsync debe de obtener un error si heroe no existe', () => {
        const id = 100;
        getHeroeByIdAsync( id )
        .catch( error => {
            expect(error).toBe(`No se pudo encontrar el héroe ${id}`)
            done();
        })
    })
    
 }) 