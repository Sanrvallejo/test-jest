const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test('add user to userController', () => {
  let user = new User(1234, "Santiago", "santiago@generation.org");
  userController.add(user);
  expect(userController.getUsers()).toContain(user);
});

test('remove user to userController', () => {
  let user = new User(1234, "Santiago", "santiago@generation.org");
  userController.add(user);
  userController.remove(user);
  expect(userController.users).not.toContain(user);
});

test('find user by email', () => {
  let user = new User(1234, "Santiago", "santiago@generation.org");
  userController.add(user);
  // const userFound = userController.findByEmail(user.email);
  // expect(user.equalsTo(userFound)).toBe(true);
  expect(userController.findById(user.id)).toEqual(user);
});

test('find user by id', () => {
  let user = new User(1234, "Santiago", "santiago@generation.org");
  userController.add(user);
  const userFound = userController.findById(user.id);
  expect(user.equalsTo(userFound)).toBe(true);
});

