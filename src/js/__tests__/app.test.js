import Team from '../app';

const team = new Team();
const it = team[Symbol.iterator]();

test('First', () => {
  const expected = {
    name: 'Bowman',
    health: 50,
    level: 1,
    type: 'Bowman',
    attack: 25,
    defence: 25,
  };
  const hero = it.next();
  const received = hero.value;
  expect(received).toEqual(expected);
});

test('Second', () => {
  const expected = {
    name: 'Swordsman',
    health: 50,
    level: 1,
    type: 'Swordsman',
    attack: 40,
    defence: 10,
  };
  const hero = it.next();
  const received = hero.value;
  expect(received).toEqual(expected);
});

test('Third', () => {
  const expected = {
    name: 'Undead',
    health: 50,
    level: 1,
    type: 'Undead',
    attack: 10,
    defence: 40,
  };
  const hero = it.next();
  const received = hero.value;
  expect(received).toEqual(expected);
});

test('Fourth', () => {
  const expected = {
    name: 'Magician',
    health: 50,
    level: 1,
    type: 'Magician',
    attack: 25,
    defence: 25,
  };
  const hero = it.next();
  const received = hero.value;
  expect(received).toEqual(expected);
});

test('Fifth', () => {
  const expected = {
    name: 'Zombie',
    health: 50,
    level: 1,
    type: 'Zombie',
    attack: 40,
    defence: 10,
  };
  const hero = it.next();
  const received = hero.value;
  expect(received).toEqual(expected);
});

test('Six', () => {
  const expected = {
    name: 'Daemon',
    health: 50,
    level: 1,
    type: 'Daemon',
    attack: 20,
    defence: 20,
  };
  const hero = it.next();
  const received = hero.value;
  expect(received).toEqual(expected);
});

test('Last one', () => {
  const expected = true;
  const hero = it.next();
  const received = hero.done;
  expect(received).toEqual(expected);
});
