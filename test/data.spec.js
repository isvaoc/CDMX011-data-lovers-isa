import { sortData, filterData, computeStats } from "../src/data.js";
import data from "./data/pokemon.js";
import pokemonSortNumAsc from "./data/pokemonSortNumAsc.js";
import pokemonFilter from "./data/pokemonFilter.js";
import pokemonSortNumDsc from "./data/pokemonSortNumDsc.js";
import pokemonSortNameAsc from "./data/pokemonSortNameAsc.js";
import pokemonSortNameDsc from "./data/pokemonSortNameDsc.js";

describe("should be a function", () => {
  it("is a function", () => {
    expect(typeof sortData).toBe("function");
  });

  it("should sort by num asc", () => {
    const result = sortData(data["pokemon"], "num", "asc");
    expect(result).toEqual(pokemonSortNumAsc);
  });

  it("should sort by num dsc", () => {
    const result = sortData(data["pokemon"], "num", "dsc");
    expect(result).toEqual(pokemonSortNumDsc);
  });

  it("should sort by name asc", () => {
    const result = sortData(data["pokemon"], "name", "asc");
    expect(result).toEqual(pokemonSortNameAsc);
  });

  it("should sort by name dsc", () => {
    const result = sortData(data["pokemon"], "name", "dsc");
    expect(result).toEqual(pokemonSortNameDsc);
  });
});

describe("should be a function", () => {
  it("is a function", () => {
    expect(typeof filterData).toBe("function");
  });

  it("should filter grass type", () => {
    const result = filterData(data["pokemon"], "grass");
    expect(result).toEqual(pokemonFilter);
  });

  it("should filter ground", () => {
    const result = filterData(data["pokemon"], "ground");
    expect(result).toEqual([data["pokemon"][3]]);
  });

  it("should filter water", () => {
    const result = filterData(data["pokemon"], "water");
    expect(result).toEqual([data["pokemon"][1], data["pokemon"][6]]);
  });

  it("should filter bug", () => {
    const result = filterData(data["pokemon"], "bug");
    expect(result).toEqual([data["pokemon"][2]]);
  });

  it("should filter electric", () => {
    const result = filterData(data["pokemon"], "electric");
    expect(result).toEqual([data["pokemon"][5]]);
  });

  it("should filter rock", () => {
    const result = filterData(data["pokemon"], "rock");
    expect(result).toEqual([data["pokemon"][6]]);
  });

  it("should filter psychic", () => {
    const result = filterData(data["pokemon"], "psychic");
    expect(result).toEqual([data["pokemon"][7], data["pokemon"][9]]);
  });

  it("should filter flying", () => {
    const result = filterData(data["pokemon"], "flying");
    expect(result).toEqual([data["pokemon"][2]]);
  });

  it("should filter fire", () => {
    const result = filterData(data["pokemon"], "fire");
    expect(result).toEqual([data["pokemon"][4]]);
  });

  it("should filter dark", () => {
    const result = filterData(data["pokemon"], "dark");
    expect(result).toEqual([data["pokemon"][0]]);
  });

  it("should filter fairy", () => {
    const result = filterData(data["pokemon"], "fairy");
    expect(result).toEqual([data["pokemon"][8]]);
  });
});

describe("should be a function", () => {
  it("is a function", () => {
    expect(typeof computeStats).toBe("function");
  });

  it("should give porcentage of region of filter data", () => {
    const result = computeStats(pokemonFilter);
    expect(result).toEqual(["50.0", "50.0"]);
  });

  it("should give porcentage of region of all data", () => {
    const result = computeStats(pokemonSortNumAsc);
    expect(result).toEqual(["54.5", "45.5"]);
  });

  it("should give porcentage of region of one data", () => {
    const result = computeStats([data["pokemon"][1]]);
    expect(result).toEqual(["100.0", "0.0"]);
  });
});
