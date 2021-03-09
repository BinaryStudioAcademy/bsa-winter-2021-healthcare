import bcrypt from 'bcrypt';

const getPasswordHash = (password: string): Promise<string> => {
  const saltRounds = 10;
  return bcrypt.hash(password, saltRounds)
};

export { getPasswordHash }
