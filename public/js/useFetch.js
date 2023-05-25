import { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setisPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    fetch(url, { signal: abortCont.signal })
      .then(r => {
        if (!r.ok) {
          throw Error('Houve um problema na requisição deste recurso. Tente novamente mais tarde.');
        } else {
          return r.json();
        }
      })
      .then(data => {
        setData(data);
        setisPending(false);
        setError(null);
      })
      .catch(err => {
        if (err.name == 'AbortError') {
          console.log('fetch aborted');
        } else {
          setError('Houve um problema na requisição deste recurso. Cheque por problemas de conexão.');
          setisPending(false);
        }
      });

    return () => abortCont.abort();
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;