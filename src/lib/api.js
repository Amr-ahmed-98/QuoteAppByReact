const emailConfig = 'https://quote-app-8d80d-default-rtdb.firebaseio.com';
export const getAllQuotes = async () => {
  const response = await fetch(`${emailConfig}/quotes.json`);
  const responseData = await response.json();
  if (!response.ok) {
    throw new Error(responseData.message || 'Could not fetch quotes.');
  }
  const loadedQuotes = [];
  for (const key in responseData) {
    const data = {
      id: key,
      ...responseData[key],
    };
    loadedQuotes.push(data);
  }
  return loadedQuotes;
};

export const getSingleQuote = async (quoteId) => {
  const response = await fetch(`${emailConfig}/quotes/${quoteId}.json`);
  const responseData = await response.json();
  if (!response.ok) {
    throw new Error(responseData.message || 'Could not fetch quotes.');
  }

  const loadedData = {
    id: quoteId,
    ...responseData,
  };
  return loadedData;
};

export const addQuote = async (quoteData) => {
  const response = await fetch(`${emailConfig}/quotes.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(quoteData),
  });
  const responseData = response.json();
  if (!response.ok) {
    throw new Error(
      responseData.message || `Can't Send Data Check Internet Connection`
    );
  }
  return null;
};

export const addComment = async (commentData) => {
  const response = await fetch(
    `${emailConfig}/comments/${commentData.quoteId}.json`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(commentData),
    }
  );
  const responseData = await response.json();
  if (!response.ok) {
    throw new Error(
      responseData.message || `Can't Add A Comment Check Internet`
    );
  }
  return { commentId: responseData.name };
};

export const getAllComments = async (quoteId) => {
  const response = await fetch(`${emailConfig}/comments/${quoteId}.json`);
  const responseData = await response.json();
  if (!response.ok) {
    throw new Error(responseData.message || `Can't Retrieve All Comments`);
  }
  const loadedComments = [];
  for (const key in responseData) {
    loadedComments.push({
      id: key,
      ...responseData[key],
    });
  }
  return loadedComments;
};
