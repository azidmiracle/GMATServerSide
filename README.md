# GMATServerSide
Server side of the GMAT App. The vocabularies are taken from GregMat website.
The vocacularies are grouped in to 28 groups.

This API is used to fetch vocabularies in the mongodb database. 

The wordsapi is used to find the synonyms and senteces of a give word.

Base url of the server: https://gmat-vocab-server.herokuapp.com/

It will return a JSON format

1. fetch all the vocabularies

        https://gmat-vocab-server.herokuapp.com/allgroup/
    
![all words](/photo/allgrp.PNG)
 
2. fetch distint group
    
        https://gmat-vocab-server.herokuapp.com/distinctgrp/
    

3. fetch vocabularies in a given group
        
        https://gmat-vocab-server.herokuapp.com/group/{put number from 1 to 28}
    
![Words in a group](/photo/grp.PNG)

4. fetch synonyms,definitions of a given word
        
        https://gmat-vocab-server.herokuapp.com/word/{type a word here}
    
![synonyms and sentence](/photo/word.PNG

