import { getByText, render } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"


describe('Pruebas en <FirstApp />', () => { 
    // test('Debe hacer match con el snapshot', () => {

    //     const title = 'Hola, Soy Shaka'
    //     const { container } = render( <FirstApp title={ title } /> ) 
    //     expect (container).toMatchSnapshot();
      
    // })


    test('Debe de mostrar el título en un h1 ', () => {
        const title = 'Hola, Soy Shaka'
        const { container, getByText, getByTestId } = render( <FirstApp title={ title } /> ) 
        expect( getByText(title) ).toBeTruthy();

        // const h1 = container.querySelector('h1');
        // expect( h1.innerHTML ).toContain( title );

        expect( getByTestId('test-title').innerHTML ).toContain(title);
    })


    test('Debe de mostrar el subtitulo enviado por props', () => {
      
        const title = 'Hola, Soy Shaka';
        const subtitle = 'Soy un subtítulo';
        const { getByText } = render( 
        <FirstApp 
        title={ title } 
        subtitulo= { subtitle }
        /> ) 
        expect( getByText(title) ).toBeTruthy();
    })
    
    
 })