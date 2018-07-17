interface IInfo {
  followers: number;
  following: number;
}

interface IWeather {
  air: number;
  water: number;
}

interface IItem extends IInfo, IWeather {
  title: string;
  description: string;
  type: string;
  images: string[];
  phone: number;
}
