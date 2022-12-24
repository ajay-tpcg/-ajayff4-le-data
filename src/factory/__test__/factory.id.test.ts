import IdFactory from "../factory.id";

describe('it tests the id module', () => {
  let factory: IdFactory;
  beforeAll(() => {
    factory = new IdFactory();
  });

  it('returns true if factory is initialized', () => {
    expect(factory).toBeTruthy();
  });

  it('returns an UUID', () => {
    const uuid = factory.uuid();
    expect(uuid.split("-")).toHaveLength(5);
    expect(uuid).toHaveLength(36);
  });

  it('returns a Nanoid', () => {
    const nanoid = factory.nanoid();
    expect(nanoid).toHaveLength(21);
  });
});