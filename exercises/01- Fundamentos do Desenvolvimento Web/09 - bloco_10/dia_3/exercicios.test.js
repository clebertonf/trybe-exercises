const functions = require("./exercicios");

describe('Exercicios dia 10.3 Jest', () => {

    test('Exercicio 01 Testes da Função randomNumber', () => {

        functions.randomNumber = jest.fn().mockReturnValue(10);
    
    
        functions.randomNumber();
    
        expect(functions.randomNumber).toHaveBeenCalled();
        expect(functions.randomNumber).toHaveBeenCalledTimes(1);
    
        expect(functions.randomNumber()).toBe(10);
        expect(functions.randomNumber).toHaveBeenCalledTimes(2);
    });
    
    
    test('Exercicio 02', () => {
    
        const mockRandomNumbers = jest.spyOn(functions, 'randomNumber').mockImplementation((a, b) => a / b);
    
        mockRandomNumbers();
    
        expect(mockRandomNumbers).toHaveBeenCalled();
        expect(mockRandomNumbers).toHaveBeenCalledTimes(3);
        expect(mockRandomNumbers(10,2)).toBe(5);
        expect(mockRandomNumbers).toHaveBeenLastCalledWith(10, 2);
    
    
    });
    
    test('Exercicio 03', () => {

        // Modificando implementação
         mockRandomNumbers = jest.spyOn(functions, 'randomNumber')
        .mockImplementation((num1, num2, num3) => {
            return (num1 * num2) * num3;
        });

        mockRandomNumbers(2, 5, 2);
        
        expect(mockRandomNumbers).toHaveBeenCalled();
        expect(mockRandomNumbers).toHaveBeenCalledTimes(5);
        expect(mockRandomNumbers).toHaveBeenLastCalledWith(2 , 5, 2);
        expect(mockRandomNumbers(2, 5 , 2)).toBe(20);

        //Resetando implementação
        mockRandomNumbers.mockReset().mockImplementation((num) => num * 2);

        mockRandomNumbers();

        expect(mockRandomNumbers).toHaveBeenCalled();
        expect(mockRandomNumbers(6)).toBe(12);
    });

    test('Exercicio 04', () => {

        //Function capsLock
        mockCapsLock = jest.spyOn(functions, 'capsLock')
        .mockImplementation((str) => str.toLowerCase());

        mockCapsLock('CLEBERTON');

        expect(mockCapsLock).toHaveBeenCalled();
        expect(mockCapsLock).toHaveBeenLastCalledWith('CLEBERTON');
        expect(mockCapsLock('CLEBERTON')).toEqual('cleberton');

        //Function firstLetter
        mockFirstLetter = jest.spyOn(functions, 'firstLetter')
        .mockImplementation((str) => str[str.length -1])

        mockFirstLetter('Francisco');

        expect(mockFirstLetter).toHaveBeenCalled();
        expect(mockFirstLetter).toHaveBeenLastCalledWith('Francisco');
        expect(mockFirstLetter('Francisco')).toEqual('o');

        // Function twoWords
        mockTwoWords = jest.spyOn(functions, 'twoWords')
        .mockImplementation((str1, str2, str3) => {
            return `${str1} ${str2} ${str3}`
        });

        mockTwoWords('Cleberton', 'Francisco', 'Garcia');

        expect(mockTwoWords).toHaveBeenCalled();
        expect(mockTwoWords).toHaveBeenLastCalledWith('Cleberton', 'Francisco', 'Garcia');
        expect(mockTwoWords('Cleberton', 'Francisco', 'Garcia')).toEqual('Cleberton Francisco Garcia');


       
    });

    
    test('Exercicio 05', () => {

        //Function capsLock
        mockCapsLock = jest.spyOn(functions, 'capsLock')
        .mockImplementation((str) => str.toLowerCase());

        mockCapsLock('CLEBERTON');

        expect(mockCapsLock).toHaveBeenCalled();
        expect(mockCapsLock).toHaveBeenLastCalledWith('CLEBERTON');
        expect(mockCapsLock('CLEBERTON')).toEqual('cleberton');
        
         //Resetando implementação
         functions.capsLock.mockRestore();

         expect(functions.capsLock('cleberton')).toBe('CLEBERTON');


    });

    describe(' Exercicio 06 Testanto a Requisição', () => {
        mockFetchURL = jest.spyOn(functions, 'fetchURL');
        afterEach(mockFetchURL.mockReset);

        test('Testando no caso de resolvida', async () => {
            mockFetchURL.mockResolvedValue('Requisição feita com sucesso!');

            mockFetchURL();
            expect(mockFetchURL).toHaveBeenCalled();
            expect(mockFetchURL()).resolves.toBe('Requisição feita com sucesso!');
        })
        
        test('Testando no caso de Rejeitada', () => {
            mockFetchURL.mockRejectedValue('Requisição falhou!');

            expect(mockFetchURL).rejects.toMatch('Requisição falhou!');

        });
    });
});

