import { useQuery } from '@tanstack/react-query';

import { fetchCharacters } from './characters';

export const useSearchCharactersQuery = (name: string) => {
  const query = useQuery({
    queryKey: ['character', name],
    queryFn: async () => {
      const data = await fetchCharacters(name);

      return data;
    },
  });

  return query;
};