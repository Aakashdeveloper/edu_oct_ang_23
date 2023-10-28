import {MyUpperPipe} from './myUpper.pipe';

describe('MyUpperPipe',() => {
    let pipe: MyUpperPipe;

    beforeEach(() => {
        pipe = new MyUpperPipe();
    });

    it('transform to upper case',() => {
        const originalText = "hello";
        const tranformText = pipe.transform(originalText,'Upper');
        expect(tranformText).toBe('HELLO')
    })

    it('transform to title case',() => {
        const originalText = "helloworld";
        const tranformText = pipe.transform(originalText,'title');
        expect(tranformText).toBe('Helloworld')
    })

    // it('transform to undefined',() => {
    //     const originalText = '';
    //     const tranformText = pipe.transform(originalText,'Upper');
    //     expect(tranformText).toBeUndefined()
    // })
})

/*
function toTitle(str){
    return str.replace(/\b\w/g,(txt)=>{
        return txt.charAt(0).toUpperCase()+txt.substr(1).toLowerCase()

    })
}
*/