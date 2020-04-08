import { ProviderName } from '../types/providers';

export const DEFAULT_PROVIDER: ProviderName = 'SNOWIT'; // Attenzione: Esiste un DEFAULT_PROVIDER_MIDDLEWARE ma viene usato nel middleware..., nulla a che fare con questa impostazione usata in getMiddleware()

export const PROVIDERS: ProviderName[] = [
  DEFAULT_PROVIDER,
  'skidata',
  'axess',
  'easyrent',
  'skiwork',
  'tantosvago'
];