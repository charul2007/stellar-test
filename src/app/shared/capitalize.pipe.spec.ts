import { CapitalizePipe } from './capitalize.pipe';

describe('CapitalizePipe', () => {

  it('should return pascal case string: case 1', () => {
    let abbreviatePipe = new CapitalizePipe();
    let result = abbreviatePipe.transform('Beauty and the Beast');
    expect(result).toEqual('Beauty And The Beast');
  });
  
  it('should return pascal case string: case 2', () => {
    let abbreviatePipe = new CapitalizePipe();
    let result = abbreviatePipe.transform('fifty shades freed');
    expect(result).toEqual('Fifty Shades Freed');
  });

  it('should return pascal case string: case 3', () => {
    let abbreviatePipe = new CapitalizePipe();
    let result = abbreviatePipe.transform('coco');
    expect(result).toEqual('Coco');
  });
  
});
