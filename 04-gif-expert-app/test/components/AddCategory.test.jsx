import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe('Pruebas en AddCategory', () => {


    test('debe cambiar el valor de la caja de texto', () => {

        render(<AddCategory onNewCategory={() => { }} />)
        const input = screen.getByRole('textbox');

        fireEvent.input(input, { target: { value: 'Hola mundo' } });

        expect(input.value).toBe('Hola mundo');

        screen.debug();
    });


    test('debe de llamar onNewCategory si el input tiene un valor', () => {

        const inputValue = 'Saint Seiya';
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory} />);

        const input = screen.getByRole('textbox');

        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: inputValue } });

        fireEvent.submit(form);

        // screen.debug();

        expect(input.value).toBe('');

        // que se haya llamado la función
        expect(onNewCategory).toHaveBeenCalled();

        // que se haya llamado una vez
        expect(onNewCategory).toHaveBeenCalledTimes(1);

        // que se haya llamado con el valor que lleva el input
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);
    });


    test('NO debe de llamar onNewCategory si el input esta vacio', () => {

        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory} />);

        const form = screen.getByRole('form');

        fireEvent.submit(form);

        expect(onNewCategory).not.toHaveBeenCalled();

        // también se puede hacer así
        // expect(onNewCategory).toHaveBeenCalledTimes(0);

    });
})