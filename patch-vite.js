// patch-vite.js
import { webcrypto } from 'node:crypto';
globalThis.crypto = webcrypto;
import('vite/bin/vite.js');
