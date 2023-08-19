function getRandomId(length = 8) {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let id = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      id += characters.charAt(randomIndex);
    }
  
    return id;
  }
  
export const MyBlogs = [
    {
        id:getRandomId(),
        Title:'lorem ipsum dolor sit amet, consectetur adip',
        Author:'lorem ipsum',
        Date:'August 2012',
        discription:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
        image:"https://placehold.co/600x400"
    }
]