import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en GifGrid', () => {

    const category = 'Saint Seiya';

    test('debe de mostrar el loading inicialmente', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render(<GifGrid category={category} />)

        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));
    })

    test('debe de mostrar items cuando se cargan imágenes useFetchGifs', () => {

        const gifs = [
            {
                id: 'ABC',
                url: 'https://localhost/cualquier/cosa.jpg',
                title: 'Saint Seiya'
            },
            {
                id: '123',
                url: 'https://localhost/cualquier/cosa.jpg',
                title: 'Dragon Ball'
            }
        ];

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render(<GifGrid category={category} />)
        screen.debug();


        expect(screen.getAllByRole('img').length).toBe(gifs.length);
    })

})