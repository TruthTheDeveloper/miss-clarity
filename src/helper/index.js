export const removeWordIfFound = (sentence, wordToRemove) => {
    // Check if the word exists in the sentence
    if (sentence.includes(wordToRemove)) {
      // Create a regular expression to match the word globally with word boundaries
      const regex = new RegExp(`\\b${wordToRemove}\\b|[^\\w\\s]`, 'g');
      
      // Use the replace method to remove the word
      const newSentence = sentence.replace(regex, '');
      
      return newSentence;
    } else {
      // If the word is not found, return the original sentence
      return sentence;
    }
  }
  


export function formatFirebaseTimestamp(timestamp) {
  const date = timestamp.toDate();
  const options = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  };
  const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
  return formattedDate;
}