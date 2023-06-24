import { render, screen } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"


describe('Pruebas en <FirstApp />', () => { 

    const title = 'Hola, Soy Shaka';
        const subtitle = 'Soy un subtítulo';

    test('Debe de hacer match con el snapshot', () => {
        const { container } = render( <FirstApp title={ title } /> ) 
        expect( container ).toMatchSnapshot(); 

    })


    test('Debe de mostrar el mensaje "Hola, soy Shaka" ', () => {

        render( 
        <FirstApp 
        title={ title } 
        /> ) 
        expect( screen.getByText(title) ).toBeTruthy();
        //screen.debug() para ver el objeto en consola
    })


    test('Debe de mostrar el tiutlo en un h1', () => {
        render( 
            <FirstApp 
            title={ title } 
            /> ) 

            expect(screen.getByRole('heading', {level: 1}).innerHTML).toContain(title)
      
    })
    

    test('debe de mostrar el subtitulo enviado por las props', () => {
        
        render( 
        <FirstApp 
        title={ title } 
        subtitulo= { subtitle }
        /> ) 
         expect( screen.getAllByText(subtitle).length ).toBe(2);
        
    })
    

    
 })
