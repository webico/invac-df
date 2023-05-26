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
          throw Error('Houve um problema no carregamento desta seção. Tente novamente mais tarde.');
        } else {
          return r.json();
        }
      })
      .then(data => {
        setTimeout(() => {
          setisPending(false);
        }, 500);
        setTimeout(() => {
          setData(data);
          setError(null);
        }, 502);
      })
      .catch(err => {
        if (err.name == 'AbortError') {
          console.log('fetch aborted');
        } else {
          setTimeout(() => {
            setisPending(false);
          }, 500);
          setTimeout(() => {
            setError('Houve um problema no carregamento desta seção. Cheque por problemas de conexão.');
          }, 502);
        }
      });

    return () => abortCont.abort();
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;