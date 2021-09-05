const generator = () => {
  let result = '';
  let characters = '';
  const allCharacters = {
    Lowercase: 'abcdefghijklmnopqrstuvwxyz',
    Uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    Numbers: '0123456789',
    Symbols: `'"~!@:;,.#$%€^£&*()_-=+/|°§{}[]`
  }
  
  return (length, params) => {
    ( () => {
      const array = Object.entries(params)
      array.map(param => {
        if(param[1]) {
          characters += allCharacters[param[0]]
        }
        return characters
      })
      if(characters.length < 1) {
        alert('At least one parameter must be selected')
        characters += allCharacters.lowercase
      }      
    }) (params)

    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
      }
    return result;    
  }
}

export default generator;