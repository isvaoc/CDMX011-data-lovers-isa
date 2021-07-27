import { sortData,filterData,computeStats} from '../src/data.js';
import data from './data/pokemon.js';
import pokemonSort from './data/pokemonSort.js';
import pokemonFilter from './data/pokemonFilter.js';




describe('should be a function', () => {
  it('is a function', () => {
    expect(typeof sortData).toBe('function');
  });


    it('should sort by num asc', () => {
      const result = sortData(data["pokemon"],"num", "asc")
      expect(result).toEqual(pokemonSort);
    });

  });


describe('should be a function', () => {
  it('is a function', () => {
    expect(typeof filterData).toBe('function');
  });


    it('should filter grass type', () => {
      const result = filterData(data["pokemon"],"grass")
      expect(result).toEqual(pokemonFilter);
    });

  });

  describe('should be a function', () => {
    it('is a function', () => {
      expect(typeof computeStats).toBe('function');
    });
  
  
      it('should give porcentage of region of filter data', () => {
        const result = computeStats(pokemonFilter)
        expect(result).toEqual(["50.0","50.0"]);
      });
  
    });
