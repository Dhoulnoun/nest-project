import * as bcrypt from 'bcrypt';

export const comparePasswords = async (storedPasswordHash, password) => {
  return await bcrypt.compare(password, storedPasswordHash);
};
