import { expose } from 'threads/worker';
import { checkLink } from './checkLink';

expose(checkLink);