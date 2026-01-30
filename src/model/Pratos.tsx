class Pratos {
  image: string;
  title: string;
  description: string;
  id: number;

  constructor(image: string, title: string, description: string, id: number) {
    this.description = description;
    this.id = id;
    this.image = image;
    this.title = title;
  }
}

export default Pratos