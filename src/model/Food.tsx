class Food {
  image: string;
  star: string;
  title: string;
  rating: string;
  infos: string[];
  description: string;
  id: number;

  constructor(
    image: string,
    star: string,
    title: string,
    rating: string,
    infos: string[],
    description: string,
    id: number,
  ) {
    this.id = id;
    this.description = description;
    this.image = image;
    this.star = star;
    this.infos = infos;
    this.rating = rating;
    this.title = title;
  }
}

export default Food
