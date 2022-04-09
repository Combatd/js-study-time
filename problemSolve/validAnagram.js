function validAnagram(word1, word2){
    // add whatever parameters you deem necessary - good luck!    
    // splits by character, sorts the characters alphabetically, joins them back together
      if (word1.split('').sort().join() == word2.split('').sort().join()) {
          return true;
      }
      return false;
}