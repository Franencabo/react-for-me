describe('Pruebas en <Democomponent />', () => {

    test('Esta prueba no debe de fallar', () => {
        // if( 1 === 0){
        //     throw new Error('No puede dividir entre 0')
        // }
    
        // 1. Inicialización
        const message1 = 'Hola Mundo';
    
        // 2. Estímulo
        const message2 = message1.trim();
    
        // 3. Observamos el comportamiento
        expect( message1 ).toBe( message2 );
    })

 })

