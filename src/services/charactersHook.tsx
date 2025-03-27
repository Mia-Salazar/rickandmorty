import { useQuery } from '@tanstack/react-query';

import { fetchCharacters } from './characters';

export const useSearchCharacterQuery = () => {
  const query = useQuery({
    queryKey: ['character'],
    queryFn: async () => {
      const data = await fetchCharacters();

      return data;
    },
  });

  return query;
};