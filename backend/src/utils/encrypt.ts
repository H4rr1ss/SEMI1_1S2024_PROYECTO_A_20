import { createHash } from 'crypto';

export function encryptPassword(data: string): string {
  return createHash('md5').update(data).digest('hex');
}
